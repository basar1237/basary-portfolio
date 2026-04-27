"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Skill } from "@/data/skills";
import cx from "@/lib/cx";

const palette = [
  "from-violet-500 to-fuchsia-500",
  "from-fuchsia-500 to-pink-500",
  "from-pink-500 to-rose-500",
  "from-cyan-500 to-teal-400",
  "from-emerald-500 to-cyan-500",
  "from-amber-500 to-rose-500",
];

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
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={cx(
              "rounded-full px-3.5 py-1.5 text-xs uppercase tracking-widest transition-colors",
              filter === f.id
                ? "border border-fuchsia-300 bg-fuchsia-50 text-fuchsia-700"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
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
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-display text-base text-slate-900">{s.name}</span>
              <span className="font-mono text-xs text-slate-500">{s.level}%</span>
            </div>
            {s.note && <p className="mt-1 text-xs text-slate-500">{s.note}</p>}
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${s.level}%` }}
                transition={{ duration: 0.8, delay: i * 0.03 }}
                className={`h-full rounded-full bg-gradient-to-r ${
                  palette[i % palette.length]
                }`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
