import type { ReactNode } from "react";

/* Shared desktop outcome shell for MD-18C (1252:13933), MD-18D (1252:13972),
   MD-19A (1252:14059), MD-19B (1252:14092) and MD-20 (1252:14127): a single
   white card centred in the content column — 840px wide on the settings /
   support outcomes, 700px on the logout confirmation — radius 14, 1px
   hairline, 36px of vertical padding. The desktop frames put the outcome in
   one card instead of the mobile stack; the mobile stacks stay untouched in
   their own sections. */
export function OutcomeDesktopCard({
  width,
  minHeight,
  padding = "px-[42px]",
  children,
}: {
  width: string;
  minHeight: string;
  /** MD-18C / MD-19A inset their blocks 60px, MD-18D / MD-19B 42px. */
  padding?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`mx-auto rounded-[14px] border border-[#dbe3de] bg-white py-[36px] ${padding} ${width} ${minHeight}`}
    >
      {children}
    </div>
  );
}

/* MD-18C "SAVED" (1252:13934) / MD-19A "SENT" (1252:14060): a 296x38 mint
   pill centred at the top of the outcome card, 11px semibold caps. */
export function OutcomeDesktopPill({ children }: { children: ReactNode }) {
  return (
    <p className="mx-auto flex h-[38px] w-[296px] items-center justify-center rounded-full bg-[#e3f0e8] text-[11px] font-semibold tracking-[0.06em] text-brand-deep uppercase">
      {children}
    </p>
  );
}

const PANEL_TONE = {
  /* mint = safe / preserved (1252:13979, 1252:14065, 1252:14130) */
  mint: "bg-[#e3f0e8]",
  /* peach = failure summary (1252:13973, 1252:14093) */
  alert: "bg-[#fce8e0]",
  /* cream-yellow = must-verify retry rule (EM-18D / EM-19B carry-over) */
  caution: "bg-[#fff4c4]",
} as const;

export type OutcomeDesktopPanelTone = keyof typeof PANEL_TONE;

/* Inner panel of the outcome card: radius 10, 26/20 padding, no hairline —
   the desktop frames rely on the fill alone. */
export function OutcomeDesktopPanel({
  tone = "mint",
  className = "",
  children,
}: {
  tone?: OutcomeDesktopPanelTone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-[10px] px-[26px] py-[20px] ${PANEL_TONE[tone]} ${className}`}
    >
      {children}
    </div>
  );
}

/* The action row the desktop frames park under (MD-18C/18D/19A/19B) or
   inside (MD-20) the card: 40px buttons on the card's own inset. */
export function OutcomeDesktopActions({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`flex items-center justify-between gap-[20px] ${className}`}>
      {children}
    </div>
  );
}
