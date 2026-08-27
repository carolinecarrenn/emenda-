import { useCommonCopy } from "@/i18n/common";
import { useProfileCopy } from "../profile.copy";

/** WD-20D / W-20D offline banner between the header and the form:
 *  gray-tinted card with a white pill Retry button. */
export function OfflineBanner({ onRetry }: { onRetry: () => void }) {
  const c = useProfileCopy();
  const common = useCommonCopy();
  return (
    <div className="rounded-[16px] border border-line bg-[#f0f4f2] px-4 pt-[14px] pb-0 lg:pb-4">
      <p className="text-[13px] leading-[18px] font-semibold text-ink">
        {c.offlineTitle}
      </p>
      {/* W-20D wraps the body inside a 190px column and sits the Retry pill
          flush with the card's bottom edge. */}
      <p className="mt-[7px] w-[190px] text-[11px] leading-[14px] text-ink-muted lg:w-auto lg:leading-[18px]">
        {c.offlineBody}
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-[7px] flex h-[32px] w-[96px] items-center justify-center rounded-[14px] border border-line bg-white text-[14px] font-semibold text-brand-deep hover:bg-brand-soft lg:w-full lg:max-w-[305px] lg:text-[13px]"
      >
        {common.action.retry}
      </button>
    </div>
  );
}

/** WD-20C / W-20C compact save-error card shown in the save-button slot:
 *  "Couldn’t save your changes. / Your edits are still here. Try saving
 *  again." — the draft stays intact. */
export function SaveErrorBanner() {
  const c = useProfileCopy();
  return (
    <div className="h-[58px] rounded-[12px] border border-[#edbdb2] bg-[#fff6f4] px-4 pt-[13px]">
      <p className="text-[12px] leading-4 font-semibold text-[#b81f17]">
        {c.saveFailedTitle}
      </p>
      <p className="mt-[7px] text-[11px] leading-4 text-[#733d38]">
        {c.saveFailedBody}
      </p>
    </div>
  );
}
