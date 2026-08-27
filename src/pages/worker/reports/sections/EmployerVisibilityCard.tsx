import { useSectionCopy } from "@/i18n/copy";
import { CAREGIVER_COPY } from "../caregiver.copy";

/* "Employer visibility".
   Mobile (W-55 node 978:128): #f0f8f3 card, radius 14, 13/11 padding, caps
   12px ink label + 10px/14 muted body.
   Desktop (WD-55H): radius 12 strip, caps 10px #054d3d label, 12px body. */
export function EmployerVisibilityCard() {
  const c = useSectionCopy(CAREGIVER_COPY);

  return (
    <div className="rounded-[14px] border border-lp-line bg-lp-tint px-[13px] py-[11px] lg:rounded-[12px] lg:px-[15px] lg:pt-[8px] lg:pb-[15px]">
      <p className="text-[12px] font-semibold text-lp-ink uppercase lg:text-[10px] lg:text-lp-green">
        {c.form.employerVisibility}
      </p>
      <p className="mt-[4px] text-[10px] leading-[14px] text-lp-muted lg:mt-[10px] lg:text-[12px] lg:leading-normal">
        {c.form.employerVisibilityBody}
      </p>
    </div>
  );
}

/* WD-55I review variant: white card, shorter copy. */
export function EmployerVisibilityReviewCard() {
  const c = useSectionCopy(CAREGIVER_COPY);

  return (
    <div className="rounded-[14px] border border-lp-line bg-lp-tint px-[13px] py-[11px] lg:min-h-[72px] lg:rounded-[12px] lg:bg-white lg:pt-[9px] lg:pb-[19px]">
      <p className="text-[12px] font-semibold text-lp-ink uppercase lg:text-[10px] lg:text-lp-green">
        {c.form.employerVisibility}
      </p>
      <p className="mt-[4px] text-[11px] leading-[16px] text-lp-muted lg:mt-[10px]">
        {c.review.employerVisibilityBody}
      </p>
    </div>
  );
}
