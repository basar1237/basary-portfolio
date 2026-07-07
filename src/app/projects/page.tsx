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
      <section className="relative">
        <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-20 md:pt-28">
          <div className="eyebrow mb-5">Projects</div>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-900 md:text-6xl">
            {projects.length} real projects,{" "}
            <span className="text-gradient">in production.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-500 md:text-lg">
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
