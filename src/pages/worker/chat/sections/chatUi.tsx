import { Link } from "react-router-dom";
import type { ReactNode } from "react";

/* Shared primitives for section 13 · Chat (Figma 1182:6077 desktop / 1034:130
   mobile). Palette straight from the mocks: mint #e8f5ed badges & buttons,
   #f2f9f5 tint panels, #d1ded6 hairlines, amber state banner #fff5d6 /
   #ed911a / #804d0d, red send-failure card #fdedec / #c72924. */

/** Circular initials avatar (WD-58 list 42px · thread header 44px).
 *  `hubRow` is the conversation-hub variant: a 40px mint disc on mobile
 *  (W-57A 1034:242) and bare 46px initials on desktop, where WD-57A
 *  (1182:6175) draws the initials with no disc behind them. */
export function ChatAvatar({
  initials,
  size = 46,
  text = 13,
  hubRow = false,
  thread = false,
}: {
  initials: string;
  size?: number;
  text?: number;
  hubRow?: boolean;
  /** Thread header disc: 40px mint on mobile (W-58 1051:449), 44px desktop. */
  thread?: boolean;
}) {
  if (hubRow) {
    return (
      <span className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[#f0f8f3] text-[11px] leading-[14px] font-semibold text-[#0c5941] lg:size-[46px] lg:rounded-none lg:bg-transparent lg:text-[13px]">
        {initials}
      </span>
    );
  }
  if (thread) {
    return (
      <span className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[#f0f8f3] text-[11px] leading-[14px] font-semibold text-[#08563f] lg:size-[44px] lg:border lg:border-lp-line lg:bg-lp-tint lg:text-[12px] lg:text-lp-green">
        {initials}
      </span>
    );
  }
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full border border-lp-line bg-lp-tint font-semibold text-lp-green"
      style={{ width: size, height: size, fontSize: text }}
    >
      {initials}
    </span>
  );
}

/** Conversation badge. "Needs reply" is amber on mobile (W-57A) and mint on
 *  desktop (WD-57A); "1 unread" is mint on both. */
export function ChatBadge({
  tone,
  size = "hub",
  children,
}: {
  tone: "needs-reply" | "unread";
  size?: "hub" | "list";
  children: ReactNode;
}) {
  const toneClasses =
    tone === "needs-reply"
      ? "border-[#ed911a] bg-[#fff5d6] text-[#804d0d] lg:border-lp-line lg:bg-lp-mint lg:text-lp-green"
      : "border-lp-line bg-lp-mint text-lp-green";
  /* Hub badge: 62px wide on mobile (W-57A 1034:248), 130px on desktop
     (WD-57A 1182:6179). */
  const sizeClasses =
    size === "hub"
      ? "h-[28px] min-w-[62px] rounded-[14px] px-[10px] text-[11px] lg:min-w-[130px]"
      : "h-[22px] min-w-[70px] rounded-[11px] px-[8px] text-[10px]";
  return (
    <span
      className={`inline-flex items-center justify-center border font-semibold ${toneClasses} ${sizeClasses}`}
    >
      {children}
    </span>
  );
}

/** Amber state banner (W-57E 1034:494 · W-57F 1037:462 · W-58C 1051:576).
 *  Mobile: #fef6da card, radius 14, #d9e1dc hairline, 12/16 semibold #141f1a
 *  lead over an 11/15 #596b61 explanation. `dense` is the in-thread size
 *  (px 12 / py 10, 11px lead, 10px body). Desktop keeps the WD-57D single row. */
export function ChatStateBanner({
  title,
  body,
  detail,
  dense = false,
}: {
  title: string;
  body?: string;
  /** WD-57F (1226:2584) adds a third line and stacks the desktop banner. */
  detail?: string;
  dense?: boolean;
}) {
  const pad = dense ? "gap-[4px] px-[12px] py-[10px]" : "gap-[5px] px-[14px] py-[12px]";
  const lead = dense ? "text-[11px] leading-[15px]" : "text-[12px] leading-[16px]";
  const note = dense ? "text-[10px] leading-[14px]" : "text-[11px] leading-[15px]";
  const stacked = detail !== undefined;
  return (
    <div
      className={`flex flex-col rounded-[14px] border border-[#d9e1dc] bg-[#fef6da] lg:border-[#ed911a] lg:bg-[#fff5d6] lg:px-[17px] ${
        stacked
          ? "lg:min-h-[96px] lg:justify-center lg:gap-[4px] lg:py-[8px]"
          : "lg:min-h-[62px] lg:flex-row lg:items-center lg:gap-[16px] lg:py-0"
      } ${pad}`}
    >
      <p
        className={`font-semibold text-[#141f1a] lg:leading-normal ${
          stacked
            ? "lg:text-[14px] lg:text-[#0a4738]"
            : "lg:text-[13px] lg:font-normal lg:text-[#804d0d]"
        } ${lead}`}
      >
        {title}
      </p>
      {body !== undefined && (
        <p className={`text-[#596b61] lg:text-[12px] lg:leading-normal lg:text-lp-muted ${note}`}>
          {body}
        </p>
      )}
      {detail !== undefined && (
        <p className={`text-[#596b61] lg:text-[11px] lg:leading-normal lg:text-lp-muted ${note}`}>
          {detail}
        </p>
      )}
    </div>
  );
}

/** Mint "Original messages are always preserved" note (W-57A 1034:237 ·
 *  WD-57A 1182:6170): mobile 350x82, radius 14, px 14 / pt 12 / pb 19,
 *  12/16 semibold lead over an 11/15 body. */
export function TranslationNote({
  title,
  body,
  className = "",
}: {
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[14px] border border-lp-line bg-lp-tint px-[14px] pt-[12px] pb-[19px] lg:px-[19px] lg:pt-[9px] lg:pb-[16px] ${className}`}
    >
      <p className="text-[12px] leading-[16px] font-semibold text-lp-green lg:text-[15px] lg:leading-[24px]">
        {title}
      </p>
      <p className="mt-[5px] text-[11px] leading-[15px] text-lp-muted lg:text-[13px] lg:leading-[20px]">
        {body}
      </p>
    </div>
  );
}

/** Solid green pill action (Connect employer · Message manager · Retry send). */
export function ChatPrimaryButton({
  onClick,
  className = "",
  children,
}: {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center rounded-[10px] border border-[#086e57] bg-[#086e57] text-[13px] font-semibold text-white hover:bg-[#054d3d] ${className}`}
    >
      {children}
    </button>
  );
}

