import { useSectionCopy } from "@/i18n/copy";
import { ADMINEMPLOYEES_COPY } from "../employees.copy";
import { EMPLOYEE_STATS } from "../employees.mock";

/* AD-02 stat pair (1223:878 / 1223:884): two 176x112 white cards, radius 12,
   1px #d6e3de, 16px apart — a 30px pastel tile (radius 9) carrying the letter
   mark beside the 10px semibold #65746d label, then the 24px bold value with
   its 9px #65746d caption on the same baseline. */

const TONE_TILE = {
  mint: "bg-[#e8f5f0] text-[#083d2d]",
  amber: "bg-[#fdf7ec] text-[#b57023]",
} as const;

export function EmployeeStatsRow() {
  const c = useSectionCopy(ADMINEMPLOYEES_COPY);

  return (
    <div className="grid grid-cols-2 gap-[16px]">
      {EMPLOYEE_STATS.map((stat) => (
        <div
          key={stat.key}
          className="flex h-[112px] w-full flex-col rounded-[12px] border border-[#d6e3de] bg-white p-[13px]"
        >
          <div className="flex items-center gap-[8px]">
            <div
              className={`flex size-[30px] shrink-0 items-center justify-center rounded-[9px] text-[14px] font-bold ${TONE_TILE[stat.tone]}`}
              aria-hidden="true"
            >
              {stat.glyph}
            </div>
            <p className="truncate text-[10px] font-semibold text-[#65746d]">
              {c.stats.labels[stat.key]}
            </p>
          </div>
          <div className="mt-auto flex items-baseline gap-[10px]">
            <p className="text-[24px] leading-none font-bold text-[#17362f]">
              {stat.value}
            </p>
            <p className="truncate text-[9px] text-[#65746d]">
              {c.stats.captions[stat.key].replace(
                "{count}",
                String(stat.captionCount),
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
