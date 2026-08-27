import { useSectionCopy } from "@/i18n/copy";
import { OJT_COPY } from "../ojt.copy";

/* EM-15 "INCLUDED / EXCLUDED" (1108:146): mint #e8f5f0 on a #ccded6
   hairline, radius 12, 66px tall — caps #0c5941 label over the two 9px
   #667a73 scope lines that fix the HRDD evidence boundary. */
export function HrddScopeCard() {
  const c = useSectionCopy(OJT_COPY);

  return (
    <div className="min-h-[66px] rounded-[12px] border border-[#ccded6] bg-[#e8f5f0] px-[14px] pt-[10px] pb-[2px] lg:pt-[12px] lg:pb-[12px]">
      <p className="text-[9px] leading-[11px] font-semibold text-[#0c5941] uppercase lg:text-[11px] lg:leading-[14px]">
        {c.hrdd.scopeHeading}
      </p>
      <p className="mt-[10px] text-[9px] leading-[11px] text-[#667a73] lg:mt-[9px] lg:text-[11px] lg:leading-[14px]">
        {c.hrdd.included}
      </p>
      <p className="text-[9px] leading-[11px] text-[#667a73] lg:text-[11px] lg:leading-[14px]">
        {c.hrdd.excluded}
      </p>
    </div>
  );
}
