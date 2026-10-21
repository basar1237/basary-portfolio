import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Layers3,
  Database,
  Globe2,
  Smartphone,
  Cpu,
} from "lucide-react";
import Section from "@/components/Section";
import { profile } from "@/data/profile";
import { stats } from "@/data/skills";
import { projects } from "@/data/projects";
import HomeHero from "@/components/HomeHero";
import HomeExpertise from "@/components/HomeExpertise";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  const featured = projects.filter((p) =>
    [
      "lidya-travel-ui-react",
      "consilium",
      "gezibank-ui",
      "fulltrip-web",
    ].includes(p.id)
  );

  return (
    <>
      <HomeHero />

      {/* Stats strip */}
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-neutral-200 bg-white md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-5 py-7 text-center ${
                i !== 0 ? "border-l border-neutral-200" : ""
              } ${i === 2 ? "border-l max-md:border-t" : ""} ${
                i === 3 ? "max-md:border-t" : ""
              }`}
            >
              <div className="font-display text-3xl font-semibold tracking-tight text-neutral-900">
                {s.value}
              </div>
              <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <HomeExpertise />

      <Section
        eyebrow="Öne çıkan işler"
        title={
          <>
            Son dönemde{" "}
            <span className="text-gradient">yayına aldıklarım</span>
          </>
        }
        description="Next.js + Payload tabanlı multi-tenant bir seyahat platformundan İngiltere merkezli bir risk danışmanlığı sitesine kadar, canlıdaki işlerimden bazı öne çıkanlar."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} compact />
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-900 transition-colors hover:text-accent"
          >
            {projects.length} projenin tamamını gör
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Yetkinlikler"
        title={
          <>
            Önceliğim React, ama{" "}
            <span className="text-gradient">stack'in derinlerinde de rahatım</span>
          </>
        }
        description="Ürün geliştirirken başvurduğum teknolojilere kısa bir bakış."
      >
        <div className="grid gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Code2,
              title: "React & Next.js",
              text: "App Router, Server Components, Suspense, ISR. Performans ve erişilebilirliği sonradan akla gelen detaylar değil, birer özellik olarak görüyorum.",
            },
            {
              icon: Layers3,
              title: "Payload CMS",
              text: "Multi-tenant markalarda collection'lar, block'lar, layout builder, canlı önizleme ve on-demand revalidation.",
            },
            {
              icon: Database,
              title: ".NET & APIs",
              text: "OTA platformlarında yıllarca ASP.NET Core MVC + Razor — uçak, otel, otobüs, ödeme ve 3D Secure akışları.",
            },
            {
              icon: Globe2,
              title: "Multi-tenant Arayüz",
              text: "Tek monorepo, birçok marka. Dile duyarlı route'lar, tenant bazında tema ve içerik.",
            },
            {
              icon: Smartphone,
              title: "Responsive Deneyim",
              text: "Mobile-first yerleşimler, erişilebilir formlar, gürültü değil netlik katan animasyonlar.",
            },
            {
              icon: Cpu,
              title: "Veri & Analitik",
              text: "Yan projelerde analiz ve raporlama için Python, Pandas ve scikit-learn ile rahat çalışırım.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="group bg-white p-7 transition-colors hover:bg-neutral-50"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700 transition-colors group-hover:border-accent group-hover:text-accent">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-medium text-neutral-900">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="İletişime geç"
        title={
          <>
            Aklında bir ürün mü var?{" "}
            <span className="text-gradient">Birlikte geliştirelim.</span>
          </>
        }
        description="İlginç ürün projeleri, freelance iş birlikleri ve Next.js + Payload geçişleri üzerine danışmanlık konusunda konuşmaya her zaman açığım."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">
            Sohbet başlat
          </Link>
          <a href={`mailto:${profile.email}`} className="btn btn-secondary">
            {profile.email}
          </a>
        </div>
      </Section>
    </>
  );
}
