import { ArrowRight, Users } from "lucide-react";
import { CtaBand } from "@/components/marketing/CtaBand";
import { LandingButton } from "@/components/marketing/LandingButton";
import { PageHero } from "@/components/marketing/PageHero";
import { WorkerHomeCard } from "@/components/marketing/mockups/WorkerHomeCard";
import { useSectionCopy } from "@/i18n/copy";
import { WORKERS_COPY } from "./workers.copy";
import { WorkerJourney } from "./sections/WorkerJourney";

/**
 * /workers — the platform from the employee's side.
 *
 * Paired with /organizations: the two pages describe the same system from its
 * two ends, and both end at the same place — what happened after something was
 * sent.
 */
export function WorkersPage() {
  const c = useSectionCopy(WORKERS_COPY);

  return (
    <>
      <PageHero
        dataSection="workers-hero"
        eyebrow={c.hero.eyebrow}
        eyebrowIcon={Users}
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
        aside={<WorkerHomeCard />}
      />
      <WorkerJourney />
      <CtaBand
        dataSection="workers-cta"
        title={c.cta.title}
        body={c.cta.body}
        secondary={c.hero.secondaryCta}
        secondaryTo="/platform"
      />
    </>
  );
}
