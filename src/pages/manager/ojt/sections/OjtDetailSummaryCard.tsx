import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { fillOjtCopy, OJT_COPY } from "../ojt.copy";
import type { OjtModule } from "../ojtMock";

/* EM-14A (761:2620) mint summary card: 82px, module name 11px semibold
   #083d2d over two 9px #667a73 meta lines. */
export function OjtDetailSummaryCard({ module }: { module: OjtModule }) {
  const c = useSectionCopy(OJT_COPY);
  const { language } = useLanguage();

  const updatedLine =
    module.status === "published"
      ? c.detail.summaryLine2Published
      : c.detail.summaryLine2;

  return (
    <div className="min-h-[82px] rounded-[12px] border border-[#ccded6] bg-[#e8f5f0] px-[14px] py-[12px]">
      <p className="text-[11px] leading-[14px] font-semibold text-[#083d2d] lg:text-[14px] lg:leading-[18px]">
        {module.title}
      </p>
      <p className="mt-[7px] text-[9px] leading-[12px] text-[#667a73] lg:mt-[8px] lg:text-[11px] lg:leading-[15px]">
        {fillOjtCopy(c.detail.summaryLine1, {
          workers: module.assignedWorkers,
          pending: module.pendingWorkers,
          languages: module.languages,
        })}
      </p>
      <p className="mt-[6px] text-[9px] leading-[12px] text-[#667a73] lg:mt-[7px] lg:text-[11px] lg:leading-[15px]">
        {fillOjtCopy(updatedLine, {
          date: formatDisplayDate(module.updatedDate, language),
        })}
      </p>
    </div>
  );
}
