/** Mock data for 09 · Help & Support (Figma WD-47..WD-48 / mobile W-47..W-48).
 *  User-authored draft content stays raw (never translated); a real API can
 *  replace this module without touching the components. */

export type SupportTopicId =
  | "account"
  | "identity"
  | "technical"
  | "privacy"
  | "other";

/** Order of the options in the Support topic overlay (WD-48F · W-48F). */
export const SUPPORT_TOPIC_IDS: SupportTopicId[] = [
  "account",
  "identity",
  "technical",
  "privacy",
  "other",
];

export interface SupportDraft {
  topic: SupportTopicId;
  issue: string;
  details: string;
}

/** Draft shown in the WD-48 / W-48 mock (worker-authored content, verbatim). */
export const SUPPORT_DRAFT: SupportDraft = {
  topic: "account",
  issue: "I can’t access my account after changing my phone number.",
  details: "My old number is no longer active. I still have access to my EMENDA ID.",
};

/** Destinations of the WD-47 hub cards, kept out of the components.
 *  `accountRecovery` opens Contact support already scoped to the
 *  "Account & access" topic — PIN, phone-number and sign-in recovery are all
 *  handled by the support team, so the quick-help card lands on a real,
 *  pre-filled request rather than a dead end. */
export const HELP_LINKS = {
  headlessHome: "/worker",
  contact: "/worker/help/contact",
  sent: "/worker/help/contact/sent",
  help: "/worker/help",
  knowledge: "/worker/knowledge",
  knowledgeSearch: "/worker/knowledge/search",
  accountRecovery: "/worker/help/contact?topic=account",
  emergency: "/worker/documents/emergency",
} as const;

/** Type guard for the `?topic=` seed used by the quick-help entry points. */
export function isSupportTopicId(value: string | null): value is SupportTopicId {
  return value !== null && (SUPPORT_TOPIC_IDS as string[]).includes(value);
}
