import { useSectionCopy } from "@/i18n/copy";
import { COIN_COPY } from "./coin.copy";
import { ActiveProgramRuleCard } from "./sections/ActiveProgramRuleCard";
import { CoinPageHeader } from "./sections/CoinPageHeader";
import { EarnRulesCard } from "./sections/EarnRulesCard";
import { PillLink } from "./sections/PillLink";
import { ProgramRuleNoticeCard } from "./sections/ProgramRuleNoticeCard";

/** How to earn Coin (Figma WD-60B; mobile W-60B): the plain-language
 *  breakdown of the four earning rules listed on the overview. */
export function CoinEarnPage() {
  const c = useSectionCopy(COIN_COPY);

  return (
    <div className="max-w-[1012px] pt-2 lg:pt-[16px]">
      <CoinPageHeader
        crumb={c.overview.title}
        crumbTo="/worker/coin"
        title={c.earn.title}
        mobileTitle={c.earn.mobileTitle}
        subtitle={c.earn.subtitle}
      />
      {/* W-60B (1151:348) order: active program rule → rule list → notice.
          WD-60B reverses it — the 1012x420 "Ways to earn" card (1186:1538),
          the mint visibility note (1205:1305), then the detailed two-column
          program card (1205:1153). */}
      <div className="mt-[10px] flex flex-col gap-[10px] lg:mt-[52px] lg:gap-[18px]">
        <ActiveProgramRuleCard className="lg:order-3" />
        <EarnRulesCard className="lg:order-1" />
        <ProgramRuleNoticeCard className="lg:order-2" />
      </div>
      <div className="mt-[10px] flex flex-col gap-[10px] lg:mt-[28px] lg:flex-row lg:gap-[16px]">
        <PillLink to="/worker/coin/use" className="lg:w-[240px]">
          {c.overview.howToUseCoin}
        </PillLink>
        <PillLink to="/worker/coin/rules" className="lg:w-[260px]">
          {c.accessEnded.coinRules}
        </PillLink>
      </div>
    </div>
  );
}
