import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINEMPLOYEES_COPY } from "../employees.copy";
import { STATUS_PILL } from "../employees.format";
import { ADMIN_ACTION_ROWS, type AdminActionRow } from "../employees.mock";

/* AD-02 "Needs admin action" (1223:909): a 368x184 white card, radius 12,
   1px #d6e3de, 16px inset — 13px bold title over an 8px #65746d line, then
   two 48px #f7faf8 rows (radius 9) carrying the 9px semibold name over its
   8px reason line, with the status pill on the right. */

function reasonLine(
  row: AdminActionRow,
  reasons: { inviteNotAccepted: string; missingContact: string },
): string {
  return row.reason === "inviteNotAccepted"
    ? reasons.inviteNotAccepted.replace("{days}", String(row.days ?? 0))
    : reasons.missingContact;
}

export function NeedsAdminActionCard() {
  const c = useSectionCopy(ADMINEMPLOYEES_COPY);
  const { language } = useLanguage();

  return (
    <div className="flex flex-col gap-[6px] rounded-[12px] border border-[#d6e3de] bg-white p-[16px] lg:h-[184px] lg:w-[368px]">
      <p className="text-[13px] leading-none font-bold text-[#17362f]">
        {c.needsAction.title}
      </p>
      <p className="mt-[2px] mb-[8px] text-[11px] leading-none text-[#65746d] lg:text-[8px]">
        {c.needsAction.subtitle}
      </p>

      {ADMIN_ACTION_ROWS.map((row) => (
        <div
          key={row.name}
          className="flex h-[48px] items-center gap-[10px] rounded-[9px] bg-[#f7faf8] px-[12px]"
        >
          <div className="flex min-w-0 flex-1 flex-col gap-[4px]">
            <p className="truncate text-[11px] leading-none font-semibold text-[#17362f] lg:text-[9px]">
              {row.name}
            </p>
            <p className="truncate text-[9px] leading-none text-[#65746d] lg:text-[8px]">
              {reasonLine(row, c.needsAction.reasons)}
            </p>
          </div>
          <span
            className={`flex h-[24px] shrink-0 items-center rounded-full px-[10px] text-[10px] font-semibold whitespace-nowrap ${STATUS_PILL[row.status]}`}
          >
            {localizeTerm(row.status, language)}
          </span>
        </div>
      ))}
    </div>
  );
}
