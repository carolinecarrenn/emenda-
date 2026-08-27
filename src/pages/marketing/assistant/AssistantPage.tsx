import { ArrowRight, Layers, Sparkles } from "lucide-react";
import {
  ClipboardList,
  IdCard,
  MessagesSquare,
  Repeat,
  type LucideIcon,
} from "lucide-react";
import { CtaBand } from "@/components/marketing/CtaBand";
import { LandingButton } from "@/components/marketing/LandingButton";
import { LearnMoreLink } from "@/components/marketing/LearnMoreLink";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { AssistantConversation } from "@/components/marketing/mockups/AssistantConversation";
import { useSectionCopy } from "@/i18n/copy";
import { ASSISTANT_PAGE_COPY } from "./assistant.copy";
import { AssistantFlow } from "./sections/AssistantFlow";
import { AssistantCapabilities } from "./sections/AssistantCapabilities";

const NEIGHBOURS: LucideIcon[] = [
  IdCard,
  ClipboardList,
  MessagesSquare,
  Repeat,
];

/**
 * /assistant — the only page where the AI is the subject.
 *
 * It still opens with "Part of the EMENDA platform" and closes by handing the
 * visitor back to /platform. A visitor who arrives here from a search result
 * should leave knowing EMENDA is bigger than this page, which is why the
 * belonging band exists rather than another feature block.
 */
export function AssistantPage() {
  const c = useSectionCopy(ASSISTANT_PAGE_COPY);

  return (
    <>
      <PageHero
        dataSection="assistant-hero"
        eyebrow={c.hero.eyebrow}
        eyebrowIcon={Sparkles}
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
        aside={<AssistantConversation />}
      />

      <AssistantFlow />
      <AssistantCapabilities />

      {/* The positioning guard: this page must not leave anyone thinking the
          assistant is the product. */}
      <Section dataSection="assistant-belonging" className="bg-lp-bg">
        <Reveal className="mx-auto max-w-[820px] rounded-[26px] border border-lp-green/15 bg-lp-mint p-8 text-center lg:p-10">
          <p className="text-[12px] font-semibold tracking-[0.1em] text-lp-green uppercase">
            {c.belonging.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-[24px] leading-[1.28] font-bold tracking-[-0.02em] text-balance text-lp-ink lg:text-[30px]">
            {c.belonging.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-[15.5px] leading-[1.7] text-lp-ink/75">
            {c.belonging.body}
          </p>

          <div
            className="mt-7 flex flex-wrap items-center justify-center gap-2"
            aria-hidden="true"
          >
            {NEIGHBOURS.map((Icon, index) => (
              <span
                key={index}
                className="flex size-10 items-center justify-center rounded-[13px] border border-lp-line bg-white text-lp-green"
              >
                <Icon size={18} strokeWidth={1.8} />
              </span>
            ))}
            <span className="flex size-10 items-center justify-center rounded-[13px] bg-lp-button text-white">
              <Sparkles size={18} strokeWidth={1.8} />
            </span>
            <span className="flex size-10 items-center justify-center rounded-[13px] border border-lp-line bg-white text-lp-green">
              <Layers size={18} strokeWidth={1.8} />
            </span>
          </div>

          <div className="mt-7 flex justify-center">
            <LearnMoreLink to="/platform">{c.belonging.cta}</LearnMoreLink>
          </div>
        </Reveal>
      </Section>

      <CtaBand
        dataSection="assistant-cta"
        title={c.cta.title}
        body={c.cta.body}
      />
    </>
  );
}
