import { useSectionCopy } from "@/i18n/copy";
import { COIN_COPY } from "../coin.copy";
import type { CoinState } from "../coinMock";
import { BalanceCard } from "./BalanceCard";
import { DailyCheckInCard } from "./DailyCheckInCard";
import { WaysToEarnCard } from "./WaysToEarnCard";
import { RewardStatusCard } from "./RewardStatusCard";
import { PillLink } from "./PillLink";

interface OverviewBodyProps {
  state: CoinState;
  offline?: boolean;
}

/* WD-60 employer-connected overview body (1186:1403 → 1186:1425): balance
   card, the 492px "Daily check-in" + "Ways to earn" pair, the full-width
   "Current reward status" strip and the History / How to use Coin outline
   pills. The redeem and lifecycle screens (WD-60L…WD-60T) reuse this exact
   body under a swapped page heading, so it stays one component. */
export function OverviewBody({ state, offline = false }: OverviewBodyProps) {
  const c = useSectionCopy(COIN_COPY);

  return (
    <>
      <BalanceCard
        balance={state.balance}
        earnedThisMonth={state.earnedThisMonth}
      />
      <div className="mt-[10px] grid gap-[10px] lg:mt-[24px] lg:grid-cols-2 lg:gap-[28px]">
        <DailyCheckInCard checkedIn={state.checkedInToday} offline={offline} />
        <WaysToEarnCard />
      </div>
      <div className="mt-[10px] lg:mt-[26px]">
        <RewardStatusCard />
      </div>
      {/* W-60 node 1179:354 — the mobile mock sets the pills side by side */}
      <div className="mt-[10px] flex gap-[10px] lg:mt-[28px] lg:gap-[16px]">
        <PillLink
          to="/worker/coin/history"
          heightClass="h-[36px] lg:h-[46px]"
          className="w-[156px] lg:w-[220px]"
        >
          {c.overview.history}
        </PillLink>
        <PillLink
          to="/worker/coin/use"
          heightClass="h-[36px] lg:h-[46px]"
          className="w-[156px] lg:w-[240px]"
        >
          {c.overview.howToUseCoin}
        </PillLink>
      </div>
    </>
  );
}
