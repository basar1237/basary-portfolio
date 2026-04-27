"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, ProjectCategory } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import cx from "@/lib/cx";

type Cat = ProjectCategory | "all";

export default function ProjectsExplorer({
  projects,
  categories,
}: {
  projects: Project[];
  categories: { id: Cat; label: string }[];
}) {
  const [cat, setCat] = useState<Cat>("all");

  const list = useMemo(() => {
    if (cat === "all") return projects;
    return projects.filter((p) => p.category === cat);
  }, [cat, projects]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: projects.length };
    for (const p of projects) {
      map[p.category] = (map[p.category] ?? 0) + 1;
    }
    return map;
  }, [projects]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => {
          const active = cat === c.id;
          const count = counts[c.id] ?? 0;
          return (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={cx(
                "group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-widest transition-colors",
                active
                  ? "border border-fuchsia-300 bg-fuchsia-50 text-fuchsia-700"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              )}
            >
              {c.label}
              <span
                className={cx(
                  "rounded-full px-1.5 py-0.5 font-mono text-[10px]",
                  active
                    ? "bg-fuchsia-200 text-fuchsia-800"
                    : "bg-slate-100 text-slate-600"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={cat}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {list.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </motion.div>
      </AnimatePresence>

      {list.length === 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
          No projects in this category — yet.
        </div>
      )}
    </div>
  );
}
