import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Loader,
  type LucideIcon,
} from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINFOLLOWUP_COPY } from "../followup.copy";
import {
  FOLLOW_UP_STATS,
  type FollowUpStatKey,
  type FollowUpTone,
} from "../followup.mock";

/* AD-05 stat strip (1223:2280 / 2286 / 2292 / 2298): four flat white cards,
   278/278/278/274 x 112, radius 12, 1px #d6e3de — a 30px pastel tile
   (radius 9) beside the 10px semibold #65746d label, then the 24px bold
   #17362e value with its 9px #65746d caption. Same card as the AD-01 KPI row
   (1182:5797), so the tile carries the same lucide glyph treatment. */

const TONE_TILE: Record<FollowUpTone, string> = {
  amber: "bg-[#fdf7ec] text-[#b57023]",
  mint: "bg-[#e8f5f0] text-[#083d2d]",
  red: "bg-[#fdf0ef] text-[#b04139]",
  blue: "bg-[#eff5fc] text-[#2f5e9b]",
};

const STAT_ICONS: Record<FollowUpStatKey, LucideIcon> = {
  needFollowUp: Clock,
  inProgress: Loader,
  escalated: AlertTriangle,
  resolvedToday: CheckCircle2,
};

export function FollowUpStatRow() {
  const c = useSectionCopy(ADMINFOLLOWUP_COPY);

  return (
    <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2 xl:grid-cols-4">
      {FOLLOW_UP_STATS.map((stat) => {
        const Icon = STAT_ICONS[stat.key];
        const caption = c.stats.captions[stat.key]
          .replace("{count}", String(stat.captionCount ?? ""))
          .replace("{percent}", String(stat.captionCount ?? ""));

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
