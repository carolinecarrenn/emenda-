import { useSectionCopy } from "@/i18n/copy";
import { REPORTS_STATES_COPY } from "../reports.copy";

/* "EMPLOYER VISIBILITY" closing note (W-55B / 55K / 55M).
   Mobile (W-55B node 978:283): #f0f8f3 card, radius 14, 13/11 padding, caps
   12px ink label + 11px/16 muted sentence naming the employer; it sits
   directly above the submit pair.
   Desktop (WD-55B): full-width mint card, radius 12, 92px tall, caps 10px
   green label over the 12px/20 sentence, below the submit pair. */
export function ReviewVisibilityCard({ body }: { body: string }) {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  return (
    <div className="rounded-[14px] border border-lp-line bg-lp-tint px-[13px] py-[11px] lg:min-h-[92px] lg:rounded-[12px] lg:px-[15px] lg:pt-[14px] lg:pb-[11px]">
      <p className="text-[12px] font-semibold text-lp-ink uppercase lg:text-[10px] lg:text-lp-green">
        {c.generalForm.visibilityLabel}
      </p>
      <p className="mt-[4px] text-[11px] leading-[16px] text-lp-muted lg:mt-[20px] lg:text-[12px] lg:leading-[20px]">
        {body}
      </p>
    </div>
  );
}
