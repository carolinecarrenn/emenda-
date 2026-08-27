import type { ReactNode } from "react";

export type NoteTone = "mint" | "white" | "peach" | "alert" | "caution";

const TONE: Record<NoteTone, string> = {
  /* mint = confirmed / safe / preserved (EM-18C, EM-19A, EM-20) */
  mint: "border-[#d1e0d9] bg-[#e6f4ed]",
  /* white key-value / bullet card (EM-20 "WHEN YOU SIGN OUT") */
  white: "border-[#d1e0d9] bg-white",
  /* peach = not-available / failure (EM-18A "Private worker data") */
  peach: "border-[#f3d3c7] bg-[#fce8e0]",
  /* deeper peach = outcome summary (EM-18D 1133:33, EM-19B 1133:118) */
  alert: "border-[#f3cfc2] bg-[#ffe3d9]",
  /* cream-yellow = must-verify (EM-18D 1133:49 / EM-19B 1133:134) */
  caution: "border-[#efe0b4] bg-[#fff4c4]",
};

/* Shared card shell for sections 03 / 10: radius 10, 1px hairline, 9px caps
   green label, 9px grey body (nodes 1133:145, 1133:150, 1133:153). */
export function NoteCard({
  tone = "mint",
  label,
  title,
  className = "",
  bodyClassName = "space-y-[4px] leading-[16px] lg:leading-[19px]",
  children,
}: {
  tone?: NoteTone;
  label?: string;
  title?: string;
  /** Per-frame overrides — EM-18A pins its two cards to 118px / 73px. */
  className?: string;
  /** Per-frame body rhythm — EM-18D / EM-19B run tight bullet lists. */
  bodyClassName?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`rounded-[10px] border px-[14px] py-[13px] ${TONE[tone]} ${className}`}
    >
      {label && (
        <p className="text-[9px] font-semibold text-[#0c513b] uppercase lg:text-[11px]">
          {label}
        </p>
      )}
      {title && (
        <p
          className={`text-[11px] font-semibold lg:text-[13px] ${
            tone === "peach" || tone === "alert"
              ? "text-[#c24529]"
              : "text-brand-deep"
          } ${label ? "mt-[8px]" : ""}`}
        >
          {title}
        </p>
      )}
      {children && (
        <div
          className={`text-[9px] text-[#65746d] lg:text-[11px] ${bodyClassName} ${
            label || title ? "mt-[6px]" : ""
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
