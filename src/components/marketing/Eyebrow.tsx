import type { LucideIcon } from "lucide-react";

/**
 * Small section label. On the marketing page it reads as a pill rather than
 * the bare tracked caption the app screens use, because it has to hold its own
 * against 40–60px display headings.
 */
export function Eyebrow({
  icon: Icon,
  tone = "light",
  className = "",
  children,
}: {
  icon?: LucideIcon;
  tone?: "light" | "dark";
  className?: string;
  children: React.ReactNode;
}) {
  const toneClass =
    tone === "dark"
      ? "border-white/15 bg-white/10 text-lp-onDark"
      : "border-lp-line/70 bg-lp-mint text-lp-green";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.02em] ${toneClass} ${className}`}
    >
      {Icon ? <Icon size={14} strokeWidth={2} aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
