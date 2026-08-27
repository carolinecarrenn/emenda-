import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useReports } from "@/data/reportsContext";
import { EMPLOYER, TODAY, WORKER } from "@/data/caregiverReport";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { CAREGIVER_COPY } from "./caregiver.copy";
import {
  FormOfflineDraftState,
  FormSubmitFailedState,
  FormSubmittedState,
  FormSubmittingState,
  FormUnsavedChangesState,
  FormValidationErrorState,
} from "./sections/FormStates";
import { TemplateForm } from "./sections/TemplateForm";
import { isTemplateKey, type TemplateKey } from "./reportTemplate";
import { TemplateBanner } from "./sections/TemplateBanner";
import { ReportStatusCard } from "./sections/ReportStatusCard";
import { FieldCard } from "./sections/FieldCard";
import { ResidentConditionCard } from "./sections/ResidentConditionCard";
import { QuickNotesStrip } from "./sections/QuickNotesStrip";
import { EmployerVisibilityCard } from "./sections/EmployerVisibilityCard";

/** New Daily Report — Caregiver template (Figma WD-55H, node 1182:4848).
 *  Breadcrumb 13px · H1 32px · template card · report status ·
 *  2×2 field grid (492px columns) · quick notes · employer visibility ·
 *  300px review button. The caregiver template has no follow-up field.
 *
 *  Lettered variants render on top of this route without touching the
 *  caregiver flow: ?state=validation-error (WD-55A) · submitting (WD-55C) ·
 *  submitted (WD-55D) · submit-failed (WD-55E) · offline-draft (WD-55F) ·
 *  unsaved-changes (WD-55G, with ?template= giving 55N/55O/55P), and
 *  ?template=general|caregiver|warehouse|food for the editable
 *  employer-assigned template flows (WD-55 / 55H / 55J / 55L). */
export function NewCaregiverReportPage() {
  const navigate = useNavigate();
  const state = useScreenState();
  const [searchParams] = useSearchParams();
  const { draft, setDraft } = useReports();
  const c = useSectionCopy(CAREGIVER_COPY);

  const templateParam = searchParams.get("template");
  const template: TemplateKey = isTemplateKey(templateParam)
    ? templateParam
    : "general";

  if (state !== null) {
    const stateBody =
      state === "validation-error" ? (
        <FormValidationErrorState template={template} />
      ) : state === "submitting" ? (
        <FormSubmittingState template={template} />
      ) : state === "submitted" ? (
        <FormSubmittedState />
      ) : state === "submit-failed" ? (
        <FormSubmitFailedState template={template} />
      ) : state === "offline-draft" ? (
        <FormOfflineDraftState template={template} />
      ) : state === "unsaved-changes" ? (
        <FormUnsavedChangesState template={template} />
      ) : null;

    if (stateBody !== null) {
      return <div className="max-w-[1012px] pt-2 lg:pt-0">{stateBody}</div>;
    }
  }

  /* Employer-assigned templates are real report flows on mobile (W-55 /
     W-55J / W-55L and the W-55H caregiver twin), so ?template= opens the
     editable form. The store-backed caregiver report below keeps /new. */
  if (isTemplateKey(templateParam)) {
    return (
      <div className="max-w-[1012px] pt-2 lg:pt-0">
        <TemplateForm key={templateParam} template={templateParam} />
      </div>
    );
  }

  const canReview =
    draft.resident.trim() !== "" && draft.careNotes.trim() !== "";

  return (
    <div className="max-w-[1012px] pt-2 lg:pt-0">
      <Link
        to="/worker/reports"
        className="text-[13px] font-semibold text-lp-green hover:text-lp-button"
      >
        {c.form.crumb}
      </Link>
      <h1 className="mt-[14px] text-[24px] font-bold text-lp-ink lg:text-[32px]">
        {c.form.title}
      </h1>
      <p className="mt-[10px] text-[13px] text-lp-muted lg:mt-[7px]">
        {EMPLOYER.name} · {TODAY} · {WORKER.shift}
      </p>

      <div className="mt-[22px] lg:mt-[18px]">
        <TemplateBanner />
        <div className="mt-4 lg:mt-[18px]">
          <ReportStatusCard
            value={draft.reportFlag}
            onChange={(reportFlag) => setDraft({ ...draft, reportFlag })}
          />
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:gap-x-7">
          <FieldCard
            label={c.form.resident}
            value={draft.resident}
            placeholder="Tanaka-san · 田中さん"
            onChange={(resident) => setDraft({ ...draft, resident })}
          />
          <ResidentConditionCard
            value={draft.residentCondition}
            onChange={(residentCondition) =>
              setDraft({ ...draft, residentCondition })
            }
          />
          <FieldCard
            label={c.form.meal}
            value={draft.meal}
            placeholder="Half portion · Setengah porsi"
            onChange={(meal) => setDraft({ ...draft, meal })}
          />
          <FieldCard
            label={c.form.careNotes}
            value={draft.careNotes}
            placeholder={c.form.careNotesPlaceholder}
            onChange={(careNotes) => setDraft({ ...draft, careNotes })}
          />
        </div>
        <div className="mt-4">
          <QuickNotesStrip
            selected={draft.quickNotes}
            onToggle={(note) =>
              setDraft({
                ...draft,
                quickNotes: draft.quickNotes.includes(note)
                  ? draft.quickNotes.filter((n) => n !== note)
                  : [...draft.quickNotes, note],
              })
            }
          />
        </div>
        <div className="mt-4 lg:mt-[14px]">
          <EmployerVisibilityCard />
        </div>
        <div className="mt-[26px] lg:mt-[24px]">
          <button
            type="button"
            disabled={!canReview}
            onClick={() => navigate("/worker/reports/review")}
            className="flex h-[44px] w-full items-center justify-center rounded-[12px] bg-lp-button text-[13px] font-semibold text-white hover:bg-lp-green disabled:cursor-not-allowed disabled:opacity-40 lg:w-[300px]"
          >
            {c.form.reviewReport}
          </button>
        </div>
      </div>
    </div>
  );
}
