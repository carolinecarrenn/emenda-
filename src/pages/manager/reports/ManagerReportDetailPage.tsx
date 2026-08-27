import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";
import { useReports } from "@/data/reportsContext";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_COPY } from "../manager.copy";
import { WorkerIdentityCard } from "./sections/WorkerIdentityCard";
import { ReportContentView } from "./sections/ReportContentView";
import { WorkerTimelineCard } from "./sections/WorkerTimelineCard";

/** Manager Daily Report Detail (Figma EM-11A, node 761:1975 — desktop
 *  derived from the mobile IA inside the MD-03 shell). */
export function ManagerReportDetailPage() {
  const { reportId } = useParams();
  const { reports, verifyReport } = useReports();
  const common = useCommonCopy();
  const c = useSectionCopy(MANAGER_COPY);
  const report = reports.find((r) => r.id === reportId);

  if (!report) {
    return (
      <div className="max-w-[720px]">
        <Link
          to="/manager/reports"
          className="text-[11px] font-semibold text-brand hover:text-brand-deep"
        >
          {common.managerNav.reports}
        </Link>
        <div className="mt-4 rounded-[10px] border border-[#c9ded4] bg-white p-8 text-center">
          <p className="text-[13px] font-semibold text-brand-deep">
            {c.detail.notFound}
          </p>
        </div>
      </div>
    );
  }

  const handleAcknowledge = () => {
    verifyReport(report.id);
    toast.success(c.detail.toastTitle, {
      description: `${report.workerName} · ${report.date} · ${c.detail.toastDesc}`,
    });
  };

  return (
    <div className="max-w-[720px]">
      <Link
        to="/manager/reports"
        className="text-[11px] font-semibold text-brand hover:text-brand-deep"
      >
        {common.managerNav.reports}
      </Link>
      <h1 className="mt-[8px] text-[20px] font-bold text-[#094033] lg:text-[26px]">
        {c.detail.title}
      </h1>
      <p className="mt-[6px] text-[11px] text-[#6e8a82]">
        {c.detail.subtitle}
      </p>

      <div className="mt-[18px] space-y-[16px]">
        <WorkerIdentityCard report={report} />
        <ReportContentView report={report} />
        <WorkerTimelineCard report={report} />
        <div className="rounded-[10px] border border-[#c9ded4] bg-[#e8f5f0] px-[14px] py-[10px]">
          <p className="text-[11px] font-semibold text-brand-deep">
            {c.detail.employerAccess}
          </p>
          <p className="mt-[4px] text-[9px] text-[#6b8f80] lg:text-[11px]">
            {c.detail.employerAccessBody}
          </p>
        </div>
        <div className="flex flex-wrap gap-[10px]">
          <button
            type="button"
            className="flex h-[44px] items-center justify-center rounded-[10px] border border-[#c9ded4] bg-white px-5 text-[11px] font-semibold text-brand-deep hover:border-brand"
          >
            {c.detail.viewWorker}
          </button>
          <button
            type="button"
            className="flex h-[44px] items-center justify-center rounded-[10px] border border-[#c9ded4] bg-white px-5 text-[11px] font-semibold text-brand-deep hover:border-brand"
          >
            {c.detail.workerTimelineBtn}
          </button>
          {report.status === "submitted" ? (
            <button
              type="button"
              onClick={handleAcknowledge}
              className="flex h-[44px] items-center justify-center rounded-[10px] bg-[#076e57] px-5 text-[11px] font-semibold text-white hover:bg-brand-deep"
            >
              {c.detail.acknowledge}
            </button>
          ) : (
            <div className="flex h-[44px] items-center justify-center rounded-[10px] bg-[#e8f5f0] px-5 text-[11px] font-semibold text-brand-deep">
              {c.detail.verifiedAt} · {report.verifiedAt}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
