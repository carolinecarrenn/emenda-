import { usePublicCopy } from "../public.copy";
import { ABOUT_JAPAN_CARDS, PUBLIC_ICONS } from "../publicMock";
import { PublicIconTile } from "./PublicIconTile";

/**
 * LP-02 mint band "BUILT FOR LIFE IN JAPAN — Keep work and everyday
 * preparation connected." with the Career / Japan preparation / Records
 * cards (Figma 1147:116–1147:140). Band 1268x360 at y=1480, three 370x130
 * cards at y=1674 with a 24px gutter.
 */
export function AboutJapanBand() {
  const c = usePublicCopy();

  return (
    <section className="mt-[60px] rounded-[24px] border border-[#d1ded6] bg-[#f2f9f5] px-[27px] pt-[23px] pb-[27px] lg:h-[360px]">
      <p className="flex min-h-[26px] items-center text-[11px] font-semibold tracking-[0.04em] text-[#055240]">
        {c.about.japanEyebrow}
      </p>
      <h2 className="mt-[8px] flex min-h-[44px] max-w-[700px] items-center text-[22px] leading-[1.22] font-bold text-[#0e1f18] lg:text-[26px]">
        {c.about.japanTitle}
      </h2>
      <p className="mt-[10px] flex min-h-[54px] max-w-[770px] items-center text-[14px] leading-[17px] text-[#63756b]">
        {c.about.japanBody}
      </p>

      <div className="mt-[28px] grid gap-[24px] lg:grid-cols-[repeat(3,370px)]">
        {ABOUT_JAPAN_CARDS.map((card) => (
          <article
            key={card.key}
            className="rounded-[18px] border border-[#d1ded6] bg-white p-[19px] lg:h-[130px]"
          >
            <div className="flex items-start gap-[16px]">
              <PublicIconTile
                src={PUBLIC_ICONS[card.icon]}
                size={44}
                iconSize={22}
                radius={12}
              />
              <p className="flex min-h-[44px] items-center text-[17px] leading-[22px] font-semibold text-[#0e1f18]">
                {c.about.japanCards[card.key].title}
              </p>
            </div>
            <p className="mt-[10px] flex min-h-[42px] items-center text-[13px] leading-[16px] text-[#63756b]">
              {c.about.japanCards[card.key].body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
