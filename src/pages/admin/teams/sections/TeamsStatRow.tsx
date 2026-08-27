import {
  Network,
  TriangleAlert,
  UserCog,
  UserMinus,
  type LucideIcon,
} from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINTEAMS_COPY } from "../teams.copy";
import { TEAM_STATS, type TeamStatKey } from "../teams.mock";
import { TONE_TILE, fill } from "./teamsTokens";

/* AD-03 stat row (1223:1207 … 1223:1225): four flat white cards, 278x112,
   radius 12, 1px #d6e3de — a 30px pastel tile (radius 9) beside the 10px
   semibold #65746d label, then the 24px bold #17362e value with its 9px
   caption. Same card as the AD-01 KPI row, so the glyph in the tile follows
   the built AD-01 convention (a lucide icon) rather than the frame's
   placeholder letter. */

const STAT_ICONS: Record<TeamStatKey, LucideIcon> = {
  teams: Network,
  managers: UserCog,
  unassigned: UserMinus,
  workloadAlert: TriangleAlert,
};

export function TeamsStatRow() {
  const c = useSectionCopy(ADMINTEAMS_COPY);

  return (
    <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2 xl:grid-cols-4">
      {TEAM_STATS.map((stat) => {
        const Icon = STAT_ICONS[stat.key];
        const caption = fill(c.stats.captions[stat.key], {
          count: stat.captionValue,
          limit: stat.captionValue,
        });

        return (
          <div
            key={stat.key}
            className="flex h-[112px] flex-col gap-[8px] rounded-[12px] border border-[#d6e3de] bg-white px-[14px] pt-[14px] pb-[12px]"
          >
            <div className="flex h-[30px] items-center gap-[8px]">
              <div
                className={`flex size-[30px] shrink-0 items-center justify-center rounded-[9px] ${TONE_TILE[stat.tone]}`}
              >
                <Icon
                  className="size-[18px]"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
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
                {caption}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
