import type { MouseEvent, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/**
 * Shared primitives for the Career & CV record sub-pages (Figma WD-25..WD-28).
 * Exact values from the fetched frames: back link 13px #0b684f · H1 32px
 * #17231f · subtitle 16px #65746d · 520px columns with 40px gutter · inputs
 * 52px r16 #d5e0da (records) / 50px r12 #d1ddd7 (qualifications) · primary
 * #0c664b pill · disabled sage #9dbbad · danger #b42318 / border #e4b8b3 ·
 * selector sheets #f9fbf8 r18 over a rgba(0,0,0,0.28) scrim.
 */

export function CareerSubHeader({
  backLabel,
  title,
  subtitle,
  bold = false,
  compactTitle = false,
  onBackClick,
}: {
  backLabel: string;
  title: string;
  subtitle: string;
  bold?: boolean;
  /** W-28 "Qualifications & Training" — 26px so the H1 stays on one line. */
  compactTitle?: boolean;
  onBackClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <div>
      <Link
        to="/worker/career"
        onClick={onBackClick}
        className="inline-flex items-center gap-[6px] py-[4px] text-[13px] font-semibold text-[#0b684f] hover:text-[#0c664b]"
      >
        <ArrowLeft size={18} strokeWidth={2} />
        {backLabel}
      </Link>
      <h1
        className={`mt-[12px] leading-[1.25] text-[#17231f] lg:text-[32px] lg:leading-[40px] ${
          compactTitle ? "text-[26px]" : "text-[30px]"
        } ${bold ? "font-bold" : "font-semibold"}`}
      >
        {title}
      </h1>
      <p className="mt-[8px] text-[13px] leading-[19px] text-[#65746d] lg:text-[16px] lg:leading-[24px]">
        {subtitle}
      </p>
    </div>
  );
}

/** Full-column dark-green pill (WD-25 "Add experience" 48px · forms 52px). */
export function PrimaryButton({
  label,
  onClick,
  disabled = false,
  tall = false,
  short = false,
}: {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  tall?: boolean;
  /** W-25A empty-state CTA — 42px on both viewports. */
  short?: boolean;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`w-full rounded-[14px] text-[13px] font-semibold text-white ${
        short ? "h-[42px]" : tall ? "h-[52px]" : "h-[48px]"
      } ${
        disabled
          ? "cursor-not-allowed bg-[#9dbbad]"
          : "bg-[#0c664b] hover:bg-[#0b5842]"
      }`}
    >
      {label}
    </button>
  );
}

/** Small white pill on cards (134×34, r14, green 13px label). `compact` is
 *  the WD-28 record-card variant (95×30, 12px label). */
export function PillButton({
  label,
  onClick,
  compact = false,
}: {
  label: string;
  onClick?: () => void;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-[14px] border border-[#d5e0da] bg-white px-4 font-semibold text-[#0b5842] hover:bg-[#f4f8f5] ${
        compact
          ? "h-[30px] w-full text-[12px] lg:w-[95px]"
          : "h-[34px] w-[90px] text-[13px] lg:w-[134px]"
      }`}
    >
      {label}
    </button>
  );
}

/** Full-column white outline pill (WD-28E "Not now" 48px). */
export function OutlineButton({
  label,
  onClick,
  height = 48,
}: {
  label: string;
  onClick?: () => void;
  height?: 46 | 48;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-[14px] border border-[#d1ddd7] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-[#f4f8f5] ${
        height === 46 ? "h-[46px]" : "h-[48px]"
      }`}
    >
      {label}
    </button>
  );
}