/** White outlined pill action (Stop recording · Edit original · Remove). */
export function ChatGhostButton({
  onClick,
  className = "",
  children,
}: {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center rounded-[10px] border border-lp-line bg-white text-[13px] font-semibold text-lp-green hover:bg-lp-mint ${className}`}
    >
      {children}
    </button>
  );
}

/** Full-width mobile action row (W-57 1037:429 · W-57C 1034:368/1034:370):
 *  350x46, radius 12, 13/16 semibold label. `tone` picks the solid green
 *  primary or the white outlined secondary; `muted` is the offline-disabled
 *  treatment from W-57F. */
export function ChatBlockAction({
  to,
  onClick,
  tone = "primary",
  muted = false,
  className = "",
  children,
}: {
  to?: string;
  onClick?: () => void;
  tone?: "primary" | "secondary";
  muted?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const toneClasses =
    tone === "primary"
      ? "border-[#0c5941] bg-[#0c5941] text-white hover:bg-[#054d3d]"
      : "border-[#d9e1dc] bg-white text-[#0c5941] hover:bg-lp-mint";
  const shell = `flex h-[46px] w-full items-center justify-center rounded-[12px] border text-[13px] leading-[16px] font-semibold ${toneClasses} ${className}`;

  if (muted) {
    return (
      <span
        aria-disabled="true"
        className={`${shell} pointer-events-none opacity-[0.58]`}
      >
        {children}
      </span>
    );
  }
  if (to !== undefined) {
    return (
      <Link to={to} className={shell}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={shell}>
      {children}
    </button>
  );
}
