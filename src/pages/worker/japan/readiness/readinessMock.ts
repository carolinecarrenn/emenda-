import type { ReadinessCopy, ReadinessDetailSlug } from "./readiness.copy";

export type ReadinessStatus = "complete" | "needsAction" | "afterArrival";

export interface ReadinessChecklistItem {
  /** Key into copy.taskTitles for the card title. */
  titleKey: keyof ReadinessCopy["taskTitles"];
  status: ReadinessStatus;
  /**
   * Detail destination: a detail slug (→ /worker/japan/readiness/:task),
   * "registration" (→ /worker/japan/registration), "visa-plan"
   * (→ /worker/japan/visa-plan, the W-32F pre-arrival plan) or "hub"
   * (→ /worker/japan).
   */
  to: ReadinessDetailSlug | "registration" | "visa-plan" | "hub";
}

/** WD-34 base / Already-in-Japan checklist (first five in the 2-col grid,
 *  the microcopy strip, then Pension / tax as the trailing sixth card). */
export const READINESS_TASKS: ReadinessChecklistItem[] = [
  { titleKey: "residentRegistration", status: "complete", to: "registration" },
  { titleKey: "healthInsurance", status: "complete", to: "health-insurance" },
  { titleKey: "myNumber", status: "complete", to: "my-number" },
  { titleKey: "bankPayment", status: "needsAction", to: "bank-payment" },
  { titleKey: "mobileContact", status: "needsAction", to: "mobile-contact" },
];

export const READINESS_TRAILING_TASK: ReadinessChecklistItem = {
  titleKey: "pensionTax",
  status: "needsAction",
  to: "pension-tax",
};

/** WD-34A Outside-Japan checklist (five cards, then the microcopy strip). */
export const READINESS_OUTSIDE_TASKS: ReadinessChecklistItem[] = [
  { titleKey: "confirmPassport", status: "complete", to: "passport-identity" },
  { titleKey: "confirmVisaPlan", status: "complete", to: "visa-plan" },
  { titleKey: "arrivalAddress", status: "needsAction", to: "arrival-address" },
  {
    titleKey: "residentRegistration",
    status: "afterArrival",
    to: "registration",
  },
  {
    titleKey: "healthInsurance",
    status: "afterArrival",
    to: "health-insurance",
  },
];

/** Default completion per detail screen (WD-34G..M). */
export const TASK_DETAIL_COMPLETE: Record<ReadinessDetailSlug, boolean> = {
  "health-insurance": true,
  "my-number": true,
  "bank-payment": false,
  "mobile-contact": false,
  "passport-identity": true,
  "arrival-address": false,
  "pension-tax": false,
};

/** User-written draft note shown in the WD-34F/N/O/P/Q note editor (raw data). */
export const TASK_NOTE_DRAFT = "Waiting for move-in date confirmation.";
