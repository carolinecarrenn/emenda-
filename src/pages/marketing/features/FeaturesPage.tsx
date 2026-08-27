import { ArrowRight, Layers } from "lucide-react";
import { CtaBand } from "@/components/marketing/CtaBand";
import { LandingButton } from "@/components/marketing/LandingButton";
import { PageHero } from "@/components/marketing/PageHero";
import { useSectionCopy } from "@/i18n/copy";
import { FEATURES_COPY } from "./features.copy";
import { FeatureRows } from "./sections/FeatureRows";
import { FeatureGrid } from "./sections/FeatureGrid";

/**
 * /features — the capability page.
 *
 * Five capabilities get a row and a product still each; four more are listed
 * compactly. The homepage names four of these in one line apiece and links
 * here; this page is where the detail lives, and only here.
 */
export function FeaturesPage() {
  const c = useSectionCopy(FEATURES_COPY);

  return (
    <>
      <PageHero
        dataSection="features-hero"
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
      />
      <FeatureRows />
      <FeatureGrid />
      <CtaBand dataSection="features-cta" title={c.cta.title} body={c.cta.body} />
    </>
  );
}
