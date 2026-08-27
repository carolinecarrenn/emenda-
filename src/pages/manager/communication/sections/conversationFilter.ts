import type { ConversationSummary } from "../communicationData";

/** Filter identity is language-independent; only the chip labels localize.
 *  MD-06 exposes All / Unread / Needs reply / Broadcast (1225:41–48),
 *  EM-06 exposes All 4 / Unread 1 / Follow-up 1 (994:2686–2691). */
export const DESKTOP_FILTERS = [
  "all",
  "unread",
  "needs-reply",
  "broadcast",
] as const;

export const MOBILE_FILTERS = ["all", "unread", "follow-up"] as const;

export type ConversationFilter =
  | (typeof DESKTOP_FILTERS)[number]
  | (typeof MOBILE_FILTERS)[number];

export function matchesFilter(
  conversation: ConversationSummary,
  filter: ConversationFilter,
): boolean {
  if (filter === "unread") return conversation.unreadCount > 0;
  if (filter === "needs-reply") return conversation.needsReply;
  if (filter === "broadcast") return conversation.broadcast;
  if (filter === "follow-up") return conversation.meta === "followUp";
  return true;
}

export function matchesSearch(
  conversation: ConversationSummary,
  search: string,
): boolean {
  const query = search.trim().toLowerCase();
  if (query === "") return true;
  return `${conversation.name} ${conversation.role} ${conversation.lastMessage}`
    .toLowerCase()
    .includes(query);
}
