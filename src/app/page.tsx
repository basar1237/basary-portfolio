import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Layers3,
  Database,
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
        <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-neutral-200 bg-white md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-5 py-7 text-center ${
                i !== 0 ? "border-l border-neutral-200" : ""
              } ${i === 2 ? "border-l max-md:border-t" : ""} ${
                i === 3 ? "max-md:border-t" : ""
              }`}
            >
              <div className="font-display text-3xl font-semibold tracking-tight text-neutral-900">
                {s.value}
              </div>
              <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
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
        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} compact />
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-900 transition-colors hover:text-accent"
          >
            See all {projects.length} projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Capabilities"
        title={
          <>
            React-first, but happy{" "}
            <span className="text-gradient">deep in the stack</span>
          </>
        }
        description="A snapshot of the tech I reach for to ship product."
      >
        <div className="grid gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Code2,
              title: "React & Next.js",
              text: "App Router, Server Components, Suspense, ISR. I treat performance and accessibility as features, not afterthoughts.",
            },
            {
              icon: Layers3,
              title: "Payload CMS",
              text: "Collections, blocks, layout-builder, live preview, and on-demand revalidation across multi-tenant brands.",
            },
            {
              icon: Database,
              title: ".NET & APIs",
              text: "Years on ASP.NET Core MVC + Razor for OTA platforms — flights, hotels, buses, payment, 3D-secure flows.",
            },
            {
              icon: Globe2,
              title: "Multi-tenant UI",
              text: "Same monorepo, many brands. Locale-aware routes, theming and content per tenant.",
            },
            {
              icon: Smartphone,
              title: "Responsive UX",
              text: "Mobile-first layouts, accessible forms, motion that adds clarity instead of noise.",
            },
            {
              icon: Cpu,
              title: "Data & Analytics",
              text: "Comfortable with Python, Pandas and scikit-learn for analysis and reporting work on the side.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="group bg-white p-7 transition-colors hover:bg-neutral-50"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700 transition-colors group-hover:border-accent group-hover:text-accent">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-medium text-neutral-900">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {c.text}
              </p>
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
          <Link href="/contact" className="btn btn-primary">
            Start a conversation
          </Link>
          <a href={`mailto:${profile.email}`} className="btn btn-secondary">
            {profile.email}
          </a>
        </div>
      </Section>
    </>
  );
}
