import { ReactNode } from "react";
import cx from "@/lib/cx";

type Variant = "default" | "accent" | "violet" | "cyan" | "amber" | "rose";

const styles: Record<Variant, string> = {
  default: "border-neutral-200 bg-neutral-50 text-neutral-600",
  accent: "border-accent/20 bg-accent-soft text-accent",
  // Legacy variants normalized to the neutral system
  violet: "border-neutral-200 bg-neutral-50 text-neutral-600",
  cyan: "border-neutral-200 bg-neutral-50 text-neutral-600",
  amber: "border-neutral-200 bg-neutral-50 text-neutral-600",
  rose: "border-neutral-200 bg-neutral-50 text-neutral-600",
};

export default function Tag({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
