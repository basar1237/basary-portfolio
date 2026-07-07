import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile, socials } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-mono text-lg font-semibold tracking-tight text-neutral-900">
              basar<span className="text-accent">/dev</span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-500">
              {profile.tagline}
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-neutral-200 bg-white p-2 text-neutral-500 transition-colors hover:border-accent hover:text-accent"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-neutral-200 bg-white p-2 text-neutral-500 transition-colors hover:border-accent hover:text-accent"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={socials.email}
                className="rounded-md border border-neutral-200 bg-white p-2 text-neutral-500 transition-colors hover:border-accent hover:text-accent"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-400">
              Sitemap
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/experience", label: "Experience" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-neutral-600 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-400">
              Reach me
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-neutral-600">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-neutral-400" />
                {profile.location}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-neutral-400" />
                <a
                  href={`mailto:${profile.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {profile.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-neutral-200 pt-6 text-xs text-neutral-400 md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp;
            Tailwind.
          </span>
          <span>Designed and shipped from Istanbul.</span>
        </div>
      </div>
    </footer>
  );
}
