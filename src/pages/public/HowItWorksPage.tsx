import { usePublicCopy } from "./public.copy";
import { PublicPageShell } from "./sections/PublicPageShell";
import { PublicHero } from "./sections/PublicHero";
import { HowStepList } from "./sections/HowStepList";
import { HowChangePanel } from "./sections/HowChangePanel";
import { HowCtaBand } from "./sections/HowCtaBand";

/**
 * LP-04 How it works (Figma 1147:33) — public page, landing chrome, nav pill
 * on "How it works".
 */
export function HowItWorksPage() {
  const c = usePublicCopy();

  return (
    <PublicPageShell current="how">
      {/* Hero · How it works (1147:247) — 1268x330 */}
      <PublicHero
        eyebrow={c.how.eyebrow}
        title={c.how.title}
        body={c.how.body}
        titleClassName="lg:mt-[12px] lg:min-h-[108px] lg:max-w-[760px] lg:text-[40px] lg:leading-[49px]"
        bodyClassName="lg:min-h-[70px] lg:max-w-[820px]"
      />
      <HowStepList />
      <HowChangePanel />
      <HowCtaBand />
    </PublicPageShell>
  );
}
