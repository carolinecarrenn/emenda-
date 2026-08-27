import { useParams } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { CAREGIVER_COPY } from "./caregiver.copy";
import { useReports } from "@/data/reportsContext";
import { useScreenState } from "@/hooks/useScreenState";
import {
  DetailOfflineState,
  DetailVerifiedOfflineState,
} from "./sections/DetailStates";
import { DetailBackRow } from "./sections/DetailBackRow";
import { ReportStatusHero } from "./sections/ReportStatusHero";
import { DetailContentCard } from "./sections/DetailContentCard";
import {
  DetailOwnershipNote,
  DetailReadOnlyNotice,
} from "./sections/DetailNotices";

/** Daily Report Detail — submitted / verified (Figma WD-56 / WD-56A).
 *  H1 "Daily Report" 34px · status hero · READ-ONLY REPORT notice ·
 *  stacked content cards · portable-history strip.
 *  ?state=offline renders WD-56B and ?state=verified-offline WD-56C from the
 *  cached record — the layout stays intact behind an amber notice. */
export function ReportDetailPage() {
  const { reportId } = useParams();
  const state = useScreenState();
  const { reports } = useReports();
  const c = useSectionCopy(CAREGIVER_COPY);
  const { language } = useLanguage();
  const report = reports.find((r) => r.id === reportId);

  if (state === "offline" || state === "verified-offline") {
    return (
      <div className="max-w-[1012px] pt-2 lg:pt-0">
        {state === "offline" ? (
          <DetailOfflineState />
        ) : (
          <DetailVerifiedOfflineState />
        )}
      </div>
    );
  }

  if (!report) {
    return (
      <div className="max-w-[1012px] pt-2 lg:pt-0">
        <DetailBackRow label={c.detail.crumb} />
        <div className="mt-[22px] rounded-[14px] border border-lp-line bg-white p-8 text-center">
          <p className="text-[15px] font-semibold text-lp-ink">
            {c.detail.notFound}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1012px] pt-2 lg:pt-0">
      <DetailBackRow label={c.detail.crumb} />
      <h1 className="mt-[10px] text-[28px] leading-[34px] font-bold text-lp-ink lg:mt-[15px] lg:text-[34px] lg:leading-normal">
        {c.detail.title}
      </h1>
      <p className="mt-[8px] text-[12px] leading-[17px] text-lp-muted lg:mt-[18px] lg:text-[14px] lg:leading-normal">
        {c.hub.historyTitle(report.date.replace(" 2026", ""))}
      </p>

      <div className="mt-[8px] lg:mt-[50px]">
        <ReportStatusHero report={report} />
        <div className="mt-[8px] lg:mt-[24px]">
          <DetailReadOnlyNotice
            title={c.detail.readOnly}
            body={c.detail.readOnlyBody}
          />
        </div>
        <div className="mt-[8px] lg:mt-4">
          <DetailContentCard
            label={c.detail.resident}
            value={report.resident}
          />
        </div>
        <div className="mt-[8px] lg:mt-4">
          <DetailContentCard
            label={c.detail.residentCondition}
            value={localizeTerm(report.residentCondition, language)}
          />
        </div>
        <div className="mt-[8px] lg:mt-4">
          <DetailContentCard label={c.detail.meal} value={report.meal} />
        </div>
        <div className="mt-[8px] lg:mt-4">
          <DetailContentCard
            label={c.detail.careNotes}
            value={report.careNotes}
          />
        </div>
        <div className="mt-[8px] lg:mt-4">
          <DetailContentCard
            label={c.detail.quickNotes}
            value={report.quickNotes
              .map((note) => localizeTerm(note, language))
              .join(" · ")}
          />
        </div>
        {report.followUp.trim() !== "" && (
          <div className="mt-[8px] lg:mt-4">
            <DetailContentCard
              label={c.detail.followUpIssue}
              value={report.followUp}
            />
          </div>
        )}
        <div className="mt-[8px] lg:mt-4">
          <DetailOwnershipNote
            title={c.detail.portableWorkHistory}
            body={c.detail.portableBody}
          />
        </div>
      </div>
    </div>
  );
}