/** Red-outline destructive pill (WD-25B "Delete experience" 44px). */
export function DangerButton({
  label,
  onClick,
  small = false,
  tall = false,
  medium = false,
}: {
  label: string;
  onClick?: () => void;
  small?: boolean;
  /** 48px dialog variant (W-25H "Delete"). */
  tall?: boolean;
  /** 46px modal variant (W-25G "Discard changes"). */
  medium?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-[14px] border border-[#e4b8b3] bg-white font-semibold text-[#b42318] hover:bg-[#fdf6f5] ${
        small
          ? "h-[44px] rounded-[12px] text-[12px]"
          : tall
            ? "h-[48px] text-[13px]"
            : medium
              ? "h-[46px] text-[13px]"
              : "h-[44px] text-[13px]"
      }`}
    >
      {label}
    </button>
  );
}

/** Uppercase eyebrow field label + rounded input (+ red validation state). */
export function FieldInput({
  label,
  value,
  onChange,
  placeholder,
  error,
  locked = false,
  compact = false,
}: {
  label: string;
  value: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  error?: string;
  locked?: boolean;
  compact?: boolean;
}) {
  const box = compact
    ? "h-[50px] rounded-[12px] px-[20px]"
    : "h-[48px] rounded-[16px] px-[20px]";
  const border = error
    ? "border-[#b42318]"
    : locked
      ? "border-[#dce5e0]"
      : compact
        ? "border-[#d1ddd7]"
        : "border-[#d5e0da]";
  return (
    /* WD-25/26 forms run on a fixed 100px row pitch (18px label + 10px + 48px
       input = 76px, 24px gutter); a validation message drops into the gutter
       instead of pushing the next row down, so the desktop box height is
       pinned. On mobile the message pushes, exactly as in W-25C. */
    <div className={compact ? undefined : "lg:h-[76px]"}>
      <p
        className={`font-semibold tracking-[0.06em] text-[#65746d] uppercase leading-[18px] ${
          compact ? "text-[10px]" : "text-[11px]"
        }`}
      >
        {label}
      </p>
      {locked ? (
        <div
          className={`mt-[10px] flex w-full items-center border bg-[#f1f5f2] ${box} ${border}`}
        >
          <p className="truncate text-[13px] text-[#17231f]">{value}</p>
        </div>
      ) : (
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
          className={`mt-[10px] w-full border bg-white text-[13px] text-[#17231f] outline-none placeholder:text-[#65746d] focus:border-[#0b684f] ${box} ${border}`}
        />
      )}
      {error && <p className="mt-[6px] text-[11px] text-[#b42318]">{error}</p>}
    </div>
  );
}

/** Inline save/upload failure card ("Try again" + Cancel — never a toast). */
export function SaveFailedCard({
  title,
  body,
  tryAgainLabel,
  cancelLabel,
  onTryAgain,
  onCancel,
}: {
  title: string;
  body: string;
  tryAgainLabel: string;
  cancelLabel: string;
  onTryAgain?: () => void;
  onCancel?: () => void;
}) {
  return (
    <div className="rounded-[14px] border border-[#e4b8b3] bg-white px-[19px] py-[15px]">
      <p className="text-[14px] font-semibold text-[#b42318]">{title}</p>
      <p className="mt-[6px] text-[13px] text-[#65746d]">{body}</p>
      <div className="mt-[14px] flex flex-col gap-[10px] lg:flex-row">
        <button
          type="button"
          onClick={onTryAgain}
          className="h-[38px] rounded-[12px] bg-[#0c664b] px-[22px] text-[12px] font-semibold text-white hover:bg-[#0b5842]"
        >
          {tryAgainLabel}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="h-[38px] rounded-[12px] border border-[#d1ddd7] bg-white px-[22px] text-[12px] font-semibold text-[#0b5842] hover:bg-[#f4f8f5]"
        >
          {cancelLabel}
        </button>
      </div>
    </div>
  );
}

