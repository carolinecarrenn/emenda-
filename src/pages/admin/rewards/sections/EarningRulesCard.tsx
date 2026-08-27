import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINREWARDS_COPY } from "../rewards.copy";
import { EARNING_RULES, type EarningRuleStatus } from "../rewards.mock";

/* AD-07 "Earning rules" (1223:3044): 560x512 white card, radius 12, 1px
   #d6e3de — 13px bold title over the 8px subtitle, then five 528x62 #f7faf8
   rows (radius 9) carrying the 10px semibold rule name, the 14px bold #083d2d
   coin amount and the status pill (Enabled / No reward mint #e8f5f0, Manual
   amber #fdf7ec).

   A row opens AD-07D's rule editor (?state=rule-edit). */

const STATUS_PILL: Record<EarningRuleStatus, string> = {
  enabled: "bg-[#e8f5f0] text-[#083d2d]",
  manual: "bg-[#fdf7ec] text-[#b57023]",
  noReward: "bg-[#e8f5f0] text-[#083d2d]",
};

export function EarningRulesCard() {
  const c = useSectionCopy(ADMINREWARDS_COPY);

  return (
    <div className="flex flex-col gap-[12px] rounded-[12px] border border-[#d6e3de] bg-white px-[15px] pt-[15px] pb-[15px] lg:h-[512px] lg:w-[560px]">
      <div className="flex flex-col gap-[6px]">
        <h3 className="text-[13px] leading-none font-bold text-[#17362e]">
          {c.earningRules.title}
        </h3>
        <p className="text-[10px] leading-none text-[#65746d] lg:text-[8px]">
          {c.earningRules.subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-[16px]">
        {EARNING_RULES.map((rule) => (
          <Link
            key={rule.id}
            to="/admin/rewards?state=rule-edit"
            aria-label={`${c.earningRules.editRuleAction} — ${rule.name}`}
            className="flex h-[62px] items-center justify-between gap-[10px] rounded-[9px] bg-[#f7faf8] px-[12px] hover:bg-[#eef5f1]"
          >
            <div className="flex min-w-0 flex-col gap-[6px]">
              <p className="truncate text-[10px] leading-none font-semibold text-[#17362e]">
                {rule.name}
              </p>
              <p className="text-[14px] leading-none font-bold text-[#083d2d]">
                {c.coinAmount.replace("{amount}", rule.amount)}
              </p>
            </div>
            <div className="shrink-0 lg:mr-[41px]">
              <span
                className={`flex h-[24px] items-center rounded-full px-[10px] text-[10px] font-semibold whitespace-nowrap ${STATUS_PILL[rule.status]}`}
              >
                {c.earningRules.status[rule.status]}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
