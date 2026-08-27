import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINEMPLOYEES_COPY } from "../employees.copy";
import { formatLastActive } from "../employees.format";
import type { AdminEmployee } from "../employees.mock";

/* AD-02 "Employee directory" (1223:829): a 760x580 white card, radius 12,
   1px #d6e3de, 16px inset — 13px bold title over an 8px #65746d line, then the
   8px semibold column header (Name 0 / Role 234 / Team 354 / Status 469 /
   Last active 594 inside the 728 content width), a #d6e3de rule, and 72px rows
   of 9px text closed by a 56x32 outlined "View" button. Row separators are the
   1px #f7faf8 hairlines of the frame.

   Below lg the same rows become a single-column stack — the desktop-drawn
   table has no mobile frame, so it follows the app's mobile convention. */

const ROW_GRID =
  "grid grid-cols-[234px_120px_115px_125px_56px_56px] items-center pr-[22px]";

export function EmployeeDirectoryCard({
  employees,
  onView,
}: {
  employees: AdminEmployee[];
  onView: (employee: AdminEmployee) => void;
}) {
  const c = useSectionCopy(ADMINEMPLOYEES_COPY);
  const { language } = useLanguage();

  return (
    <div className="rounded-[12px] border border-[#d6e3de] bg-white p-[16px] lg:h-[580px] lg:w-[760px]">
      <p className="text-[13px] leading-none font-bold text-[#17362f]">
        {c.directory.title}
      </p>
      <p className="mt-[6px] text-[11px] leading-none text-[#65746d] lg:text-[8px]">
        {c.directory.subtitle}
      </p>

      {/* Desktop table — AD-02 as drawn. */}
      <div className="mt-[16px] hidden lg:block">
        <div className={`${ROW_GRID} text-[8px] font-semibold text-[#65746d]`}>
          <span>{c.directory.columns.name}</span>
          <span>{c.directory.columns.role}</span>
          <span>{c.directory.columns.team}</span>
          <span>{c.directory.columns.status}</span>
          <span>{c.directory.columns.lastActive}</span>
          <span className="sr-only">{c.directory.view}</span>
        </div>
        <div className="mt-[12px] h-px bg-[#d6e3de]" />

        {employees.map((employee) => (
          <div
            key={employee.id}
            className={`${ROW_GRID} h-[72px] border-b border-[#f7faf8] last:border-b-0`}
          >
            <span className="truncate pr-[10px] text-[9px] font-semibold text-[#17362f]">
              {employee.name}
            </span>
            <span className="truncate pr-[10px] text-[9px] text-[#65746d]">
              {localizeTerm(employee.role, language)}
            </span>
            <span className="truncate pr-[10px] text-[9px] text-[#65746d]">
              {localizeTerm(employee.team, language)}
            </span>
            <span className="truncate pr-[10px] text-[9px] text-[#65746d]">
              {localizeTerm(employee.status, language)}
            </span>
            <span className="truncate text-[9px] whitespace-nowrap text-[#65746d]">
              {formatLastActive(employee.lastActive, c.lastActive)}
            </span>
            <button
              type="button"
              onClick={() => onView(employee)}
              className="h-[32px] w-[56px] rounded-[10px] border border-[#d6e3de] bg-white text-[11px] font-semibold text-[#083d2d]"
            >
              {c.directory.view}
            </button>
          </div>
        ))}

        {employees.length === 0 ? (
          <p className="pt-[24px] text-[10px] text-[#65746d]">
            {c.directory.noResults}
          </p>
        ) : null}
      </div>

      {/* Mobile stack — same rows, app mobile convention. */}
      <div className="mt-[14px] lg:hidden">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="flex items-center gap-[12px] border-b border-[#eef3ef] py-[12px] last:border-b-0"
          >
            <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
              <p className="truncate text-[13px] leading-none font-semibold text-[#17362f]">
                {employee.name}
              </p>
              <p className="truncate text-[11px] leading-none text-[#65746d]">
                {localizeTerm(employee.role, language)} ·{" "}
                {localizeTerm(employee.team, language)}
              </p>
              <p className="truncate text-[11px] leading-none text-[#65746d]">
                {localizeTerm(employee.status, language)} ·{" "}
                {formatLastActive(employee.lastActive, c.lastActive)}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onView(employee)}
              className="h-[32px] w-[56px] shrink-0 rounded-[10px] border border-[#d6e3de] bg-white text-[11px] font-semibold text-[#083d2d]"
            >
              {c.directory.view}
            </button>
          </div>
        ))}

        {employees.length === 0 ? (
          <p className="py-[16px] text-[12px] text-[#65746d]">
            {c.directory.noResults}
          </p>
        ) : null}
      </div>
    </div>
  );
}
