import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "../analytics.copy";
import type { AnalyticsSnapshot } from "../analytics.mock";

/* EM-13 (1107:121–123) "7-DAY OPERATIONAL TREND": white 350×66 card,
   radius 12 — 9px caps label #667a73 over an 11px semibold summary line. */
export function OperationalTrendCard({
  snapshot,
}: {
  snapshot: AnalyticsSnapshot;
}) {
  const c = useSectionCopy(ANALYTICS_COPY);

  const body = c.analytics.trendBody
    .replace("{reportRate}", snapshot.trendReportRate)
    .replace("{workerLed}", snapshot.trendWorkerLed)
    .replace("{response}", c.analytics.trendResponse[snapshot.trendResponse]);

  return (
    <div className="min-h-[66px] rounded-[12px] border border-[#ccded6] bg-white px-[14px] py-[10px]">
      <p className="text-[9px] font-semibold text-[#667a73] uppercase lg:text-[10px]">
        {c.analytics.trendTitle}
      </p>
      <p className="mt-[12px] text-[11px] font-semibold text-[#083d2d] lg:text-[13px]">
        {body}
      </p>
    </div>
  );
}
