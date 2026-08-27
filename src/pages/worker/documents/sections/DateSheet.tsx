import { Calendar } from "lucide-react";
import { useCommonCopy } from "@/i18n/common";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";

/** W-38L 758:1118 / W-38M 758:1129 (and their W-39K/L edit twins): the date
 *  pickers are NOT preset lists — the sheet holds one free date field (52px,
 *  14px radius, 13px value, right calendar glyph, "Enter any valid date")
 *  and a solid green Done pill. Clearing the field returns "no expiry". */

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/** "12 Aug 2026" → "2026-08-12" (empty string when unset / unparseable). */
function rawDateToIso(raw: string | null): string {
  if (!raw) return "";
  const match = raw.match(/^(\d{1,2}) ([A-Za-z]{3}) (\d{4})$/);
  if (!match) return "";
  const monthIndex = MONTHS.indexOf(match[2]);
  if (monthIndex === -1) return "";
  return `${match[3]}-${String(monthIndex + 1).padStart(2, "0")}-${match[1].padStart(2, "0")}`;
}

/** "2026-08-12" → "12 Aug 2026" (raw record format, never translated). */
function isoDateToRaw(iso: string): string | null {
  const match = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  const monthIndex = Number(match[2]) - 1;
  if (monthIndex < 0 || monthIndex > 11) return null;
  return `${Number(match[3])} ${MONTHS[monthIndex]} ${match[1]}`;
}

export function DateSheet({
  title,
  helper,
  value,
  placeholder,
  onChange,
  onClose,
}: {
  title: string;
  helper: string;
  /** Raw record date, e.g. "12 Aug 2026", or null for none. */
  value: string | null;
  /** Shown when no date is set (e.g. "No expiry"). */
  placeholder: string;
  onChange: (rawDate: string | null) => void;
  onClose: () => void;
}) {
  const common = useCommonCopy();
  const { language } = useLanguage();

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label={common.action.close}
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-[rgba(20,31,26,0.3)]"
      />
      <div className="absolute inset-x-0 bottom-0 rounded-t-[18px] border border-[#d7e2dc] bg-white p-[20px] lg:inset-x-auto lg:top-1/2 lg:bottom-auto lg:left-1/2 lg:w-[520px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-[18px]">
        <p className="text-[18px] leading-[28px] font-semibold text-[#17231f]">
          {title}
        </p>
        <p className="mt-[8px] text-[12px] leading-[1.6] text-[#65746d]">
          {helper}
        </p>
        <div className="relative mt-[18px] flex h-[52px] w-full items-center rounded-[14px] border border-[#d7e2dc] bg-white px-[13px]">
          <span
            className={`text-[13px] ${value ? "text-[#17231f]" : "text-[#65746d]"}`}
          >
            {value ? formatDisplayDate(value, language) : placeholder}
          </span>
          <span className="ml-auto text-brand">
            <Calendar size={20} strokeWidth={1.5} />
          </span>
          <input
            type="date"
            aria-label={title}
            value={rawDateToIso(value)}
            onChange={(e) => onChange(isoDateToRaw(e.target.value))}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-[50px] flex h-[46px] w-full items-center justify-center rounded-[14px] bg-brand text-[12px] font-semibold text-white hover:bg-brand-deep"
        >
          {common.action.done}
        </button>
      </div>
    </div>
  );
}
