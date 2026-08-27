import { usePublicCopy } from "../public.copy";
import { ABOUT_PRINCIPLES, PUBLIC_ICONS } from "../publicMock";
import { PublicIconTile } from "./PublicIconTile";

/**
 * LP-02 "WHY EMENDA — Work changes. Your identity should not." with the three
 * principle cards (Figma 1147:63–1147:87). Figma runs the eyebrow at y=590,
 * the title at y=626, the body at y=688 and the 390x160 cards at y=770 with a
 * 30px gutter.
 */
export function AboutPrinciples() {
  const c = usePublicCopy();

  return (
    <section className="mt-[60px]">
      <p className="flex min-h-[26px] items-center text-[12px] font-semibold tracking-[0.04em] text-[#055240]">
        {c.about.whyEyebrow}
      </p>
      <h2 className="mt-[10px] flex min-h-[54px] max-w-[770px] items-center text-[26px] leading-[1.22] font-bold text-[#0e1f18] lg:text-[32px]">
        {c.about.whyTitle}
      </h2>
      <p className="mt-[8px] flex min-h-[50px] max-w-[850px] items-center text-[15px] leading-[18px] text-[#63756b]">
        {c.about.whyBody}
      </p>

      <div className="mt-[32px] grid gap-[30px] lg:grid-cols-[repeat(3,390px)]">
        {ABOUT_PRINCIPLES.map((principle) => (
          <article
            key={principle.key}
            className="rounded-[18px] border border-[#d1ded6] bg-white p-[19px] lg:h-[160px]"
          >
            <div className="flex items-start gap-[16px]">
              <PublicIconTile
                src={PUBLIC_ICONS[principle.icon]}
                size={44}
                iconSize={22}
                radius={12}
              />
              <p className="flex min-h-[44px] items-center text-[17px] leading-[22px] font-semibold text-[#0e1f18]">
                {c.about.principles[principle.key].title}
              </p>
            </div>
            <p className="mt-[10px] flex min-h-[72px] items-center text-[13px] leading-[16px] text-[#63756b]">
              {c.about.principles[principle.key].body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
