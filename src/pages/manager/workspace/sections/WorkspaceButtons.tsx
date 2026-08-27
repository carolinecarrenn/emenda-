import type { ReactNode } from "react";
import { Link } from "react-router-dom";

/* Section 02 button set. MD-02 … MD-05A use exactly two shapes at 42px /
   radius 10 / 12px semibold: the dark #0c5941 primary (Continue with …,
   Invite worker, Message, Create Follow-up, Switch to …) and the white
   #dbe3de outline secondary (Change facility, Cancel, Open Visa / Admin).
   The 390px mocks keep the dark primary full-width, but EM-02A "Change
   facility", EM-02B "Cancel", EM-04B "Back to workers" and EM-05A "Back to
   Worker Detail" are drawn as a plain centred #0c5941 text link with no
   border and no fill — `mobileText` selects that treatment below lg while
   the desktop pill is preserved. */

const TONE = {
  dark: "border-[#0c5941] bg-[#0c5941] text-white hover:border-brand-deep hover:bg-brand-deep",
  outline: "border-[#dbe3de] bg-white text-[#083d2d] hover:border-brand",
} as const;

/* The mobile-text variant carries no chrome at 390px, so its tone is only
   painted from lg upward. */
const LG_TONE = {
  dark: "lg:border-[#0c5941] lg:bg-[#0c5941] lg:text-white lg:hover:border-brand-deep lg:hover:bg-brand-deep",
  outline: "lg:border-[#dbe3de] lg:bg-white lg:text-[#083d2d] lg:hover:border-brand",
} as const;

export type WorkspaceButtonTone = keyof typeof TONE;

/* MD-02 … MD-05A left-align the label at 16px inside the 42px pill; the
   390px mocks centre the same label in the full-width button. */
const BASE =
  "flex h-[42px] items-center justify-center rounded-[10px] border px-[16px] text-[12px] font-semibold lg:justify-start";

const MOBILE_TEXT_BASE =
  "flex items-center justify-center py-[10px] text-[12px] font-semibold text-[#0c5941] lg:h-[42px] lg:justify-start lg:rounded-[10px] lg:border lg:px-[16px] lg:py-0";

function classesFor(
  tone: WorkspaceButtonTone,
  mobileText: boolean | undefined,
): string {
  return mobileText
    ? `${MOBILE_TEXT_BASE} ${LG_TONE[tone]}`
    : `${BASE} ${TONE[tone]}`;
}

export function WorkspaceButton({
  tone = "outline",
  mobileText,
  className = "",
  onClick,
  disabled,
  children,
}: {
  tone?: WorkspaceButtonTone;
  /** EM-02A/02B/04B/05A draw the secondary action as a plain text link. */
  mobileText?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${classesFor(tone, mobileText)} disabled:opacity-60 ${className}`}
    >
      {children}
    </button>
  );
}

export function WorkspaceLinkButton({
  to,
  tone = "outline",
  mobileText,
  className = "",
  children,
}: {
  to: string;
  tone?: WorkspaceButtonTone;
  /** EM-02A/02B/04B/05A draw the secondary action as a plain text link. */
  mobileText?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={`${classesFor(tone, mobileText)} ${className}`}>
      {children}
    </Link>
  );
}
