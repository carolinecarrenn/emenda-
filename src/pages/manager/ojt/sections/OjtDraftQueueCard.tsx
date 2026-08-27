import { useSectionCopy } from "@/i18n/copy";
import { fillOjtCopy, OJT_COPY } from "../ojt.copy";
import { OJT_HUB_METRICS } from "../ojtMock";

/* EM-14 (761:2552) "DRAFT REVIEW QUEUE": mint #e8f5f0 card, 58px, caps
   #0c5941 label over the no-automatic-publication line. */
export function OjtDraftQueueCard() {
  const c = useSectionCopy(OJT_COPY);

  return (
    <div className="min-h-[58px] rounded-[12px] border border-[#ccded6] bg-[#e8f5f0] px-[14px] py-[11px]">
      <p className="text-[9px] leading-[12px] font-semibold text-[#0c5941] uppercase lg:text-[11px] lg:leading-[15px]">
        {c.hub.queueHeading}
      </p>
      <p className="mt-[7px] text-[9px] leading-[12px] text-[#667a73] lg:text-[11px] lg:leading-[16px]">
        {fillOjtCopy(c.hub.queueBody, { count: OJT_HUB_METRICS.draftReview })}
      </p>
    </div>
  );
}