/** Offline banner — grey card with Retry; cached content renders below it. */
export function OfflineBanner({
  title,
  body,
  retryLabel,
  onRetry,
}: {
  title: string;
  body: string;
  retryLabel: string;
  onRetry?: () => void;
}) {
  return (
    <div className="flex flex-row items-center justify-between gap-4 rounded-[14px] border border-[#d2ded8] bg-[#eff4f1] px-[14px] pt-[8px] pb-[11px] lg:px-[20px] lg:py-[6px]">
      <div>
        <p className="text-[14px] font-semibold text-[#17231f]">{title}</p>
        <p className="mt-[2px] text-[13px] text-[#65746d]">{body}</p>
      </div>
      <button
        type="button"
        onClick={onRetry}
        className="h-[36px] w-[124px] shrink-0 rounded-[12px] border border-[#d1ddd7] bg-white text-[12px] font-semibold text-[#0b5842] hover:bg-[#f4f8f5]"
      >
        {retryLabel}
      </button>
    </div>
  );
}

/** Empty state card — heading / body / hint + one CTA.
 *  Mobile (W-25A): 350px #f3f7f5 r12 card, 16px gutters, left-aligned, 42px
 *  CTA. Desktop (WD-25A): the same left-aligned #f3f7f5 card, 520px wide in
 *  the left column, r16, 23px gutters and a full-width 42px CTA. */
export function EmptyStateCard({
  title,
  body,
  hint,
  ctaLabel,
  onCta,
}: {
  title: string;
  body: string;
  hint?: string;
  ctaLabel: string;
  onCta?: () => void;
}) {
  return (
    <div className="rounded-[12px] border border-[#d5e0da] bg-[#f3f7f5] px-[16px] pt-[28px] pb-[12px] lg:max-w-[520px] lg:rounded-[16px] lg:px-[23px] lg:pt-[26px] lg:pb-[11px]">
      <p className="text-[16px] leading-[22px] font-semibold text-[#17231f]">
        {title}
      </p>
      <p className="mt-[12px] text-[13px] leading-[23px] text-[#65746d] lg:leading-[16px]">
        {body}
      </p>
      {hint && (
        <p className="mt-[8px] text-[12px] leading-[18px] text-[#65746d]">
          {hint}
        </p>
      )}
      <div className="mt-[10px] w-full lg:mt-[48px]">
        <PrimaryButton label={ctaLabel} onClick={onCta} short />
      </div>
    </div>
  );
}

/** Inline save-failure notice (W-25E) — 54px #fff2f0 card with a red hairline
 *  border and no buttons of its own; the retry action is the page's own
 *  primary button rendered below it. */
export function InlineErrorCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[12px] border border-[#f0c5bf] bg-[#fff2f0] px-[14px] pt-[10px] pb-[8px]">
      <p className="text-[13px] leading-[18px] font-semibold text-[#b42318]">
        {title}
      </p>
      <p className="mt-[2px] text-[12px] leading-[16px] text-[#b42318]">{body}</p>
    </div>
  );
}

