import { useState } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { CAREGIVER_COPY } from "./caregiver.copy";
import { useReports } from "@/data/reportsContext";
import { EMPLOYER, TODAY, WORKER } from "@/data/caregiverReport";
import { useScreenState } from "@/hooks/useScreenState";
import { isTemplateKey } from "./reportTemplate";
import { ReviewOfflineState } from "./sections/ReviewStates";
import { TemplateReview } from "./sections/TemplateReview";
import { TemplateBanner } from "./sections/TemplateBanner";
import { FieldCard } from "./sections/FieldCard";
import { ResidentConditionCard } from "./sections/ResidentConditionCard";
import { QuickNotesStrip } from "./sections/QuickNotesStrip";
import { EmployerVisibilityReviewCard } from "./sections/EmployerVisibilityCard";

/** Review Daily Report — Caregiver (Figma WD-55I, node 1182:4918).
 *  Read-only mirror of the form; "Ready to submit" + employer visibility
 *  pair at the bottom, 300px submit + 220px edit buttons. */
export function ReviewReportPage() {
  const navigate = useNavigate();
  const state = useScreenState();
  const [searchParams] = useSearchParams();
  const { draft, submitDraft } = useReports();
  const c = useSectionCopy(CAREGIVER_COPY);
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  if (state === "review-offline") {
    return (
      <div className="max-w-[1012px] pt-2 lg:pt-0">
        <ReviewOfflineState />
      </div>
    );
  }

  /* WD-55B / 55I / 55K / 55M — review step of an employer-assigned template
     flow. The store-backed caregiver review below keeps the bare route. */
  const templateParam = searchParams.get("template");
  if (isTemplateKey(templateParam)) {
    return (
      <div className="max-w-[1012px] pt-2 lg:pt-0">
        <TemplateReview key={templateParam} template={templateParam} />
      </div>
    );
  }

  if (
    !submitted &&
    (draft.resident.trim() === "" || draft.careNotes.trim() === "")
  ) {
    return <Navigate to="/worker/reports/new" replace />;
  }

  const handleSubmit = () => {
    setSubmitted(true);
    const report = submitDraft();
    toast.success(c.review.submittedToast, {
      description: `${EMPLOYER.name} · ${report.date} · ${report.submittedAt}`,
    });
    navigate(`/worker/reports/${report.id}`);
  };

  return (
    <div className="max-w-[1012px] pt-2 lg:pt-0">
      <Link
        to="/worker/reports"
        className="text-[13px] font-semibold text-lp-green hover:text-lp-button"
      >
        {c.review.crumb}
      </Link>
      <h1 className="mt-[14px] text-[24px] font-bold text-lp-ink lg:text-[32px]">
        {c.review.title}
      </h1>
      <p className="mt-[10px] text-[13px] text-lp-muted lg:mt-[7px]">
        {EMPLOYER.name} · {TODAY} · {WORKER.shift}
      </p>

      <div className="mt-[22px] lg:mt-[18px]">
        <TemplateBanner />
        <div className="mt-4 rounded-[14px] border border-lp-line bg-white px-[15px] pt-[7px] pb-[17px] lg:mt-[18px]">
          <p className="text-[11px] font-semibold text-lp-muted">
            <span className="uppercase">{c.review.reportStatusLine}</span> ·{" "}
            {localizeTerm(draft.reportFlag, language)}
          </p>
          <p className="mt-[9px] text-[12px] text-lp-muted">
            {draft.reportFlag === "Normal"
              ? c.review.flagNoteNormal
              : c.review.flagNoteFlagged}
          </p>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:gap-x-7">
          <FieldCard label={c.form.resident} value={draft.resident} readOnly />
          <ResidentConditionCard value={draft.residentCondition} readOnly />
          <FieldCard label={c.form.meal} value={draft.meal} readOnly />
          <FieldCard
            label={c.form.careNotes}
            value={draft.careNotes}
            readOnly
          />
        </div>
        <div className="mt-4">
          <QuickNotesStrip selected={draft.quickNotes} readOnly />
        </div>
        <div className="mt-4 grid gap-4 lg:mt-[14px] lg:grid-cols-2 lg:gap-x-7">
          <div className="min-h-[72px] rounded-[12px] border border-lp-line bg-lp-tint px-[13px] pt-[8px] pb-[16px]">
            <p className="text-[13px] font-semibold text-lp-green">
              {c.review.readyToSubmit}
            </p>
            <p className="mt-[9px] text-[11px] text-lp-muted">
              {c.review.readyToSubmitBody}
            </p>
          </div>
          <EmployerVisibilityReviewCard />
        </div>
        <div className="mt-[26px] flex flex-col gap-4 lg:mt-[24px] lg:flex-row">
          <button
            type="button"
            onClick={handleSubmit}
            className="flex h-[44px] w-full items-center justify-center rounded-[12px] bg-lp-button text-[13px] font-semibold text-white hover:bg-lp-green lg:w-[300px]"
          >
            {c.review.submitReport}
          </button>
          <button
            type="button"
            onClick={() => navigate("/worker/reports/new")}
            className="flex h-[44px] w-full items-center justify-center rounded-[12px] border border-lp-line bg-white text-[13px] font-semibold text-lp-green hover:bg-lp-mint lg:w-[220px]"
          >
            {c.review.editReport}
          </button>
        </div>
      </div>
    </div>
  );
}
