import { useSectionCopy } from "@/i18n/copy";
import { fillOjtCopy, OJT_COPY } from "../ojt.copy";
import type { OjtModule } from "../ojtMock";

/* EM-14A (761:2620) mint "SOURCE RECORDS" card: 52px, caps #0c5941 label
   over the permitted-record breakdown. */
export function OjtSourceRecordsCard({ module }: { module: OjtModule }) {
  const c = useSectionCopy(OJT_COPY);

  return (
    <div className="min-h-[52px] rounded-[12px] border border-[#ccded6] bg-[#e8f5f0] px-[14px] py-[10px]">
      <p className="text-[9px] leading-[11px] font-semibold text-[#0c5941] uppercase lg:text-[11px] lg:leading-[14px]">
        {c.detail.sourceHeading}
      </p>
      <p className="mt-[8px] text-[9px] leading-[12px] text-[#667a73] lg:text-[11px] lg:leading-[15px]">
        {fillOjtCopy(c.detail.sourceBody, {
          records: module.source.records,
          conversations: module.source.conversations,
          reports: module.source.dailyReports,
        })}
      </p>
    </div>
  );
}
