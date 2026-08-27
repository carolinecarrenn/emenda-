import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { REPORTS_STATES_COPY } from "../reports.copy";
import type { TemplateKey } from "../reportTemplate";
import {
  TEMPLATE_QUICK_NOTES,
  getTemplateDraft,
  isTemplateDraftDirty,
  resetTemplateDraft,
  setTemplateDraft,
  type TemplateDraft,
} from "../templateDraft";
import { FieldCard } from "./FieldCard";
import { StateNoteCard } from "./stateUi";
import {
  EmployerVisibilityPreview,
  TemplateCard,
  TemplateFormHeader,
} from "./TemplateFormBody";
import { TemplateChipField } from "./TemplateChipField";
import { TemplateQuickNotes } from "./TemplateQuickNotes";
import { TemplateStatusCard } from "./TemplateStatusCard";
import { UnsavedChangesDialog } from "./UnsavedChangesDialog";
import { useTemplateFields } from "./useTemplateFields";

/**
 * New Daily Report on an employer-assigned template — W-55 (general),
 * W-55H (caregiver), W-55J (warehouse), W-55L (food service).
 *
 * The mobile mocks treat every template as a real report flow, so the fields
 * are editable and "Review report" opens the matching review step
 * (W-55B / 55I / 55K / 55M). Leaving with a dirty draft raises the
 * unsaved-changes dialog (W-55G / 55N / 55O / 55P) and an empty required
 * field raises the inline validation error (W-55A).
 *
 * The store-backed caregiver report at /worker/reports/new (no ?template=)
 * is a separate, untouched flow.
 */
export function TemplateForm({ template }: { template: TemplateKey }) {
  const navigate = useNavigate();
  const c = useSectionCopy(REPORTS_STATES_COPY);
  const fields = useTemplateFields(template);

  const [draft, setLocalDraft] = useState<TemplateDraft>(() => ({
    ...getTemplateDraft(template),
  }));
  const [invalid, setInvalid] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const update = (next: TemplateDraft) => {
    setLocalDraft(next);
    setTemplateDraft(template, next);
  };

  const quickNotes = TEMPLATE_QUICK_NOTES[template];

  const handleReview = () => {
    if (fields.primaryRequired && draft.primary.trim() === "") {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    navigate(`/worker/reports/review?template=${template}`);
  };

  const guardLeave = () => {
    if (!isTemplateDraftDirty(template, draft)) return false;
    setLeaving(true);
    return true;
  };

  const isGeneral = template === "general";

  return (
    <>
      <TemplateFormHeader template={template} onLeave={guardLeave} />

      <div className="mt-[10px] lg:mt-[18px]">
        <TemplateCard template={template} />

        <div className="mt-[10px] lg:mt-[18px]">
          <TemplateStatusCard
            label={fields.statusLabel}
            options={fields.statusOptions}
            value={draft.status}
            onChange={(status) => update({ ...draft, status })}
          />
        </div>

        <div className="mt-[10px] grid gap-[10px] lg:mt-4 lg:grid-cols-2 lg:gap-4 lg:gap-x-7">
          <FieldCard
            label={fields.primaryLabel}
            value={draft.primary}
            size={isGeneral ? "lg" : "sm"}
            tone={invalid ? "error" : "default"}
            placeholder={invalid ? fields.primaryError : undefined}
            onChange={(primary) => update({ ...draft, primary })}
          />
          {invalid && (
            <p className="mt-[-5px] text-[10px] leading-[14px] text-[#b82e24] lg:hidden">
              {c.validationError.helper}
            </p>
          )}
          {fields.conditionLabel !== null && (
            <TemplateChipField
              label={fields.conditionLabel}
              options={fields.conditionOptions}
              value={draft.condition}
              onChange={(condition) => update({ ...draft, condition })}
            />
          )}
          <FieldCard
            label={fields.secondaryLabel}
            value={draft.secondary}
            size={isGeneral ? "lg" : "sm"}
            onChange={(secondary) => update({ ...draft, secondary })}
          />
          {fields.notesLabel !== null && (
            <FieldCard
              label={fields.notesLabel}
              value={draft.notes}
              onChange={(notes) => update({ ...draft, notes })}
            />
          )}
        </div>

        {fields.quickNotesLabel !== null && quickNotes.length > 0 && (
          <div className="mt-[10px] lg:mt-4">
            <TemplateQuickNotes
              label={fields.quickNotesLabel}
              notes={quickNotes}
              selected={draft.quickNotes}
              onToggle={(note) =>
                update({
                  ...draft,
                  quickNotes: draft.quickNotes.includes(note)
                    ? draft.quickNotes.filter((item) => item !== note)
                    : [...draft.quickNotes, note],
                })
              }
            />
          </div>
        )}

        <div
          className={isGeneral ? "mt-[10px] lg:mt-4" : "mt-[10px] lg:mt-[14px]"}
        >
          <EmployerVisibilityPreview />
        </div>

        <div className="mt-[10px] lg:mt-[24px]">
          <button
            type="button"
            onClick={handleReview}
            className={`flex h-[46px] w-full items-center justify-center rounded-[13px] text-[12px] font-semibold text-white lg:h-[44px] lg:w-[300px] lg:rounded-[12px] lg:bg-lp-button lg:text-[13px] lg:opacity-100 lg:hover:bg-lp-green ${
              invalid
                ? "bg-[#94b2a6] opacity-45"
                : "bg-lp-button hover:bg-lp-green"
            }`}
          >
            {c.generalForm.reviewReport}
          </button>
        </div>

        {invalid && (
          <div className="mt-4 hidden lg:mt-[14px] lg:block">
            <StateNoteCard tone="red" lines={[c.validationError.helper]} />
          </div>
        )}
      </div>

      {leaving && (
        <UnsavedChangesDialog
          onKeepEditing={() => setLeaving(false)}
          onDiscard={() => {
            resetTemplateDraft(template);
            navigate("/worker/reports");
          }}
        />
      )}
    </>
  );
}
