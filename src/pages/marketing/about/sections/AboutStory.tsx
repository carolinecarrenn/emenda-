import { Quote } from "lucide-react";
import { Eyebrow } from "@/components/marketing/Eyebrow";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { HeroConversation } from "@/components/marketing/mockups/HeroConversation";
import { useSectionCopy } from "@/i18n/copy";
import { ABOUT_COPY } from "../about.copy";

/**
 * The reason the product exists, told in three paragraphs, with the product
 * itself alongside so the argument and the answer sit on the same screen.
 */
export function AboutStory() {
  const c = useSectionCopy(ABOUT_COPY);

  return (
    <Section dataSection="about-story" className="bg-lp-bg">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-16">
        <Reveal>
          <Eyebrow icon={Quote}>{c.story.eyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-[520px] font-display text-[26px] leading-[1.2] font-bold tracking-[-0.02em] text-lp-ink sm:text-[32px] lg:text-[38px]">
            {c.story.title}
          </h2>
          <div className="mt-6 max-w-[560px] space-y-5">
            {c.story.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-[16px] leading-[1.75] text-lp-muted lg:text-[17px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:sticky lg:top-28 lg:justify-self-end">
          <div className="mx-auto w-full max-w-[440px]">
            <HeroConversation />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
