import Section from "@/components/Section";
import { Mail, MapPin, Phone, Github, Linkedin, Sparkles } from "lucide-react";
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
      accent: "from-violet-500 via-fuchsia-500 to-pink-500",
    },
    {
      icon: Mail,
      label: "Personal email",
      value: profile.altEmail,
      href: `mailto:${profile.altEmail}`,
      accent: "from-fuchsia-500 to-pink-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      accent: "from-pink-500 to-rose-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
      accent: "from-cyan-500 to-teal-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@basar1237",
      href: socials.github,
      external: true,
      accent: "from-emerald-500 to-cyan-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: socials.linkedin,
      external: true,
      accent: "from-amber-500 to-rose-500",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-20 md:pt-28">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-fuchsia-700">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
            Contact
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
            Got something cool to{" "}
            <span className="text-gradient">build together?</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            I&apos;m happy to chat about product work, freelance gigs, Next.js
            + Payload migrations, or simply the latest in the React ecosystem.
            Pick the channel that suits you.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Channels"
        title={
          <>
            Six ways to{" "}
            <span className="text-gradient">say hi</span>
          </>
        }
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${it.accent} opacity-15 blur-2xl transition-opacity group-hover:opacity-30`}
                />
                <div
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${it.accent} text-white shadow-md`}
                >
                  <it.icon className="h-5 w-5" />
                </div>
                <div className="text-xs uppercase tracking-widest text-slate-500">
                  {it.label}
                </div>
                <div className="mt-1 break-words font-display text-lg text-slate-900">
                  {it.value}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="What I'm into"
        title={
          <>
            Best fit{" "}
            <span className="text-gradient">for working with me</span>
          </>
        }
        description="Some of the work I'd love to take on, and what to expect when we collaborate."
      >
        <div className="grid gap-4 md:grid-cols-2">
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
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-fuchsia-600">
                <Sparkles className="h-3.5 w-3.5" />
                Good fit
              </div>
              <h3 className="font-display text-lg text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
