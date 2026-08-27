import { useReports } from "@/data/reportsContext";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_COPY } from "../../manager.copy";

/* EM-11 metric tiles (1096:12-27): 172x50, #e8f5f0, border #c9ded4,
   radius 10 — 10px caps label over a bold value with the caption
   right-aligned on the same baseline; 6px column / 10px row gap. */
export function ReportsMetricRow() {
  const { todayReport } = useReports();
  const c = useSectionCopy(MANAGER_COPY);
  const submitted = todayReport ? 3 : 2;
  const completion = Math.round((submitted / 4) * 100);

  const metrics = [
    {
      label: c.reports.metricCompletion,
      value: `${completion}%`,
      caption: c.reports.metricCompletionCaption.replace(
        "{count}",
        String(submitted),
      ),
    },
    {
      label: c.reports.metricWorkerLed,
      value: "41%",
      caption: c.reports.metricWorkerLedCaption,
    },
    {
      label: c.reports.metricResponse,
      value: "18 min",
      caption: c.reports.metricResponseCaption,
    },
    {
      label: c.reports.metricUnreadAging,
      value: "3",
      caption: c.reports.metricUnreadAgingCaption,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-[6px] gap-y-[10px] lg:grid-cols-4 lg:gap-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="h-[50px] rounded-[10px] border border-[#c9ded4] bg-[#e8f5f0] px-3 pt-[3px] lg:h-auto lg:py-[9px]"
        >
          <p className="text-[10px] leading-[10px] font-semibold text-[#6b8f80] uppercase lg:leading-[15px]">
            {metric.label}
          </p>
          <div className="mt-[4px] flex items-baseline justify-between gap-2 leading-[16px] lg:leading-[27px]">
            <p className="text-[14px] font-bold text-brand-deep lg:text-[18px]">
              {metric.value}
            </p>
            <p className="text-right text-[8px] text-[#6b8f80] lg:text-[10px]">
              {metric.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
