import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { COIN_COPY } from "../coin.copy";
import { formatSignedCoin } from "../coinFormat";
import { EARN_RULES, type EarnRuleId } from "../coinMock";

/* W-60 nodes 1179:328/333/338/343 — rules that are already earned or claimable
   today print their status line in green; a rule still waiting on an outside
   confirmation stays muted. */
const PENDING_STATUS_RULE_IDS: EarnRuleId[] = ["eligibleDailyReport"];

/* WD-60 "Ways to earn" (1186:1415): white card 492x150, radius 16 — title,
   right-aligned 11px "See rules" link and four 12px rule lines joined with
   the mock's "·" separators. Mobile (W-60 node 1179:321) is the same card at
   350x180, radius 14: a 22px header with a 12px title and a 10px "See rules",
   then four 32px status rows — a 10px name over a 9px status line with the
   11px green amount right-aligned. Opens WD-60B. */
export function WaysToEarnCard() {
  const c = useSectionCopy(COIN_COPY);
  const { language } = useLanguage();

  return (
    <Link
      to="/worker/coin/earn"
      className="block h-[180px] overflow-hidden rounded-[14px] border border-lp-line bg-white px-[14px] pt-[12px] pb-0 hover:border-lp-green lg:h-[150px] lg:rounded-[16px] lg:p-[17px] lg:pt-[15px]"
    >
      <div className="flex h-[22px] items-center justify-between gap-3 lg:h-auto lg:items-start">
        <p className="text-[12px] leading-[16px] font-semibold text-lp-ink lg:text-[16px] lg:leading-normal">
          {c.overview.waysToEarn}
        </p>
        <span className="text-[10px] leading-[14px] font-semibold text-lp-green lg:mr-[24px] lg:text-[11px] lg:leading-normal">
          {c.overview.seeRules}
        </span>
      </div>

      {/* W-60 nodes 1179:325-344 — mobile status rows */}
      <div className="mt-[5px] space-y-[5px] lg:hidden">
        {EARN_RULES.map((rule) => {
          const rules = c.earnRule[rule.id];
          const pending = PENDING_STATUS_RULE_IDS.includes(rule.id);
          return (
            <div
              key={rule.id}
              className="flex h-[32px] items-center justify-between gap-3"
            >
              <div className="flex h-[32px] flex-col gap-px">
                <p className="text-[10px] leading-[13px] font-semibold text-lp-ink">
                  {rules.title}
                </p>
                <p
                  className={`text-[9px] leading-[12px] ${
                    pending ? "text-lp-muted" : "text-lp-green"
                  }`}
                >
                  {rules.waysStatus}
                </p>
              </div>
              <p className="text-[11px] leading-[15px] font-semibold text-lp-green">
                {formatSignedCoin(rule.amount, language)}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-[24px] hidden text-[12px] leading-[15px] text-lp-muted lg:block">
        {EARN_RULES.map((rule) => {
          const rules = c.earnRule[rule.id];
          const parts = [
            rules.title,
            formatSignedCoin(rule.amount, language),
            rules.waysNote,
          ].filter(Boolean);
          return <p key={rule.id}>{parts.join(" · ")}</p>;
        })}
      </div>
    </Link>
  );
}
