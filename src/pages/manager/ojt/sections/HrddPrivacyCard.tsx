import { useSectionCopy } from "@/i18n/copy";
import { OJT_COPY } from "../ojt.copy";

/* EM-15A "PRIVACY BOUNDARY" (1108:186): mint #e8f5f0 on a #ccded6 hairline,
   radius 12, 74px tall — caps #0c5941 label over the 9px/11px #667a73 line
   naming every private surface excluded by design. */
export function HrddPrivacyCard() {
  const c = useSectionCopy(OJT_COPY);

  return (
    <div className="min-h-[74px] rounded-[12px] border border-[#ccded6] bg-[#e8f5f0] px-[14px] py-[12px]">
      <p className="text-[9px] leading-[11px] font-semibold text-[#0c5941] uppercase lg:text-[11px] lg:leading-[14px]">
        {c.evidence.privacyHeading}
      </p>
      <p className="mt-[8px] text-[9px] leading-[11px] text-[#667a73] lg:text-[11px] lg:leading-[14px]">
        {c.evidence.privacyBody}
      </p>
    </div>
  );
}
