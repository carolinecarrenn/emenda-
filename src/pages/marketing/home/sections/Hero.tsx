import { ArrowRight, Globe, Layers } from "lucide-react";
import { Eyebrow } from "@/components/marketing/Eyebrow";
import { LandingButton } from "@/components/marketing/LandingButton";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { EcosystemComposition } from "@/components/marketing/mockups/EcosystemComposition";
import { useSectionCopy } from "@/i18n/copy";
import { HOME_COPY } from "../home.copy";
import { HeroBackdrop } from "./HeroBackdrop";

/**
 * The first viewport has one job: make a visitor understand that EMENDA is a
 * platform, not a chatbot.
 *
 * So the visual is the ecosystem composition — worker home, daily report,
 * manager overview and the shared lifecycle — and the assistant appears only
 * as the small strip at its foot. The headline talks about life and work, and
 * the primary action is "Explore EMENDA" rather than "Ask EMENDA": exploring
 * implies there is something to explore.
 */
export function Hero() {
  const c = useSectionCopy(HOME_COPY);

  return (
    <Section
      dataSection="home-hero"
      backdrop={<HeroBackdrop />}
      className="overflow-hidden"
      padding="pt-8 pb-20 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28"
    >
      <div className="relative grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_560px] lg:gap-14">
        <Reveal>
          <Eyebrow icon={Layers}>{c.hero.badge}</Eyebrow>

          <h1 className="mt-6 max-w-[620px] font-display text-[34px] leading-[1.1] font-bold tracking-[-0.03em] text-lp-ink sm:text-[44px] lg:text-[54px]">
            {c.hero.titleLead}
            <span className="text-lp-green">{c.hero.titleAccent}</span>
            {c.hero.titleTail}
          </h1>

          <p className="mt-6 max-w-[540px] text-[17px] leading-[1.7] text-lp-muted lg:text-[18px]">
            {c.hero.body}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LandingButton to="/platform" size="lg">
              {c.hero.primaryCta}
              <ArrowRight size={17} strokeWidth={2.1} aria-hidden="true" />
            </LandingButton>
            <LandingButton to="/signin" variant="secondary" size="lg">
              {c.hero.secondaryCta}
            </LandingButton>
          </div>

          <p className="mt-7 flex items-center gap-2 text-[13.5px] text-lp-muted">
            <Globe size={15} strokeWidth={1.75} aria-hidden="true" />
            {c.hero.languageNote}
          </p>
        </Reveal>

        <Reveal delay={120} className="lg:justify-self-end">
          <div className="mx-auto w-full max-w-[560px]">
            <EcosystemComposition />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
