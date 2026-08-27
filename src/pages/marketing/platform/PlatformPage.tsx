import { ArrowRight, Layers } from "lucide-react";
import { CtaBand } from "@/components/marketing/CtaBand";
import { LandingButton } from "@/components/marketing/LandingButton";
import { PageHero } from "@/components/marketing/PageHero";
import { EcosystemComposition } from "@/components/marketing/mockups/EcosystemComposition";
import { useSectionCopy } from "@/i18n/copy";
import { PLATFORM_COPY } from "./platform.copy";
import { PillarSections } from "./sections/PillarSections";

/**
 * /platform — the full ecosystem.
 *
 * This page is the reason the site can claim EMENDA is a platform: five
 * pillars, fifteen named modules, and a product still for each. The homepage
 * shows six modules and links here rather than trying to hold all of it.
 */
export function PlatformPage() {
  const c = useSectionCopy(PLATFORM_COPY);

  return (
    <>
      <PageHero
        dataSection="platform-hero"
        eyebrow={c.hero.eyebrow}
        eyebrowIcon={Layers}
        title={c.hero.title}
        body={c.hero.body}
        actions={
          <>
            <LandingButton to="/signin" size="lg">
              {c.hero.primaryCta}
              <ArrowRight size={17} strokeWidth={2.1} aria-hidden="true" />
            </LandingButton>
            <LandingButton to="/how-it-works" variant="secondary" size="lg">
              {c.hero.secondaryCta}
            </LandingButton>
          </>
        }
        aside={<EcosystemComposition />}
      />
      <PillarSections />
      <CtaBand
        dataSection="platform-cta"
        title={c.cta.title}
        body={c.cta.body}
        primary={c.hero.primaryCta}
        secondary={c.hero.secondaryCta}
        secondaryTo="/workers"
      />
    </>
  );
}
