import { Link } from "react-router-dom";
import type { ReactNode } from "react";

/* Section 03 / 10 CTAs (EM-19 1133:85, EM-20 1133:156 + 1133:158, EM-18
   761:1203, EM-18E 761:1118/1120/1122, EM-18A 761:1236): 44px tall, radius
   10, 1px #d1e0d9 hairline — dark #0c513b fill or white outline, 11px
   semibold label. Most frames centre the label; EM-19's send pill sets it
   left at 12px in (1133:86 x=32 inside the 1133:85 button at x=20), so the
   alignment is a prop rather than two competing justify-content utilities. */
const BASE =
  "flex h-[44px] w-full items-center rounded-[10px] border border-[#d1e0d9] text-[11px] font-semibold lg:text-[12px]";

const ALIGN = {
  center: "justify-center px-4 text-center",
  start: "justify-start pr-4 pl-[12px] text-left",
} as const;

export type AccountButtonAlign = keyof typeof ALIGN;

const TONE = {
  dark: "bg-[#0c513b] text-white hover:bg-brand-deep",
  outline: "bg-white text-[#083d2d] hover:border-brand",
} as const;

export type AccountButtonTone = keyof typeof TONE;

export function AccountLinkButton({
  to,
  tone,
  align = "center",
  className = "",
  children,
}: {
  to: string;
  tone: AccountButtonTone;
  align?: AccountButtonAlign;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={`${BASE} ${ALIGN[align]} ${TONE[tone]} ${className}`}>
      {children}
    </Link>
  );
}

export function AccountActionButton({
  tone,
  onClick,
  align = "center",
  disabled = false,
  className = "",
  children,
}: {
  tone: AccountButtonTone;
  onClick?: () => void;
  align?: AccountButtonAlign;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${BASE} ${ALIGN[align]} ${TONE[tone]} ${
        disabled ? "cursor-not-allowed opacity-60" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}

/* Desktop CTA of the MD-18C/18D/19A/19B/20 frames (1252:13947, 1252:13980,
   1252:14067, 1252:14100, 1252:14133): a fixed-width 40px pill, radius 9,
   13px semibold label centred — dark fill or white outline. */
const DESKTOP_BASE =
  "flex h-[40px] items-center justify-center rounded-[9px] border px-4 text-center text-[13px] font-semibold";

const DESKTOP_TONE = {
  dark: "border-[#0c513b] bg-[#0c513b] text-white hover:bg-brand-deep",
  outline: "border-[#dbe3de] bg-white text-[#083d2d] hover:border-brand",
} as const;

export function AccountDesktopLinkButton({
  to,
  tone,
  className = "",
  children,
}: {
  to: string;
  tone: AccountButtonTone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={`${DESKTOP_BASE} ${DESKTOP_TONE[tone]} ${className}`}>
      {children}
    </Link>
  );
}

export function AccountDesktopActionButton({
  tone,
  onClick,
  disabled = false,
  className = "",
  children,
}: {
  tone: AccountButtonTone;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${DESKTOP_BASE} ${DESKTOP_TONE[tone]} ${
        disabled ? "cursor-not-allowed opacity-60" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}