/** In-page confirmation card (delete / remove / unsaved-changes variants). */
export function ConfirmCard({
  title,
  body,
  children,
}: {
  title: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[16px] border border-[#d1ddd7] bg-white px-[16px] lg:px-[23px] py-[19px]">
      <p className="text-[15px] font-semibold text-[#17231f]">{title}</p>
      <p className="mt-[8px] text-[13px] leading-[20px] text-[#65746d]">{body}</p>
      <div className="mt-[18px] flex flex-col gap-[12px]">{children}</div>
    </div>
  );
}

/** Centred confirmation dialog — W-25H geometry: 40% black scrim (the mobile
 *  frames dim the #f7f9f6 page to rgb(148,154,150), i.e. alpha 0.40), white card
 *  vertically centred, edge-to-edge r20 on mobile / 520px r16 on desktop,
 *  20px gutters, 24px top padding, 56px bottom padding. The form stays
 *  visible (dimmed) behind it. */
export function ConfirmDialog({
  title,
  body,
  onScrimClick,
  tinted = false,
  children,
}: {
  title: string;
  body: string;
  onScrimClick: () => void;
  /** WD-28R renders the card on the #f9fbf8 sheet surface. */
  tinted?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <button
        type="button"
        aria-label="Close"
        onClick={onScrimClick}
        className="absolute inset-0 h-full w-full cursor-default bg-[rgba(0,0,0,0.4)]"
      />
      <div
        className={`relative w-full rounded-[20px] px-[20px] pt-[24px] pb-[56px] lg:w-[520px] lg:rounded-[16px] ${
          tinted ? "bg-[#f9fbf8]" : "bg-white"
        }`}
      >
        <p className="text-[20px] leading-[28px] font-semibold text-[#17231f]">
          {title}
        </p>
        <p className="mt-[10px] text-[13px] leading-[20px] text-[#65746d]">
          {body}
        </p>
        <div className="mt-[32px] flex flex-col gap-[12px]">{children}</div>
      </div>
    </div>
  );
}

/** Bottom-anchored confirmation sheet — W-27K geometry: 28% scrim, #f9fbf8
 *  card pinned to the bottom edge with a 20px rounded top, 20px gutters,
 *  18px top / 40px bottom padding. Desktop centres the same card at 520px. */
export function ConfirmSheet({
  title,
  body,
  onScrimClick,
  children,
}: {
  title: string;
  body: string;
  onScrimClick: () => void;
  children: ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close"
        onClick={onScrimClick}
        className="absolute inset-0 h-full w-full cursor-default bg-[rgba(0,0,0,0.28)]"
      />
      <div className="absolute inset-x-0 bottom-0 rounded-t-[20px] bg-[#f9fbf8] px-[20px] pt-[18px] pb-[40px] lg:inset-x-auto lg:top-1/2 lg:bottom-auto lg:left-1/2 lg:w-[520px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-[18px] lg:pb-[32px]">
        <p className="text-[20px] leading-[28px] font-semibold text-[#17231f]">
          {title}
        </p>
        <p className="mt-[10px] text-[13px] leading-[20px] text-[#65746d]">
          {body}
        </p>
        <div className="mt-[19px] flex flex-col gap-[12px]">{children}</div>
      </div>
    </div>
  );
}

/** Selector sheet — WD-27H geometry: 520px #f9fbf8 r18 card over a 28% scrim.
 *  Desktop: centered dialog. Mobile (W-xx): bottom sheet with rounded top. */
export function SheetOverlay({
  title,
  subtitle,
  onClose,
  children,
}: {
  title: string;
  subtitle: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-[rgba(0,0,0,0.28)]"
      />
      <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-[18px] bg-[#f9fbf8] px-[20px] pt-[20px] pb-[24px] lg:inset-x-auto lg:top-1/2 lg:bottom-auto lg:left-1/2 lg:w-[520px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-[18px] lg:px-[27px]">
        <p className="text-[20px] leading-[26px] font-semibold text-[#17231f]">
          {title}
        </p>
        <p className="mt-[8px] text-[13px] leading-[17px] text-[#65746d]">
          {subtitle}
        </p>
        <div className="mt-[16px] flex flex-col gap-[8px] lg:mt-[18px]">
          {children}
        </div>
      </div>
    </div>
  );
}

/** Option row inside a selector sheet (42px, r12, green 12px label). */
export function SheetOption({
  label,
  onClick,
  selected = false,
}: {
  label: string;
  onClick?: () => void;
  selected?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-[42px] w-full shrink-0 rounded-[12px] border text-[12px] font-semibold text-[#0b5842] ${
        selected
          ? "border-[#0c664b] bg-[#eaf4ef]"
          : "border-[#d1ddd7] bg-white hover:bg-[#f4f8f5]"
      }`}
    >
      {label}
    </button>
  );
}

/** Cancel row inside a selector sheet (34px). */
export function SheetCancel({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-[2px] h-[40px] w-full shrink-0 rounded-[12px] border border-[#d1ddd7] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-[#f4f8f5] lg:mt-[4px] lg:h-[34px] lg:text-[12px]"
    >
      {label}
    </button>
  );
}
