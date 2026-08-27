import { useCommonCopy } from "@/i18n/common";

interface ConfirmModalProps {
  title: string;
  body: string;
  primaryLabel: string;
  secondaryLabel: string;
  onPrimary: () => void;
  onSecondary: () => void;
  /** Scrim click — defaults to the secondary action; the unsaved-changes guard
   *  points it at "Keep editing" so dismissing never discards work. */
  onDismiss?: () => void;
  /** WD-61S1/S2/S3 delete confirmations put the destructive action first. */
  danger?: boolean;
  /** W-61AA–AF put the reversible choice ("Keep editing") first as an outline
   *  button and the committing choice underneath as the filled one. */
  primaryOutline?: boolean;
}

/* Confirmation modal chassis.
   Mobile (W-61AA · 1196:281): a 28% black scrim over the dimmed page and a
   centred 350px white card at radius 18, 16px side / 18px vertical padding and
   a 12px gap between title (20px semibold #1a241f), body (13px #596b61) and
   the two full-width 46px radius-14 buttons.
   Desktop keeps the WD-61S1 520x300 card. */
export function ConfirmModal({
  title,
  body,
  primaryLabel,
  secondaryLabel,
  onPrimary,
  onSecondary,
  onDismiss,
  danger = false,
  primaryOutline = false,
}: ConfirmModalProps) {
  const common = useCommonCopy();
  const dismiss = onDismiss ?? onSecondary;

  const filled = danger
    ? "bg-signal text-white hover:bg-[#b23f2f]"
    : "bg-lp-button text-white hover:bg-lp-green";
  const outline =
    "border border-lp-line bg-white text-lp-green hover:border-lp-green";
  const buttonBase =
    "flex h-[46px] w-full items-center justify-center rounded-[14px] text-[13px] font-semibold lg:h-[48px] lg:rounded-[10px]";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-[20px] lg:px-0">
      <button
        type="button"
        aria-label={common.action.close}
        onClick={dismiss}
        className="absolute inset-0 bg-[rgba(0,0,0,0.28)] lg:bg-[#141c1a]/35"
      />
      <div className="relative w-full rounded-[18px] bg-white px-[16px] py-[18px] lg:min-h-[300px] lg:w-[520px] lg:p-[28px]">
        <p className="text-[20px] font-semibold text-lp-ink">{title}</p>
        <p className="mt-[12px] text-[13px] leading-[20px] text-lp-muted lg:mt-[10px]">
          {body}
        </p>
        <div className="mt-[12px] space-y-[12px] lg:mt-[34px] lg:space-y-3">
          <button
            type="button"
            onClick={onPrimary}
            className={`${buttonBase} ${primaryOutline ? outline : filled}`}
          >
            {primaryLabel}
          </button>
          <button
            type="button"
            onClick={onSecondary}
            className={`${buttonBase} ${primaryOutline ? filled : outline}`}
          >
            {secondaryLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
