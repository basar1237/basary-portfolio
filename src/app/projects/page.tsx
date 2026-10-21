import Section from "@/components/Section";
import { profile } from "@/data/profile";
import { projects, projectCategories } from "@/data/projects";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projeler — ${profile.name}`,
  description:
    "Seyahat, rezervasyon, danışmanlık ve şablon platformlarında canlıdaki gerçek işler.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative">
        <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-20 md:pt-28">
          <div className="eyebrow mb-5">Projeler</div>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-900 md:text-6xl">
            {projects.length} gerçek proje,{" "}
            <span className="text-gradient">canlıda.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-500 md:text-lg">
            Gerçekten yayına aldığım işlerden seçkin bir tur — Next.js + Payload
            üzerindeki modern Lidya Travel multi-tenant platformundan, her gün
            hâlâ gerçek seyahat rezervasyonu alan legacy ASP.NET MVC + jQuery
            marka sitelerine kadar.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Portföy"
        title={
          <>
            <span className="text-gradient">İlgilendiğin alana</span>{" "}
            göre filtrele
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
