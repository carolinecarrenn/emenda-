import { useSectionCopy } from "@/i18n/copy";
import { CHAT_COPY } from "../chat.copy";

/* WD-57E read-only notice (1182:6393): 1012x126 mint panel that replaces the
   plain translation note once employer access has ended — 14px semibold
   #0a4738 title, 12px body, then the preserved-originals pair at 12/11px. */
export function ReadOnlyNote() {
  const c = useSectionCopy(CHAT_COPY);
  return (
    <div className="min-h-[126px] rounded-[14px] border border-lp-line bg-lp-tint px-[19px] py-[10px]">
      <p className="text-[14px] leading-[24px] font-semibold text-[#0a4738]">
        {c.banner.readOnlyTitle}
      </p>
      <p className="mt-[4px] max-w-[900px] text-[12px] leading-[17px] text-lp-muted">
        {c.banner.readOnlyBody}
      </p>
      <p className="mt-[12px] text-[12px] leading-[20px] font-semibold text-[#0a4738]">
        {c.hub.noteTitle}
      </p>
      <p className="mt-[2px] max-w-[860px] text-[11px] leading-[16px] text-lp-muted">
        {c.hub.noteBody}
      </p>
    </div>
  );
}
