import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { COIN_COPY } from "../coin.copy";
import { formatCoinNumber } from "../coinFormat";
import type { CoinState } from "../coinMock";
import { AvailableBalanceBar } from "./AvailableBalanceBar";
import { InfoCard } from "./InfoCard";
import { PillLink } from "./PillLink";

/* WD-60V "Employer Access Ended" (1192:841 / 1197:24–1197:38): the balance
   bar stays, an amber "<employer> access ended" notice replaces the earning
   cards, a white "Pending reward continues" card reassures that in-flight
   rewards still resolve, and Daily check-in / History / Coin rules stay
   available — the balance survives losing the employer. */
export function AccessEndedOverview({ state }: { state: CoinState }) {
  const c = useSectionCopy(COIN_COPY);
  const { language } = useLanguage();

  return (
    <>
      <AvailableBalanceBar
        title={c.accessEnded.availableBalance}
        value={c.accessEnded.balanceValue(
          formatCoinNumber(state.balance, language),
        )}
      />

      <InfoCard
        tone="amber"
        title={c.accessEnded.endedTitle(EMPLOYER.name)}
        body={c.accessEnded.endedBody(EMPLOYER.name)}
        className="mt-[26px] rounded-[16px] lg:min-h-[96px]"
      />

      <InfoCard
        tone="white"
        title={c.accessEnded.pendingTitle}
        body={c.accessEnded.pendingBody}
        className="mt-[24px] rounded-[16px] lg:min-h-[106px]"
      />

      <div className="mt-[28px] flex flex-col gap-4 lg:flex-row lg:gap-[16px]">
        <PillLink
          to="/worker/coin/check-in"
          variant="primary"
          heightClass="h-[44px]"
          className="lg:w-[220px]"
        >
          {c.accessEnded.dailyCheckIn}
        </PillLink>
        <PillLink
          to="/worker/coin/history"
          heightClass="h-[44px]"
          className="lg:w-[180px]"
        >
          {c.accessEnded.history}
        </PillLink>
        <PillLink
          to="/worker/coin/rules"
          heightClass="h-[44px]"
          className="lg:w-[260px]"
        >
          {c.accessEnded.coinRules}
        </PillLink>
      </div>
    </>
  );
}
