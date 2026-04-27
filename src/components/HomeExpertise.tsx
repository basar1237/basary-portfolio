"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const palette = [
  "from-violet-500 to-fuchsia-500",
  "from-fuchsia-500 to-pink-500",
  "from-pink-500 to-rose-500",
  "from-cyan-500 to-teal-400",
  "from-emerald-500 to-cyan-500",
  "from-amber-500 to-rose-500",
];

export default function HomeExpertise() {
  const top = skills.slice(0, 9);

  return (
    <section className="relative mx-auto max-w-6xl px-5 py-20">
      <div className="mb-10 max-w-3xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-fuchsia-700">
          <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
          Skills
        </div>
        <h2 className="font-display text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
          Tools I reach for{" "}
          <span className="text-gradient">every day</span>
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          A curated subset of the stack — full list lives on the About page.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {top.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-display text-base text-slate-900">
                {s.name}
              </span>
              <span className="font-mono text-xs text-slate-500">
                {s.level}%
              </span>
            </div>
            {s.note && (
              <p className="mt-1 text-xs text-slate-500">{s.note}</p>
            )}
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                transition={{ duration: 1, delay: i * 0.05 }}
                viewport={{ once: true }}
                className={`h-full rounded-full bg-gradient-to-r ${
                  palette[i % palette.length]
                }`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
