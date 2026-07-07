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
                "group inline-flex items-center gap-2 rounded-md px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.12em] transition-colors",
                active
                  ? "border border-neutral-900 bg-neutral-900 text-white"
                  : "border border-neutral-200 bg-white text-neutral-500 hover:border-neutral-400 hover:text-neutral-900"
              )}
            >
              {c.label}
              <span
                className={cx(
                  "rounded px-1.5 py-0.5 text-[10px]",
                  active
                    ? "bg-white/20 text-white"
                    : "bg-neutral-100 text-neutral-500"
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
          className="grid gap-5 md:grid-cols-2"
        >
          {list.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </motion.div>
      </AnimatePresence>

      {list.length === 0 && (
        <div className="card p-10 text-center text-sm text-neutral-500">
          No projects in this category — yet.
        </div>
      )}
    </div>
  );
}
