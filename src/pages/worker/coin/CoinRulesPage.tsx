import { useSectionCopy } from "@/i18n/copy";
import { COIN_COPY } from "./coin.copy";
import { CoinPageHeader } from "./sections/CoinPageHeader";
import { InfoCard } from "./sections/InfoCard";
import { PillLink } from "./sections/PillLink";

/** Coin rules & ownership (Figma mobile W-60T 1186:497; desktop WD-60T):
 *  what happens to Coin over time and across employer connections —
 *  ownership, pending activity, expiration and rule changes. */
const CARD_TONES = ["mint", "white", "amber", "white"] as const;

export function CoinRulesPage() {
  const c = useSectionCopy(COIN_COPY);

  return (
    <div className="max-w-[1012px] pt-2 lg:pt-[16px]">
      <CoinPageHeader
        crumb={c.overview.title}
        crumbTo="/worker/coin"
        title={c.rules.title}
        mobileTitle={c.rules.mobileTitle}
        subtitle={c.rules.subtitle}
      />
      {/* W-60T body (1186:505): four cards at a 10px gap, tones mint → white
          → amber → white so the expiry policy reads as the caveat. Desktop
          WD-60T (1205:1288 / 1291 / 1294 / 1297) lays the same four out as a
          2x2 grid of white 492x154 cards at a 28/26px gap. */}
      <div className="mt-[10px] space-y-[10px] lg:mt-[52px] lg:grid lg:grid-cols-2 lg:gap-x-[28px] lg:gap-y-[26px] lg:space-y-0">
        {c.rules.cards.map((card, index) => (
          <InfoCard
            key={card.title}
            tone={CARD_TONES[index] ?? "white"}
            lgTone="white"
            bodyGap={32}
            title={card.title}
            body={card.body}
            className="lg:min-h-[154px]"
          />
        ))}
      </div>
      <div className="mt-[10px] flex flex-col gap-[10px] lg:mt-[28px] lg:flex-row lg:gap-[16px]">
        <PillLink to="/worker/coin/history" className="lg:w-[220px]">
          {c.overview.history}
        </PillLink>
        <PillLink to="/worker/coin/use" className="lg:w-[240px]">
          {c.overview.howToUseCoin}
        </PillLink>
      </div>
    </div>
  );
}
