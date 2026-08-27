import { ArrowRight, GitBranch } from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { useSectionCopy } from "@/i18n/copy";
import { HOME_COPY } from "../home.copy";

/**
 * The core differentiator: what happens AFTER something is submitted.
 *
 * Drawn as a six-step relay with the actor named on every step, because the
 * point is not that EMENDA has a workflow — it is that two different people
 * stay attached to the same thread until it ends. On a dark band because this
 * is the claim the page most wants remembered.
 */
export function ResolutionSection() {
  const c = useSectionCopy(HOME_COPY);

  return (
    <Section
      dataSection="home-resolution"
      className="overflow-hidden bg-[linear-gradient(158deg,#04352a_0%,#0a5b45_56%,#053b2e_100%)]"
      padding="py-20 lg:py-28"
      backdrop={
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 78% 12%, rgba(143,220,182,0.2), transparent 55%)",
          }}
        />
      }
    >
      <SectionHeading
        eyebrow={c.resolution.eyebrow}
        eyebrowIcon={GitBranch}
        title={c.resolution.title}
        body={c.resolution.body}
        tone="dark"
      />

      <ol className="relative mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {c.resolution.steps.map((step, index) => (
          <Reveal key={step.label} delay={index * 60} className="h-full">
            <li className="flex h-full items-start gap-3 rounded-[18px] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/15 font-display text-[11px] font-bold text-white">
                {index + 1}
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-semibold tracking-[0.1em] text-lp-mint uppercase">
                  {step.actor}
                </span>
                <span className="mt-1 block text-[15px] leading-[1.45] font-medium text-white">
                  {step.label}
                </span>
              </span>
              {index < c.resolution.steps.length - 1 ? (
                <ArrowRight
                  size={15}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-white/30"
                />
              ) : null}
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={260} className="mt-10">
        <p className="mx-auto max-w-[680px] rounded-[20px] border border-white/15 bg-white/10 px-6 py-5 text-center text-[16px] leading-[1.65] font-medium text-white lg:text-[17px]">
          {c.resolution.note}
        </p>
      </Reveal>
    </Section>
  );
}
