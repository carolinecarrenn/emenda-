import type { HTMLAttributes } from "react";

type Tone = "surface" | "mint" | "warning" | "error" | "subtle";

const TONE_CLASSES: Record<Tone, string> = {
  surface: "border border-line bg-surface",
  mint: "bg-brand-soft",
  warning: "border border-[#ecd9a8] bg-warning-bg",
  error: "border border-[#eec4bb] bg-error-bg",
  subtle: "bg-subtle",
};

export function Card({
  tone = "surface",
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement> & { tone?: Tone }) {
  return (
    <div
      className={`rounded-lg p-5 ${TONE_CLASSES[tone]} ${className}`}
      {...props}
    />
  );
}
