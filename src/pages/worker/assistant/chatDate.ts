import type { Language } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import type { AssistantCopy } from "./assistant.copy";
import type { AssistantChat } from "./assistantMock";

/**
 * History rows in WD-59 / WD-59C / W-59C show "Today", "Yesterday" or a raw
 * date ("22 Aug"). Relative labels are UI copy; raw dates go through the
 * shared display formatter so they follow the active language.
 */
export function chatDateLabel(
  chat: AssistantChat,
  copy: AssistantCopy,
  language: Language,
): string {
  if (chat.dateKind === "today") return copy.today;
  if (chat.dateKind === "yesterday") return copy.yesterday;
  return formatDisplayDate(chat.date ?? "", language);
}
