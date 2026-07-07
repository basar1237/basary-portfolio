import { Calendar, MapPin, Mail, Phone, GraduationCap, Briefcase, Coffee, Heart } from "lucide-react";
import Section from "@/components/Section";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import AboutSkillsGrid from "@/components/AboutSkillsGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
  description: `About ${profile.name} — ${profile.role} at ${profile.company}.`,
};

export default function AboutPage() {
  const yearsAtLidya = new Date().getFullYear() - profile.startedAt;

  return (
    <>
      <section className="relative">
        <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-20 md:pt-28">
          <div className="eyebrow mb-5">About me</div>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-900 md:text-6xl">
            A short story about{" "}
            <span className="text-gradient">who I am</span> and what I love
            building.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-500 md:text-lg">
            {profile.bio}
          </p>
        </div>
      </section>

      <Section
        eyebrow="Personal info"
        title={
          <>
            The basics <span className="text-gradient">at a glance</span>
          </>
        }
      >
        <div className="grid gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Calendar, label: "Born", value: `${profile.birthYear}` },
            { icon: MapPin, label: "Birthplace", value: profile.birthplace },
            { icon: Phone, label: "Phone", value: profile.phone },
            { icon: Mail, label: "Email", value: profile.email },
          ].map((item) => (
            <div key={item.label} className="bg-white p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                {item.label}
              </div>
              <div className="mt-1 break-words text-sm text-neutral-800">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Story so far"
        title={
          <>
            From Osmaniye to{" "}
            <span className="text-gradient">production travel UI</span>
          </>
        }
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="card p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-medium text-neutral-900">
              Software Engineering — Beykent University
            </h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
              Istanbul · 2020 – 2024
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Four years of computer science, software engineering, data
              structures, algorithms and web technologies. Graduated with a
              strong project-based foundation and a real love for the web
              platform.
            </p>
          </article>

          <article className="card p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700">
              <Briefcase className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-medium text-neutral-900">
              Frontend Engineer — Lidya Teknoloji
            </h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
              Istanbul · {profile.startedAt} – Present · {yearsAtLidya}+ years
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              At Lidya I work across the company&apos;s travel and booking
              brands — from .NET MVC + jQuery template sites to a modern Next.js
              + Payload CMS multi-tenant platform. I ship UI for flights,
              hotels, buses, transfers and tour products used by real travelers
              every day.
            </p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Skills"
        title={
          <>
            The full toolkit{" "}
            <span className="text-gradient">behind the work</span>
          </>
        }
        description="I split my day between React/Next.js for new product work, Payload CMS for content modeling, and a healthy amount of legacy ASP.NET MVC + jQuery for the brands that still run on the original Lidya stack."
      >
        <AboutSkillsGrid skills={skills} />
      </Section>

      <Section
        eyebrow="Outside the IDE"
        title={
          <>
            What I do{" "}
            <span className="text-gradient">when I&apos;m not coding</span>
          </>
        }
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700">
              <Coffee className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-medium text-neutral-900">
              Always learning
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              I read up on the React ecosystem, follow Next.js / Payload
              releases closely, and like exploring data-science side projects in
              Python and R when I have spare cycles.
            </p>
          </div>
          <div className="card p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700">
              <Heart className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-medium text-neutral-900">
              Craft &amp; details
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              I care a lot about the small things — micro-interactions, type,
              color and motion that quietly make a product feel right. The kind
              of polish you only notice when it&apos;s missing.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
