import { useSectionCopy } from "@/i18n/copy";
import { fillOjtCopy, OJT_COPY } from "../ojt.copy";
import { HRDD_OPEN_GAP } from "../ojtMock";

/* EM-15 open-gap card (1108:143): #fff5c7 on a #ccded6 hairline, radius 12,
   76px tall — 9px semibold #083d2d caps heading over the 9px/11px #667a73 body
   that frames the gap as evidence only, never an adverse decision. */
export function HrddOpenGapCard() {
  const c = useSectionCopy(OJT_COPY);

  return (
    <div className="min-h-[76px] rounded-[12px] border border-[#ccded6] bg-[#fff5c7] px-[14px] py-[12px]">
      <p className="text-[9px] leading-[11px] font-semibold text-[#083d2d] uppercase lg:text-[11px] lg:leading-[14px]">
        {c.hrdd.gapHeading}
      </p>
      <p className="mt-[10px] text-[9px] leading-[11px] text-[#667a73] lg:mt-[12px] lg:text-[11px] lg:leading-[14px]">
        {fillOjtCopy(c.hrdd.gapBody, {
          count: HRDD_OPEN_GAP.unlinkedQuestions,
        })}
      </p>
    </div>
  );
}
