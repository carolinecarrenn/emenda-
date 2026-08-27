import { Link } from "react-router-dom";
import { useReports } from "@/data/reportsContext";
import { TODAY, WORKER } from "@/data/caregiverReport";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { MANAGER_COPY } from "../../manager.copy";
import type { ReportsFilter } from "./reportsFilter";

/* EM-11 "DAILY REPORTS" rows: 56px, radius 10 — latest submitted row on
   #e8f5f0, missing row on #ffe8e0 with red "Missing", others white. */
export function ReportsList({
  filter,
  search,
}: {
  filter: ReportsFilter;
  search: string;
}) {
  const { reports } = useReports();
  const { language } = useLanguage();
  const common = useCommonCopy();
  const c = useSectionCopy(MANAGER_COPY);
  const query = search.trim().toLowerCase();

  const matchesSearch = (text: string) =>
    query === "" || text.toLowerCase().includes(query);

  const visibleReports = reports.filter((report) => {
    if (!matchesSearch(`${report.workerName} caregiver daily report`))
      return false;
    if (filter === "Missing") return false;
    if (filter === "Today") return report.date === TODAY;
    if (filter === "Needs follow-up") return report.reportFlag !== "Normal";
    return true;
  });

  const showMissing =
    (filter === "Today" || filter === "Missing") &&
    matchesSearch("Andi Pratama");

  const todayReport = reports.find((report) => report.date === TODAY);
  const showPendingToday =
    filter === "Today" && !todayReport && matchesSearch(WORKER.name);

  return (
    <section>
      <h2 className="text-[10px] font-semibold text-brand-deep uppercase lg:text-[11px]">
        {c.reports.dailyReports}
      </h2>
      <div className="mt-[4px] space-y-[10px] lg:mt-[10px]">
        {showPendingToday && (
          <div className="flex min-h-[56px] items-center justify-between gap-4 rounded-[10px] border border-[#c9ded4] bg-white px-[14px] py-[9px]">
            <div>
              <p className="text-[12px] font-semibold text-brand-deep lg:text-[13px]">
                {WORKER.name}
              </p>
              <p className="mt-[2px] text-[9px] text-[#6b8f80] lg:text-[11px]">
                {c.reports.pendingCaption}
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-[3px] text-right">
              <span className="text-[9px] font-semibold text-brand-deep lg:text-[10px]">
                {common.status.pending}
              </span>
              <span className="text-[9px] font-semibold text-brand-deep lg:text-[10px]">
                {common.status.review}
              </span>
            </div>
          </div>
        )}
        {visibleReports.map((report, index) => (
          <Link
            key={report.id}
            to={`/manager/reports/${report.id}`}
            className={`flex min-h-[56px] items-center justify-between gap-4 rounded-[10px] border border-[#c9ded4] px-[14px] py-[9px] hover:border-brand ${
              index === 0 && report.date === TODAY ? "bg-[#e8f5f0]" : "bg-white"
            }`}
          >
            <div>
              <p className="text-[12px] font-semibold text-brand-deep lg:text-[13px]">
                {report.workerName}
              </p>
              <p className="mt-[2px] text-[9px] text-[#6b8f80] lg:text-[11px]">
                {report.submittedAt} · {c.reports.rowCaption} ·{" "}
                {formatDisplayDate(report.date.replace(" 2026", ""), language)}
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-[3px] text-right">
              <span className="text-[9px] font-semibold text-brand-deep lg:text-[10px]">
                {report.status === "verified"
                  ? common.status.verified
                  : common.status.submitted}
              </span>
              <span className="text-[9px] font-semibold text-brand-deep lg:text-[10px]">
                {common.status.open}
              </span>
            </div>
          </Link>
        ))}
        {showMissing && (
          <div className="flex min-h-[56px] items-center justify-between gap-4 rounded-[10px] border border-[#c9ded4] bg-[#ffe8e0] px-[14px] py-[9px]">
            <div>
              <p className="text-[12px] font-semibold text-brand-deep lg:text-[13px]">
                Andi Pratama
              </p>
              <p className="mt-[2px] text-[9px] text-[#6b8f80] lg:text-[11px]">
                {c.reports.missingCaption}
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-[3px] text-right">
              <span className="text-[9px] font-semibold text-[#bf2e1f] lg:text-[10px]">
                {common.status.missing}
              </span>
              <span className="text-[9px] font-semibold text-brand-deep lg:text-[10px]">
                {common.status.review}
              </span>
            </div>
          </div>
        )}
        {visibleReports.length === 0 && !showMissing && !showPendingToday && (
          <div className="rounded-[10px] border border-[#c9ded4] bg-white px-[14px] py-6 text-center text-[11px] text-[#6b8f80]">
            {c.reports.noMatch}
          </div>
        )}
      </div>
    </section>
  );
}
