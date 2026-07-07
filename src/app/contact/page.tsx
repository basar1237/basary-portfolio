import Section from "@/components/Section";
import { Mail, MapPin, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile, socials } from "@/data/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact — ${profile.name}`,
  description: `Get in touch with ${profile.name} — ${profile.role} at ${profile.company}.`,
};

export default function ContactPage() {
  const items = [
    {
      icon: Mail,
      label: "Work email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Mail,
      label: "Personal email",
      value: profile.altEmail,
      href: `mailto:${profile.altEmail}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Location",
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
      value: "Connect on LinkedIn",
      href: socials.linkedin,
      external: true,
    },
  ];

  return (
    <>
      <section className="relative">
        <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-20 md:pt-28">
          <div className="eyebrow mb-5">Contact</div>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-900 md:text-6xl">
            Got something to{" "}
            <span className="text-gradient">build together?</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-500 md:text-lg">
            I&apos;m happy to chat about product work, freelance gigs, Next.js +
            Payload migrations, or simply the latest in the React ecosystem.
            Pick the channel that suits you.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Channels"
        title={
          <>
            Six ways to <span className="text-gradient">say hi</span>
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
        eyebrow="Best fit"
        title={
          <>
            A good fit{" "}
            <span className="text-gradient">for working with me</span>
          </>
        }
        description="Some of the work I'd love to take on, and what to expect when we collaborate."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Next.js + Payload migrations",
              text: "Moving from a legacy CMS or .NET MVC into a modern App Router + Payload setup. I've done it for travel and advisory clients.",
            },
            {
              title: "Multi-tenant frontends",
              text: "One codebase, many brands. Locale-aware routes, theme tokens per tenant, and content workflows your editors actually enjoy.",
            },
            {
              title: "Travel & booking products",
              text: "Search, listings, detail pages, payment flows, 3D-secure, partial payments — I've shipped all of it for live OTA brands.",
            },
            {
              title: "Polished frontends",
              text: "Mobile-first, accessible, motion-aware UIs that feel calm and fast — not chaotic and animated for the sake of it.",
            },
          ].map((c) => (
            <div key={c.title} className="card p-6">
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                Good fit
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
