import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINEMPLOYEES_COPY } from "../employees.copy";
import { STATUS_PILL } from "../employees.format";
import type { AdminEmployee } from "../employees.mock";

/* AD-02 "Selected employee" (1223:890): a 368x252 white card, radius 12,
   1px #d6e3de, 16px inset — 13px bold title over an 8px line, a 52px mint
   avatar (radius 26) beside the 16px bold name and its 10px role · team line,
   the status pill on the right, three 9px label/value rows 24px apart, then
   the outlined "Edit employee" (104x32) and filled "Resend invite" (100x32). */
export function SelectedEmployeeCard({
  employee,
  onEdit,
  onResendInvite,
}: {
  employee: AdminEmployee;
  onEdit: () => void;
  onResendInvite: () => void;
}) {
  const c = useSectionCopy(ADMINEMPLOYEES_COPY);
  const { language } = useLanguage();

  const dailyReport = employee.dailyReportTime
    ? c.selected.dailyReportValue.replace("{time}", employee.dailyReportTime)
    : c.selected.noneValue;

  const openReports = employee.openReportId
    ? c.selected.openReportsValue
        .replace("{count}", String(employee.openReportCount))
        .replace("{id}", employee.openReportId)
    : c.selected.noneValue;

  const rows: { label: string; value: string }[] = [
    { label: c.selected.assignedManager, value: employee.manager },
    { label: c.selected.latestDailyReport, value: dailyReport },
    { label: c.selected.openReports, value: openReports },
  ];

  return (
    <div className="rounded-[12px] border border-[#d6e3de] bg-white p-[16px] lg:h-[252px] lg:w-[368px]">
      <p className="text-[13px] leading-none font-bold text-[#17362f]">
        {c.selected.title}
      </p>
      <p className="mt-[6px] text-[11px] leading-none text-[#65746d] lg:text-[8px]">
        {c.selected.subtitle}
      </p>

      <div className="mt-[14px] flex items-center gap-[14px]">
        <div
          className="flex size-[52px] shrink-0 items-center justify-center rounded-full bg-[#e8f5f0] text-[18px] font-bold text-[#083d2d]"
          aria-hidden="true"
        >
          {employee.initial}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-[6px]">
          <p className="truncate text-[16px] leading-none font-bold text-[#17362f]">
            {employee.name}
          </p>
          <p className="truncate text-[10px] leading-none text-[#65746d]">
            {localizeTerm(employee.role, language)} ·{" "}
            {localizeTerm(employee.team, language)}
          </p>
        </div>
        <span
          className={`flex h-[24px] shrink-0 items-center rounded-full px-[10px] text-[10px] font-semibold whitespace-nowrap ${STATUS_PILL[employee.status]}`}
        >
          {localizeTerm(employee.status, language)}
        </span>
      </div>

      <dl className="mt-[18px] flex flex-col gap-[13px]">
        {rows.map((row) => (
          <div key={row.label} className="flex items-start gap-[10px]">
            <dt className="w-[140px] shrink-0 text-[11px] font-semibold text-[#65746d] lg:w-[124px] lg:text-[9px]">
              {row.label}
            </dt>
            <dd className="min-w-0 flex-1 truncate text-[11px] text-[#17362f] lg:text-[9px]">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-[16px] flex flex-wrap items-center gap-[22px]">
        <button
          type="button"
          onClick={onEdit}
          className="h-[32px] rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold text-[#083d2d]"
        >
          {c.selected.editEmployee}
        </button>
        <button
          type="button"
          onClick={onResendInvite}
          className="h-[32px] rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[13px] text-[11px] font-semibold text-white"
        >
          {c.selected.resendInvite}
        </button>
      </div>
    </div>
  );
}
