"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function HomeExpertise() {
  const top = skills.slice(0, 9);

  return (
    <section className="relative mx-auto max-w-6xl px-5 py-20">
      <div className="mb-12 max-w-3xl">
        <div className="eyebrow mb-4">Skills</div>
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-[2.6rem]">
          Tools I reach for{" "}
          <span className="text-gradient">every day</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-500">
          A curated subset of the stack — full list lives on the About page.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {top.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.45 }}
            viewport={{ once: true }}
            className="card card-hover p-5"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-display text-base font-medium text-neutral-900">
                {s.name}
              </span>
              <span className="font-mono text-xs text-neutral-400">
                {s.level}%
              </span>
            </div>
            {s.note && <p className="mt-1 text-xs text-neutral-400">{s.note}</p>}
            <div className="mt-4 h-1 overflow-hidden rounded-full bg-neutral-100">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                transition={{ duration: 0.9, delay: i * 0.05, ease: "easeOut" }}
                viewport={{ once: true }}
                className="h-full rounded-full bg-neutral-900"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
