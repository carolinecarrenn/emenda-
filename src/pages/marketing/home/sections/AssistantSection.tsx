import { Check, Sparkles } from "lucide-react";
import { Eyebrow } from "@/components/marketing/Eyebrow";
import { LearnMoreLink } from "@/components/marketing/LearnMoreLink";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { AssistantConversation } from "@/components/marketing/mockups/AssistantConversation";
import { useSectionCopy } from "@/i18n/copy";
import { HOME_COPY } from "../home.copy";

/**
 * The assistant — introduced eighth, after the platform, both audiences and
 * the resolution loop have already been made.
 *
 * The headline starts with "And" on purpose: this is an addition to a product
 * the visitor already understands, not the product itself. It gets one
 * section, the same width as any other, and the page continues past it.
 */
export function AssistantSection() {
  const c = useSectionCopy(HOME_COPY);

  return (
    <Section
      dataSection="home-assistant"
      className="border-y border-lp-line bg-lp-tint"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-16">
        <Reveal>
          <Eyebrow icon={Sparkles}>{c.assistant.eyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-[520px] font-display text-[28px] leading-[1.18] font-bold tracking-[-0.02em] text-lp-ink sm:text-[34px] lg:text-[40px]">
            {c.assistant.title}
          </h2>
          <p className="mt-4 max-w-[540px] text-[16px] leading-[1.7] text-lp-muted lg:text-[17px]">
            {c.assistant.body}
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {c.assistant.capabilities.map((capability) => (
              <li
                key={capability}
                className="inline-flex items-center gap-2 rounded-full border border-lp-line bg-white px-3.5 py-2 text-[13px] text-lp-ink"
              >
                <Check
                  size={12}
                  strokeWidth={2.6}
                  aria-hidden="true"
                  className="text-lp-green"
                />
                {capability}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <LearnMoreLink to="/assistant">{c.assistant.cta}</LearnMoreLink>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:justify-self-end">
          <div className="mx-auto w-full max-w-[430px]">
            <AssistantConversation />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
