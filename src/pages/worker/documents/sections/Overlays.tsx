import type { ReactNode } from "react";
import { useCommonCopy } from "@/i18n/common";

/** Overlay chassis shared by W-38K/L/M/N, W-39J/K/L/Q, W-39E/F and
 *  W-40H/I/J. Mobile keeps the bottom-sheet frames the 390px mocks use; the
 *  desktop twins (WD-39J 1025:2412, WD-39K/L 1025:2516, WD-39Q 1025:1912,
 *  WD-39E 1025:440, WD-40H 1025:1414) are all a centred 520px card with 20px
 *  padding: heading at 20 (28px tall), helper at 56, and — for the
 *  confirmation modals — a fixed 300px box whose 48px action pills sit at
 *  176 / 234, i.e. a 46px gap under the 70px body. */

export function Scrim({
  onClose,
  children,
}: {
  onClose: () => void;
  children: ReactNode;
}) {
  const common = useCommonCopy();
  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label={common.action.close}
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-[rgba(20,31,26,0.3)]"
      />
      {children}
    </div>
  );
}

/** Bottom sheet on mobile, centred 520px card on desktop. */
export function Sheet({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-x-0 bottom-0 rounded-t-[18px] border border-[#d7e2dc] bg-white p-[20px] lg:inset-x-auto lg:top-1/2 lg:bottom-auto lg:left-1/2 lg:w-[520px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-[18px] ${className}`}
    >
      {children}
    </div>
  );
}

export function SheetHeading({
  title,
  helper,
}: {
  title: string;
  helper?: string;
}) {
  return (
    <>
      <p className="text-[18px] leading-[28px] font-semibold text-[#17231f]">
        {title}
      </p>
      {helper && (
        <p className="mt-[8px] text-[12px] leading-[1.6] text-[#65746d]">
          {helper}
        </p>
      )}
    </>
  );
}

export interface OverlayOption {
  key: string;
  label: string;
  icon?: ReactNode;
}

export function OverlaySheet({
  title,
  helper,
  options,
  selectedKey,
  onSelect,
  onClose,
}: {
  title: string;
  helper?: string;
  options: OverlayOption[];
  selectedKey?: string | null;
  onSelect: (key: string) => void;
  onClose: () => void;
}) {
  return (
    <Scrim onClose={onClose}>
      <Sheet>
        <SheetHeading title={title} helper={helper} />
        <div className="mt-[16px] space-y-[8px]">
          {options.map((option) => (
            <button
              key={option.key}
              type="button"
              onClick={() => onSelect(option.key)}
              /* W-38N rows are left-aligned; the plain type list stays centred. */
              className={`flex w-full items-center gap-[10px] rounded-[12px] border bg-white text-[12px] font-semibold text-brand hover:border-brand ${
                option.icon
                  ? "h-[44px] justify-start px-[13px] text-left"
                  : "h-[42px] justify-center"
              } ${
                option.key === selectedKey
                  ? "border-[#0c5941]"
                  : "border-[#d7e2dc]"
              }`}
            >
              {option.icon}
              {option.label}
            </button>
          ))}
        </div>
      </Sheet>
    </Scrim>
  );
}

/** W-39M file preview kept as an overlay on mobile; the desktop twin
 *  (WD-39M 1025:1507) renders it as its own screen instead. */
export function FilePreviewModal({
  title,
  body,
  fileName,
  fileMeta,
  closeLabel,
  onClose,
}: {
  title: string;
  body: string;
  fileName: string;
  fileMeta: string;
  closeLabel: string;
  onClose: () => void;
}) {
  return (
    <Scrim onClose={onClose}>
      <div className="absolute top-1/2 left-1/2 w-[calc(100%-40px)] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-[18px] bg-white p-[20px]">
        <p className="text-[18px] leading-[28px] font-semibold text-[#17231f]">
          {title}
        </p>
        <p className="mt-[8px] text-[12px] text-[#65746d]">{body}</p>
        <div className="mt-[16px] flex min-h-[180px] flex-col items-center justify-center rounded-[16px] border border-[#d7e2dc] bg-[#f2f5f3] px-4 text-center">
          <p className="text-[14px] font-semibold text-[#17231f]">{fileName}</p>
          <p className="mt-[8px] text-[11px] text-[#65746d]">{fileMeta}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-[16px] flex h-[48px] w-full items-center justify-center rounded-[14px] border border-[#0c5941] bg-white text-[12px] font-semibold text-[#0c5941] hover:bg-[#eef5f1]"
        >
          {closeLabel}
        </button>
      </div>
    </Scrim>
  );
}

export function ConfirmModal({
  title,
  body,
  primaryLabel,
  onPrimary,
  safeLabel,
  onSafe,
  dangerLabel,
  dangerTone,
  onDanger,
  onClose,
}: {
  title: string;
  body: string;
  /** Solid dark-green pill (e.g. "Open settings"). */
  primaryLabel?: string;
  onPrimary?: () => void;
  /** White pill with a green outline and green label — the safe action,
   *  listed first (WD-39E 1025:443, WD-40J 1025:2319). */
  safeLabel?: string;
  onSafe?: () => void;
  /** Outline-red pill — destructive styling is always outline-red. */
  dangerLabel?: string;
  /** "brand" renders the destructive slot as a green outline pill instead. */
  dangerTone?: string;
  onDanger?: () => void | Promise<void>;
  onClose: () => void;
}) {
  return (
    <Scrim onClose={onClose}>
      <div className="absolute top-1/2 left-1/2 w-[calc(100%-40px)] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-[18px] bg-white p-[20px] lg:min-h-[300px]">
        <p className="text-[18px] leading-[28px] font-semibold text-[#17231f] lg:mt-[2px]">
          {title}
        </p>
        <p className="mt-[10px] text-[12px] leading-[1.7] text-[#65746d] lg:h-[70px]">
          {body}
        </p>
        <div className="mt-[24px] space-y-[10px] lg:mt-[46px]">
          {primaryLabel && (
            <button
              type="button"
              onClick={onPrimary}
              className="flex h-[48px] w-full items-center justify-center rounded-[14px] bg-brand text-[12px] font-semibold text-white hover:bg-brand-deep"
            >
              {primaryLabel}
            </button>
          )}
          {safeLabel && (
            <button
              type="button"
              onClick={onSafe}
              className="flex h-[48px] w-full items-center justify-center rounded-[14px] border border-[#0c5941] bg-white text-[12px] font-semibold text-[#0c5941] hover:bg-[#eef5f1]"
            >
              {safeLabel}
            </button>
          )}
          {dangerLabel && (
            <button
              type="button"
              onClick={onDanger}
              className={`flex h-[48px] w-full items-center justify-center rounded-[14px] border text-[12px] font-semibold ${
                dangerTone === "danger-solid"
                  ? /* W-40J 803:566 fills the remove pill on mobile; the
                       desktop twin keeps the outline. */
                    "border-transparent bg-[#a5382b] text-white hover:bg-[#8e2f24] lg:border-[#d6382e] lg:bg-transparent lg:text-[#c7261f] lg:hover:bg-[#fdecea]"
                  : dangerTone === "solid"
                  ? /* The 390px frames fill this pill; the desktop twins
                       (WD-39E 1025:445, WD-39F 1025:541, WD-40J 1025:2321)
                       all draw destructive actions as outline red. */
                    "border-transparent bg-brand text-white hover:bg-brand-deep lg:border-[#d6382e] lg:bg-transparent lg:text-[#c7261f] lg:hover:bg-[#fdecea]"
                  : dangerTone === "brand"
                  ? "border-[#0c5941] bg-white text-[#0c5941] hover:bg-[#eef5f1]"
                  : "border-[#d6382e] text-[#c7261f] hover:bg-[#fdecea]"
              }`}
            >
              {dangerLabel}
            </button>
          )}
        </div>
      </div>
    </Scrim>
  );
}
