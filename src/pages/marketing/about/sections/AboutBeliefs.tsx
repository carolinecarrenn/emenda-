import { Compass, Heart, Lock, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { useSectionCopy } from "@/i18n/copy";
import { ABOUT_COPY } from "../about.copy";

const ICONS: LucideIcon[] = [Sparkles, Compass, Lock, Heart];

/** The mission, then the four principles the product is designed against. */
export function AboutBeliefs() {
  const c = useSectionCopy(ABOUT_COPY);

  return (
    <Section
      dataSection="about-beliefs"
      className="border-y border-lp-line bg-lp-tint"
    >
      <Reveal className="mx-auto max-w-[760px] rounded-[26px] border border-lp-green/15 bg-lp-mint p-8 text-center lg:p-10">
        <p className="text-[12px] font-semibold tracking-[0.1em] text-lp-green uppercase">
          {c.mission.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-[24px] leading-[1.28] font-bold tracking-[-0.02em] text-balance text-lp-ink lg:text-[30px]">
          {c.mission.title}
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-[15.5px] leading-[1.7] text-lp-ink/75">
          {c.mission.body}
        </p>
      </Reveal>

      <div className="mt-16">
        <SectionHeading eyebrow={c.beliefs.eyebrow} title={c.beliefs.title} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {c.beliefs.items.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <Reveal
                key={item.title}
                delay={(index % 2) * 70}
                className="h-full"
              >
                <article className="flex h-full gap-4 rounded-[22px] border border-lp-line bg-white p-6 shadow-lp-sm lg:p-7">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-lp-mint text-lp-green">
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[16.5px] leading-[1.3] font-semibold text-lp-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[1.65] text-lp-muted">
                      {item.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
