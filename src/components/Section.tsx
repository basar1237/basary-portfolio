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
      <div className="mb-12 max-w-3xl">
        {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-[2.6rem]">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-neutral-500">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
