import type { ReactNode } from "react";
import type { TeamsTone } from "../teams.mock";
import { TONE_PILL } from "./teamsTokens";

/* Shared components for the AD-03 family. Colours are the Company Admin
   palette already built for AD-01 (#d6e3de line, #f7faf8 quiet fill, #083d2d
   brand, #17362e ink, #65746d muted) plus the four pastel status tints; the
   tone maps and the copy interpolation helper live in teamsTokens.ts. */

/** White panel, radius 12, 1px #d6e3de — the AD-03 card (1223:1231). */
export function TeamsCard({
  title,
  subtitle,
  className = "",
  children,
}: {
  title: string;
  subtitle: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={`flex min-w-0 flex-col rounded-[12px] border border-[#d6e3de] bg-white px-[15px] pt-[15px] pb-[15px] ${className}`}
    >
      <h2 className="text-[13px] leading-none font-bold text-[#17362e]">
        {title}
      </h2>
      <p className="mt-[6px] text-[10px] leading-none text-[#65746d] lg:text-[8px]">
        {subtitle}
      </p>
      {children}
    </section>
  );
}

/** Dark-green action button (radius 10, 11px semibold) — 1223:1205. */
export function PrimaryButton({
  label,
  onClick,
  className = "",
}: {
  label: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[32px] items-center justify-center rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[13px] text-[11px] font-semibold whitespace-nowrap text-white hover:bg-[#0c5941] ${className}`}
    >
      {label}
    </button>
  );
}

/** Outline action button (radius 10, 11px semibold) — 1223:1203. */
export function SecondaryButton({
  label,
  onClick,
  className = "",
}: {
  label: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[32px] items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d] hover:bg-[#f2f7f5] ${className}`}
    >
      {label}
    </button>
  );
}

/** Destructive tonal button — AD-03D "Archive team" (1239:347). */
export function DangerButton({
  label,
  onClick,
  className = "",
}: {
  label: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[34px] items-center justify-center rounded-[8px] border border-[#fdf0ef] bg-[#fdf0ef] px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#b04139] hover:bg-[#fbe2df] ${className}`}
    >
      {label}
    </button>
  );
}

/** Rounded status pill — "No owner" / "High" / "Medium" (1223:1252). */
export function TonePill({ label, tone }: { label: string; tone: TeamsTone }) {
  return (
    <span
      className={`flex h-[24px] shrink-0 items-center rounded-full px-[10px] text-[10px] leading-none font-semibold whitespace-nowrap ${TONE_PILL[tone]}`}
    >
      {label}
    </span>
  );
}

/** Read-only form field as drawn in AD-03B (white, 1226:64) and AD-03D
 *  (tonal, 1239:284). Both frames render the value as static text. */
export function ReadOnlyField({
  label,
  value,
  variant = "outline",
}: {
  label: string;
  value: string;
  variant?: "outline" | "tonal";
}) {
  const box =
    variant === "tonal"
      ? "h-[42px] rounded-[8px] border border-[#e8f5f0] bg-[#e8f5f0] px-[11px] text-[11px]"
      : "h-[36px] rounded-[10px] border border-[#d6e3de] bg-white px-[11px] text-[10px]";

  return (
    <div className="flex flex-col gap-[6px]">
      <span className="text-[9px] leading-none font-semibold text-[#65746d]">
        {label}
      </span>
      <p className={`flex items-center text-[#65746d] ${box}`}>{value}</p>
    </div>
  );
}

export type NoteTone = "amber" | "red" | "blue";

const NOTE_TONE: Record<NoteTone, string> = {
  amber: "bg-[#fdf7ec]",
  red: "bg-[#fdf0ef]",
  blue: "bg-[#eff5fc]",
};

const NOTE_TITLE_TONE: Record<NoteTone, string> = {
  amber: "text-[#b57023]",
  red: "text-[#17362e]",
  blue: "text-[#17362e]",
};

/** Tinted note block — capacity warning (1226:72), name validation (1239:295),
 *  blocked (1239:336) and after-archive (1239:349). */
export function NoteBlock({
  tone,
  title,
  lines,
}: {
  tone: NoteTone;
  title: string;
  lines: string[];
}) {
  return (
    <div className={`rounded-[10px] p-[12px] ${NOTE_TONE[tone]}`}>
      <p
        className={`text-[10px] leading-none font-bold ${NOTE_TITLE_TONE[tone]}`}
      >
        {title}
      </p>
      {lines.map((line) => (
        <p
          key={line}
          className="mt-[10px] text-[10px] leading-[15px] text-[#65746d] lg:text-[9px]"
        >
          {line}
        </p>
      ))}
    </div>
  );
}
