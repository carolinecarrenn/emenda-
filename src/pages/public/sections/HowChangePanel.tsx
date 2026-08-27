import { ArrowRight, CircleCheck } from "lucide-react";
import { usePublicCopy } from "../public.copy";
import { HOW_CHANGE_CARDS } from "../publicMock";

/**
 * LP-04 mint panel "WHEN WORK CHANGES — Ending access does not end your
 * account." with the "You keep" vs "What can end" cards
 * (Figma 1147:288–1147:302): panel 1268x360 at y=1570, cards 560 and 580
 * wide, 126 tall, at y=1764 with a 30px gutter.
 */
export function HowChangePanel() {
  const c = usePublicCopy();

  return (
    <section className="mt-[74px] rounded-[24px] border border-[#d1ded6] bg-[#f2f9f5] px-[27px] pt-[23px] pb-[27px] lg:h-[360px]">
      <p className="flex min-h-[26px] items-center text-[11px] font-semibold tracking-[0.04em] text-[#055240]">
        {c.how.changesEyebrow}
      </p>
      <h2 className="mt-[8px] flex min-h-[44px] max-w-[700px] items-center text-[22px] leading-[1.22] font-bold text-[#0e1f18] lg:text-[26px]">
        {c.how.changesTitle}
      </h2>
      <p className="mt-[8px] flex min-h-[50px] max-w-[780px] items-center text-[14px] leading-[17px] text-[#63756b]">
        {c.how.changesBody}
      </p>

      <div className="mt-[34px] grid gap-[30px] lg:grid-cols-[560px_580px]">
        {HOW_CHANGE_CARDS.map((card) => (
          <article
            key={card.key}
            className="rounded-[18px] border border-[#d1ded6] bg-white p-[19px] lg:h-[126px]"
          >
            <div
              className={`flex min-h-[30px] items-center ${
                card.glyph === "check" ? "gap-[12px]" : "gap-[14px]"
              }`}
            >
              {card.glyph === "check" ? (
                <CircleCheck
                  className="size-[20px] shrink-0 text-[#055240]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              ) : (
                <ArrowRight
                  className="size-[18px] shrink-0 text-[#055240]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              )}
              <p className="text-[15px] font-semibold text-[#055240]">
                {c.how.changeCards[card.key].title}
              </p>
            </div>
            <p className="mt-[12px] flex min-h-[44px] items-center text-[13px] leading-[16px] text-[#63756b]">
              {c.how.changeCards[card.key].body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
