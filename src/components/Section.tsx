import { ReactNode } from "react";
import cx from "@/lib/cx";

type Props = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  children: ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: Props) {
  return (
    <section
      id={id}
      className={cx("relative mx-auto max-w-6xl px-5 py-20", className)}
    >
      <div className="mb-10 max-w-3xl">
        {eyebrow && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-fuchsia-700">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
            {eyebrow}
          </div>
        )}
        <h2 className="font-display text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
