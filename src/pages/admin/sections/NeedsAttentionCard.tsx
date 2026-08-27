import { useSectionCopy } from "@/i18n/copy";
import { ADMIN_COPY } from "../admin.copy";
import {
  ATTENTION_ITEMS,
  ATTENTION_TOTAL,
  type AttentionItem,
  type AttentionPriority,
} from "../admin.mock";

/* AD-01 "Needs attention" (1182:5874): 452x250 white card, radius 12,
   1px #d6e3de — header with the red "7 items" pill, then 52px #f7faf8 rows
   (radius 9) each carrying a 7px priority dot, the 9px semibold report line
   over its 8px reason line, and the High (#fdf0ef / #b04139) or Medium
   (#fdf7ec / #b57023) pill. */

const PRIORITY_DOT: Record<AttentionPriority, string> = {
  high: "bg-[#b04139]",
  medium: "bg-[#b57023]",
};

const PRIORITY_PILL: Record<AttentionPriority, string> = {
  high: "bg-[#fdf0ef] text-[#b04139]",
  medium: "bg-[#fdf7ec] text-[#b57023]",
};

function reasonLine(
  item: AttentionItem,
  reasons: { escalationOverdue: string; noManagerAssigned: string; slaRemaining: string },
): string {
  switch (item.reason) {
    case "escalationOverdue":
      return reasons.escalationOverdue.replace(
        "{days}",
        String(item.overdueDays ?? 0),
      );
    case "noManagerAssigned":
      return reasons.noManagerAssigned;
    case "slaRemaining":
      return reasons.slaRemaining.replace("{hours}", String(item.slaHours ?? 0));
  }
}

export function NeedsAttentionCard() {
  const c = useSectionCopy(ADMIN_COPY);

  return (
    <div className="flex flex-col gap-[10px] rounded-[12px] border border-[#d6e3de] bg-white px-[16px] pt-[16px] pb-[14px] lg:h-[250px] lg:w-[452px]">
      <div className="flex h-[28px] items-center gap-[8px]">
        <div className="flex min-w-0 flex-1 flex-col gap-px lg:w-[312px] lg:flex-none">
          <p className="text-[13px] leading-none font-bold text-[#17362f]">
            {c.attention.title}
          </p>
          <p className="truncate text-[10px] leading-none text-[#65746d] lg:text-[8px]">
            {c.attention.subtitle}
          </p>
        </div>
        <div className="flex h-[22px] shrink-0 items-center rounded-full bg-[#fdf0ef] px-[9px]">
          <span className="text-[10px] leading-none font-semibold whitespace-nowrap text-[#b04139]">
            {c.attention.itemsPill.replace("{count}", String(ATTENTION_TOTAL))}
          </span>
        </div>
      </div>

      {ATTENTION_ITEMS.map((item) => (
        <div
          key={item.id}
          className="flex h-[52px] items-center gap-[10px] rounded-[9px] bg-[#f7faf8] p-[8px]"
        >
          <span
            className={`size-[7px] shrink-0 rounded-full ${PRIORITY_DOT[item.priority]}`}
          />
          <div className="flex min-w-0 flex-1 flex-col gap-px lg:w-[270px] lg:flex-none">
            <p className="truncate text-[10px] leading-[14px] font-semibold text-[#17362f] lg:text-[9px]">
              {item.id} · {item.subject}
            </p>
            <p className="truncate text-[9px] leading-[12px] text-[#65746d] lg:text-[8px]">
              {reasonLine(item, c.attention.reasons)}
            </p>
          </div>
          <div
            className={`flex h-[22px] shrink-0 items-center rounded-full px-[9px] ${PRIORITY_PILL[item.priority]}`}
          >
            <span className="text-[10px] leading-none font-semibold whitespace-nowrap">
              {c.attention.priority[item.priority]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
