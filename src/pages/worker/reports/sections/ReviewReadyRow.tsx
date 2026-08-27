import { useSectionCopy } from "@/i18n/copy";
import { REPORTS_STATES_COPY } from "../reports.copy";

/* "Ready to submit | EMPLOYER VISIBILITY" (W-55B / 55K / 55M / 55Q).
   Mobile (W-55B node 978:283) shows only the "Ready to submit" tint card —
   the employer-visibility note it pairs with on desktop is the full-width
   ReviewVisibilityCard, which mobile renders directly above the submit pair.
   The short desktop-only cell is kept and hidden below lg, never removed. */
export function ReviewReadyRow() {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:gap-x-7">
      <div className="rounded-[14px] border border-lp-line bg-lp-tint px-[13px] py-[11px] lg:min-h-[72px] lg:rounded-[12px] lg:py-[9px]">
        <p className="text-[13px] font-semibold text-lp-ink lg:text-lp-green">
          {c.review.readyTitle}
        </p>
        <p className="mt-[6px] text-[11px] leading-[16px] text-lp-muted lg:mt-[7px] lg:leading-normal">
          {c.review.readyBody}
        </p>
      </div>
      <div className="hidden min-h-[72px] rounded-[12px] border border-lp-line bg-white px-[13px] py-[9px] lg:block">
        <p className="text-[10px] font-semibold text-lp-green uppercase">
          {c.generalForm.visibilityLabel}
        </p>
        <p className="mt-[8px] text-[11px] text-lp-muted">
          {c.review.visibilityBody}
        </p>
      </div>
    </div>
  );
}
