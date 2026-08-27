import iconIdBadge from "@/assets/landing/id-badge.svg";
import iconPermission from "@/assets/landing/permission.svg";
import iconRecords from "@/assets/landing/records.svg";
import iconCareer from "@/assets/landing/career.svg";
import iconJapanPrep from "@/assets/landing/japan-prep.svg";
import iconDocuments from "@/assets/landing/documents.svg";
import iconKnowledge from "@/assets/landing/knowledge.svg";
import iconEmployer from "@/assets/landing/employer.svg";
import iconShield from "@/assets/landing/shield.svg";

/**
 * Public inner pages (Figma section 1147:2 — LP-02 / LP-03 / LP-04).
 * Structure + icon/route wiring only: every visible string lives in
 * `public.copy.ts` and is keyed by the `key` fields declared here.
 */

/* ---------------------------------------------------------------- chrome */

export type PublicNavKey = "about" | "features" | "how";

export interface PublicNavItem {
  key: PublicNavKey;
  to: string;
}

/** Header nav — the current page renders as the mint pill (1147:5 / :22 / :39). */
export const PUBLIC_NAV: PublicNavItem[] = [
  { key: "about", to: "/about" },
  { key: "features", to: "/features" },
  { key: "how", to: "/how-it-works" },
];

/** Wordmark target and the single conversion action of the public site. */
export const PUBLIC_HOME_HREF = "/";
export const PUBLIC_LOGIN_HREF = "/signin";

/** Landing in-page anchors (LP-01 sections) the inner pages link back to. */
export const LANDING_ANCHORS = {
  about: "/#about",
  features: "/#features",
  how: "/#how-it-works",
} as const;

/** Footer legal links (LP-02 1147:149 — placeholders in the mock). */
export const PUBLIC_FOOTER_LINK_HREFS = ["#", "#", "#"];

/* ----------------------------------------------------------------- icons */

export type PublicIconKey =
  | "idBadge"
  | "permission"
  | "records"
  | "career"
  | "japanPrep"
  | "documents"
  | "knowledge"
  | "employer"
  | "shield";

export const PUBLIC_ICONS: Record<PublicIconKey, string> = {
  idBadge: iconIdBadge,
  permission: iconPermission,
  records: iconRecords,
  career: iconCareer,
  japanPrep: iconJapanPrep,
  documents: iconDocuments,
  knowledge: iconKnowledge,
  employer: iconEmployer,
  shield: iconShield,
};

/* ------------------------------------------------------- LP-02 · About */

/** Masked public ID — the real post-auth ID is never shown here (1147:59). */
export const EMENDA_MASKED_ID = "EMD-XX-XXXXXX";

export type PrincipleKey = "identity" | "permission" | "records";

export interface PublicPrinciple {
  key: PrincipleKey;
  icon: PublicIconKey;
}

/**
 * WHY EMENDA principle cards (1147:66 / :74 / :81). The middle card draws the
 * shield-with-check glyph in Figma (1147:76), not the key glyph.
 */
export const ABOUT_PRINCIPLES: PublicPrinciple[] = [
  { key: "identity", icon: "idBadge" },
  { key: "permission", icon: "shield" },
  { key: "records", icon: "records" },
];

export type JapanCardKey = "career" | "japan" | "records";

export interface PublicJapanCard {
  key: JapanCardKey;
  icon: PublicIconKey;
}

/** "Built for life in Japan" mini cards (1147:120 / :127 / :134). */
export const ABOUT_JAPAN_CARDS: PublicJapanCard[] = [
  { key: "career", icon: "career" },
  { key: "japan", icon: "japanPrep" },
  { key: "records", icon: "records" },
];

/* ---------------------------------------------------- LP-03 · Features */

export type FeatureKey =
  | "emendaId"
  | "career"
  | "japan"
  | "documents"
  | "knowledge"
  | "employer";

export interface PublicFeature {
  key: FeatureKey;
  icon: PublicIconKey;
  /** "Learn more" target — the three public pages and the LP-01 anchors. */
  learnMoreHref: string;
}

/** 2x3 feature-detail grid (1147:157 / :168 / :178 / :188 / :198 / :208). */
export const FEATURE_DETAILS: PublicFeature[] = [
  { key: "emendaId", icon: "idBadge", learnMoreHref: "/about" },
  { key: "career", icon: "career", learnMoreHref: LANDING_ANCHORS.features },
  { key: "japan", icon: "japanPrep", learnMoreHref: LANDING_ANCHORS.features },
  {
    key: "documents",
    icon: "documents",
    learnMoreHref: LANDING_ANCHORS.features,
  },
  {
    key: "knowledge",
    icon: "knowledge",
    learnMoreHref: LANDING_ANCHORS.about,
  },
  { key: "employer", icon: "employer", learnMoreHref: "/how-it-works" },
];

export type FlowKey = "identity" | "records" | "work";

export interface PublicFlowCard {
  key: FlowKey;
  number: string;
}

/** Numbered "designed to work together" cards (1147:221 / :225 / :229). */
export const FEATURE_FLOW: PublicFlowCard[] = [
  { key: "identity", number: "1" },
  { key: "records", number: "2" },
  { key: "work", number: "3" },
];

/** Closing "Private by default" card icon (1147:235). */
export const FEATURES_PRIVACY_ICON: PublicIconKey = "shield";

/* ------------------------------------------------- LP-04 · How it works */

export type StepKey =
  | "create"
  | "build"
  | "prepare"
  | "connect"
  | "continue";

export interface PublicStep {
  key: StepKey;
  number: string;
}

/** Five full-width step cards (1147:253 / :260 / :267 / :274 / :281). */
export const HOW_STEPS: PublicStep[] = [
  { key: "create", number: "01" },
  { key: "build", number: "02" },
  { key: "prepare", number: "03" },
  { key: "connect", number: "04" },
  { key: "continue", number: "05" },
];

export type ChangeCardKey = "keep" | "end";

export interface PublicChangeCard {
  key: ChangeCardKey;
  /** check glyph for what survives, arrow glyph for what ends (1147:293 / :299). */
  glyph: "check" | "arrow";
}

/** "Ending access does not end your account." cards (1147:292 / :298). */
export const HOW_CHANGE_CARDS: PublicChangeCard[] = [
  { key: "keep", glyph: "check" },
  { key: "end", glyph: "arrow" },
];
