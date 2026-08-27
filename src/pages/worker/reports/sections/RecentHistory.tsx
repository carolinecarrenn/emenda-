import { Link } from "react-router-dom";
import { useReports } from "@/data/reportsContext";
import type { CaregiverReport } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { CAREGIVER_COPY } from "../caregiver.copy";
import { REPORTS_STATES_COPY } from "../reports.copy";
import { HubSectionLabel } from "./HubSectionLabel";

/* WD-54I "RECENT WORK HISTORY": 11px caps label, 84px white rows
   (radius 14), 15px semibold title, 13px muted line, 130x30 status pill —
   Submitted = tint fill, Verified = mint fill, both #054d3d text.
   Mobile W-54I (978:364) draws the same record as a 76px card with a 14px
   title and a 12px meta line on one line each, and no status pill: the
   record state already reads out of the meta line there.
   W-54D (972:429) reuses the row with a "Cached · " meta prefix and a
   "CACHED WORK HISTORY" label; W-54E (972:506) with "RETAINED WORK HISTORY".
   The date and submitted time are record DATA and stay raw. */
function statusPillClasses(report: CaregiverReport): string {
  return report.status === "verified" ? "bg-lp-mint" : "bg-lp-tint";
}

export function RecentHistory({
  label,
  cached = false,
}: {
  /** Overrides the default "Recent work history" micro-label. */
  label?: string;
  /** W-54D offline hub: each record reads as a cached copy. */
  cached?: boolean;
}) {
  const { reports } = useReports();
  const c = useSectionCopy(CAREGIVER_COPY);
  const states = useSectionCopy(REPORTS_STATES_COPY);

  return (
    <section>
      <HubSectionLabel>{label ?? c.hub.recentWorkHistory}</HubSectionLabel>
      <div className="mt-[12px] space-y-[12px] lg:mt-[17px] lg:space-y-[18px]">
        {reports.map((report) => {
          const meta =
            report.status === "verified"
              ? c.hub.verifiedBySupervisor
              : c.hub.submittedAt(report.submittedAt);
          return (
            <Link
              key={report.id}
              to={`/worker/reports/${report.id}`}
              className="flex min-h-[76px] items-start justify-between gap-4 rounded-[14px] border border-lp-line bg-white pt-[13px] pr-[14px] pb-[15px] pl-[14px] hover:border-lp-green lg:min-h-[84px] lg:py-[15px] lg:pr-[41px] lg:pl-[19px]"
            >
              <div className="min-w-0">
                <p className="truncate text-[14px] leading-[20px] font-semibold text-lp-ink lg:text-[15px] lg:leading-[1.5]">
                  {c.hub.historyTitle(report.date.replace(" 2026", ""))}
                </p>
                <p className="mt-[8px] truncate text-[12px] leading-[20px] text-lp-muted lg:mt-[6px] lg:text-[13px] lg:leading-[1.5]">
                  {cached ? states.offline.cachedMeta(meta) : meta}
                </p>
              </div>
              <span
                className={`hidden h-[30px] w-[130px] shrink-0 items-center justify-center rounded-[15px] border border-lp-line text-[12px] font-semibold text-lp-green lg:mt-[10px] lg:flex ${statusPillClasses(report)}`}
              >
                {report.status === "verified"
                  ? c.hub.statusVerified
                  : c.hub.statusSubmitted}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
