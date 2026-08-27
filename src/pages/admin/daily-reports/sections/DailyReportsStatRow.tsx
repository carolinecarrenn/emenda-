import { useSectionCopy } from "@/i18n/copy";
import { DAILY_REPORTS_COPY } from "../daily-reports.copy";
import {
  DAILY_STATS,
  SUBMITTED_PERCENT,
  type DailyStatTone,
} from "../daily-reports.mock";

/* AD-06 "stat" quad (1223:2656 / :2662 / :2668 / :2674): four flat white
   cards 278x112 (the last 274), radius 12, 1px #d6e3de — a 30px pastel tile
   (radius 9) carrying the 14px bold letter glyph, the 10px semibold #65746d
   label beside it, then the 24px bold #17362e value with its 9px #65746d
   caption. Same geometry as AD-01's AdminKpiRow, so the mobile treatment
   follows it: one column, two from sm, four from xl. */

const TONE_TILE: Record<DailyStatTone, string> = {
  blue: "bg-[#eff5fc] text-[#2f5e9b]",
  mint: "bg-[#e8f5f0] text-[#083d2d]",
  amber: "bg-[#fdf7ec] text-[#b57023]",
  red: "bg-[#fdf0ef] text-[#b04139]",
};

export function DailyReportsStatRow() {
  const c = useSectionCopy(DAILY_REPORTS_COPY);

  return (
    <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2 xl:grid-cols-4">
      {DAILY_STATS.map((stat) => (
        <div
          key={stat.key}
          className="flex h-[112px] flex-col gap-[8px] rounded-[12px] border border-[#d6e3de] bg-white px-[14px] pt-[14px] pb-[12px]"
        >
          <div className="flex h-[30px] items-center gap-[8px]">
            <div
              className={`flex size-[30px] shrink-0 items-center justify-center rounded-[9px] text-[14px] leading-none font-bold ${TONE_TILE[stat.tone]}`}
              aria-hidden="true"
            >
              {stat.badge}
            </div>
            <p className="truncate text-[10px] font-semibold text-[#65746d]">
              {c.stats.labels[stat.key]}
            </p>
          </div>
          <div className="flex h-[40px] items-center gap-[10px]">
            <p className="text-[24px] leading-none font-bold text-[#17362e]">
              {stat.value}
            </p>
            <p className="text-[10px] leading-[14px] text-[#65746d] lg:text-[9px]">
              {c.stats.captions[stat.key].replace(
                "{percent}",
                String(SUBMITTED_PERCENT),
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
