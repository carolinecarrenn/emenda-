import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { CAREGIVER_COPY } from "../caregiver.copy";

/* "Template card".
   Mobile (W-55H node 978:408): #f0f8f3, border, radius 14, 13/11 padding,
   12px semibold ink title + 10px/14 muted body.
   Desktop (WD-55H): same tint at 15/9/16 padding, 15px title, 12px body. */
export function TemplateBanner() {
  const c = useSectionCopy(CAREGIVER_COPY);

  return (
    <div className="rounded-[14px] border border-lp-line bg-lp-tint px-[13px] py-[11px] lg:px-[15px] lg:pt-[9px] lg:pb-[16px]">
      <p className="text-[12px] font-semibold text-lp-ink lg:text-[15px]">
        {c.form.templateTitle(EMPLOYER.name)}
      </p>
      <p className="mt-[4px] text-[10px] leading-[14px] text-lp-muted lg:mt-[7px] lg:text-[12px] lg:leading-normal">
        {c.form.templateBody}
      </p>
    </div>
  );
}
