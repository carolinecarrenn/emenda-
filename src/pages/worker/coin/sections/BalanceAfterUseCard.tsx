import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { COIN_COPY } from "../coin.copy";
import { formatCoinNumber } from "../coinFormat";

interface BalanceAfterUseProps {
  balance: number;
  cost: number;
}

/* WD-60M "balance after use" block: three label/value rows so the exact cost
   and the resulting balance are visible before the redeem confirmation. */
export function BalanceAfterUseCard({ balance, cost }: BalanceAfterUseProps) {
  const c = useSectionCopy(COIN_COPY);
  const { language } = useLanguage();

  const rows: { label: string; value: string; strong?: boolean }[] = [
    {
      label: c.rewardDetail.availableNowRow,
      value: c.coinValue(formatCoinNumber(balance, language)),
    },
    {
      label: c.rewardDetail.costRow,
      value: `− ${c.coinValue(formatCoinNumber(cost, language))}`,
    },
    {
      label: c.rewardDetail.afterRow,
      value: c.coinValue(formatCoinNumber(balance - cost, language)),
      strong: true,
    },
  ];

  return (
    <div className="rounded-[16px] border border-lp-line bg-white px-[17px] py-[15px]">
      <p className="text-[15px] font-semibold text-lp-ink">
        {c.rewardDetail.balanceAfterTitle}
      </p>
      <div className="mt-[13px] space-y-[10px]">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between gap-4"
          >
            <p className="text-[12px] text-lp-muted">{row.label}</p>
            <p
              className={`text-[13px] font-semibold ${row.strong ? "text-lp-green" : "text-lp-ink"}`}
            >
              {row.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
