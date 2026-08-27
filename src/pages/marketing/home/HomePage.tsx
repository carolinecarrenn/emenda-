import { CtaBand } from "@/components/marketing/CtaBand";
import { Hero } from "./sections/Hero";
import { PlatformOverview } from "./sections/PlatformOverview";
import { WhySection } from "./sections/WhySection";
import { JourneySection } from "./sections/JourneySection";
import { WorkersSection } from "./sections/WorkersSection";
import { OrganizationsSection } from "./sections/OrganizationsSection";
import { ResolutionSection } from "./sections/ResolutionSection";
import { AssistantSection } from "./sections/AssistantSection";
import { MomentsSection } from "./sections/MomentsSection";

/**
 * Homepage of the EMENDA marketing site.
 *
 * The order is the positioning. A visitor meets the platform (hero, ecosystem
 * map), then the problem it solves, then the lifecycle, then both audiences,
 * then the report-to-resolution loop — and only then the assistant, eighth of
 * nine blocks. If every chat mockup were deleted from this page, the argument
 * for EMENDA would still be complete; that is the test this order is built to
 * pass, and the reason "Ask EMENDA anything" is not the hero.
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <PlatformOverview />
      <WhySection />
      <JourneySection />
      <WorkersSection />
      <OrganizationsSection />
      <ResolutionSection />
      <AssistantSection />
      <MomentsSection />
      <CtaBand dataSection="home-cta" />
    </>
  );
}
