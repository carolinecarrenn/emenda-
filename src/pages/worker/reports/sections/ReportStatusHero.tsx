import type { CaregiverReport } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { CAREGIVER_COPY } from "../caregiver.copy";

/* Daily Report Detail status hero (W-56 / W-56A).
   Mobile (W-56 node 973:517 / W-56A node 973:574): #f0f8f3 card, radius 14,
   14/13 padding, a fixed 90px height, and a 13px/18 semibold ink status over
   an 11px/16 muted line. The submitted line carries the day and time only
   ("Submitted · 25 Aug 17:42"), so the record's year is trimmed off.
   Desktop: 96px tall card, 17px green status + 13px line. The fill tracks
   the lifecycle - WD-56 / WD-56B (Submitted) keep the pale #f2f9f5 tint,
   WD-56A / WD-56C / WD-56D (Verified) use the deeper #e8f5ed mint.
   The verified stamp and the submitted date/time are record DATA and stay
   raw. */
export function ReportStatusHero({ report }: { report: CaregiverReport }) {
  const c = useSectionCopy(CAREGIVER_COPY);
  const isVerified = report.status === "verified";

  return (
    <div
      className={`min-h-[90px] rounded-[14px] border border-lp-line bg-lp-tint px-[14px] py-[13px] lg:min-h-[96px] lg:px-[19px] lg:pt-[17px] lg:pb-[26px] ${
        isVerified ? "lg:bg-lp-mint" : "lg:bg-lp-tint"
      }`}
    >
      <p className="text-[13px] leading-[18px] font-semibold text-lp-ink lg:text-[17px] lg:leading-normal lg:text-lp-green">
        {isVerified ? c.detail.verified : c.detail.submitted}
      </p>
      <p className="mt-[6px] text-[11px] leading-[16px] text-lp-muted lg:mt-[5px] lg:text-[13px] lg:leading-normal">
        {isVerified
          ? report.verifiedAt
          : c.detail.submittedLine(
              `${report.date.replace(/\s\d{4}$/, "")} ${report.submittedAt}`,
            )}
      </p>
    </div>
  );
}
