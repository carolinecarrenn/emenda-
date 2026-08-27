import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { fillOjtCopy, OJT_COPY } from "../ojt.copy";
import type { OjtModule } from "../ojtMock";

/* EM-14B status card (1108:67): mint #e8f5f0 on a #ccded6 hairline, radius
   12, 76px tall — a 10px semibold #083d2d draft line over two 9px #667a73
   meta lines (reviewer identity, then assignment + translation readiness). */
export function OjtReviewStatusCard({ module }: { module: OjtModule }) {
  const c = useSectionCopy(OJT_COPY);

  return (
    <div className="min-h-[76px] rounded-[12px] border border-[#ccded6] bg-[#e8f5f0] px-[14px] py-[12px]">
      <p className="text-[10px] leading-[13px] font-semibold text-[#083d2d] lg:text-[13px] lg:leading-[17px]">
        {fillOjtCopy(c.review.statusLine1, { version: module.draftVersion })}
      </p>
      <p className="mt-[8px] text-[9px] leading-[12px] text-[#667a73] lg:text-[11px] lg:leading-[15px]">
        {fillOjtCopy(c.review.statusLine2, {
          manager: EMPLOYER.manager,
          role: EMPLOYER.managerRole,
        })}
      </p>
      <p className="mt-[6px] text-[9px] leading-[12px] text-[#667a73] lg:mt-[7px] lg:text-[11px] lg:leading-[15px]">
        {fillOjtCopy(c.review.statusLine3, {
          workers: module.publication.assignedNames.length,
          languages: module.languages,
        })}
      </p>
    </div>
  );
}
