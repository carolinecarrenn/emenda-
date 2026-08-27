import { ArrowRight } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { MARKETING_COPY } from "@/pages/marketing/marketing.copy";
import { LandingButton } from "./LandingButton";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/**
 * The closing block every marketing page ends on, so the answer to "what do I
 * do now?" is never more than one screen away. Pages that need a different
 * ask — /organizations wants a conversation, not a signup — override the copy
 * and the destinations; everything else takes the shared version.
 */
export function CtaBand({
  title,
  body,
  primary,
  primaryTo = "/signin",
  secondary,
  secondaryTo = "/worker/assistant",
  dataSection = "cta",
}: {
  title?: string;
  body?: string;
  primary?: string;
  primaryTo?: string;
  secondary?: string;
  secondaryTo?: string;
  dataSection?: string;
}) {
  const c = useSectionCopy(MARKETING_COPY);

  return (
    <Section
      dataSection={dataSection}
      className="overflow-hidden bg-[linear-gradient(150deg,#04352a_0%,#0a5b45_60%,#053b2e_100%)]"
      padding="py-20 lg:py-24"
      backdrop={
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 0%, rgba(143,220,182,0.22), transparent 58%)",
          }}
        />
      }
    >
      <Reveal className="relative mx-auto max-w-[720px] text-center">
        <h2 className="font-display text-[28px] leading-[1.14] font-bold tracking-[-0.025em] text-balance text-white sm:text-[36px] lg:text-[44px]">
          {title ?? c.cta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] text-[16px] leading-[1.7] text-lp-onDark lg:text-[18px]">
          {body ?? c.cta.body}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LandingButton to={primaryTo} variant="onDark" size="lg">
            {primary ?? c.cta.primary}
            <ArrowRight size={17} strokeWidth={2.1} aria-hidden="true" />
          </LandingButton>
          <LandingButton to={secondaryTo} variant="onDarkGhost" size="lg">
            {secondary ?? c.cta.secondary}
          </LandingButton>
        </div>

        <p className="mt-8 text-[13.5px] tracking-[0.02em] text-white/60">
          {c.cta.languageNote}
        </p>
      </Reveal>
    </Section>
  );
}
