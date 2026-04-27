"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { profile, socials } from "@/data/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="aurora" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-12 pt-20 md:grid-cols-[1.15fr,1fr] md:gap-10 md:pt-28">
        <div>
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-fuchsia-700"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-500" />
            Open to interesting work
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-4xl font-semibold leading-[1.05] text-slate-900 md:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient animate-gradient-x">
              {profile.name}
            </span>
            <br />
            <span className="text-slate-700">Frontend engineer</span>{" "}
            <span className="text-slate-400">crafting</span>{" "}
            <span className="text-slate-900">modern web products.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            I build production travel & booking platforms at{" "}
            <span className="font-semibold text-slate-900">Lidya Teknoloji</span> —
            multi-tenant Next.js + Payload CMS apps, .NET MVC OTA sites, and a long
            tail of jQuery + Bootstrap brand templates. React, TypeScript, and a
            soft spot for great UI.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/30 transition-transform hover:scale-[1.02]"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
            >
              Get in touch
            </Link>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-fuchsia-500" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 hover:text-slate-900"
            >
              <Mail className="h-4 w-4 text-fuchsia-500" />
              {profile.email}
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-slate-900"
            >
              <Github className="h-4 w-4 text-fuchsia-500" />
              GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-slate-900"
            >
              <Linkedin className="h-4 w-4 text-fuchsia-500" />
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-violet-300/50 via-fuchsia-300/50 to-pink-300/50 blur-3xl" />
            <div className="glass-strong relative overflow-hidden rounded-3xl p-6 ring-glow">
              <div className="flex items-center gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 text-xl font-display font-semibold text-white shadow-lg shadow-fuchsia-500/30">
                  BY
                </div>
                <div>
                  <div className="font-display text-lg text-slate-900">
                    {profile.name}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">
                    {profile.role} · {profile.company}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3 font-mono text-xs text-slate-700">
                <Row k="role" v={profile.role} />
                <Row k="company" v={profile.company} />
                <Row k="location" v={profile.location} />
                <Row k="stack" v="Next.js · React · TS · Payload" />
                <Row k="status" v="Shipping prod" highlight />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2 text-[10px] uppercase tracking-widest text-slate-500">
                {["Next.js", "React", "Payload", "TypeScript", "Tailwind", "Mantine"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-md border border-slate-200 bg-white px-2 py-1 text-center"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Row({
  k,
  v,
  highlight,
}: {
  k: string;
  v: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-slate-400">{k}</span>
      <span
        className={
          highlight
            ? "rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-700"
            : "text-slate-800"
        }
      >
        {v}
      </span>
    </div>
  );
}
