"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Skill } from "@/data/skills";
import cx from "@/lib/cx";

const filters: Array<{ id: Skill["category"] | "all"; label: string }> = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "cms", label: "CMS" },
  { id: "backend", label: "Backend" },
  { id: "tooling", label: "Tooling" },
  { id: "data", label: "Data" },
];

export default function AboutSkillsGrid({ skills }: { skills: Skill[] }) {
  const [filter, setFilter] = useState<Skill["category"] | "all">("all");
  const list = filter === "all" ? skills : skills.filter((s) => s.category === filter);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={cx(
              "rounded-md px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.12em] transition-colors",
              filter === f.id
                ? "border border-neutral-900 bg-neutral-900 text-white"
                : "border border-neutral-200 bg-white text-neutral-500 hover:border-neutral-400 hover:text-neutral-900"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((s, i) => (
          <motion.div
            key={s.name}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="card p-5"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-display text-base font-medium text-neutral-900">
                {s.name}
              </span>
              <span className="font-mono text-xs text-neutral-400">{s.level}%</span>
            </div>
            {s.note && <p className="mt-1 text-xs text-neutral-400">{s.note}</p>}
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-neutral-100">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${s.level}%` }}
                transition={{ duration: 0.8, delay: i * 0.03, ease: "easeOut" }}
                className="h-full rounded-full bg-neutral-900"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
