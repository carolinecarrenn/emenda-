import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { COIN_COPY } from "./coin.copy";
import { formatCoinNumber } from "./coinFormat";
import { COIN_REWARDS, useCoinState } from "./coinMock";
import { CoinPageHeader } from "./sections/CoinPageHeader";
import { AvailableBalanceBar } from "./sections/AvailableBalanceBar";
import { CoinSkeleton } from "./sections/CoinSkeleton";
import { CoinStateBanner } from "./sections/CoinStateBanner";
import { InfoCard } from "./sections/InfoCard";
import { RewardRow } from "./sections/RewardRow";

/** Rewards catalog (Figma WD-60L; mobile W-60L): the balance available to
 *  use, the available/unavailable reward rows, and the amber
 *  "Before you use Coin" notice that precedes every redemption. */
export function CoinRewardsPage() {
  const state = useScreenState();
  const c = useSectionCopy(COIN_COPY);
  const { language } = useLanguage();
  const coin = useCoinState();

  return (
    <div className="max-w-[1012px] pt-2 lg:pt-0">
      <CoinPageHeader
        crumb={c.overview.title}
        crumbTo="/worker/coin"
        title={c.rewards.title}
        subtitle={c.rewards.subtitle}
      />
      {state === "offline" && (
        <CoinStateBanner message={c.offline.banner} className="mt-[26px]" />
      )}

      {state === "loading" ? (
        <div className="mt-[30px]">
          <CoinSkeleton />
        </div>
      ) : (
        <>
          {/* W-60L body (1186:261): balance bar, reward rows and the amber
              "Before you use Coin" notice, all at a 10px gap. */}
          <div className="mt-[10px] lg:mt-[52px]">
            <AvailableBalanceBar
              variant="compact"
              title={c.rewards.availableBalance}
              value={c.rewards.balanceValue(
                formatCoinNumber(coin.balance, language),
              )}
            />
          </div>
          <div className="mt-[10px] space-y-[10px] lg:mt-[20px] lg:space-y-[18px]">
            {COIN_REWARDS.map((reward) => (
              <RewardRow key={reward.id} reward={reward} />
            ))}
          </div>
          <InfoCard
            tone="amber"
            title={c.rewards.beforeTitle}
            body={c.rewards.beforeBody}
            bodyGap={25}
            size="md"
            className="mt-[10px] lg:mt-[18px] lg:min-h-[104px] lg:pt-[10px]"
          />
        </>
      )}
    </div>
  );
}
