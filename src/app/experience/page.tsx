import { Briefcase, GraduationCap, MapPin, Calendar, BadgeCheck } from "lucide-react";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import { profile } from "@/data/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Deneyim — ${profile.name}`,
  description: "Kariyer zaman çizelgesi, eğitim ve sertifikalar.",
};

const work = [
  {
    role: "Frontend & AI Mühendisi",
    company: "Lidya Teknoloji",
    location: "İstanbul, Türkiye",
    period: `${profile.startedAt} – Günümüz`,
    type: "Tam zamanlı",
    summary:
      "Lidya'nın seyahat & rezervasyon portföyündeki arayüz işlerinin sorumluluğu — multi-tenant Next.js + Payload CMS platformundan hâlâ gerçek rezervasyonlara hizmet eden legacy ASP.NET MVC + jQuery şablon sitelerine kadar — ve bunu Claude Code üzerine kurulu, yapay zekâ öncelikli bir geliştirme süreciyle yürütmek.",
    bullets: [
      "Claude Code'u temel geliştirme süreci olarak benimsedim: MCP entegrasyonları ve özel subagent'larla agentic planlama, geliştirme, kod incelemesi ve test otomasyonu.",
      "LLM tabanlı ürünleri uçtan uca geliştirdim: gerçek zamanlı bir telefon sesli asistanı (Vapi + Claude), Borsa İstanbul için yapay zekâ destekli bir hisse analiz uygulaması (Next.js + FastAPI) ve bir ERP ürünü içinde yapay zekâ modülleri.",
      "Lidya Travel Next.js monoreposunda tenant uygulamasının route'larını geliştirdim (App Router, [locale]/hotel, search-results, slug sayfaları).",
      "Tenant frontend'ine bağlı Payload CMS collection'larını, block'larını ve canlı önizlemesini modelledim.",
      "Canlıdaki OTA markalarının arayüzlerini geliştirdim: Fulltrip, Parafly Travel, Gezibank, YKM Turizm, Denizle Seyahat, Salam Booking, İrem Tour, Pronto Tatil, Troyecar.",
      "Bu markaların statik tasarım kaynağı olarak kullanılan Angular/Bootstrap/jQuery şablon repolarını geliştirdim ve bakımını yaptım.",
      "Aynı Next.js + Payload altyapısı üzerindeki Consilium (İngiltere) risk danışmanlığı tanıtım sitesinde çalıştım.",
      "Editör ekipleri için performans, SEO, yönlendirmeler, sitemap'ler ve i18n içerik akışlarını iyileştirdim.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Claude Code",
      "Claude API",
      "MCP",
      "Vapi",
      "FastAPI",
      "Payload CMS",
      "Mantine",
      "Tailwind CSS",
      "TanStack Query",
      "ASP.NET Core MVC",
      "Razor",
      "jQuery",
      "Bootstrap",
      "Turborepo",
      "pnpm",
    ],
  },
];

const education = [
  {
    title: "Yazılım Mühendisliği, Lisans",
    school: "Beykent Üniversitesi",
    location: "İstanbul, Türkiye",
    period: "2020 – 2024",
    bullets: [
      "Dört yıllık yazılım mühendisliği programı",
      "Veri yapıları, algoritmalar & veritabanları",
      "Web teknolojileri, dağıtık sistemler",
      "Yazılım metodolojileri & proje çalışmaları",
    ],
    achievements: [
      "Başarıyla mezun oldum",
      "Proje tabanlı öğrenme",
      "Takım çalışması & teknik liderlik",
    ],
  },
];

const certifications = [
  {
    title: "React Geliştirici",
    issuer: "Meta",
    date: "2023",
    description: "Modern React uygulama geliştirme.",
  },
  {
    title: "TypeScript Temelleri",
    issuer: "Microsoft",
    date: "2023",
    description: "TypeScript temel ve ileri seviye konular.",
  },
  {
    title: "Web Geliştirme",
    issuer: "Udemy",
    date: "2022",
    description: "Modern web geliştirme teknolojileri.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <section className="relative">
        <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-20 md:pt-28">
          <div className="eyebrow mb-5">Deneyim</div>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-900 md:text-6xl">
            Kariyerim,{" "}
            <span className="text-gradient">zaman çizelgesiyle.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-500 md:text-lg">
            Canlıya kod gönderdiğim yerler, bu yolda öğrendiklerim ve beraberinde
            gelen sertifikalar.
          </p>
        </div>
      </section>

      <Section
        eyebrow="İş"
        title={
          <>
            Birlikte{" "}
            <span className="text-gradient">ürün çıkardığım şirketler</span>
          </>
        }
      >
        <div className="relative space-y-6">
          {work.map((w) => (
            <article key={w.company} className="card p-6 md:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-lg border border-neutral-200 text-neutral-700">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
                      {w.role}
                    </h3>
                    <div className="mt-1 text-sm text-neutral-700">
                      {w.company}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {w.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {w.period}
                      </span>
                      <Tag variant="accent">{w.type}</Tag>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-neutral-600">
                {w.summary}
              </p>

              <div className="mt-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                  Sorumluluklar
                </div>
                <ul className="mt-2 grid gap-1.5 text-sm text-neutral-700 md:grid-cols-2">
                  {w.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 border-t border-neutral-100 pt-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                  Teknolojiler
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {w.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-0.5 font-mono text-[11px] text-neutral-600"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Eğitim"
        title={
          <>
            Her şeyin <span className="text-gradient">başladığı yer</span>
          </>
        }
      >
        <div className="space-y-5">
          {education.map((e) => (
            <article key={e.title} className="card p-6 md:p-7">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-lg border border-neutral-200 text-neutral-700">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-neutral-900">
                    {e.title}
                  </h3>
                  <div className="mt-1 text-sm text-neutral-700">{e.school}</div>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {e.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {e.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Dersler
                  </div>
                  <ul className="mt-2 space-y-1.5 text-sm text-neutral-700">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-neutral-300" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Başarılar
                  </div>
                  <ul className="mt-2 space-y-1.5 text-sm text-neutral-700">
                    {e.achievements.map((a) => (
                      <li key={a} className="flex gap-2.5">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Sertifikalar"
        title={
          <>
            Sürekli <span className="text-gradient">öğrenme</span>
          </>
        }
      >
        <div className="grid gap-4 md:grid-cols-3">
          {certifications.map((c) => (
            <article key={c.title} className="card p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-medium text-neutral-900">
                  {c.title}
                </h3>
                <span className="font-mono text-xs text-neutral-400">
                  {c.date}
                </span>
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                {c.issuer}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                {c.description}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
