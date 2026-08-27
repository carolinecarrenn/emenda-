import { usePublicCopy } from "./public.copy";
import { PublicPageShell } from "./sections/PublicPageShell";
import { PublicHero } from "./sections/PublicHero";
import { AboutIdentityCard } from "./sections/AboutIdentityCard";
import { AboutPrinciples } from "./sections/AboutPrinciples";
import { AboutContinuityPanel } from "./sections/AboutContinuityPanel";
import { AboutJapanBand } from "./sections/AboutJapanBand";
import { AboutCtaBanner } from "./sections/AboutCtaBanner";

/**
 * LP-02 About EMENDA (Figma 1147:3) — public page, landing chrome, nav pill
 * on "About EMENDA".
 */
export function AboutPage() {
  const c = usePublicCopy();

  return (
    <PublicPageShell current="about">
      {/* Hero · About (1147:48) — 1268x380 with the identity preview card */}
      <PublicHero
        eyebrow={c.about.eyebrow}
        title={c.about.title}
        body={c.about.body}
        minHeight="lg:min-h-[380px]"
        titleClassName="lg:min-h-[112px] lg:max-w-[650px] lg:text-[42px] lg:leading-[52px]"
        bodyClassName="lg:min-h-[76px] lg:max-w-[650px]"
        aside={<AboutIdentityCard />}
      />
      <AboutPrinciples />
      <AboutContinuityPanel />
      <AboutJapanBand />
      <AboutCtaBanner />
    </PublicPageShell>
  );
}
