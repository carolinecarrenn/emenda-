import { useSectionCopy } from "@/i18n/copy";
import { DAILY_REPORTS_COPY } from "../daily-reports.copy";
import { TEAM_BAR_TRACK_PX, TEAM_HEALTH } from "../daily-reports.mock";

/* AD-06 "Daily report health" (1223:2680): 560x512 white card, radius 12,
   1px #d6e3de — a 13px bold title over its 8px #65746d line, then five
   76px-pitch team rows. Each row is a 10px semibold label, a 260px #d6e3de
   hairline overlaid by the 6px #083d2d fill (radius 4), and the 9px #65746d
   percentage 16px to its right.
   Below lg the 260px track becomes fluid so the row still fits 390. */
export function TeamHealthCard() {
  const c = useSectionCopy(DAILY_REPORTS_COPY);

  return (
    <div className="rounded-[12px] border border-[#d6e3de] bg-white px-[15px] pt-[15px] pb-[15px] lg:h-[512px] lg:w-[560px]">
      <p className="text-[13px] leading-none font-bold text-[#17362e]">
        {c.health.title}
      </p>
      <p className="mt-[5px] text-[10px] leading-none text-[#65746d] lg:text-[8px]">
        {c.health.subtitle}
      </p>

      <div className="mt-[20px]">
        {TEAM_HEALTH.map((row) => (
          <div key={row.team} className="flex h-[62px] items-start lg:h-[76px]">
            <p className="w-[108px] shrink-0 truncate pr-[8px] text-[10px] leading-none font-semibold text-[#17362e] lg:w-[114px]">
              {row.team}
            </p>
            {/* Track = TEAM_BAR_TRACK_PX (260) at lg, fluid below it. */}
            <div className="relative mt-[5px] h-[6px] min-w-0 flex-1 lg:w-[260px] lg:flex-none">
              <span className="absolute top-[3px] left-0 block h-px w-full bg-[#d6e3de]" />
              <span
                className="absolute top-0 left-0 block h-[6px] rounded-[4px] bg-[#083d2d]"
                style={{ width: `${(row.barPx / TEAM_BAR_TRACK_PX) * 100}%` }}
              />
            </div>
            <p className="ml-[16px] shrink-0 text-[9px] leading-none text-[#65746d]">
              {row.percent}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
