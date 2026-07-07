"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { profile, socials } from "@/data/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: "easeOut" },
  }),
};

export default function HomeHero() {
  return (
    <section className="relative">
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-16 pt-20 md:grid-cols-[1.1fr,0.9fr] md:gap-12 md:pt-28">
        <div>
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-neutral-600"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available for select work
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-900 md:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-4 font-display text-xl font-medium leading-snug tracking-tight text-neutral-400 md:text-2xl"
          >
            Frontend engineer crafting modern,{" "}
            <span className="text-neutral-900">production-grade web products.</span>
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-neutral-500"
          >
            I build production travel &amp; booking platforms at{" "}
            <span className="font-medium text-neutral-800">Lidya Teknoloji</span> —
            multi-tenant Next.js + Payload CMS apps, .NET MVC OTA sites, and a long
            tail of jQuery + Bootstrap brand templates.
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link href="/projects" className="btn btn-primary group">
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Get in touch
            </Link>
          </motion.div>

          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-500"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-neutral-400" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4 text-neutral-400" />
              {profile.email}
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Github className="h-4 w-4 text-neutral-400" />
              GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Linkedin className="h-4 w-4 text-neutral-400" />
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative"
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}

function Terminal() {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-800 bg-[#0a0a0a] shadow-2xl shadow-neutral-900/10">
      <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 font-mono text-xs text-neutral-500">
          ~/basar — zsh
        </span>
      </div>
      <div className="space-y-3 p-5 font-mono text-[13px] leading-relaxed">
        <div>
          <span className="text-accent">$</span>{" "}
          <span className="text-neutral-300">whoami</span>
        </div>
        <div className="text-neutral-400">
          {profile.name} · {profile.role}
        </div>

        <div className="pt-1">
          <span className="text-accent">$</span>{" "}
          <span className="text-neutral-300">cat stack.json</span>
        </div>
        <pre className="text-neutral-400">
          <span className="text-neutral-600">{"{"}</span>
          {"\n"}  <span className="text-accent">&quot;framework&quot;</span>: <span className="text-neutral-200">&quot;Next.js 15&quot;</span>,
          {"\n"}  <span className="text-accent">&quot;ui&quot;</span>: <span className="text-neutral-200">&quot;React 19 · TypeScript&quot;</span>,
          {"\n"}  <span className="text-accent">&quot;cms&quot;</span>: <span className="text-neutral-200">&quot;Payload CMS 3&quot;</span>,
          {"\n"}  <span className="text-accent">&quot;styling&quot;</span>: <span className="text-neutral-200">&quot;Tailwind · Mantine&quot;</span>
          {"\n"}
          <span className="text-neutral-600">{"}"}</span>
        </pre>

        <div className="pt-1">
          <span className="text-accent">$</span>{" "}
          <span className="text-neutral-300">status</span>
        </div>
        <div className="flex items-center gap-2 text-neutral-300">
          <span className="h-1.5 w-1.5 rounded-full bg-[#27c93f]" />
          shipping production
          <span className="ml-0.5 inline-block h-4 w-[7px] animate-pulse bg-neutral-500 align-middle" />
        </div>
      </div>
    </div>
  );
}
