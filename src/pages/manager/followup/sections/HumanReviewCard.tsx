import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";

/* EM-09 "Human review only" boundary card (1030:160): mint #e8f5f0, radius
   14, no hairline, 82px tall — 11px #094033 title over a 10px #6e8a82 body.
   Mobile only; MD-09 carries the same guardrail inside the selected rail. */
export function HumanReviewCard() {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <div className="min-h-[82px] rounded-[14px] bg-[#e8f5f0] px-[14px] py-[14px] lg:hidden">
      <p className="text-[11px] font-semibold text-[#094033]">
        {c.center.humanReviewTitle}
      </p>
      <p className="mt-[8px] text-[10px] leading-[12px] text-[#6e8a82]">
        {c.center.humanReviewMobile}
      </p>
    </div>
  );
}
