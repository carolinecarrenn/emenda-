import { Link } from "react-router-dom";
import { useReports } from "@/data/reportsContext";
import { useSectionCopy } from "@/i18n/copy";
import { CAREGIVER_COPY } from "../caregiver.copy";

/* WD-54I/54F/54G "Today card": #f2f9f5, border #d1ded6, radius 16,
   17px semibold title, 13px body, 220x48 #056b54 button on the right.
   After submission the mock keeps the same card with the title swapped
   and the button rendered as a non-interactive block. */
export function TodayPanel() {
  const { todayReport } = useReports();
  const c = useSectionCopy(CAREGIVER_COPY);

  const title = !todayReport
    ? c.hub.todayNotSubmitted
    : todayReport.status === "verified"
      ? c.hub.todayVerified
      : c.hub.todaySubmitted;

  return (
    <div className="flex flex-col gap-4 rounded-[16px] border border-lp-line bg-lp-tint p-[21px] lg:h-[132px] lg:flex-row lg:items-start lg:justify-between lg:pt-[19px] lg:pr-[31px]">
      <div>
        <p className="text-[17px] font-semibold text-lp-ink">{title}</p>
        <p className="mt-[17px] text-[13px] text-lp-muted">{c.hub.todayBody}</p>
      </div>
      {todayReport ? (
        <div className="flex h-[48px] w-full items-center justify-center rounded-[12px] bg-lp-button text-[14px] font-semibold text-white opacity-100 lg:mt-[20px] lg:w-[220px]">
          {c.hub.newDailyReport}
        </div>
      ) : (
        <Link
          to="/worker/reports/new"
          className="flex h-[48px] w-full shrink-0 items-center justify-center rounded-[12px] bg-lp-button text-[14px] font-semibold text-white hover:bg-lp-green lg:mt-[20px] lg:w-[220px]"
        >
          {c.hub.newDailyReport}
        </Link>
      )}
    </div>
  );
}
