import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile, socials } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl">
              <span className="text-slate-900">basar</span>
              <span className="text-gradient">.dev</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-slate-600">
              {profile.tagline}
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 shadow-sm transition-colors hover:border-fuchsia-300 hover:text-fuchsia-600"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 shadow-sm transition-colors hover:border-fuchsia-300 hover:text-fuchsia-600"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={socials.email}
                className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 shadow-sm transition-colors hover:border-fuchsia-300 hover:text-fuchsia-600"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-slate-500">
              Sitemap
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-700 hover:text-slate-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-700 hover:text-slate-900">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-slate-700 hover:text-slate-900"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-700 hover:text-slate-900">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-700 hover:text-slate-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-slate-500">
              Reach me
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-fuchsia-500" />
                {profile.location}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-fuchsia-500" />
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-slate-900"
                >
                  {profile.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.
          </span>
          <span>Designed and shipped from Istanbul.</span>
        </div>
      </div>
    </footer>
  );
}
