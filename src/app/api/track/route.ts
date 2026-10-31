import { NextRequest, NextResponse } from "next/server";
import { recordDuration, recordView, redis } from "@/lib/visitors";
import { parseUserAgent } from "@/lib/ua";

const ID_RE = /^[a-z0-9-]{8,40}$/i;
const noContent = () => new NextResponse(null, { status: 204 });

function str(v: unknown, max: number) {
  return typeof v === "string" ? v.slice(0, max) : "";
}

function header(req: NextRequest, name: string) {
  const v = req.headers.get(name);
  if (!v) return "";
  try {
    return decodeURIComponent(v);
  } catch {
    return v;
  }
}

/** External referrer host, or "" for internal / missing referrers. */
function sourceOf(ref: string, host: string | null) {
  if (!ref) return "";
  try {
    const h = new URL(ref).hostname.replace(/^www\./, "");
    return h && h !== host?.replace(/^www\./, "").split(":")[0] ? h : "";
  } catch {
    return "";
  }
}

export async function POST(req: NextRequest) {
  // The site owner's own visits (cookie set on /admin login) are not logged.
  if (!redis || req.cookies.has("bs_owner")) return noContent();

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return new NextResponse(null, { status: 400 });
  }

  const vid = str(body.vid, 40);
  const pid = str(body.pid, 40);
  if (!ID_RE.test(vid) || !ID_RE.test(pid)) {
    return new NextResponse(null, { status: 400 });
  }

  if (body.t === "leave") {
    const ms = Math.min(Math.max(Number(body.ms) || 0, 0), 6 * 60 * 60 * 1000);
    await recordDuration(vid, pid, Math.round(ms));
    return noContent();
  }

  const sid = str(body.sid, 40);
  const path = str(body.path, 300);
  if (!ID_RE.test(sid) || !path.startsWith("/")) {
    return new NextResponse(null, { status: 400 });
  }

  const ua = str(req.headers.get("user-agent"), 400);
  const { bot, ...agent } = parseUserAgent(ua);
  if (bot) return noContent();

  await recordView({
    vid,
    pid,
    sid,
    path,
    source: sourceOf(str(body.ref, 500), req.headers.get("host")),
    ip:
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "",
    city: header(req, "x-vercel-ip-city"),
    region: header(req, "x-vercel-ip-country-region"),
    country: header(req, "x-vercel-ip-country"),
    ua,
    ...agent,
  });

  return noContent();
}
