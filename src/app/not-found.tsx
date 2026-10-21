import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-32 text-center">
      <div className="relative">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          404
        </p>
        <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight text-neutral-900 md:text-7xl">
          Sayfa <span className="text-gradient">bulunamadı.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-neutral-500">
          Aradığın sayfa mevcut değil — ama ana sayfa sadece bir tık
          uzağında.
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          Ana sayfaya dön
        </Link>
      </div>
    </section>
  );
}
