import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { COIN_COPY } from "./coin.copy";
import { CoinPageHeader } from "./sections/CoinPageHeader";
import { CoinSkeleton } from "./sections/CoinSkeleton";
import { CoinStateBanner } from "./sections/CoinStateBanner";
import { HistoryLedgerCard } from "./sections/HistoryLedgerCard";

/** Coin history ledger (Figma WD-60A; mobile W-60A). Five uniform 68px rows
 *  plus the compact trailing row, under the All/Earned/Pending/Used filter
 *  chips and the uppercase month label. */
export function CoinHistoryPage() {
  const state = useScreenState();
  const c = useSectionCopy(COIN_COPY);

  return (
    <div className="max-w-[1012px] pt-2 lg:pt-[16px]">
      <CoinPageHeader
        crumb={c.overview.title}
        crumbTo="/worker/coin"
        title={c.history.title}
        mobileTitle={c.history.mobileTitle}
        subtitle={c.history.subtitle}
      />
      {state === "offline" && (
        <CoinStateBanner message={c.offline.banner} className="mt-[26px]" />
      )}
      {/* W-60A body (1151:304): the subtitle, the filter row and the ledger
          card at a 12px gap. */}
      <div className="mt-[12px] lg:mt-[52px]">
        {state === "loading" ? <CoinSkeleton /> : <HistoryLedgerCard />}
      </div>
    </div>
  );
}
