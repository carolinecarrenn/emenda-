import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import { ALERT_SUMMARY } from "../followupMock";
import { fill } from "./followupLabels";

/* EM-12 summary tiles (1030:257 peach · 1030:260 mint): two 62px tiles,
   radius 12, #d6e3de hairline — 9px caps #6e8a82 label over a 12px #094033
   value. HIGH PRIORITY sits on #ffe8de, DUE SOON on #e8f5f0. Mobile only;
   MD-12 folds both numbers into the KPI quad. */
export function AlertSummaryTiles() {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  const tiles = [
    {
      label: c.alerts.summaryHighLabel,
      value: fill(c.alerts.summaryHighValue, { count: ALERT_SUMMARY.high }),
      tone: "bg-[#ffe8de]",
    },
    {
      label: c.alerts.summaryDueLabel,
      value: fill(c.alerts.summaryDueValue, { count: ALERT_SUMMARY.dueSoon }),
      tone: "bg-[#e8f5f0]",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-[14px] lg:hidden">
      {tiles.map((tile) => (
        <div
          key={tile.label}
          className={`min-h-[62px] rounded-[12px] border border-[#d6e3de] px-[12px] py-[7px] ${tile.tone}`}
        >
          <p className="text-[9px] font-semibold text-[#6e8a82] uppercase">
            {tile.label}
          </p>
          <p className="mt-[6px] text-[12px] font-semibold text-[#094033]">
            {tile.value}
          </p>
        </div>
      ))}
    </div>
  );
}
