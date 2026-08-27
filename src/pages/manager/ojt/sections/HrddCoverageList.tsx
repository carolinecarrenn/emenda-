import { useSectionCopy } from "@/i18n/copy";
import { OJT_COPY } from "../ojt.copy";
import { HRDD_COVERAGE } from "../ojtMock";
import { OjtSectionHeading } from "./OjtSectionHeading";

/* EM-15 "EVIDENCE COVERAGE" (1108:131 · 134 · 137 · 140): four white 40px
   rows, radius 12 on a #ccded6 hairline — a 9px semibold #083d2d label on
   the left and a right-aligned 9px semibold #0c5941 value. */
export function HrddCoverageList() {
  const c = useSectionCopy(OJT_COPY);

  return (
    <section>
      <OjtSectionHeading>{c.hrdd.coverageHeading}</OjtSectionHeading>
      <div className="mt-[9px] space-y-[8px] lg:mt-[11px]">
        {HRDD_COVERAGE.map((row) => (
          <div
            key={row.key}
            className="flex min-h-[40px] items-center justify-between gap-4 rounded-[12px] border border-[#ccded6] bg-white px-[14px] py-[9px] lg:min-h-[46px]"
          >
            <p className="text-[9px] leading-[12px] font-semibold text-[#083d2d] lg:text-[11px] lg:leading-[15px]">
              {c.hrdd.coverage[row.key]}
            </p>
            <p className="shrink-0 text-right text-[9px] leading-[12px] font-semibold text-[#0c5941] lg:text-[11px] lg:leading-[15px]">
              {row.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
