import { Redis } from "@upstash/redis";

/**
 * Self-hosted visitor log, stored in Upstash Redis (Vercel Marketplace).
 * Connecting the Redis integration in Vercel injects KV_REST_API_URL /
 * KV_REST_API_TOKEN; without them tracking silently no-ops.
 *
 * Keys (all expire after RETENTION_DAYS of inactivity):
 *   visitors      zset  visitor id → last seen (ms)
 *   v:{vid}       hash  visitor profile (ip, location, device, counters)
 *   pv:{vid}      list  page views, newest first, capped at MAX_VIEWS
 *   dur:{vid}     hash  page view id → active time on page (ms)
 */
const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const token =
  process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

export const redis = url && token ? new Redis({ url, token }) : null;

export const RETENTION_DAYS = 90;
const TTL = RETENTION_DAYS * 24 * 60 * 60;
const MAX_VIEWS = 200;
const LIVE_WINDOW = 5 * 60 * 1000;

export type Visitor = {
  id: string;
  firstSeen: number;
  lastSeen: number;
  ip: string;
  city: string;
  region: string;
  country: string;
  device: string;
  os: string;
  browser: string;
  ua: string;
  source: string;
  sessions: number;
  pageviews: number;
};

export type PageView = {
  id: string;
  t: number;
  path: string;
  sid: string;
  ip: string;
  city: string;
  ref?: string;
  ms?: number;
};

export type ViewInput = Omit<Visitor, "id" | "firstSeen" | "lastSeen" | "sessions" | "pageviews"> & {
  vid: string;
  pid: string;
  sid: string;
  path: string;
};

export async function recordView(input: ViewInput) {
  if (!redis) return;
  const { vid, pid, sid, path, source, ...profile } = input;
  const key = `v:${vid}`;
  const now = Date.now();

  const lastSid = await redis.hget<string>(key, "lastSid");
  const view: PageView = {
    id: pid,
    t: now,
    path,
    sid,
    ip: profile.ip,
    city: profile.city,
    ...(source && { ref: source }),
  };

  const p = redis.pipeline();
  p.hset(key, { ...profile, lastSeen: now, lastSid: sid });
  p.hsetnx(key, "firstSeen", now);
  p.hsetnx(key, "source", source || "Doğrudan");
  p.hincrby(key, "pageviews", 1);
  if (lastSid !== sid) p.hincrby(key, "sessions", 1);
  p.lpush(`pv:${vid}`, JSON.stringify(view));
  p.ltrim(`pv:${vid}`, 0, MAX_VIEWS - 1);
  p.zadd("visitors", { score: now, member: vid });
  p.zremrangebyscore("visitors", 0, now - TTL * 1000);
  p.expire(key, TTL);
  p.expire(`pv:${vid}`, TTL);
  p.expire(`dur:${vid}`, TTL);
  await p.exec();
}

export async function recordDuration(vid: string, pid: string, ms: number) {
  if (!redis) return;
  if (!(await redis.exists(`v:${vid}`))) return;
  await redis.hset(`dur:${vid}`, { [pid]: ms });
}

/** Start of the current day in Türkiye (UTC+3, no DST). */
function startOfToday(now: number) {
  const day = 24 * 60 * 60 * 1000;
  const offset = 3 * 60 * 60 * 1000;
  return Math.floor((now + offset) / day) * day - offset;
}

export async function getDashboard(limit = 100) {
  if (!redis) return null;
  const now = Date.now();

  const [ids, total, live, today] = await Promise.all([
    redis.zrange<string[]>("visitors", 0, limit - 1, { rev: true }),
    redis.zcard("visitors"),
    redis.zcount("visitors", now - LIVE_WINDOW, "+inf"),
    redis.zcount("visitors", startOfToday(now), "+inf"),
  ]);

  const visitors: (Visitor & { views: PageView[]; live: boolean })[] = [];
  if (ids.length) {
    const p = redis.pipeline();
    for (const id of ids) {
      p.hgetall(`v:${id}`);
      p.lrange(`pv:${id}`, 0, MAX_VIEWS - 1);
      p.hgetall(`dur:${id}`);
    }
    const res = await p.exec();

    ids.forEach((id, i) => {
      const v = res[i * 3] as Record<string, unknown> | null;
      if (!v) return;
      const durations = (res[i * 3 + 2] ?? {}) as Record<string, number>;
      const views = ((res[i * 3 + 1] ?? []) as (PageView | string)[])
        .map((x) => (typeof x === "string" ? (JSON.parse(x) as PageView) : x))
        .map((x) => ({ ...x, ms: Number(durations[x.id]) || undefined }));
      const lastSeen = Number(v.lastSeen) || 0;

      visitors.push({
        id,
        firstSeen: Number(v.firstSeen) || lastSeen,
        lastSeen,
        ip: String(v.ip ?? ""),
        city: String(v.city ?? ""),
        region: String(v.region ?? ""),
        country: String(v.country ?? ""),
        device: String(v.device ?? ""),
        os: String(v.os ?? ""),
        browser: String(v.browser ?? ""),
        ua: String(v.ua ?? ""),
        source: String(v.source ?? ""),
        sessions: Number(v.sessions) || 1,
        pageviews: Number(v.pageviews) || views.length,
        views,
        live: now - lastSeen < LIVE_WINDOW,
      });
    });
  }

  return { total, live, today, visitors };
}
