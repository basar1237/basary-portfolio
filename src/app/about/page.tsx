import { Calendar, MapPin, Mail, Phone, GraduationCap, Briefcase, Coffee, Heart, Bot, Sparkles, Workflow } from "lucide-react";
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
        eyebrow="AI Engineering"
        title={
          <>
            Building <span className="text-gradient">with and for AI</span>
          </>
        }
        description="AI isn't a side interest — it's how I work and what I build. Claude Code sits at the center of my development workflow, and LLM-powered products are a growing part of what I ship."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="card p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700">
              <Workflow className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-medium text-neutral-900">
              Agentic development with Claude Code
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              My daily workflow runs on Claude Code: planning architecture,
              implementing features with parallel agents, automated code review
              and test loops. I extend it with MCP servers, custom subagents
              and hooks — turning ideas into shipped, full-stack products fast,
              as a one-person team.
            </p>
          </article>

          <article className="card p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700">
              <Bot className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-medium text-neutral-900">
              LLM-powered products
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              I&apos;ve built a real-time phone voice agent (Vapi + Claude with
              calendar &amp; email integrations), an AI stock-analysis web app
              for Borsa İstanbul (Next.js + FastAPI + LLM), and AI-assisted
              modules inside a wholesale-market ERP — all designed, built and
              shipped end to end.
            </p>
          </article>

          <article className="card p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-medium text-neutral-900">
              How it&apos;s done
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Prompt engineering and agent design, tool use (function calling),
              structured outputs, RAG pipelines and streaming UX. I treat
              prompts and agent configs like code — versioned, tested and
              iterated — so AI features behave predictably in production.
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
