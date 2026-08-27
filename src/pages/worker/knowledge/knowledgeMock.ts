/** Mock data for Knowledge & Q&A (Figma WD-41..WD-46 / mobile 852:2).
 *  All strings here are mock CONTENT (articles, questions, answers) and stay
 *  raw — they are not run through the i18n layer. A real API can replace this
 *  module without touching the components. */

export type KnowledgeTopicId =
  | "visaResidence"
  | "japanPreparation"
  | "documentsIdentity"
  | "workEmployment"
  | "other";

export const KNOWLEDGE_TOPIC_IDS: KnowledgeTopicId[] = [
  "visaResidence",
  "japanPreparation",
  "documentsIdentity",
  "workEmployment",
  "other",
];

export type SearchCategoryKey =
  | "japanPreparation"
  | "residence"
  | "documents"
  | "visaResidence";

/** Section headings a Knowledge article can use (W-43/43B/43C/43D). The
 *  wording itself lives in knowledge.copy.ts so it stays translated. */
export type ArticleHeadingKey =
  | "whatToDo"
  | "whatToPrepare"
  | "whatItMeans"
  | "whatToCheck"
  | "whenToAct"
  | "commonItems"
  | "beforeYouGo";

/** Official-source note a Knowledge article closes with. */
export type ArticleDisclaimerKey =
  | "localGovernment"
  | "immigration"
  | "timing"
  | "documentList";

export interface KnowledgeArticle {
  id: string;
  title: string;
  topic: KnowledgeTopicId;
  categoryKey: SearchCategoryKey;
  /** Full updated date, e.g. "18 Aug 2026". */
  updated: string;
  /** Month-level updated stamp used in meta lines, e.g. "Aug 2026". */
  updatedMonth: string;
  /** Second line of the article meta card (W-43 "Article meta" · Scope). */
  scope: string;
  primaryHeading: ArticleHeadingKey;
  secondaryHeading: ArticleHeadingKey;
  disclaimerKey: ArticleDisclaimerKey;
  whatToDo: string;
  whatToPrepare: string;
  /** Shortened copy shown when the article is read from the offline cache
   *  (Figma W-43A/43E). The cached view keeps one section only. */
  cachedHeading: ArticleHeadingKey;
  cachedWhatToDo: string;
  cachedWhatToPrepare: string;
  keywords: string[];
  popular: boolean;
  cachedOffline: boolean;
}

export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    id: "resident-registration",
    title: "Resident registration after moving",
    topic: "japanPreparation",
    categoryKey: "japanPreparation",
    updated: "18 Aug 2026",
    updatedMonth: "Aug 2026",
    scope: "For workers who have moved to a municipality in Japan.",
    primaryHeading: "whatToDo",
    secondaryHeading: "whatToPrepare",
    disclaimerKey: "localGovernment",
    cachedHeading: "whatToDo",
    whatToDo:
      "After moving, register your address with the local municipality within the applicable period. Bring the documents requested by the municipality.",
    whatToPrepare:
      "Commonly requested items include your residence card and address information. Exact requirements can vary by municipality.",
    cachedWhatToDo:
      "After moving, register your address with the local municipality and check the municipality’s current document requirements.",
    cachedWhatToPrepare:
      "Your saved copy may not include the latest document requirements.",
    keywords: ["resident registration", "moving", "address", "municipality"],
    popular: true,
    cachedOffline: true,
  },
  {
    id: "residence-status",
    title: "Residence status in Japan",
    topic: "visaResidence",
    categoryKey: "visaResidence",
    updated: "18 Aug 2026",
    updatedMonth: "Aug 2026",
    scope: "For workers checking what their current residence status allows.",
    primaryHeading: "whatItMeans",
    secondaryHeading: "whatToCheck",
    disclaimerKey: "immigration",
    cachedHeading: "whatToCheck",
    whatToDo:
      "Your residence status defines the activities and conditions that apply to your stay in Japan. Check the status and period shown on your residence card.",
    whatToPrepare:
      "Before changing work or other major activities, confirm whether your status allows it and whether a notification or procedure may be required.",
    cachedWhatToDo:
      "Your residence status and period of stay are shown on your residence card. Check current official immigration guidance before making changes that may affect your status.",
    cachedWhatToPrepare:
      "Your saved copy may not include the latest immigration requirements.",
    keywords: ["residence status", "visa", "status of residence"],
    popular: true,
    cachedOffline: true,
  },
  {
    id: "address-registration-timing",
    title: "When to register a new address",
    topic: "japanPreparation",
    categoryKey: "residence",
    updated: "18 Aug 2026",
    updatedMonth: "Aug 2026",
    scope: "For workers who recently moved to a new address in Japan.",
    primaryHeading: "whenToAct",
    secondaryHeading: "whatToPrepare",
    disclaimerKey: "timing",
    cachedHeading: "whenToAct",
    whatToDo:
      "After moving, complete the required address registration with the local municipality within the applicable period. Check the municipality’s current instructions.",
    whatToPrepare:
      "Keep your residence card, address information, and any moving-related documents requested by the municipality ready before you visit.",
    cachedWhatToDo:
      "Register your new address with the local municipality and confirm the current deadline with them.",
    cachedWhatToPrepare:
      "Your saved copy may not include the latest document requirements.",
    keywords: ["resident registration", "address", "register", "timing"],
    popular: false,
    cachedOffline: false,
  },
  {
    id: "city-hall-documents",
    title: "Documents to bring to city hall",
    topic: "documentsIdentity",
    categoryKey: "documents",
    updated: "18 Aug 2026",
    updatedMonth: "Aug 2026",
    scope: "For workers preparing for a municipality procedure after moving.",
    primaryHeading: "commonItems",
    secondaryHeading: "beforeYouGo",
    disclaimerKey: "documentList",
    cachedHeading: "commonItems",
    whatToDo:
      "Commonly requested items can include your residence card, address information, and municipality forms related to your move.",
    whatToPrepare:
      "Requirements can differ by municipality and procedure. Check the official local guidance so you know which originals or copies are needed.",
    cachedWhatToDo:
      "Confirm the documents your city hall requests before visiting, because the list can change.",
    cachedWhatToPrepare:
      "Your saved copy may not include the latest document requirements.",
    keywords: ["resident registration", "city hall", "documents"],
    popular: false,
    cachedOffline: false,
  },
];

