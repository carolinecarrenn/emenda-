import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { useCommonCopy } from "@/i18n/common";
import { REPORTS_STATES_COPY, fillCopy } from "../reports.copy";
import type { TemplateKey } from "../reportTemplate";
import {
  TEMPLATE_CONTEXT,
  TEMPLATE_QUICK_NOTES,
  getTemplateDraft,
  resetTemplateDraft,
} from "../templateDraft";
import { FormSubmittingState } from "./FormStates";
import { ReadOnlyField } from "./ReadOnlyField";
import { ReviewConditionRow, ReviewQuickNotesRow } from "./ReviewValueRows";
import { ReviewReadyRow } from "./ReviewReadyRow";
import { ReviewStatusCard } from "./ReviewStatusCard";
import { ReviewVisibilityCard } from "./ReviewVisibilityCard";
import { TemplateCard } from "./TemplateFormBody";
import { useTemplateFields } from "./useTemplateFields";

/**
 * Review Daily Report on an employer-assigned template — W-55B (general),
 * W-55I (caregiver), W-55K (warehouse), W-55M (food service).
 *
 * WD-55B / WD-55K / WD-55M stack the template card (74), the white
 * "REPORT STATUS · Normal" card (70), the two-column read-only field grid
 * (82 general / 76 template), the quick-note chip strip (70), the
 * "Ready to submit | EMPLOYER VISIBILITY" pair (72), the submit pair (44)
 * and the full-width employer-visibility note (92).
 *
 * "Submit Daily Report" runs the shared submission lifecycle: the W-55C
 * submitting screen, then the W-55D confirmation. The store-backed caregiver
 * submission at /worker/reports/review is a separate, untouched flow.
 */
export function TemplateReview({ template }: { template: TemplateKey }) {
  const navigate = useNavigate();
  const c = useSectionCopy(REPORTS_STATES_COPY);
  const common = useCommonCopy();
  const { language } = useLanguage();
  const fields = useTemplateFields(template);
  const context = TEMPLATE_CONTEXT[template];
  const draft = getTemplateDraft(template);

  const [submitting, setSubmitting] = useState(false);

  /* WD-55C → WD-55D: the submission completes on its own. */
  useEffect(() => {
    if (!submitting) return;
    const timer = window.setTimeout(() => {
      resetTemplateDraft(template);
      navigate(`/worker/reports/new?template=${template}&state=submitted`);
    }, 900);
    return () => window.clearTimeout(timer);
  }, [submitting, template, navigate]);

  if (submitting) {
    return <FormSubmittingState template={template} />;
  }

  const statusLabel =
    fields.statusOptions.find((option) => option.value === draft.status)
      ?.label ?? c.options.normal;
  const conditionLabel =
    fields.conditionOptions.find((option) => option.value === draft.condition)
      ?.label ?? c.options.normal;

  return (
    <>
      {/* W-55B/K/M send the mobile breadcrumb back to the form ("Edit report");
          WD-55B keeps the "Reports" hub crumb. */}
      <Link
        to={`/worker/reports/new?template=${template}`}
        className="text-[13px] font-semibold text-lp-green hover:text-lp-button lg:hidden"
      >
        {c.review.editReport}
      </Link>
      <Link
        to="/worker/reports"
        className="hidden text-[13px] font-semibold text-lp-green hover:text-lp-button lg:block"
      >
        {common.nav.reports}
      </Link>
      <h1 className="mt-[10px] text-[27px] leading-[32px] font-bold text-lp-ink lg:mt-[14px] lg:text-[32px] lg:leading-normal">
        {c.review.title}
      </h1>
      <p className="mt-[10px] text-[11px] leading-[15px] text-lp-muted lg:mt-[7px] lg:text-[13px] lg:leading-normal">
        {context.employer} · {formatDisplayDate(context.date, language)} ·{" "}
        {context.shift}
      </p>

      <div className="mt-[10px] space-y-[10px] lg:mt-[18px] lg:space-y-4">
        <TemplateCard
          template={template}
          bodyOverride={c.templateReview.appliedNote}
        />
        <ReviewStatusCard
          label={fields.statusLabel}
          value={statusLabel}
          body={
            draft.status === "normal"
              ? c.review.statusDescription
              : c.review.statusFlagged
          }
        />

        <div className="grid gap-[10px] lg:grid-cols-2 lg:gap-4 lg:gap-x-7">
          <ReadOnlyField
            label={fields.primaryReviewLabel}
            value={draft.primary || "—"}
            size={template === "general" ? "lg" : "sm"}
          />
          {fields.conditionLabel !== null && (
            <ReviewConditionRow
              label={fields.conditionLabel}
              options={fields.conditionOptions.map((option) => option.label)}
              selected={conditionLabel}
            />
          )}
          <ReadOnlyField
            label={fields.secondaryReviewLabel}
            value={draft.secondary || "—"}
            size={template === "general" ? "lg" : "sm"}
          />
          {fields.notesLabel !== null && (
            <ReadOnlyField
              label={fields.notesLabel}
              value={draft.notes || "—"}
              size="sm"
            />
          )}
        </div>

        {fields.quickNotesLabel !== null && (
          <ReviewQuickNotesRow
            label={fields.quickNotesLabel}
            notes={TEMPLATE_QUICK_NOTES[template]}
          />
        )}

        <ReviewReadyRow />

        {/* Mobile puts the employer-visibility note above the submit pair
            (W-55B node 978:283); desktop keeps it below (WD-55B). */}
        <div className="lg:hidden">
          <ReviewVisibilityCard
            body={fillCopy(c.templateReview.readyBody, {
              employer: context.employer,
            })}
          />
        </div>

        <div className="flex flex-col gap-[16px] pt-[4px] lg:gap-4 lg:pt-[10px] lg:flex-row">
          <button
            type="button"
            onClick={() => setSubmitting(true)}
            className="flex h-[46px] w-full items-center justify-center rounded-[13px] bg-lp-button text-[12px] font-semibold text-white hover:bg-lp-green lg:h-[44px] lg:w-[300px] lg:rounded-[12px] lg:text-[13px]"
          >
            {c.review.submit}
          </button>
          <Link
            to={`/worker/reports/new?template=${template}`}
            className="flex h-[46px] w-full items-center justify-center rounded-[13px] border border-lp-line bg-white text-[12px] font-semibold text-lp-green hover:bg-lp-mint lg:h-[44px] lg:w-[220px] lg:rounded-[12px] lg:text-[13px]"
          >
            {c.review.editReport}
          </Link>
        </div>

        <div className="hidden lg:block">
          <ReviewVisibilityCard
            body={fillCopy(c.templateReview.readyBody, {
              employer: context.employer,
            })}
          />
        </div>
      </div>
    </>
  );
}
