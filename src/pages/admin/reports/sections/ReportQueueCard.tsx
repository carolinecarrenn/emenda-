import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { ADMINREPORTS_COPY, type AdminreportsCopy } from "../reports.copy";
import { REPORT_QUEUE, type QueueReport, type ReportSla } from "../reports.mock";

/* AD-04 "Report queue" (1223:1613): 776x580 white card, radius 12, 1px
   #d6e3de — 13px bold title over its 8px caption, an 8px semibold column
   header row at y57, a 1px #d6e3de rule at y77, then five 72px rows whose
   columns sit at x15 / 125 / 245 / 375 / 485 / 619 with the 56px "Open"
   button at x681. Below lg the same six values stack as a labelled card so
   no column is dropped. */

const COLUMN_GRID =
  "lg:grid lg:grid-cols-[110px_120px_130px_110px_134px_62px_1fr] lg:items-center";

function slaLabel(sla: ReportSla, c: AdminreportsCopy): string {
  switch (sla.kind) {
    case "overdueDays":
      return c.queue.sla.overdueDays.replace("{days}", String(sla.value));
    case "hoursLeft":
      return c.queue.sla.hoursLeft.replace("{hours}", String(sla.value));
    case "daysLeft":
      return c.queue.sla.daysLeft.replace("{days}", String(sla.value));
    case "resolved":
      return c.queue.sla.resolved;
  }
}

function QueueRow({ report }: { report: QueueReport }) {
  const c = useSectionCopy(ADMINREPORTS_COPY);
  const { language } = useLanguage();

  const cells: { key: string; label: string; value: string; strong?: boolean }[] =
    [
      {
        key: "report",
        label: c.queue.columns.report,
        value: report.id,
        strong: true,
      },
      {
        key: "reporter",
        label: c.queue.columns.reporter,
        value: report.reporter,
      },
      {
        key: "type",
        label: c.queue.columns.type,
        value: localizeTerm(report.type, language),
      },
      {
        key: "priority",
        label: c.queue.columns.priority,
        value: c.priority[report.priority],
      },
      {
        key: "owner",
        label: c.queue.columns.owner,
        value: report.owner ?? c.queue.noOwner,
      },
      { key: "sla", label: c.queue.columns.sla, value: slaLabel(report.sla, c) },
    ];

  return (
    <div
      className={`flex flex-col gap-[8px] rounded-[9px] bg-[#f7faf8] p-[10px] lg:h-[72px] lg:gap-0 lg:rounded-none lg:bg-transparent lg:p-0 ${COLUMN_GRID}`}
    >
      {cells.map((cell) => (
        <div key={cell.key} className="flex items-baseline gap-[8px] lg:block">
          <span className="w-[76px] shrink-0 text-[9px] font-semibold text-[#65746d] lg:hidden">
            {cell.label}
          </span>
          <span
            className={`min-w-0 text-[10px] lg:text-[9px] ${
              cell.strong
                ? "font-semibold text-[#17362e]"
                : "font-normal text-[#65746d]"
            }`}
          >
            {cell.value}
          </span>
        </div>
      ))}

      <Link
        to="/admin/reports?state=detail"
        aria-label={c.queue.openReport.replace("{id}", report.id)}
        className="mt-[2px] flex h-[32px] w-[56px] items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white text-[11px] font-semibold text-[#083d2d] lg:mt-0 lg:justify-start lg:px-[13px]"
      >
        {c.queue.open}
      </Link>
    </div>
  );
}

export function ReportQueueCard() {
  const c = useSectionCopy(ADMINREPORTS_COPY);

  return (
    <div className="flex flex-col rounded-[12px] border border-[#d6e3de] bg-white px-[15px] pt-[15px] pb-[15px] lg:h-[580px] lg:w-[776px] lg:pb-0">
      <p className="text-[13px] leading-[16px] font-bold text-[#17362e]">
        {c.queue.title}
      </p>
      <p className="mt-[2px] text-[9px] leading-[11px] text-[#65746d] lg:text-[8px]">
        {c.queue.subtitle}
      </p>

      <div
        className={`mt-[13px] hidden text-[8px] font-semibold text-[#65746d] ${COLUMN_GRID}`}
        aria-hidden="true"
      >
        <span>{c.queue.columns.report}</span>
        <span>{c.queue.columns.reporter}</span>
        <span>{c.queue.columns.type}</span>
        <span>{c.queue.columns.priority}</span>
        <span>{c.queue.columns.owner}</span>
        <span>{c.queue.columns.sla}</span>
        <span />
      </div>
      <div className="mt-[9px] hidden h-px bg-[#d6e3de] lg:block" />

      <div className="mt-[12px] flex flex-col gap-[10px] lg:mt-0 lg:gap-0">
        {REPORT_QUEUE.map((report) => (
          <QueueRow key={report.id} report={report} />
        ))}
      </div>
    </div>
  );
}