export type KnowledgeQuestionStatus = "waiting" | "answered";

export interface KnowledgeQuestion {
  id: string;
  question: string;
  details: string;
  topic: KnowledgeTopicId;
  status: KnowledgeQuestionStatus;
  /** Date shown in the My questions list, e.g. "24 Aug 2026". */
  listDate: string;
  submittedDate: string;
  answeredDate?: string;
  answer?: string;
  /** Shortened answer served from the offline cache (Figma WD-46B). */
  cachedAnswer?: string;
  /** Month stamp of the guidance the answer is based on, e.g. "Aug 2026". */
  answerUpdatedMonth?: string;
  relatedArticleId: string;
}

export const KNOWLEDGE_QUESTIONS: KnowledgeQuestion[] = [
  {
    id: "visa-update-pending",
    question: "Can I work while my visa update is pending?",
    details:
      "My residence status renewal is still processing. Can I continue my current job while I wait?",
    topic: "visaResidence",
    status: "waiting",
    listDate: "24 Aug 2026",
    submittedDate: "24 Aug 2026",
    relatedArticleId: "residence-status",
  },
  {
    id: "address-after-moving",
    question: "When should I register my address after moving?",
    details:
      "I moved to a new apartment and I am not sure how soon the address registration needs to be done.",
    topic: "japanPreparation",
    status: "answered",
    listDate: "23 Aug 2026",
    submittedDate: "23 Aug 2026",
    answeredDate: "24 Aug 2026",
    answer:
      "Register your address with the local municipality within the applicable period after moving. Check the municipality’s current requirements because required documents can vary.",
    cachedAnswer:
      "Register your address with the local municipality and check current local requirements.",
    answerUpdatedMonth: "Aug 2026",
    relatedArticleId: "resident-registration",
  },
];

/** Prefilled draft shown on the Ask a Question mock (WD-44 / W-44). */
export const ASK_DRAFT = {
  topic: "visaResidence" as KnowledgeTopicId,
  question: "Can I work while my visa update is pending?",
  details:
    "My residence status renewal is still processing. Can I continue my current job while I wait?",
};

/** Demo query used by the Figma search-results mock (WD-42B). */
export const DEFAULT_SEARCH_QUERY = "resident registration";

export function searchKnowledgeArticles(query: string): KnowledgeArticle[] {
  const q = query.trim().toLowerCase();
  if (q === "") return [];
  return KNOWLEDGE_ARTICLES.filter(
    (article) =>
      article.title.toLowerCase().includes(q) ||
      article.keywords.some(
        (keyword) => keyword.includes(q) || q.includes(keyword),
      ),
  );
}
