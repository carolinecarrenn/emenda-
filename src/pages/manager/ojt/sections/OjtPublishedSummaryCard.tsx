import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { fillOjtCopy, OJT_COPY } from "../ojt.copy";
import type { OjtModule } from "../ojtMock";

/* EM-14C mint "Published" chip (1108:90): 88x28, radius 14, #e8f5f0 on a
   #ccded6 hairline, 9px semibold #083d2d centred label. */
export function OjtPublishedChip() {
  const c = useSectionCopy(OJT_COPY);

  return (
    <span className="flex h-[28px] w-[88px] items-center justify-center rounded-[14px] border border-[#ccded6] bg-[#e8f5f0] text-[9px] font-semibold text-[#083d2d] lg:text-[11px]">
      {c.published.chip}
    </span>
  );
}

/* EM-14C publication summary (1108:92): mint card, radius 12, 98px tall —
   11px semibold module name over the version line and the publisher line. */
export function OjtPublishedSummaryCard({ module }: { module: OjtModule }) {
  const c = useSectionCopy(OJT_COPY);

  return (
    <div className="min-h-[98px] rounded-[12px] border border-[#ccded6] bg-[#e8f5f0] px-[14px] py-[12px]">
      <p className="text-[11px] leading-[14px] font-semibold text-[#083d2d] lg:text-[14px] lg:leading-[18px]">
        {module.title}
      </p>
      <p className="mt-[8px] text-[9px] leading-[12px] text-[#667a73] lg:mt-[10px] lg:text-[11px] lg:leading-[15px]">
        {fillOjtCopy(c.published.summaryLine1, {
          version: module.draftVersion,
          languages: module.languages,
          workers: module.publication.assignedNames.length,
        })}
      </p>
      <p className="mt-[8px] text-[9px] leading-[12px] text-[#667a73] lg:text-[11px] lg:leading-[15px]">
        {fillOjtCopy(c.published.summaryLine2, {
          manager: EMPLOYER.manager,
          role: EMPLOYER.managerRole,
          time: module.publication.time,
        })}
      </p>
    </div>
  );
}

/* EM-14C "PUBLICATION SUMMARY" (1108:106): mint card, radius 12, 78px tall
   — caps #0c5941 label over the assigned-worker line and the source line
   that restates the private-data exclusion. */
export function OjtPublicationDetailsCard({ module }: { module: OjtModule }) {
  const c = useSectionCopy(OJT_COPY);

  return (
    <div className="min-h-[78px] rounded-[12px] border border-[#ccded6] bg-[#e8f5f0] px-[14px] py-[10px]">
      <p className="text-[9px] leading-[11px] font-semibold text-[#0c5941] uppercase lg:text-[11px] lg:leading-[14px]">
        {c.published.summaryHeading}
      </p>
      <p className="mt-[8px] text-[9px] leading-[12px] text-[#667a73] lg:text-[11px] lg:leading-[16px]">
        {fillOjtCopy(c.published.assigned, {
          names: module.publication.assignedNames.join(" · "),
        })}
      </p>
      <p className="text-[9px] leading-[12px] text-[#667a73] lg:mt-[4px] lg:text-[11px] lg:leading-[16px]">
        {fillOjtCopy(c.published.source, {
          conversations: module.source.conversations,
          reports: module.source.dailyReports,
        })}
      </p>
    </div>
  );
}
