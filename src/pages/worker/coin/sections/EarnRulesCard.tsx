import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { COIN_COPY } from "../coin.copy";
import { formatSignedCoin } from "../coinFormat";
import { EARN_RULES, ONE_TIME_EARN_RULE_IDS } from "../coinMock";

/* W-60B rule cards (1179:360 / 367 / 374 / 381): four standalone white 350x108
   cards at radius 14 with a #d9e1dc border, 14/12px padding and a 5px gap — a
   22px header row pairing an 11px/15 title with an 11px green amount, then the
   HOW / LIMIT / WHEN ADDED lines at 9px/13 (HOW in ink, the rest muted). The
   mobile frame has no wrapper card and no frequency line; the desktop twin
   WD-60B (1186:1538) keeps its "Ways to earn" card, mint rows and 13px type,
   so both are rendered from the same markup. The two one-time rules open
   W-60R "Earning status" (1186:437), which is otherwise only reachable by URL. */
export function EarnRulesCard({ className = "" }: { className?: string }) {
  const c = useSectionCopy(COIN_COPY);
  const { language } = useLanguage();

  return (
    <div
      className={`lg:rounded-[18px] lg:border lg:border-lp-line lg:bg-white lg:px-[17px] lg:py-[17px] ${className}`}
    >
      <p className="hidden px-[4px] text-[18px] font-semibold text-lp-ink lg:block">
        {c.earn.cardTitle}
      </p>
      <div className="space-y-[10px] lg:mt-[14px] lg:space-y-[8px]">
        {EARN_RULES.map((rule) => {
          const oneTime = ONE_TIME_EARN_RULE_IDS.includes(rule.id);
          const row = (
            <>
              <div className="min-w-0 flex-1">
                <div className="flex h-[22px] items-center justify-between gap-3 lg:block lg:h-auto">
                  <p className="text-[11px] leading-[15px] font-semibold text-lp-ink lg:text-[13px] lg:leading-normal">
                    {c.earnRule[rule.id].title}
                  </p>
                  {/* W-60B keeps the amount inside the header row */}
                  <p className="text-[11px] leading-[15px] font-semibold text-lp-green lg:hidden">
                    {formatSignedCoin(rule.amount, language)}
                  </p>
                </div>
                {/* WD-60B's frequency line; the mobile frame drops it */}
                <p className="mt-[6px] hidden text-[11px] text-lp-muted lg:block">
                  {c.earnRule[rule.id].frequency}
                </p>
                {/* WD-60B moves HOW/LIMIT/WHEN ADDED into the detail card
                    below the list, so the desktop rows stay two-line */}
                <p className="mt-[5px] text-[9px] leading-[13px] text-lp-ink lg:hidden">
                  {c.earnRule[rule.id].how}
                </p>
                <p className="mt-[3px] text-[9px] leading-[13px] text-lp-muted lg:hidden">
                  {c.earnRule[rule.id].limit}
                </p>
                <p className="mt-[3px] text-[9px] leading-[13px] text-lp-muted lg:hidden">
                  {c.earnRule[rule.id].whenAdded}
                </p>
              </div>
              <div className="hidden items-center gap-[8px] lg:flex">
                <p className="text-[14px] font-semibold text-lp-green">
                  {formatSignedCoin(rule.amount, language)}
                </p>
                {oneTime && (
                  <ChevronRight
                    aria-hidden
                    className="size-[16px] text-lp-green"
                  />
                )}
              </div>
            </>
          );

          const rowClass =
            "flex items-start justify-between gap-4 rounded-[14px] border border-lp-line bg-white px-[14px] py-[12px] lg:rounded-[10px] lg:border-0 lg:bg-lp-tint lg:px-[14px] lg:py-[13px] lg:min-h-[70px]";

          return oneTime ? (
            <Link
              key={rule.id}
              to="/worker/coin?state=one-time-earned"
              className={`${rowClass} hover:border-lp-green lg:border lg:border-transparent`}
            >
              {row}
            </Link>
          ) : (
            <div key={rule.id} className={rowClass}>
              {row}
            </div>
          );
        })}
      </div>
    </div>
  );
}
