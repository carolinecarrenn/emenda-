import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export type CardTone = "white" | "mint" | "amber" | "grey";

const TONE_CLASSES: Record<CardTone, string> = {
  white: "bg-white border-[#d5e0db]",
  mint: "bg-[#eaf5f0] border-[#c9ded4]",
  amber: "bg-[#fff5dd] border-[#e9c86b]",
  grey: "bg-[#eef1ef] border-[#dfe6e1]",
};

/** W-32/W-33 mobile cards are 104 tall (94 for the amber attention card);
 *  desktop keeps the taller 116/104 band from the WD- frames. */
const TONE_HEIGHT: Record<CardTone, string> = {
  white: "min-h-[104px]",
  mint: "min-h-[104px]",
  amber: "min-h-[94px]",
  grey: "min-h-[104px]",
};

const TONE_TITLE: Record<CardTone, string> = {
  white: "text-[15px] text-[#131f1a]",
  mint: "text-[15px] text-[#131f1a]",
  amber: "text-[14px] text-[#8a5a00]",
  grey: "text-[15px] text-[#131f1a]",
};

export interface CardAction {
  label: string;
  to?: string;
  onClick?: () => void;
}

export type BlockActionTone = "solid" | "outline" | "muted";

const BLOCK_TONE: Record<BlockActionTone, string> = {
  solid: "bg-[#08664d] text-white hover:bg-[#0b6b57]",
  outline: "border border-[#d6e0da] bg-white text-[#08664d] hover:border-[#08664d]",
  muted: "bg-[#8fbcab] text-white",
};

/** Full-width action parked inside a W-32/33/34/35 state card — the
 *  318×30..44 button in W-33A `626:927`, W-33I `626:1093`,
 *  W-34C `628:326` and W-35A `628:618`. Desktop keeps it inline. */
export function BlockAction({
  label,
  to,
  onClick,
  tone = "solid",
  heightClass = "h-[44px]",
  disabled = false,
  desktopClass = "",
}: CardAction & {
  tone?: BlockActionTone;
  heightClass?: string;
  disabled?: boolean;
  /** Some WD- frames render the same action as a quiet grey line. */
  desktopClass?: string;
}) {
  const className = `mt-[12px] flex w-full items-center justify-center rounded-[11px] text-[13px] font-semibold ${heightClass} ${BLOCK_TONE[tone]} ${desktopClass}`;
  if (to && !disabled) {
    return (
      <Link to={to} className={className}>
        {label}
      </Link>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${className} disabled:cursor-not-allowed`}
    >
      {label}
    </button>
  );
}

/** Quiet pill action inside a W-32/W-33 card: 104×34 on mobile (Figma
 *  626:495), 180×36 on the desktop WD- frames. */
export function SecondaryPill({ label, to, onClick }: CardAction) {
  const className =
    "flex h-[34px] w-[104px] max-w-full items-center justify-center rounded-[13px] border border-[#d6e0da] bg-white text-[13px] font-semibold text-[#08664d] hover:border-[#08664d] lg:h-[36px] lg:w-[180px] lg:rounded-[12px]";
  if (to) {
    return (
      <Link to={to} className={className}>
        {label}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={className}>
      {label}
    </button>
  );
}

/** W-32/33 summary card. Mobile (Figma 626:492/497/502): 16px radius,
 *  15px title at 15/13px insets, 12px grey body clipped left of the pill,
 *  pill parked bottom-right. Desktop keeps the WD- stacked layout. */
export function HubCard({
  tone = "white",
  title,
  lines,
  linkAction,
  blockAction,
  action,
  minHClass,
  titleClassName,
  className = "",
  children,
}: {
  tone?: CardTone;
  title: string;
  lines: string[];
  /** Quiet inline text action (e.g. "Review update"). */
  linkAction?: { label: string; to: string };
  /** Full-width action inside the card (W-33A/W-33I/W-34C/W-35A). */
  blockAction?: CardAction & {
    desktopClass?: string;
    tone?: BlockActionTone;
    heightClass?: string;
    disabled?: boolean;
  };
  action?: CardAction;
  /** Mobile card height when the frame differs from the tone default. */
  minHClass?: string;
  /** Mobile title size/colour when the frame differs from the tone default. */
  titleClassName?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`relative rounded-[16px] border p-[15px] lg:rounded-[14px] lg:pb-[11px] ${TONE_CLASSES[tone]} ${minHClass ?? TONE_HEIGHT[tone]} ${className}`}
    >
      <p
        className={`leading-[20px] font-semibold lg:text-[15px] lg:leading-[22px] lg:text-[#131f1a] ${titleClassName ?? TONE_TITLE[tone]}`}
      >
        {title}
      </p>
      <div
        className={`mt-[8px] space-y-[2px] lg:mt-[6px] lg:pr-0 ${action ? "pr-[137px]" : ""}`}
      >
        {lines.map((line) => (
          <p
            key={line}
            className="text-[12px] leading-[18px] text-[#5e7066] lg:text-[13px] lg:leading-[22px]"
          >
            {line}
          </p>
        ))}
        {linkAction && (
          <p className="text-[12px] leading-[18px] lg:text-[13px] lg:leading-[22px]">
            <Link
              to={linkAction.to}
              className="text-[#5e7066] hover:text-[#08664d]"
            >
              {linkAction.label}
            </Link>
          </p>
        )}
      </div>
      {blockAction && <BlockAction {...blockAction} />}
      {action && (
        <div className="absolute right-[17px] bottom-[13px] lg:static lg:mt-[2px] lg:flex lg:justify-end">
          <SecondaryPill {...action} />
        </div>
      )}
      {children}
    </div>
  );
}
