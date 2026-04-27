import { Briefcase, GraduationCap, MapPin, Calendar, BadgeCheck } from "lucide-react";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import { profile } from "@/data/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Experience — ${profile.name}`,
  description: "Career timeline, education and certifications.",
};

const work = [
  {
    role: "Frontend Engineer",
    company: "Lidya Teknoloji",
    location: "Istanbul, Türkiye",
    period: `${profile.startedAt} – Present`,
    type: "Full-time",
    summary:
      "Owning UI work across Lidya's travel & booking portfolio — from a multi-tenant Next.js + Payload CMS platform down to legacy ASP.NET MVC + jQuery template sites that still serve real bookings.",
    bullets: [
      "Built tenant-app routes in the Lidya Travel Next.js monorepo (App Router, [locale]/hotel, search-results, slug pages).",
      "Modeled Payload CMS collections, blocks and live preview wired into the tenant frontend.",
      "Shipped UI for production OTA brands: Fulltrip, Parafly Travel, Gezibank, YKM Turizm, Denizle Seyahat, Salam Booking, İrem Tour, Pronto Tatil, Troyecar.",
      "Built and maintained Angular/Bootstrap/jQuery template repositories used as the static design source for those brands.",
      "Worked on the Consilium UK risk-advisory marketing site on the same Next.js + Payload stack.",
      "Tuned performance, SEO, redirects, sitemaps and i18n content workflows for editor teams.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
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
    title: "Software Engineering, B.Sc.",
    school: "Beykent University",
    location: "Istanbul, Türkiye",
    period: "2020 – 2024",
    bullets: [
      "Four-year software engineering program",
      "Data structures, algorithms & databases",
      "Web technologies, distributed systems",
      "Software methodologies & project work",
    ],
    achievements: [
      "Graduated successfully",
      "Project-based learning",
      "Teamwork & technical leadership",
    ],
  },
];

const certifications = [
  {
    title: "React Developer",
    issuer: "Meta",
    date: "2023",
    description: "Modern React application development.",
  },
  {
    title: "TypeScript Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    description: "TypeScript core and advanced topics.",
  },
  {
    title: "Web Development",
    issuer: "Udemy",
    date: "2022",
    description: "Modern web development technologies.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-20 md:pt-28">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-fuchsia-700">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
            Experience
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
            The career,{" "}
            <span className="text-gradient">timeline-style.</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Where I&apos;ve shipped production code, what I learned along the
            way, and the certifications that came with it.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Work"
        title={
          <>
            Companies I&apos;ve{" "}
            <span className="text-gradient">shipped with</span>
          </>
        }
      >
        <div className="relative space-y-8">
          {work.map((w) => (
            <article
              key={w.company}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 text-white shadow-md">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-slate-900 md:text-2xl">
                      {w.role}
                    </h3>
                    <div className="mt-1 text-sm text-slate-700">{w.company}</div>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {w.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {w.period}
                      </span>
                      <Tag variant="violet">{w.type}</Tag>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-700">
                {w.summary}
              </p>

              <div className="mt-5">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Responsibilities
                </div>
                <ul className="mt-2 grid gap-1.5 text-sm text-slate-700 md:grid-cols-2">
                  {w.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Stack
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {w.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[11px] text-slate-700"
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
        eyebrow="Education"
        title={
          <>
            Where it{" "}
            <span className="text-gradient">started</span>
          </>
        }
      >
        <div className="space-y-6">
          {education.map((e) => (
            <article
              key={e.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-500 to-teal-400 text-white shadow-md">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-slate-900">{e.title}</h3>
                  <div className="mt-1 text-sm text-slate-700">{e.school}</div>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
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
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Coursework
                  </div>
                  <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Achievements
                  </div>
                  <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                    {e.achievements.map((a) => (
                      <li key={a} className="flex gap-2">
                        <BadgeCheck className="mt-0.5 h-4 w-4 text-emerald-500" />
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
        eyebrow="Certifications"
        title={
          <>
            Continuous{" "}
            <span className="text-gradient">learning</span>
          </>
        }
      >
        <div className="grid gap-4 md:grid-cols-3">
          {certifications.map((c) => (
            <article
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg text-slate-900">{c.title}</h3>
                <span className="font-mono text-xs text-slate-500">{c.date}</span>
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-fuchsia-600">
                {c.issuer}
              </div>
              <p className="mt-3 text-sm text-slate-600">{c.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
