import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Layers3,
  Database,
  Sparkles,
  Globe2,
  Smartphone,
  Cpu,
} from "lucide-react";
import Section from "@/components/Section";
import { profile } from "@/data/profile";
import { stats } from "@/data/skills";
import { projects } from "@/data/projects";
import HomeHero from "@/components/HomeHero";
import HomeExpertise from "@/components/HomeExpertise";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  const featured = projects.filter((p) =>
    [
      "lidya-travel-ui-react",
      "consilium",
      "gezibank-ui",
      "fulltrip-web",
    ].includes(p.id)
  );

  return (
    <>
      <HomeHero />

      {/* Stats strip */}
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-6 text-center">
              <div className="font-display text-3xl font-semibold">
                <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                  {s.value}
                </span>
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-slate-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <HomeExpertise />

      <Section
        eyebrow="Featured work"
        title={
          <>
            A few things I&apos;ve{" "}
            <span className="text-gradient">shipped recently</span>
          </>
        }
        description="From a Next.js + Payload multi-tenant travel platform to a UK-based risk advisory site, here are some highlights from production."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} compact />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
          >
            See all {projects.length} projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="What I'm into"
        title={
          <>
            React-first, but happy{" "}
            <span className="text-gradient">deep in the stack</span>
          </>
        }
        description="A snapshot of the tech I reach for to ship product."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Code2,
              title: "React & Next.js",
              text: "App Router, Server Components, Suspense, ISR. I treat performance and accessibility as features, not afterthoughts.",
              accent: "from-violet-500 to-fuchsia-500",
            },
            {
              icon: Layers3,
              title: "Payload CMS",
              text: "Collections, blocks, layout-builder, live preview, and on-demand revalidation across multi-tenant brands.",
              accent: "from-cyan-500 to-teal-400",
            },
            {
              icon: Database,
              title: ".NET & APIs",
              text: "Years on ASP.NET Core MVC + Razor for OTA platforms — flights, hotels, buses, payment, 3D-secure flows.",
              accent: "from-amber-500 to-rose-500",
            },
            {
              icon: Globe2,
              title: "Multi-tenant UI",
              text: "Same monorepo, many brands. Locale-aware routes, theming and content per tenant.",
              accent: "from-pink-500 to-rose-500",
            },
            {
              icon: Smartphone,
              title: "Responsive UX",
              text: "Mobile-first layouts, accessible forms, motion that adds clarity instead of noise.",
              accent: "from-emerald-500 to-cyan-500",
            },
            {
              icon: Cpu,
              title: "Data & Analytics",
              text: "Comfortable with Python, Pandas and scikit-learn for analysis and reporting work on the side.",
              accent: "from-blue-500 to-indigo-500",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${c.accent} opacity-15 blur-2xl transition-opacity group-hover:opacity-30`}
              />
              <div
                className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${c.accent} text-white shadow-md`}
              >
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Get in touch"
        title={
          <>
            Have a product in mind?{" "}
            <span className="text-gradient">Let&apos;s build it.</span>
          </>
        }
        description="I'm always open to talking about interesting product work, freelance collaborations, and consulting on Next.js + Payload migrations."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/30 transition-transform hover:scale-[1.02]"
          >
            <Sparkles className="h-4 w-4" />
            Start a conversation
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
          >
            {profile.email}
          </a>
        </div>
      </Section>
    </>
  );
}
