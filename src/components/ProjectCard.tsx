"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import Tag from "@/components/Tag";

export default function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${project.accent} opacity-15 blur-3xl transition-opacity duration-500 group-hover:opacity-30`}
      />

      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
              {project.brand}
            </div>
            <h3 className="font-display text-xl font-semibold text-slate-900 md:text-2xl">
              {project.name}
            </h3>
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
            >
              Live
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          {project.oneLiner}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {(project.badges ?? []).map((b) => (
            <Tag key={b} variant="violet">
              {b}
            </Tag>
          ))}
        </div>

        {!compact && (
          <>
            <div className="mt-6">
              <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                <Sparkles className="h-3.5 w-3.5 text-fuchsia-500" />
                What I shipped
              </div>
              <ul className="space-y-1.5 text-sm text-slate-700">
                {project.myWork.map((w) => (
                  <li key={w} className="flex gap-2">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${project.accent}`}
                    />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.highlights.length > 0 && (
              <div className="mt-5">
                <div className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                  Highlights
                </div>
                <ul className="grid gap-1.5 text-sm text-slate-600 sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        <div className="mt-5 border-t border-slate-100 pt-4">
          <div className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-500">
            Stack
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[11px] text-slate-700"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {project.liveUrl && compact && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-xs text-fuchsia-600 hover:text-fuchsia-700"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {new URL(project.liveUrl).hostname}
          </a>
        )}
      </div>
    </motion.article>
  );
}
