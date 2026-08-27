import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export type ActionTone =
  | "primary"
  | "secondary"
  | "danger"
  | "muted"
  | "progress"
  | "primaryMobile"
  | "confirmSafe"
  | "confirmDestructive";

interface ActionButtonProps {
  tone: ActionTone;
  children: ReactNode;
  /** Desktop width from the mock (mobile W-xx buttons are full-width pills). */
  width?: 220 | 230 | 240 | 260 | 280 | 300 | 320 | 464;
  /** Mobile pill height: the W-xx mocks draw 48px leads and 44px followers. */
  mobileHeight?: 44 | 48;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

/* Action buttons for WD-49..WD-52: 48px tall, radius 12 on desktop and a
   full-width radius-14 button with a 12px label on the 390px W-xx mocks
   (W-49 node 917:37, W-51 nodes 938:34/948:2/938:36). primary = filled
   #056b54 · secondary = white with #d1ded6 border and #054d3d label ·
   danger = the WD-51 red-outlined disconnect (node 1182:1234), which W-51
   node 938:36 draws as a plain secondary pill on mobile · muted = the
   disabled state, which W-50 node 917:292 draws as the filled primary at 45%
   opacity and WD-50 renders as a desaturated fill · progress = the same
   disabled mobile pill (W-50B node 917:375 / W-51B) that WD-50B node 1182:1073
   and WD-51B node 1182:1350 draw as a plain white outlined button ·
   primaryMobile = W-51's dark-green "View Career & CV" pill, which WD-51 renders as a white outlined button ·
   confirmSafe / confirmDestructive = the W-50E (943:86/943:88) and W-51A
   dialog pair, where mobile outlines the safe action and fills the
   destructive one and WD-51A does the opposite. */
const TONE_CLASSES: Record<ActionTone, string> = {
  primary: "bg-lp-button text-white hover:bg-lp-green",
  secondary:
    "border border-lp-line bg-white text-lp-green hover:border-lp-green",
  danger:
    "border border-lp-line bg-white text-lp-green lg:border-[#c72924] lg:text-[#c72924] lg:hover:bg-[#fff0ed]",
  muted:
    "bg-lp-button text-white opacity-45 lg:border lg:border-lp-line lg:bg-[#dfe9e3] lg:text-[#8a9c92] lg:opacity-100",
  /* WD-50B node 1182:1073 / WD-51B node 1182:1350 draw the in-progress pill
     as a plain white outlined button with the green label — not as the
     desaturated disabled fill WD-50 uses for an ungated primary. */
  progress:
    "bg-lp-button text-white opacity-45 lg:border lg:border-lp-line lg:bg-white lg:text-lp-green lg:opacity-100",
  primaryMobile:
    "bg-lp-button text-white lg:border lg:border-lp-line lg:bg-white lg:text-lp-green lg:hover:border-lp-green",
  confirmSafe:
    "border border-lp-line bg-white text-lp-green lg:border-lp-button lg:bg-lp-button lg:text-white",
  confirmDestructive:
    "bg-lp-button text-white lg:border lg:border-[#c72924] lg:bg-white lg:text-[#c72924] lg:hover:bg-[#fff0ed]",
};

const WIDTH_CLASSES: Record<NonNullable<ActionButtonProps["width"]>, string> = {
  220: "lg:w-[220px]",
  230: "lg:w-[230px]",
  240: "lg:w-[240px]",
  260: "lg:w-[260px]",
  280: "lg:w-[280px]",
  300: "lg:w-[300px]",
  320: "lg:w-[320px]",
  464: "w-full",
};

const HEIGHT_CLASSES: Record<
  NonNullable<ActionButtonProps["mobileHeight"]>,
  string
> = {
  44: "h-[44px] lg:h-[48px]",
  48: "h-[48px]",
};

/** Secondary-looking followers are 44px on the mobile mocks; leads stay 48. */
const DEFAULT_MOBILE_HEIGHT: Record<
  ActionTone,
  NonNullable<ActionButtonProps["mobileHeight"]>
> = {
  primary: 48,
  secondary: 44,
  danger: 44,
  muted: 48,
  progress: 48,
  primaryMobile: 48,
  confirmSafe: 48,
  confirmDestructive: 48,
};

export function ActionButton({
  tone,
  children,
  width = 260,
  mobileHeight,
  to,
  onClick,
  disabled = false,
  className = "",
}: ActionButtonProps) {
  const height = HEIGHT_CLASSES[mobileHeight ?? DEFAULT_MOBILE_HEIGHT[tone]];
  /* W-51E node 938:231 — a disabled pill drops to 45% on mobile; the desktop
     mocks keep it at full strength and rely on the desaturated fill. */
  const base = `flex w-full items-center justify-center gap-[8px] rounded-[14px] px-4 text-center text-[12px] font-semibold disabled:opacity-45 lg:rounded-[12px] lg:text-[14px] lg:disabled:opacity-100 ${height} ${WIDTH_CLASSES[width]} ${TONE_CLASSES[tone]} ${className}`;

  if (to && !disabled) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${disabled ? "cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
}
