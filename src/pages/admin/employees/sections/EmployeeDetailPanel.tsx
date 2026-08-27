import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINEMPLOYEES_COPY } from "../employees.copy";
import { STATUS_PILL } from "../employees.format";
import type { AdminEmployee } from "../employees.mock";

/* AD-02B "Employee detail" (1226:28): a 328x700 white card, radius 12,
   1px #d6e3de, 20px inset — 16px bold title, a 56px mint avatar (radius 28)
   beside the 15px bold name and its 9px role · team line with the status pill
   on the right, six 9px label/value rows 42px apart, the filled "Edit employee"
   (104x32) next to the outlined "Resend invite" (100x32), and the 288x160
   #fdf0ef danger block (radius 10) whose 11px bold #b04139 heading sits over
   its 9px body and the outlined "Deactivate" (86x32). */
export function EmployeeDetailPanel({
  employee,
  onEdit,
  onResendInvite,
  onDeactivate,
}: {
  employee: AdminEmployee;
  onEdit: () => void;
  onResendInvite: () => void;
  onDeactivate: () => void;
}) {
  const c = useSectionCopy(ADMINEMPLOYEES_COPY);
  const { language } = useLanguage();

  const rows: { label: string; value: string }[] = [
    { label: c.detail.emendaId, value: employee.id },
    { label: c.detail.manager, value: employee.manager },
    { label: c.detail.phone, value: employee.phone },
    {
      label: c.detail.profile,
      value: c.detail.profileValue.replace(
        "{percent}",
        String(employee.profileComplete),
      ),
    },
    {
      label: c.detail.dailyReport,
      value: employee.dailyReportTime
        ? c.selected.dailyReportValue.replace(
            "{time}",
            employee.dailyReportTime,
          )
        : c.selected.noneValue,
    },
    {
      label: c.detail.openReport,
      value:
        employee.openReportId && employee.openReportSubject
          ? `${employee.openReportId} · ${employee.openReportSubject}`
          : c.selected.noneValue,
    },
  ];

  return (
    <div className="rounded-[12px] border border-[#d6e3de] bg-white p-[20px]">
      <p className="pr-[32px] text-[16px] leading-none font-bold text-[#17362f]">
        {c.detail.title}
      </p>

      <div className="mt-[23px] flex items-center gap-[16px]">
        <div
          className="flex size-[56px] shrink-0 items-center justify-center rounded-full bg-[#e8f5f0] text-[18px] font-bold text-[#083d2d]"
          aria-hidden="true"
        >
          {employee.initial}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-[8px]">
          <p className="truncate text-[15px] leading-none font-bold text-[#17362f]">
            {employee.name}
          </p>
          <p className="truncate text-[9px] leading-none text-[#65746d]">
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

      <dl className="mt-[24px] flex flex-col gap-[33px]">
        {rows.map((row) => (
          <div key={row.label} className="flex items-start gap-[10px]">
            <dt className="w-[112px] shrink-0 text-[11px] leading-none font-semibold text-[#65746d] lg:text-[9px]">
              {row.label}
            </dt>
            <dd className="min-w-0 flex-1 text-[11px] leading-none text-[#17362f] lg:text-[9px]">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-[55px] flex flex-wrap items-center gap-[20px]">
        <button
          type="button"
          onClick={onEdit}
          className="h-[32px] rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[13px] text-[11px] font-semibold text-white"
        >
          {c.detail.editEmployee}
        </button>
        <button
          type="button"
          onClick={onResendInvite}
          className="h-[32px] rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold text-[#083d2d]"
        >
          {c.detail.resendInvite}
        </button>
      </div>

      <div className="mt-[28px] rounded-[10px] bg-[#fdf0ef] p-[14px] lg:h-[160px]">
        <p className="text-[11px] leading-none font-bold text-[#b04139]">
          {c.detail.dangerTitle}
        </p>
        <p className="mt-[13px] text-[11px] leading-[15px] text-[#65746d] lg:text-[9px] lg:leading-[14px]">
          {c.detail.dangerBody}
        </p>
        <button
          type="button"
          onClick={onDeactivate}
          className="mt-[32px] h-[32px] rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold text-[#083d2d]"
        >
          {c.detail.dangerAction}
        </button>
      </div>
    </div>
  );
}
