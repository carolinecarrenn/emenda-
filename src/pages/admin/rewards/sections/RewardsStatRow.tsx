import { Coins, Flag, SlidersHorizontal, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINREWARDS_COPY } from "../rewards.copy";
import {
  REWARD_STATS,
  type RewardStatKey,
  type RewardTone,
} from "../rewards.mock";

/* AD-07 stat row (1223:3020 / 3026 / 3032 / 3038): four flat white cards,
   278x112 (the last 274), radius 12, 1px #d6e3de, 12px apart across the
   1144px column — a 30px pastel tile (radius 9) beside the 10px semibold
   #65746d label, then the 24px bold #17362e value with its 9px caption.

   Same card as AD-01's KPI row, so the tinted tile carries the same lucide
   glyph treatment that row already uses in place of the placeholder letters
   Figma draws (C / E / A / F). */

const TONE_TILE: Record<RewardTone, string> = {
  mint: "bg-[#e8f5f0] text-[#083d2d]",
  blue: "bg-[#eff5fc] text-[#2f5e9b]",
  amber: "bg-[#fdf7ec] text-[#b57023]",
  red: "bg-[#fdf0ef] text-[#b04139]",
};

const STAT_ICONS: Record<RewardStatKey, LucideIcon> = {
  coinBalance: Coins,
  earnedToday: TrendingUp,
  adjustedThisMonth: SlidersHorizontal,
  flagged: Flag,
};

export function RewardsStatRow() {
  const c = useSectionCopy(ADMINREWARDS_COPY);

  return (
    <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2 xl:grid-cols-4">
      {REWARD_STATS.map((stat) => {
        const Icon = STAT_ICONS[stat.key];
        return (
          <div
            key={stat.key}
            className="flex h-[112px] flex-col gap-[16px] rounded-[12px] border border-[#d6e3de] bg-white px-[13px] pt-[13px] pb-[12px]"
          >
            <div className="flex h-[30px] items-center gap-[8px]">
              <div
                className={`flex size-[30px] shrink-0 items-center justify-center rounded-[9px] ${TONE_TILE[stat.tone]}`}
              >
                <Icon
                  className="size-[16px]"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </div>
              <p className="truncate text-[10px] font-semibold text-[#65746d]">
                {c.stats.labels[stat.key]}
              </p>
            </div>
            <div className="flex items-baseline gap-[10px]">
              <p className="text-[24px] leading-none font-bold text-[#17362e]">
                {stat.value}
              </p>
              <p className="truncate text-[10px] text-[#65746d] lg:text-[9px]">
                {c.stats.captions[stat.key]}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
