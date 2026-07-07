"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="card card-hover p-6"
    >
      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-400">
              {project.brand}
            </div>
            <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
              {project.name}
            </h3>
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600 transition-colors hover:border-neutral-400 hover:text-neutral-900"
            >
              Live
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          {project.oneLiner}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {(project.badges ?? []).map((b) => (
            <Tag key={b}>{b}</Tag>
          ))}
        </div>

        {!compact && (
          <>
            <div className="mt-6">
              <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                What I shipped
              </div>
              <ul className="space-y-1.5 text-sm text-neutral-700">
                {project.myWork.map((w) => (
                  <li key={w} className="flex gap-2.5">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.highlights.length > 0 && (
              <div className="mt-5">
                <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                  Highlights
                </div>
                <ul className="grid gap-1.5 text-sm text-neutral-600 sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-neutral-300" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        <div className="mt-5 border-t border-neutral-100 pt-4">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-400">
            Stack
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-0.5 font-mono text-[11px] text-neutral-600"
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
            className="mt-4 inline-flex items-center gap-1.5 text-xs text-neutral-500 transition-colors hover:text-accent"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {new URL(project.liveUrl).hostname}
          </a>
        )}
      </div>
    </motion.article>
  );
}
