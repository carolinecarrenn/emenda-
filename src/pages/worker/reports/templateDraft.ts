import {
  CAREGIVER_PREVIEW,
  FOOD_PREVIEW,
  GENERAL_DRAFT,
  WAREHOUSE_PREVIEW,
} from "./reportsStatesMock";
import type { TemplateKey } from "./reportTemplate";

/**
 * Working draft of an employer-assigned report template (W-55 general,
 * W-55H caregiver, W-55J warehouse, W-55L food service).
 *
 * The mobile mocks treat every template as a real report flow — form →
 * review → submit — so the four templates share one generic draft shape:
 * a status flag, an optional condition chip row and three text fields whose
 * labels change per template. The interactive caregiver report at
 * /worker/reports/new keeps its own store-backed draft and is untouched by
 * this module.
 *
 * The draft lives outside React so it survives the form → review navigation
 * without a provider (the section may not touch src/data).
 */

export type StatusValue = "normal" | "needs-attention" | "urgent";
export type ConditionValue = StatusValue | "stable";

export interface TemplateDraft {
  status: StatusValue;
  condition: ConditionValue;
  /** Work summary · Work area / station · Station / area · Resident. */
  primary: string;
  /** Follow-up · Quantity handled · Stock status · Meal. */
  secondary: string;
  /** Work / operational · Handover · Care notes (unused by "general"). */
  notes: string;
  /** Selected quick-note chips — chip labels are mock data. */
  quickNotes: string[];
}

/** Field values are report content (data) and are never translated. */
export const TEMPLATE_DEFAULTS: Record<TemplateKey, TemplateDraft> = {
  general: {
    status: "normal",
    condition: "normal",
    primary: GENERAL_DRAFT.workSummary,
    secondary: GENERAL_DRAFT.followUp,
    notes: "",
    quickNotes: [],
  },
  caregiver: {
    status: "normal",
    condition: "stable",
    primary: CAREGIVER_PREVIEW.resident,
    secondary: CAREGIVER_PREVIEW.meal,
    notes: CAREGIVER_PREVIEW.careNotes,
    quickNotes: [],
  },
  warehouse: {
    status: "normal",
    condition: "normal",
    primary: WAREHOUSE_PREVIEW.workArea,
    secondary: WAREHOUSE_PREVIEW.quantity,
    notes: WAREHOUSE_PREVIEW.notes,
    quickNotes: [],
  },
  food: {
    status: "normal",
    condition: "normal",
    primary: FOOD_PREVIEW.stationArea,
    secondary: FOOD_PREVIEW.stockStatus,
    notes: FOOD_PREVIEW.handoverNotes,
    quickNotes: [],
  },
};

/** Employer · date · shift context line of each template (mock data). */
export const TEMPLATE_CONTEXT: Record<
  TemplateKey,
  { employer: string; date: string; shift: string }
> = {
  general: {
    employer: GENERAL_DRAFT.employer,
    date: GENERAL_DRAFT.date,
    shift: GENERAL_DRAFT.shift,
  },
  caregiver: {
    employer: CAREGIVER_PREVIEW.employer,
    date: CAREGIVER_PREVIEW.date,
    shift: CAREGIVER_PREVIEW.shift,
  },
  warehouse: {
    employer: WAREHOUSE_PREVIEW.employer,
    date: WAREHOUSE_PREVIEW.date,
    shift: WAREHOUSE_PREVIEW.shift,
  },
  food: {
    employer: FOOD_PREVIEW.employer,
    date: FOOD_PREVIEW.date,
    shift: FOOD_PREVIEW.shift,
  },
};

/** Quick-note chips offered by each template (mock data, never translated). */
export const TEMPLATE_QUICK_NOTES: Record<TemplateKey, readonly string[]> = {
  general: [],
  caregiver: CAREGIVER_PREVIEW.quickNotes,
  warehouse: WAREHOUSE_PREVIEW.quickNotes,
  food: FOOD_PREVIEW.quickNotes,
};

const drafts: Record<TemplateKey, TemplateDraft> = {
  general: { ...TEMPLATE_DEFAULTS.general },
  caregiver: { ...TEMPLATE_DEFAULTS.caregiver },
  warehouse: { ...TEMPLATE_DEFAULTS.warehouse },
  food: { ...TEMPLATE_DEFAULTS.food },
};

export function getTemplateDraft(template: TemplateKey): TemplateDraft {
  return drafts[template];
}

export function setTemplateDraft(
  template: TemplateKey,
  draft: TemplateDraft,
): void {
  drafts[template] = draft;
}

export function resetTemplateDraft(template: TemplateKey): void {
  drafts[template] = { ...TEMPLATE_DEFAULTS[template], quickNotes: [] };
}

/** Powers the unsaved-changes guard (W-55G / 55N / 55O / 55P). */
export function isTemplateDraftDirty(
  template: TemplateKey,
  draft: TemplateDraft,
): boolean {
  const base = TEMPLATE_DEFAULTS[template];
  return (
    draft.status !== base.status ||
    draft.condition !== base.condition ||
    draft.primary !== base.primary ||
    draft.secondary !== base.secondary ||
    draft.notes !== base.notes ||
    draft.quickNotes.length !== base.quickNotes.length ||
    draft.quickNotes.some((note) => !base.quickNotes.includes(note))
  );
}
