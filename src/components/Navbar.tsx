"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import cx from "@/lib/cx";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

function Wordmark() {
  return (
    <span className="font-mono text-[15px] font-semibold tracking-tight text-neutral-900">
      basar<span className="text-accent">/dev</span>
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cx(
        "sticky top-0 z-50 transition-colors",
        scrolled
          ? "border-b border-neutral-200 bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" aria-label="Home" className="flex items-center">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cx(
                  "relative py-1 text-sm transition-colors",
                  active
                    ? "text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-900"
                )}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-0 h-px w-full bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="btn btn-primary hidden md:inline-flex">
          Let&apos;s talk
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-neutral-700 transition-colors hover:bg-neutral-100 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-neutral-200 bg-white md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
              {links.map((l) => {
                const active =
                  l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cx(
                      "rounded-md px-3 py-2 text-sm transition-colors",
                      active
                        ? "bg-neutral-100 text-neutral-900"
                        : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                    )}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="btn btn-primary mt-2 justify-center"
              >
                Let&apos;s talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
