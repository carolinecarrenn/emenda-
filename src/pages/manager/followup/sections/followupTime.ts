import { formatDisplayDate } from "@/i18n/format";
import type { Language } from "@/i18n/language";
import type { FollowUpCopy } from "../followup.copy";

/**
 * The mock timestamps are stored raw ("Yesterday 09:14", "12 Aug 09:00",
 * "Today 09:22") and are never mutated. For display the relative-day word
 * resolves through copy and a real date runs through formatDisplayDate, so
 * JA reads "8月12日 09:00" while the clock time stays as recorded.
 */
export function formatSignalTime(
  raw: string,
  c: FollowUpCopy,
  language: Language,
): string {
  const parts = raw.split(" ");
  if (parts.length < 2) return raw;

  const time = parts[parts.length - 1];
  if (!/^\d{1,2}:\d{2}$/.test(time)) return raw;

  const head = parts.slice(0, -1).join(" ");
  if (head === "Today") return `${c.time.today} ${time}`;
  if (head === "Yesterday") return `${c.time.yesterday} ${time}`;
  return `${formatDisplayDate(head, language)} ${time}`;
}
