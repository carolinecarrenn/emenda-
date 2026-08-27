import { WORKER, type CaregiverReport } from "@/data/caregiverReport";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { localizeTerm } from "@/i18n/terms";
import { MANAGER_COPY } from "../../manager.copy";

/* EM-11A "Report identity" card: #e8f5f0, border #c9ded4, radius 12. */
export function WorkerIdentityCard({ report }: { report: CaregiverReport }) {
  const { language } = useLanguage();
  const common = useCommonCopy();
  const c = useSectionCopy(MANAGER_COPY);

  return (
    <div className="rounded-[12px] border border-[#c9ded4] bg-[#e8f5f0] px-[14px] py-[13px]">
      <p className="text-[12px] font-semibold text-brand-deep lg:text-[14px]">
        {report.workerName} · {report.workerRole}
      </p>
      <p className="mt-[6px] text-[9px] text-[#6b8f80] lg:text-[11px]">
        {WORKER.emendaId} · {c.detail.workerOwned}
      </p>
      <div className="mt-[8px] flex items-center justify-between">
        <p className="text-[9px] font-semibold text-[#1f473b] lg:text-[11px]">
          {formatDisplayDate(report.date, language)} · {report.submittedAt}
        </p>
        <p className="text-[9px] font-semibold text-brand-deep lg:text-[11px]">
          {report.status === "verified"
            ? common.status.verified
            : common.status.submitted}
        </p>
      </div>
      <p className="mt-[6px] text-[9px] text-[#6b8f80] lg:text-[11px]">
        {c.detail.metaCaption} · {localizeTerm(report.shift, language)}
      </p>
    </div>
  );
}
