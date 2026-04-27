import Section from "@/components/Section";
import { profile } from "@/data/profile";
import { projects, projectCategories } from "@/data/projects";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description:
    "Real production work across travel, booking, advisory and template platforms.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-20 md:pt-28">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-fuchsia-700">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
            Projects
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
            {projects.length} real projects,{" "}
            <span className="text-gradient">in production.</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            A curated tour of the things I&apos;ve actually shipped — from the
            modern Lidya Travel multi-tenant platform on Next.js + Payload, down
            to the legacy ASP.NET MVC + jQuery brand sites that still book real
            trips every day.
          </p>
        </div>
      </section>

      <Section
        eyebrow="The portfolio"
        title={
          <>
            Filter by{" "}
            <span className="text-gradient">what you care about</span>
          </>
        }
      >
        <ProjectsExplorer
          projects={projects}
          categories={projectCategories}
        />
      </Section>
    </>
  );
}
