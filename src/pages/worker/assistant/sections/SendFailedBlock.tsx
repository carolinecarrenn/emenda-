import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { ASSISTANT_COPY } from "../assistant.copy";

/* Send-failed block.
   Mobile (W-59G · 1084:1262): title + description under the undelivered
   bubble with a Retry pill.
   Desktop (WD-59G · node 1204:334): a 690x150 #fff2f2 card, radius 14, border
   #f09e99, inset 18 — the undelivered draft echoed as a 17px semibold #0f1f1a
   line in a 28px box at y=14, the #d12924 reassurance in a 40px box at y=48,
   then the 150x38 filled #056b54 Retry button at y=96.
   The user's text is never destroyed. */
export function SendFailedBlock({
  prompt,
  onRetry,
}: {
  /** The message that never left the composer — echoed above Retry. */
  prompt: string;
  onRetry: () => void;
}) {
  const c = useSectionCopy(ASSISTANT_COPY);
  const common = useCommonCopy();

  return (
    <div>
      <div className="lg:hidden">
        <p className="text-[15px] font-semibold text-[#c72924]">
          {c.sendFailedTitle}
        </p>
        <p className="mt-[6px] text-[13px] leading-[20px] text-lp-muted">
          {c.sendFailedDesc}
        </p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-[12px] flex h-[38px] items-center justify-center rounded-[19px] border border-lp-line bg-white px-[22px] text-[13px] font-semibold text-lp-green hover:border-lp-green"
        >
          {common.action.retry}
        </button>
      </div>

      <div className="hidden w-full max-w-[690px] rounded-[14px] border border-[#f09e99] bg-[#fff2f2] px-[17px] pt-[13px] pb-[15px] lg:block">
        <p className="text-[17px] leading-[28px] font-semibold text-lp-ink">
          {prompt}
        </p>
        <p className="mt-[6px] flex h-[40px] items-center text-[14px] text-[#d12924]">
          {c.sendFailedDesc}
        </p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-[8px] h-[38px] w-[150px] rounded-[10px] bg-lp-button text-[14px] font-semibold text-white hover:bg-lp-green"
        >
          {common.action.retry}
        </button>
      </div>
    </div>
  );
}
