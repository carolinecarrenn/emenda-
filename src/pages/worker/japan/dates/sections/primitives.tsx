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
      className="flex h-[48px] w-full items-center justify-center rounded-[13px] bg-[#08664d] lg:h-[52px] lg:rounded-[12px] text-[13px] font-semibold text-white hover:bg-lp-button disabled:cursor-not-allowed disabled:bg-[#8fbcab] lg:disabled:bg-[#08664d]"
    >
      {label}
    </button>
  );
}

export function SecondaryButton({
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
      className="flex h-[48px] w-full items-center justify-center rounded-[13px] border border-[#d6e0da] bg-white lg:h-[52px] lg:rounded-[12px] text-[13px] font-semibold text-[#08664d] hover:bg-lp-tint"
    >
      {label}
    </button>
  );
}

/** Quiet pill on a W-36 reminder card: 80×34 on mobile (628:1071),
 *  180×36 on the WD-36 desktop frames. */
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
      className="flex h-[34px] w-[80px] items-center justify-center rounded-[13px] border border-[#d6e0da] bg-white text-[13px] font-semibold text-[#08664d] hover:bg-lp-tint lg:h-[36px] lg:w-[180px] lg:rounded-[12px]"
    >
      {label}
    </button>
  );
}

/** Scrim + sheet: centered 520px card on desktop, bottom sheet on mobile. */
export function SheetShell({
  onScrimClick,
  bottomClass = "lg:pb-[23px]",
  children,
}: {
  onScrimClick?: () => void;
  /** WD-36K leaves a 70px foot under Done; WD-36L fills its card. */
  bottomClass?: string;
  children: ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center lg:items-center">
      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        onClick={onScrimClick}
        className="absolute inset-0 cursor-default bg-[#131f1a]/18 lg:bg-black/28"
      />
      <div
        className={`relative w-full rounded-t-[18px] border border-[#d6e0da] bg-white p-[20px] pb-[30px] lg:w-[520px] lg:p-[24px] lg:rounded-[18px] lg:pt-[21px] ${bottomClass}`}
      >
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
  secondaryTone = "danger",
}: {
  title: string;
  body: ReactNode;
  primaryLabel: string;
  secondaryLabel: string;
  onPrimary: () => void;
  onSecondary: () => void;
  /** WD-36I draws Delete reminder as a quiet grey/green action. */
  secondaryTone?: "danger" | "quiet";
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-[20px]">
      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        onClick={onPrimary}
        className="absolute inset-0 cursor-default bg-[#131f1a]/18 lg:bg-black/28"
      />
      <div className="relative w-full max-w-[350px] rounded-[16px] border border-[#d6e0da] bg-white p-[16px] lg:max-w-[520px] lg:rounded-[18px] lg:p-[23px] lg:pt-[21px] lg:pb-[67px]">
        <p className="text-[17px] leading-[24px] font-semibold text-[#131f1a] lg:text-[22px] lg:leading-[30px]">
          {title}
        </p>
        <div className="mt-[10px] text-[13px] leading-[21px] text-[#5e7066] lg:mt-[8px] lg:min-h-[44px] lg:leading-[22px]">
          {body}
        </div>
        <button
          type="button"
          onClick={onPrimary}
          className="mt-[20px] flex h-[46px] w-full items-center justify-center rounded-[12px] bg-[#08664d] text-[13px] font-semibold text-white hover:bg-lp-button lg:mt-[14px] lg:h-[42px] lg:rounded-[11px]"
        >
          {primaryLabel}
        </button>
        <button
          type="button"
          onClick={onSecondary}
          className={`mt-[10px] flex h-[42px] w-full items-center justify-center rounded-[12px] border bg-white text-[13px] font-semibold lg:h-[42px] lg:rounded-[11px] ${
            secondaryTone === "quiet"
              ? "border-[#c7261f] text-[#c7261f] hover:bg-[#fdecea] lg:border-[#d6e0da] lg:text-[#08664d] lg:hover:bg-lp-tint"
              : "border-[#c7261f] text-[#c7261f] hover:bg-[#fdecea]"
          }`}
        >
          {secondaryLabel}
        </button>
      </div>
    </div>
  );
}
