import { Link } from "react-router-dom";
import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { COIN_COPY } from "../coin.copy";
import { formatCoinNumber } from "../coinFormat";
import type { CoinReward } from "../coinMock";

/* W-60L reward rows (1186:275 / 1186:280): 350x72 rows at radius 14 with a
   #d9e1dc border — an available reward is a mint #f0f8f3 row linking to the
   W-60M detail (11px/15 title over a 9px/13 "Sakura Care · available now"
   line, with an 11px green cost on the right); an unavailable one stays a
   flat white row with an em dash instead of a price. */
export function RewardRow({ reward }: { reward: CoinReward }) {
  const c = useSectionCopy(COIN_COPY);
  const { language } = useLanguage();
  const rewardCopy = c.reward[reward.id];

  const meta = reward.available
    ? [reward.fromEmployer ? EMPLOYER.name : "", rewardCopy.availableNow]
        .filter(Boolean)
        .join(" · ")
    : rewardCopy.unavailable;

  const cost =
    reward.cost === null
      ? c.rewards.dash
      : c.coinValue(formatCoinNumber(reward.cost, language));

  const content = (
    <>
      <div>
        <p className="text-[11px] leading-[15px] font-semibold text-lp-ink lg:text-[15px] lg:leading-normal">
          {rewardCopy.name}
        </p>
        <p className="mt-[3px] text-[9px] leading-[13px] text-lp-muted lg:mt-[6px] lg:text-[13px] lg:leading-normal">
          {meta}
        </p>
      </div>
      <p
        className={`text-[11px] leading-[15px] font-semibold lg:mt-[21px] lg:mr-[14px] lg:text-[14px] lg:leading-normal ${reward.available ? "text-lp-green" : "text-lp-muted"}`}
      >
        {cost}
      </p>
    </>
  );

  const shape =
    "flex h-[72px] items-center justify-between gap-4 rounded-[14px] border border-lp-line px-[12px] py-[11px] lg:h-[90px] lg:items-start lg:px-[17px] lg:py-[13px]";

  if (!reward.available) {
    return <div className={`${shape} bg-white`}>{content}</div>;
  }

  return (
    <Link
      to={`/worker/coin/rewards/${reward.id}`}
      className={`${shape} bg-lp-tint hover:border-lp-green lg:bg-white`}
    >
      {content}
    </Link>
  );
}
