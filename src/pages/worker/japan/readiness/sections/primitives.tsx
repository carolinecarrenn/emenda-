import type { MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export { SystemBanner } from "../../sections/SystemBanner";

/* Section 06 shared visual primitives (Figma WD-32..WD-36 pattern language):
   green back link + 32px H1 + 15px grey subtitle, #08664d pill buttons,
   grey #f1f5f2 system banners, centered 520px sheets over a 28% scrim
   (bottom sheets on mobile per the W-xx mocks). */

export function JapanSubPageHeader({
  backLabel,
  title,
  subtitle,
  onBackClick,
}: {
  backLabel: string;
  title: string;
  subtitle: string;
  onBackClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <div>
      <div className="flex items-center lg:h-[28px]">
        <Link
          to="/worker/japan"
          onClick={onBackClick}
          className="inline-flex items-center gap-[8px] text-[13px] leading-[20px] font-semibold text-[#08664d] hover:text-lp-button"
        >
          <ArrowLeft className="size-[18px]" strokeWidth={2} />
          {backLabel}
        </Link>
      </div>
      <h1 className="mt-[14px] text-[30px] leading-[42px] font-bold text-[#131f1a] lg:mt-[12px] lg:text-[32px]">
        {title}
      </h1>
      <p className="mt-[4px] min-h-[44px] text-[13px] leading-[22px] text-[#5e7066] lg:mt-[6px] lg:text-[15px]">
        {subtitle}
      </p>
    </div>
  );
}

export function PrimaryButton({
  label,
  onClick,
  disabled = false,
}: {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex h-[48px] w-full items-center justify-center rounded-[13px] bg-[#08664d] lg:h-[52px] lg:rounded-[12px] text-[13px] font-semibold text-white hover:bg-lp-button disabled:cursor-not-allowed disabled:bg-[#8fbcab]"
    >
      {label}
    </button>
  );
}

export function SecondaryButton({
  label,
  onClick,
  className = "",
}: {
  label: string;
  onClick?: () => void;
  /** WD-34G..M draw the same two task actions solid green on desktop. */
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[48px] w-full items-center justify-center rounded-[13px] border border-[#d6e0da] bg-white lg:h-[52px] lg:rounded-[12px] text-[13px] font-semibold text-[#08664d] hover:bg-lp-tint ${className}`}
    >
      {label}
    </button>
  );
}

/** 180×36 white pill with green bold label (View / Edit / Retry / Manage). */
export function PillButton({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[36px] w-[180px] items-center justify-center rounded-[12px] border border-[#d6e0da] bg-white text-[13px] font-semibold text-[#08664d] hover:bg-lp-tint"
    >
      {label}
    </button>
  );
}

/** Scrim + sheet: centered 520px card on desktop, bottom sheet on mobile. */
export function SheetShell({
  onScrimClick,
  children,
}: {
  onScrimClick?: () => void;
  children: ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center lg:items-center">
      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        onClick={onScrimClick}
        className="absolute inset-0 cursor-default bg-[#131f1a]/18"
      />
      <div className="relative w-full rounded-t-[18px] border border-[#d6e0da] bg-white p-[20px] pb-[30px] lg:w-[520px] lg:p-[24px] lg:rounded-[18px]">
        {children}
      </div>
    </div>
  );
}

/** Unsaved-changes / delete confirmation. Mobile (W-35G `628:738`,
 *  W-36I) is a centred 350×230 card inset 20px from the screen edges — a
 *  17px title, 13px body, a solid 318×46 primary and a red-outlined 318×42
 *  destructive action. Desktop keeps the WD- 520px dialog. */
export function ConfirmSheet({
  title,
  body,
  primaryLabel,
  secondaryLabel,
  onPrimary,
  onSecondary,
}: {
  title: string;
  body: ReactNode;
  primaryLabel: string;
  secondaryLabel: string;
  onPrimary: () => void;
  onSecondary: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-[20px]">
      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        onClick={onPrimary}
        className="absolute inset-0 cursor-default bg-[#131f1a]/18"
      />
      <div className="relative w-full max-w-[350px] rounded-[16px] border border-[#d6e0da] bg-white p-[16px] lg:max-w-[520px] lg:rounded-[18px] lg:p-[24px]">
        <p className="text-[17px] leading-[24px] font-semibold text-[#131f1a] lg:text-[22px] lg:leading-[30px]">
          {title}
        </p>
        <div className="mt-[10px] text-[13px] leading-[21px] text-[#5e7066] lg:mt-[8px] lg:leading-[22px]">
          {body}
        </div>
        <button
          type="button"
          onClick={onPrimary}
          className="mt-[20px] flex h-[46px] w-full items-center justify-center rounded-[12px] bg-[#08664d] text-[13px] font-semibold text-white hover:bg-lp-button lg:mt-[16px] lg:h-[42px] lg:rounded-[11px]"
        >
          {primaryLabel}
        </button>
        <button
          type="button"
          onClick={onSecondary}
          className="mt-[10px] flex h-[42px] w-full items-center justify-center rounded-[12px] border border-[#c7261f] bg-white text-[13px] font-semibold text-[#c7261f] hover:bg-[#fdecea] lg:h-[42px] lg:rounded-[11px]"
        >
          {secondaryLabel}
        </button>
      </div>
    </div>
  );
}
