import { Check } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { ADMIN_COPY } from "../admin.copy";
import { DAILY_REPORT_HEALTH, type DailyHealthLegendKey } from "../admin.mock";

/* AD-01 "Daily report health" (1182:5903): 396x244 white card, radius 12,
   1px #d6e3de — title, 8px subtitle, the 58px green submission badge beside
   88% / 164 submitted / 22 pending, then the three 22px dot-legend rows
   (On time / Late / Missing) with right-aligned 9px bold counts. */

const LEGEND_DOT: Record<DailyHealthLegendKey, string> = {
  onTime: "bg-[#0c5941]",
  late: "bg-[#b57023]",
  missing: "bg-[#b04139]",
};

export function DailyReportHealthCard() {
  const c = useSectionCopy(ADMIN_COPY);

  return (
    <div className="flex flex-col gap-[11px] rounded-[12px] border border-[#d6e3de] bg-white px-[16px] pt-[16px] pb-[14px] lg:h-[244px] lg:w-[396px]">
      {/* The card stacks on 11px gaps from Figma's own line boxes (title 16,
          sub-line 10 — 1182:5904 / :5905), so the summary block and the three
          legend rows land on y=64 / 139 / 172 / 205 instead of 5px high. */}
      <p className="text-[13px] leading-none font-bold text-[#17362f] lg:leading-[16px]">
        {c.dailyHealth.title}
      </p>
      <p className="text-[10px] leading-none text-[#65746d] lg:text-[8px] lg:leading-[10px]">
        {c.dailyHealth.subtitle.replace(
          "{count}",
          String(DAILY_REPORT_HEALTH.expected),
        )}
      </p>

      <div className="flex h-[64px] items-center gap-[14px]">
        {/* 1182:7840: the #e8f5f0 disc carries a 42px 1.5px #a3c7ba ring with
            a heavy 24px #0c5941 tick inside it — not one closed check icon. */}
        <div className="flex size-[58px] shrink-0 items-center justify-center rounded-full bg-[#e8f5f0]">
          <div className="flex size-[42px] items-center justify-center rounded-full border-[1.5px] border-[#a3c7ba]">
            <Check
              className="size-[36px] text-[#0c5941]"
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="flex flex-col gap-px">
          <p className="text-[18px] leading-none font-bold text-[#083d2d]">
            {DAILY_REPORT_HEALTH.percent}
          </p>
          <p className="text-[10px] leading-[14px] font-semibold text-[#17362f] lg:text-[9px]">
            {c.dailyHealth.submitted.replace(
              "{count}",
              String(DAILY_REPORT_HEALTH.submitted),
            )}
          </p>
          <p className="text-[9px] leading-[12px] text-[#65746d] lg:text-[8px]">
            {c.dailyHealth.pending.replace(
              "{count}",
              String(DAILY_REPORT_HEALTH.pending),
            )}
          </p>
        </div>
      </div>

      {DAILY_REPORT_HEALTH.legend.map((row) => (
        <div key={row.key} className="flex h-[22px] items-center gap-[8px]">
          <span
            className={`size-[7px] shrink-0 rounded-full ${LEGEND_DOT[row.key]}`}
          />
          <p className="flex-1 text-[9px] whitespace-nowrap text-[#65746d] lg:flex-none">
            {c.dailyHealth.legend[row.key]}
          </p>
          {/* Figma spaces the count off the label with a fixed 250px run
              (1182:5915 / :5920 / :5925) instead of right-aligning it. */}
          <span aria-hidden="true" className="hidden lg:block lg:w-[250px]" />
          <p className="text-[9px] font-bold text-[#17362f]">{row.count}</p>
        </div>
      ))}
    </div>
  );
}
