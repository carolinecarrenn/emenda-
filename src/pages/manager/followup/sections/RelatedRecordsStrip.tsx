import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";

/* EM-09A "RELATED RECORDS" strip (1030:174): mint #e8f5f0, radius 12, no
   hairline, 58px — 9px caps #6e8a82 label over the 10px #094033 record list
   "Daily Report history · Communication · Work Log". */
export function RelatedRecordsStrip() {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <div className="rounded-[12px] bg-[#e8f5f0] px-[14px] py-[12px]">
      <p className="text-[9px] font-semibold text-[#6e8a82] uppercase">
        {c.review.relatedTitle}
      </p>
      <p className="mt-[7px] text-[10px] text-[#094033] lg:text-[12px]">
        {c.review.relatedRecords}
      </p>
    </div>
  );
}
