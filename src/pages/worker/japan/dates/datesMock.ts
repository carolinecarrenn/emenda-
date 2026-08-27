/** Reminder "remind me" value: null = on the date, otherwise days before. */
export type RemindDays = number | null;

export interface PersonalReminder {
  id: string;
  /** User-entered title, raw data. */
  title: string;
  /** Raw "02 Sep 2026"-style date string, formatted at render time. */
  date: string;
  remindDays: RemindDays;
  note: string;
}

/** WD-36 amber linked reminder (system-managed via Residence status). */
export const LINKED_REMINDER_DATE = "18 May 2027";

/** WD-36 white personal reminder card. */
export const PERSONAL_REMINDERS: PersonalReminder[] = [
  {
    id: "municipal-follow-up",
    title: "Municipal follow-up",
    date: "02 Sep 2026",
    remindDays: 7,
    note: "",
  },
];

/** Prefilled values of the WD-36B/C reminder form frames. */
export const REMINDER_FORM_DRAFT = {
  title: "Residence status expiry",
  date: "18 May 2027",
  remindDays: 90 as RemindDays,
  note: "Check official requirements before the date.",
};

/** Default value in the custom-reminder input of the WD-36L selector. */
export const CUSTOM_REMINDER_DEFAULT = "14";
