import { usePublicCopy } from "./public.copy";
import { PublicPageShell } from "./sections/PublicPageShell";
import { PublicHero } from "./sections/PublicHero";
import { FeaturesGrid } from "./sections/FeaturesGrid";
import { FeaturesConnectedPanel } from "./sections/FeaturesConnectedPanel";
import { FeaturesPrivacyCard } from "./sections/FeaturesPrivacyCard";

/**
 * LP-03 Features (Figma 1147:18) — public page, landing chrome, nav pill on
 * "Features". The frame leaves 190px between the closing privacy card
 * (ends y=1950) and the footer divider at y=2140.
 */
export function FeaturesPage() {
  const c = usePublicCopy();

  return (
    <PublicPageShell current="features" bottomSpace="pb-[190px]">
      {/* Hero · Features (1147:151) — 1268x330 */}
      <PublicHero
        eyebrow={c.features.eyebrow}
        title={c.features.title}
        body={c.features.body}
        titleClassName="lg:mt-[12px] lg:min-h-[108px] lg:max-w-[760px] lg:text-[40px] lg:leading-[49px]"
        bodyClassName="lg:min-h-[70px] lg:max-w-[800px]"
      />
      <FeaturesGrid />
      <FeaturesConnectedPanel />
      <FeaturesPrivacyCard />
    </PublicPageShell>
  );
}
