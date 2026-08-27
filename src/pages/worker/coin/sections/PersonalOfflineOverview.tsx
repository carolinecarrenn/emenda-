import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { COIN_COPY } from "../coin.copy";
import { formatCoinNumber, formatSignedCoin } from "../coinFormat";
import {
  DAILY_CHECK_IN_REWARD,
  LAST_SYNCED_TIME,
  cachedActivityEntries,
  type CoinState,
} from "../coinMock";
import { InfoCard } from "./InfoCard";

/* W-60W "Emenda Coin — Personal Offline" (1258:253): the headless overview
   with no live data — the amber "You're offline" card (1258:263), the amber
   daily check-in card whose CTA is an inert #b8cfc4 button (1258:266), the
   mint "LAST SYNCED BALANCE" card with its 30px/36 numeral (1258:273) and the
   white "Recent personal activity" list of 58px cached rows (1258:277), all
   at a 12px gap. Desktop keeps the 1012px column and pairs the two short
   cards side by side. */
export function PersonalOfflineOverview({ state }: { state: CoinState }) {
  const c = useSectionCopy(COIN_COPY);
  const { language } = useLanguage();
  const rows = cachedActivityEntries();

  return (
    <div className="space-y-[12px] lg:space-y-[24px]">
      <InfoCard
        tone="amber"
        density="note"
        title={c.personalOffline.bannerTitle}
        body={c.personalOffline.bannerBody}
        className="lg:min-h-[82px]"
      />

      <div className="grid gap-[12px] lg:grid-cols-2 lg:gap-[28px]">
        {/* 1258:266 — check-in stays visible but cannot be claimed offline */}
        <div className="rounded-[14px] border border-lp-line bg-[#fef6da] px-[14px] py-[12px] lg:border-[#ed911a] lg:bg-[#fff5d6] lg:p-[17px] lg:min-h-[160px]">
          <div className="flex h-[18px] items-center justify-between gap-3 lg:h-auto lg:items-start">
            <p className="text-[11px] leading-[15px] font-semibold text-lp-ink lg:text-[14px] lg:leading-normal lg:text-[#804d0d]">
              {c.overview.dailyCheckIn}
            </p>
            <p className="text-[11px] leading-[15px] font-semibold text-lp-muted lg:text-[13px] lg:leading-normal">
              {c.overview.dailyReward(
                formatSignedCoin(DAILY_CHECK_IN_REWARD, language),
              )}
            </p>
          </div>
          <p className="mt-[6px] text-[10px] leading-[14px] text-lp-muted lg:mt-[10px] lg:text-[12px] lg:leading-[19px]">
            {c.personalOffline.checkInBody}
          </p>
          <div className="mt-[6px] flex h-[38px] w-full items-center justify-center rounded-[12px] bg-[#b8cfc4] text-[11px] leading-[14px] font-semibold text-white opacity-55 lg:mt-[18px] lg:w-[240px] lg:text-[13px] lg:leading-normal">
            {c.personalOffline.checkInButton}
          </div>
        </div>

        {/* 1258:273 — the last balance that reached this device */}
        <div className="rounded-[14px] border border-lp-line bg-lp-tint p-[14px] lg:rounded-[18px] lg:px-[19px] lg:py-[16px] lg:min-h-[160px]">
          <p className="text-[10px] leading-[13px] font-semibold tracking-[0.02em] text-lp-muted lg:text-[11px] lg:leading-normal">
            {c.personalOffline.cachedBalanceEyebrow}
          </p>
          <p className="mt-[6px] font-display text-[30px] leading-[36px] font-bold text-lp-green lg:mt-[18px] lg:leading-[1.15]">
            {formatCoinNumber(state.balance, language)}
          </p>
          <p className="mt-[6px] text-[10px] leading-[14px] text-lp-muted lg:mt-[10px] lg:text-[12px] lg:leading-normal">
            {c.personalOffline.cachedBalanceMeta(LAST_SYNCED_TIME)}
          </p>
        </div>
      </div>

      {/* 1258:277 — cached ledger rows, read-only while offline */}
      <div className="rounded-[14px] border border-lp-line bg-white p-[14px] lg:rounded-[18px] lg:px-[17px] lg:py-[17px]">
        <p className="text-[13px] leading-[18px] font-semibold text-lp-ink lg:px-[4px] lg:text-[15px] lg:leading-normal">
          {c.personalOffline.activityTitle}
        </p>
        <div className="mt-[6px] space-y-[6px] lg:mt-[12px] lg:space-y-[8px]">
          {rows.map((entry) => (
            <div
              key={entry.id}
              className="flex h-[58px] items-center justify-between gap-4 rounded-[10px] lg:bg-lp-tint lg:px-[14px] lg:py-[12px]"
            >
              <div>
                <p className="text-[11px] leading-[15px] font-semibold text-lp-ink lg:text-[13px] lg:leading-normal">
                  {c.ledgerTitle[entry.titleId]}
                </p>
                <p className="mt-[3px] text-[10px] leading-[14px] text-lp-muted lg:mt-[5px] lg:text-[11px] lg:leading-normal">
                  {entry.titleId === "identityVerified"
                    ? c.personalOffline.cachedPreviouslyEarned
                    : c.personalOffline.cachedOn(
                        formatDisplayDate(entry.date, language),
                      )}
                </p>
              </div>
              <p className="text-[12px] leading-[16px] font-semibold text-lp-green lg:text-[13px] lg:leading-normal">
                {formatSignedCoin(entry.amount, language)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
