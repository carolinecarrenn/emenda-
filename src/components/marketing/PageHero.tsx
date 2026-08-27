import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/**
 * Hero for the six inner marketing pages. Deliberately quieter than the
 * homepage hero — one eyebrow, one promise, one supporting line, and the
 * page's own visual when it has one — so arriving on a subpage feels like the
 * same site rather than a second front door.
 */
export function PageHero({
  eyebrow,
  eyebrowIcon,
  title,
  body,
  actions,
  aside,
  dataSection,
}: {
  eyebrow: string;
  eyebrowIcon?: LucideIcon;
  title: string;
  body: string;
  actions?: ReactNode;
  /** Optional product visual; without it the hero centres its text. */
  aside?: ReactNode;
  dataSection: string;
}) {
  if (!aside) {
    return (
      <Section
        dataSection={dataSection}
        className="border-b border-lp-line bg-lp-tint"
        padding="py-16 sm:py-20 lg:py-24"
      >
        <Reveal className="mx-auto max-w-[780px] text-center">
          <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-[32px] leading-[1.12] font-bold tracking-[-0.025em] text-balance text-lp-ink sm:text-[40px] lg:text-[50px]">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-[620px] text-[17px] leading-[1.7] text-lp-muted lg:text-[18px]">
            {body}
          </p>
          {actions ? (
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {actions}
            </div>
          ) : null}
        </Reveal>
      </Section>
    );
  }

  return (
    <Section
      dataSection={dataSection}
      className="border-b border-lp-line bg-lp-tint"
      padding="py-14 sm:py-16 lg:py-20"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_560px] lg:gap-14">
        <Reveal>
          <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-[620px] font-display text-[32px] leading-[1.12] font-bold tracking-[-0.025em] text-lp-ink sm:text-[40px] lg:text-[48px]">
            {title}
          </h1>
          <p className="mt-5 max-w-[540px] text-[17px] leading-[1.7] text-lp-muted lg:text-[18px]">
            {body}
          </p>
          {actions ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {actions}
            </div>
          ) : null}
        </Reveal>

        <Reveal delay={110} className="lg:justify-self-end">
          <div className="mx-auto w-full max-w-[560px]">{aside}</div>
        </Reveal>
      </div>
    </Section>
  );
}
