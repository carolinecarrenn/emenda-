import { useSectionCopy } from "@/i18n/copy";
import { REPORTS_STATES_COPY, fillCopy } from "../reports.copy";
import type { TemplateKey } from "../reportTemplate";
import { TEMPLATE_CONTEXT } from "../templateDraft";
import type { ConditionValue, StatusValue } from "../templateDraft";

export interface ChipOption<T extends string> {
  value: T;
  label: string;
}

export interface TemplateFields {
  /** Display name used by the hub cards ("Warehouse", "Food service", …). */
  name: string;
  /** Template card heading — "Warehouse template · ABC Logistics". */
  title: string;
  /** Template card body — "Warehouse fields are provided automatically…". */
  body: string;
  statusLabel: string;
  statusOptions: ChipOption<StatusValue>[];
  primaryLabel: string;
  /** Only the general template marks a field "· Required" (WD-55A). */
  primaryRequired: boolean;
  /** Review step drops the "· Required" / "· Optional" suffixes (WD-55B). */
  primaryReviewLabel: string;
  secondaryReviewLabel: string;
  primaryError: string;
  secondaryLabel: string;
  notesLabel: string | null;
  conditionLabel: string | null;
  conditionOptions: ChipOption<ConditionValue>[];
  quickNotesLabel: string | null;
}

/**
 * Per-template field labels for the editable template report flow
 * (W-55 general · W-55H caregiver · W-55J warehouse · W-55L food service)
 * and its review step (W-55B / 55I / 55K / 55M). All labels come from the
 * section copy file; only the values are mock data.
 */
export function useTemplateFields(template: TemplateKey): TemplateFields {
  const c = useSectionCopy(REPORTS_STATES_COPY);

  const statusOptions: ChipOption<StatusValue>[] = [
    { value: "normal", label: c.options.normal },
    { value: "needs-attention", label: c.options.needsAttention },
    { value: "urgent", label: c.options.urgent },
  ];

  const employer = TEMPLATE_CONTEXT[template].employer;

  const base = {
    statusLabel: c.generalForm.reportStatusLabel,
    statusOptions,
    primaryRequired: false,
    primaryError: c.validationError.fieldError,
    quickNotesLabel: c.templates.quickNotesLabel,
  };

  if (template === "general") {
    return {
      ...base,
      name: c.templateNames.general,
      title: c.generalForm.templateTitle,
      body: fillCopy(c.generalForm.templateBody, { employer }),
      primaryLabel: c.generalForm.workSummaryLabel,
      primaryRequired: true,
      primaryReviewLabel: c.detail.workSummaryLabel,
      secondaryReviewLabel: c.detail.followUpLabel,
      secondaryLabel: c.generalForm.followUpLabel,
      notesLabel: null,
      conditionLabel: null,
      conditionOptions: [],
      quickNotesLabel: null,
    };
  }

  if (template === "warehouse") {
    return {
      ...base,
      name: c.templateNames.warehouse,
      title: fillCopy(c.templates.warehouseTitle, { employer }),
      body: c.templates.warehouseBody,
      primaryLabel: c.templates.workAreaLabel,
      primaryReviewLabel: c.templates.workAreaLabel,
      secondaryReviewLabel: c.templates.quantityLabel,
      secondaryLabel: c.templates.quantityLabel,
      notesLabel: c.templates.operationalNotesLabel,
      conditionLabel: c.templates.safetyStatusLabel,
      conditionOptions: statusOptions,
    };
  }

  if (template === "food") {
    return {
      ...base,
      name: c.templateNames.food,
      title: fillCopy(c.templates.foodTitle, { employer }),
      body: c.templates.foodBody,
      primaryLabel: c.templates.stationAreaLabel,
      primaryReviewLabel: c.templates.stationAreaLabel,
      secondaryReviewLabel: c.templates.stockStatusLabel,
      secondaryLabel: c.templates.stockStatusLabel,
      notesLabel: c.templates.handoverNotesLabel,
      conditionLabel: c.templates.serviceConditionLabel,
      conditionOptions: statusOptions,
    };
  }

  return {
    ...base,
    name: c.templateNames.caregiver,
    title: fillCopy(c.templates.caregiverTitle, { employer }),
    body: c.templates.caregiverBody,
    primaryLabel: c.templates.residentLabel,
    primaryReviewLabel: c.templates.residentLabel,
    secondaryReviewLabel: c.templates.mealLabel,
    secondaryLabel: c.templates.mealLabel,
    notesLabel: c.templates.careNotesLabel,
    conditionLabel: c.templates.residentConditionLabel,
    conditionOptions: [
      { value: "stable", label: c.options.stable },
      { value: "needs-attention", label: c.options.needsAttention },
      { value: "urgent", label: c.options.urgent },
    ],
  };
}
