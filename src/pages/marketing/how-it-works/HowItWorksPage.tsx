import { ArrowRight, Route } from "lucide-react";
import { CtaBand } from "@/components/marketing/CtaBand";
import { LandingButton } from "@/components/marketing/LandingButton";
import { PageHero } from "@/components/marketing/PageHero";
import { EcosystemComposition } from "@/components/marketing/mockups/EcosystemComposition";
import { useSectionCopy } from "@/i18n/copy";
import { HOW_IT_WORKS_COPY } from "./howItWorks.copy";
import { JourneySteps } from "./sections/JourneySteps";

/**
 * /how-it-works — the EMENDA lifecycle end to end.
 *
 * It owns the seven-stage explanation in full; the homepage previews five of
 * them and links here. Six of the seven stages show platform surfaces and one
 * shows the assistant, which is the proportion the whole site is arguing for.
 */
export function HowItWorksPage() {
  const c = useSectionCopy(HOW_IT_WORKS_COPY);

  return (
    <>
      <PageHero
        dataSection="how-hero"
        eyebrow={c.hero.eyebrow}
        eyebrowIcon={Route}
        title={c.hero.title}
        body={c.hero.body}
        actions={
          <>
            <LandingButton to="/signin" size="lg">
              {c.hero.primaryCta}
              <ArrowRight size={17} strokeWidth={2.1} aria-hidden="true" />
            </LandingButton>
            <LandingButton to="/platform" variant="secondary" size="lg">
              {c.hero.secondaryCta}
            </LandingButton>
          </>
        }
        aside={<EcosystemComposition />}
      />
      <JourneySteps />
      <CtaBand
        dataSection="how-cta"
        title={c.cta.title}
        body={c.cta.body}
        secondary={c.hero.secondaryCta}
        secondaryTo="/workers"
      />
    </>
  );
}
