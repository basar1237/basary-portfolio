import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-32 text-center">
      <div className="aurora" aria-hidden />
      <div className="relative">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-fuchsia-600">
          404
        </p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-slate-900 md:text-7xl">
          Page not <span className="text-gradient">found.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-slate-600">
          The page you&apos;re after doesn&apos;t exist — but the homepage is
          a single click away.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/30 transition-transform hover:scale-[1.02]"
        >
          Take me home
        </Link>
      </div>
    </section>
  );
}
