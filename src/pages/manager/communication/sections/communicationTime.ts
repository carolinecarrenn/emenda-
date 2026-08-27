import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";

/**
 * Conversation stamps are stored raw and never mutated: recent threads carry
 * a clock time ("14:23", "09:15"), older ones a date ("13 Jan"). Clock times
 * are language-neutral and pass straight through; dates run through
 * formatDisplayDate, so JA reads "1月13日" while the record stays "13 Jan".
 */
export function useConversationTime(): (raw: string) => string {
  const { language } = useLanguage();
  return (raw: string) =>
    /^\d{1,2}:\d{2}$/.test(raw) ? raw : formatDisplayDate(raw, language);
}
