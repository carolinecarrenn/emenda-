import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { COIN_COPY } from "../coin.copy";
import { formatCoinNumber, formatSignedCoin } from "../coinFormat";
import {
  DAILY_CHECK_IN_REWARD,
  EARN_RULES,
  PERSONAL_EARN_RULE_IDS,
  type CoinState,
} from "../coinMock";
import { AvailableBalanceBar } from "./AvailableBalanceBar";
import { InfoCard } from "./InfoCard";
import { PillLink } from "./PillLink";

/* WD-60U "Personal Overview" (1192:756 / 1197:4–1197:21): the no-employer
   variant — slim "Available balance" bar, "Daily check-in" and "Ways to earn
   now" cards, the amber "Work program rewards" explainer that only appears
   here, and History / Coin rules pills. */
export function PersonalOverview({ state }: { state: CoinState }) {
  const c = useSectionCopy(COIN_COPY);
  const { language } = useLanguage();

  const personalRules = EARN_RULES.filter((rule) =>
    PERSONAL_EARN_RULE_IDS.includes(rule.id),
  );

  return (
    <>
      <AvailableBalanceBar
        title={c.personal.availableBalance}
        value={c.personal.balanceValue(formatCoinNumber(state.balance, language))}
      />

      <div className="mt-[24px] grid gap-4 lg:grid-cols-2 lg:gap-[28px]">
        <div className="rounded-[16px] border border-lp-line bg-white p-[17px] lg:h-[160px] lg:pt-[13px] lg:pb-[15px]">
          <p className="text-[16px] font-semibold text-lp-ink">
            {c.personal.dailyCheckIn(
              formatSignedCoin(DAILY_CHECK_IN_REWARD, language),
            )}
          </p>
          <p className="mt-[12px] text-[12px] leading-[18px] text-lp-muted lg:mt-[21px]">
            {c.personal.dailyBody}
          </p>
          {state.checkedInToday ? (
            <div className="mt-[18px] flex h-[38px] w-full items-center justify-center rounded-[12px] border border-lp-line bg-lp-mint text-[13px] font-semibold text-lp-muted lg:mt-[29px] lg:w-[220px]">
              {c.overview.checkedInToday}
            </div>
          ) : (
            <Link
              to="/worker/coin/check-in"
              className="mt-[18px] flex h-[38px] w-full items-center justify-center rounded-[12px] bg-lp-button text-[13px] font-semibold text-white hover:bg-lp-green lg:mt-[29px] lg:w-[220px]"
            >
              {c.personal.checkInToday}
            </Link>
          )}
        </div>

        <div className="rounded-[16px] border border-lp-line bg-white p-[17px] lg:h-[160px] lg:pt-[13px]">
          <p className="text-[16px] font-semibold text-lp-ink">
            {c.personal.waysToEarnNow}
          </p>
          <div className="mt-[12px] space-y-[6px] text-[12px] leading-[18px] text-lp-muted lg:mt-[25px] lg:space-y-0 lg:leading-[15px]">
            {personalRules.map((rule) => {
              const parts = [
                rule.id === "identityVerified"
                  ? c.personal.identityVerification
                  : c.earnRule[rule.id].title,
                formatSignedCoin(rule.amount, language),
              ];
              if (rule.id !== "dailyCheckIn") parts.push(c.personal.stillEligible);
              return <p key={rule.id}>{parts.join(" ")}</p>;
            })}
          </div>
        </div>
      </div>

      <InfoCard
        tone="mint"
        titleTone="green"
        title={c.personal.workProgramTitle}
        body={c.personal.workProgramBody}
        bodyGap={18}
        className="mt-[26px] rounded-[16px] lg:min-h-[104px]"
      />

      <div className="mt-[28px] flex flex-col gap-4 lg:mt-[30px] lg:flex-row lg:gap-[16px]">
        <PillLink
          to="/worker/coin/history"
          heightClass="h-[44px]"
          className="lg:w-[200px]"
        >
          {c.personal.history}
        </PillLink>
        <PillLink
          to="/worker/coin/rules"
          heightClass="h-[44px]"
          className="lg:w-[200px]"
        >
          {c.personal.coinRules}
        </PillLink>
      </div>
    </>
  );
}
