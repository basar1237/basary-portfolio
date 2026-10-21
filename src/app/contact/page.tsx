import Section from "@/components/Section";
import { Mail, MapPin, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile, socials } from "@/data/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `İletişim — ${profile.name}`,
  description: `${profile.name} ile iletişime geç — ${profile.company} bünyesinde ${profile.role}.`,
};

export default function ContactPage() {
  const items = [
    {
      icon: Mail,
      label: "İş e-postası",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Mail,
      label: "Kişisel e-posta",
      value: profile.altEmail,
      href: `mailto:${profile.altEmail}`,
    },
    {
      icon: Phone,
      label: "Telefon",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Konum",
      value: profile.location,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@basar1237",
      href: socials.github,
      external: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "LinkedIn'de bağlantı kur",
      href: socials.linkedin,
      external: true,
    },
  ];

  return (
    <>
      <section className="relative">
        <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-20 md:pt-28">
          <div className="eyebrow mb-5">İletişim</div>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-900 md:text-6xl">
            Birlikte{" "}
            <span className="text-gradient">geliştireceğimiz bir şey mi var?</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-500 md:text-lg">
            Ürün projeleri, freelance işler, Next.js + Payload geçişleri ya da
            sadece React ekosistemindeki son gelişmeler hakkında sohbet etmekten
            memnuniyet duyarım. Sana uygun kanalı seç.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Kanallar"
        title={
          <>
            <span className="text-gradient">Merhaba demenin</span> altı yolu
          </>
        }
      >
        <div className="grid gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => {
            const Wrapper: React.ElementType = it.href ? "a" : "div";
            const props = it.href
              ? {
                  href: it.href,
                  target: it.external ? "_blank" : undefined,
                  rel: it.external ? "noopener noreferrer" : undefined,
                }
              : {};
            return (
              <Wrapper
                key={it.label}
                {...props}
                className="group relative bg-white p-6 transition-colors hover:bg-neutral-50"
              >
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700 transition-colors group-hover:border-accent group-hover:text-accent">
                    <it.icon className="h-5 w-5" />
                  </div>
                  {it.href && (
                    <ArrowUpRight className="h-4 w-4 text-neutral-300 transition-colors group-hover:text-accent" />
                  )}
                </div>
                <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
                  {it.label}
                </div>
                <div className="mt-1 break-words font-display text-lg font-medium text-neutral-900">
                  {it.value}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="En uygun işler"
        title={
          <>
            Benimle çalışmak için{" "}
            <span className="text-gradient">ideal işler</span>
          </>
        }
        description="Üstlenmeyi çok istediğim işlerden bazıları ve birlikte çalıştığımızda neler bekleyebileceğin."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Next.js + Payload geçişleri",
              text: "Legacy bir CMS veya .NET MVC'den modern bir App Router + Payload kurulumuna geçiş. Bunu seyahat ve danışmanlık müşterileri için yaptım.",
            },
            {
              title: "Multi-tenant frontend'ler",
              text: "Tek kod tabanı, birçok marka. Dile duyarlı route'lar, tenant bazında tema token'ları ve editörlerinin gerçekten keyif alacağı içerik akışları.",
            },
            {
              title: "Seyahat & rezervasyon ürünleri",
              text: "Arama, listeleme, detay sayfaları, ödeme akışları, 3D Secure, kısmi ödemeler — hepsini canlı OTA markaları için geliştirdim.",
            },
            {
              title: "Özenli frontend'ler",
              text: "Sakin ve hızlı hissettiren mobile-first, erişilebilir, hareketi bilinçli kullanan arayüzler — sırf animasyon olsun diye kaotik olanlar değil.",
            },
          ].map((c) => (
            <div key={c.title} className="card p-6">
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                Uygun iş
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
    </>
  );
}
