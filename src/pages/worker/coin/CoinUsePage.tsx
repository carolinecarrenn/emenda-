import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { COIN_COPY } from "./coin.copy";
import { formatCoinNumber } from "./coinFormat";
import { findReward } from "./coinMock";
import { CoinPageHeader } from "./sections/CoinPageHeader";
import { StepsCard } from "./sections/StepsCard";
import { UseOptionCard } from "./sections/UseOptionCard";
import { PillLink } from "./sections/PillLink";

/** How to use Coin (Figma WD-60J; mobile W-60J): the four-step redeem flow,
 *  the partner-benefit example, the "if no reward is available"
 *  reassurance and the Coin rules & ownership pill. */
export function CoinUsePage() {
  const c = useSectionCopy(COIN_COPY);
  const { language } = useLanguage();
  const partner = findReward("partner-benefit");
  const partnerCost =
    partner !== undefined && partner.cost !== null
      ? c.use.partnerCost(formatCoinNumber(partner.cost, language))
      : undefined;

  return (
    <div className="max-w-[1012px] pt-2 lg:pt-[16px]">
      <CoinPageHeader
        crumb={c.overview.title}
        crumbTo="/worker/coin"
        title={c.use.title}
        subtitle={c.use.subtitle}
      />
      {/* W-60J body (1179:399): the mint how-it-works card, the white reward
          example and the amber caveat, all at a 10px gap. */}
      <div className="mt-[10px] lg:mt-[52px]">
        <StepsCard
          title={c.use.howTitle}
          steps={c.use.steps}
          to="/worker/coin/rewards"
        />
      </div>
      <div className="mt-[10px] grid gap-[10px] lg:mt-[24px] lg:grid-cols-2 lg:gap-[28px]">
        <UseOptionCard
          tone="white"
          lgTone="mint"
          title={c.use.partnerTitle}
          meta={partnerCost}
          body={c.use.partnerBody}
          to="/worker/coin/rewards/partner-benefit"
        />
        <UseOptionCard
          tone="amber"
          lgTone="white"
          density="note"
          title={c.use.noRewardTitle}
          body={c.use.noRewardBody}
        />
      </div>
      <div className="mt-[10px] lg:mt-[28px]">
        <PillLink to="/worker/coin/rules" className="lg:w-[260px]">
          {c.use.rulesButton}
        </PillLink>
      </div>
    </div>
  );
}
