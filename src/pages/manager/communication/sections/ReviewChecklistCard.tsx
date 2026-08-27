import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY } from "../communication.copy";
import { CommunicationCheckList } from "./CommunicationCheckList";

/* EM-08A "Send check" card (994:2870–2872): a 350x106 pale-yellow #fff7d6
   card, radius 14, #d6e3de hairline — a 13px/17 #094033 title over three ✓
   rows (Recipient + language confirmed / Original preserved + translation
   reviewed / Privacy boundary checked) and, as a fourth line of the same
   10px/14 #6e8a82 run, "Manager remains responsible for final wording."
   MD-08A (1225:251–256) restates it as a full-width 1060x126 #f1f6f3
   radius-12 strip headed "REVIEW CHECKLIST" with the four checks two-up. */
export function ReviewChecklistCard() {
  const c = useSectionCopy(COMMUNICATION_COPY);

  return (
    <div>
      {/* EM-08A · mobile */}
      <div className="min-h-[106px] rounded-[14px] border border-[#d6e3de] bg-[#fff7d6] px-[14px] pt-[13px] pb-[8px] lg:hidden">
        <p className="text-[13px] leading-[17px] font-semibold text-[#094033]">
          {c.review.sendCheck}
        </p>
        <div className="mt-[12px]">
          <CommunicationCheckList items={c.review.sendCheckLines} />
        </div>
        <p className="text-[10px] leading-[14px] text-[#6e8a82]">
          {c.review.responsibility}
        </p>
      </div>

      {/* MD-08A · desktop */}
      <div className="hidden lg:block lg:min-h-[126px] lg:rounded-[12px] lg:bg-[#f1f6f3] lg:px-[24px] lg:py-[22px]">
        <p className="text-[11px] font-semibold text-brand uppercase">
          {c.review.checklistLabel}
        </p>
        <div className="mt-[13px]">
          <CommunicationCheckList
            items={c.review.checklistLines}
            columns={2}
            strongOnDesktop
          />
        </div>
      </div>
    </div>
  );
}
