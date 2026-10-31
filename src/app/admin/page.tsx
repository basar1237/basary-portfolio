import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, RefreshCw } from "lucide-react";
import { getDashboard, RETENTION_DAYS } from "@/lib/visitors";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Ziyaretçiler",
  robots: { index: false, follow: false },
};

const dateTime = new Intl.DateTimeFormat("tr-TR", {
  timeZone: "Europe/Istanbul",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
const fmt = (t: number) => dateTime.format(t);

function duration(ms?: number) {
  if (!ms) return "—";
  const s = Math.round(ms / 1000);
  if (s < 60) return `${s} sn`;
  const m = Math.floor(s / 60);
  return m < 60 ? `${m} dk ${s % 60} sn` : `${Math.floor(m / 60)} sa ${m % 60} dk`;
}

export default async function AdminPage() {
  const data = await getDashboard();

  if (!data) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-24">
        <h1 className="font-display text-3xl font-semibold text-neutral-900">
          Veritabanı bağlı değil
        </h1>
        <p className="mt-4 text-neutral-600">
          Vercel → proje → Storage → Upstash for Redis oluştur ve bu projeye
          bağla, sonra yeniden deploy et. KV_REST_API_URL ve KV_REST_API_TOKEN
          otomatik eklenir.
        </p>
      </section>
    );
  }

  const stats = [
    { label: "Şu an sitede", value: data.live },
    { label: "Bugün", value: data.today },
    { label: `Son ${RETENTION_DAYS} gün`, value: data.total },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 pb-10 pt-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="eyebrow mb-3">Yönetim</div>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-neutral-900">
            Ziyaretçiler
          </h1>
        </div>
        <Link href="/admin" prefetch={false} className="btn btn-secondary">
          <RefreshCw className="h-4 w-4" /> Yenile
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200">
        {stats.map((s) => (
          <div key={s.label} className="bg-white p-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
              {s.label}
            </div>
            <div className="mt-1 font-display text-3xl font-semibold text-neutral-900">
              {s.value}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-neutral-400">
        Son {data.visitors.length} ziyaretçi, en yeni üstte. Konum IP&apos;den
        tahmin edilir; çoğu zaman internet sağlayıcısının bulunduğu şehri gösterir.
      </p>

      <div className="mt-3 space-y-2">
        {data.visitors.map((v) => {
          const location = [v.city, v.region, v.country].filter(Boolean).join(", ");
          return (
            <details
              key={v.id}
              className="group rounded-lg border border-neutral-200 bg-white open:border-neutral-300"
            >
              <summary className="grid cursor-pointer list-none gap-x-6 gap-y-1 p-4 text-sm md:grid-cols-[1.2fr_1.4fr_1.2fr_1fr_auto]">
                <div className="flex items-center gap-2 font-mono text-neutral-900">
                  {v.live && (
                    <span className="h-2 w-2 shrink-0 rounded-full bg-green-500" title="Şu an sitede" />
                  )}
                  {v.ip || "—"}
                </div>
                <div className="text-neutral-700">{location || "Konum yok"}</div>
                <div className="text-neutral-500">
                  {v.device} · {v.os} · {v.browser}
                </div>
                <div className="text-neutral-500">{v.source}</div>
                <div className="text-neutral-500 md:text-right">
                  {fmt(v.lastSeen)}
                </div>
              </summary>

              <div className="border-t border-neutral-200 p-4 text-sm">
                <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    ["İlk ziyaret", fmt(v.firstSeen)],
                    ["Son görülme", fmt(v.lastSeen)],
                    ["Ziyaret (oturum)", v.sessions],
                    ["Sayfa görüntüleme", v.pageviews],
                    ["Ziyaretçi ID", v.id.slice(0, 8)],
                    ["İlk geldiği yer", v.source],
                  ].map(([k, val]) => (
                    <div key={k}>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                        {k}
                      </dt>
                      <dd className="text-neutral-800">{val}</dd>
                    </div>
                  ))}
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                      IP detayı / ISP
                    </dt>
                    <dd>
                      {v.ip ? (
                        <a
                          href={`https://ipinfo.io/${v.ip}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-accent hover:underline"
                        >
                          ipinfo.io <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        "—"
                      )}
                    </dd>
                  </div>
                </dl>
                <p className="mt-3 break-all font-mono text-[11px] text-neutral-400">{v.ua}</p>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                      <tr>
                        <th className="py-2 pr-4 font-normal">Zaman</th>
                        <th className="py-2 pr-4 font-normal">Sayfa</th>
                        <th className="py-2 pr-4 font-normal">Süre</th>
                        <th className="py-2 pr-4 font-normal">Kaynak</th>
                        <th className="py-2 font-normal">IP / Şehir</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {v.views.map((pv, i) => {
                        const newSession = v.views[i + 1]?.sid !== pv.sid;
                        return (
                          <tr key={pv.id} className={newSession ? "border-b-2 border-neutral-200" : ""}>
                            <td className="whitespace-nowrap py-2 pr-4 text-neutral-500">{fmt(pv.t)}</td>
                            <td className="py-2 pr-4 font-mono text-neutral-900">{pv.path}</td>
                            <td className="whitespace-nowrap py-2 pr-4 text-neutral-600">{duration(pv.ms)}</td>
                            <td className="py-2 pr-4 text-neutral-500">{pv.ref ?? ""}</td>
                            <td className="whitespace-nowrap py-2 font-mono text-xs text-neutral-500">
                              {pv.ip} {pv.city && `· ${pv.city}`}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          );
        })}

        {data.visitors.length === 0 && (
          <p className="rounded-lg border border-dashed border-neutral-300 p-10 text-center text-neutral-500">
            Henüz kayıtlı ziyaret yok.
          </p>
        )}
      </div>
    </section>
  );
}
