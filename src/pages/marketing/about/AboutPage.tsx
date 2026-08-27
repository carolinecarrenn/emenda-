import { Heart } from "lucide-react";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero } from "@/components/marketing/PageHero";
import { useSectionCopy } from "@/i18n/copy";
import { ABOUT_COPY } from "./about.copy";
import { AboutStory } from "./sections/AboutStory";
import { AboutBeliefs } from "./sections/AboutBeliefs";

/**
 * /about — why EMENDA exists.
 *
 * The only page on the site that argues from motive rather than capability.
 * It deliberately makes no feature claims: those are on /features, and
 * repeating them here would turn the page into a second homepage.
 */
export function AboutPage() {
  const c = useSectionCopy(ABOUT_COPY);

  return (
    <>
      <PageHero
        dataSection="about-hero"
        eyebrow={c.hero.eyebrow}
        eyebrowIcon={Heart}
        title={c.hero.title}
        body={c.hero.body}
      />
      <AboutStory />
      <AboutBeliefs />
      <CtaBand dataSection="about-cta" title={c.cta.title} body={c.cta.body} />
    </>
  );
}
