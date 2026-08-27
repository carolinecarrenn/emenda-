import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { usePublicCopy } from "../public.copy";
import { FEATURE_DETAILS, PUBLIC_ICONS } from "../publicMock";
import { PublicIconTile } from "./PublicIconTile";

/** "Learn more →" — Figma keeps the arrow at a fixed x=142 inside the link
 *  box (1147:165 / 1147:166), i.e. 120px after the label starts. */
const LEARN_MORE_CLASS =
  "mt-[10px] flex w-fit min-h-[26px] items-center gap-[8px] text-[13px] font-semibold text-[#055240] transition-colors duration-150 hover:text-[#067a5e] lg:gap-0";

/**
 * LP-03 "WHAT YOU CAN DO — Six connected areas, one account." 2x3 grid of
 * 604x188 feature-detail cards (Figma 1147:155–1147:216): rows at y=650 /
 * 870 / 1090, 30px column gutter and 32px row gutter.
 */
export function FeaturesGrid() {
  const c = usePublicCopy();

  return (
    <section className="mt-[60px]">
      <p className="flex min-h-[26px] items-center text-[12px] font-semibold tracking-[0.04em] text-[#055240]">
        {c.features.sectionEyebrow}
      </p>
      <h2 className="mt-[8px] flex min-h-[48px] max-w-[700px] items-center text-[24px] leading-[1.22] font-bold text-[#0e1f18] lg:text-[30px]">
        {c.features.sectionTitle}
      </h2>

      <div className="mt-[28px] grid gap-[30px] lg:grid-cols-[repeat(2,604px)] lg:gap-y-[32px]">
        {FEATURE_DETAILS.map((feature) => {
          const card = c.features.cards[feature.key];
          const isAnchor = feature.learnMoreHref.includes("#");
          const label = (
            <>
              <span className="lg:w-[120px]">{c.features.learnMore}</span>
              <ArrowRight
                className="size-[18px]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </>
          );

          return (
            <article
              key={feature.key}
              className="rounded-[20px] border border-[#d1ded6] bg-white p-[21px] lg:h-[188px]"
            >
              <div className="flex items-start gap-[18px]">
                <PublicIconTile
                  src={PUBLIC_ICONS[feature.icon]}
                  size={48}
                  iconSize={22}
                  radius={13}
                />
                <p className="flex min-h-[48px] items-center text-[19px] leading-[24px] font-semibold text-[#0e1f18]">
                  {card.title}
                </p>
              </div>
              <p className="mt-[12px] flex min-h-[50px] items-center text-[13px] leading-[16px] text-[#63756b]">
                {card.body}
              </p>
              {isAnchor ? (
                <a href={feature.learnMoreHref} className={LEARN_MORE_CLASS}>
                  {label}
                </a>
              ) : (
                <Link to={feature.learnMoreHref} className={LEARN_MORE_CLASS}>
                  {label}
                </Link>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
