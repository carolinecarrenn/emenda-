import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "../analytics.copy";
import type { WorkLogRecord } from "../analytics.mock";

/* EM-R2-03 (1107:220–222) "PROFESSIONAL EVIDENCE": 9px caps #0c5941 label over
   a white 350×96 card, radius 12, border #ccded6 — one 10px #667a73
   "HH:MM · event" line per preserved evidence entry, stacked on the mock's
   tight 12px leading (four entries reach exactly 96px) with 36px of slack
   under the last one. Desktop keeps the normal 1.5 leading. */
export function RecordEvidenceCard({ record }: { record: WorkLogRecord }) {
  const c = useSectionCopy(ANALYTICS_COPY);

  return (
    <section>
      <h2 className="text-[9px] font-semibold text-brand uppercase lg:text-[11px]">
        {c.recordDetail.evidenceTitle}
      </h2>
      <div className="mt-[8px] rounded-[12px] border border-[#ccded6] bg-white px-[14px] pt-[10px] pb-[36px] lg:space-y-[3px] lg:py-[12px]">
        {record.evidence.map((entry) => (
          <p
            key={`${entry.time}-${entry.event}`}
            className="text-[10px] leading-[12px] text-[#667a73] lg:text-[12px] lg:leading-normal"
          >
            {entry.time} · {c.recordDetail.evidenceEvents[entry.event]}
          </p>
        ))}
      </div>
    </section>
  );
}
