import { ArrowRight, Building2 } from "lucide-react";
import { CtaBand } from "@/components/marketing/CtaBand";
import { LandingButton } from "@/components/marketing/LandingButton";
import { PageHero } from "@/components/marketing/PageHero";
import { ManagerOverviewCard } from "@/components/marketing/mockups/ManagerOverviewCard";
import { useSectionCopy } from "@/i18n/copy";
import { ORGANIZATIONS_COPY } from "./organizations.copy";
import { ValueGrid } from "./sections/ValueGrid";
import { ManagerSurfaces } from "./sections/ManagerSurfaces";
import { FitBand } from "./sections/FitBand";

/**
 * /organizations — the employer page.
 *
 * The enterprise story lives here and only here: the homepage gives it one
 * section and a link, so the primary narrative stays with the person actually
 * living in Japan. The ask on this page is a conversation, not a signup, which
 * is why it overrides the shared CTA band.
 */
export function OrganizationsPage() {
  const c = useSectionCopy(ORGANIZATIONS_COPY);

  return (
    <>
      <PageHero
        dataSection="organizations-hero"
        eyebrow={c.hero.eyebrow}
        eyebrowIcon={Building2}
        title={c.hero.title}
        body={c.hero.body}
        actions={
          <>
            <LandingButton to="/help#contact" size="lg">
              {c.hero.primaryCta}
              <ArrowRight size={17} strokeWidth={2.1} aria-hidden="true" />
            </LandingButton>
            <LandingButton to="/how-it-works" variant="secondary" size="lg">
              {c.hero.secondaryCta}
            </LandingButton>
          </>
        }
        aside={<ManagerOverviewCard />}
      />
      <ValueGrid />
      <ManagerSurfaces />
      <FitBand />
      <CtaBand
        dataSection="organizations-cta"
        title={c.cta.title}
        body={c.cta.body}
        primary={c.cta.primary}
        primaryTo="/help#contact"
        secondary={c.cta.secondary}
        secondaryTo="/how-it-works"
      />
    </>
  );
}
