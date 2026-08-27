import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "../analytics.copy";
import type { WorkLogRecord } from "../analytics.mock";

/* EM-R2-03 (1107:217–219) "DESCRIPTION": 9px caps #0c5941 label over a white
   350×70 card, radius 12, border #ccded6 — 10px #667a73 record text set on
   the mock's tight 12px leading, 12px under the card top with 32px of slack
   below the last line. Desktop keeps the normal 1.5 leading. */
export function RecordDescriptionCard({ record }: { record: WorkLogRecord }) {
  const c = useSectionCopy(ANALYTICS_COPY);

  return (
    <section>
      <h2 className="text-[9px] font-semibold text-brand uppercase lg:text-[11px]">
        {c.recordDetail.descriptionTitle}
      </h2>
      <div className="mt-[8px] rounded-[12px] border border-[#ccded6] bg-white px-[14px] pt-[12px] pb-[32px] lg:py-[12px]">
        <p className="text-[10px] leading-[12px] text-[#667a73] lg:text-[12px] lg:leading-normal">
          {record.description}
        </p>
      </div>
    </section>
  );
}
