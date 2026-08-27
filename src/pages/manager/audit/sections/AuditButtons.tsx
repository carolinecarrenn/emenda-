import { Link } from "react-router-dom";
import type { ReactNode } from "react";

/* Section 09 CTAs (EM-16 1109:33, EM-16A 1109:67/69, EM-17 1109:97/99,
   EM-16B 1109:112/114, EM-STATE-01 1109:140, EM-STATE-02 1109:163/165):
   h42, radius 10, 1px #ccded6 — dark #083d2d pill or white outline. */
const BASE =
  "flex h-[42px] items-center justify-center rounded-[10px] border border-[#ccded6] px-4 text-center text-[10px] font-semibold lg:text-[12px]";

const TONE = {
  dark: "bg-[#083d2d] text-white hover:bg-brand",
  outline: "bg-white text-[#083d2d] hover:border-brand",
} as const;

export type AuditButtonTone = keyof typeof TONE;

export function AuditLinkButton({
  to,
  tone,
  className = "",
  children,
}: {
  to: string;
  tone: AuditButtonTone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={`${BASE} ${TONE[tone]} ${className}`}>
      {children}
    </Link>
  );
}

export function AuditActionButton({
  tone,
  onClick,
  className = "",
  children,
}: {
  tone: AuditButtonTone;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${BASE} ${TONE[tone]} ${className}`}
    >
      {children}
    </button>
  );
}
