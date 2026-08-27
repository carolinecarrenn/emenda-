import { ArrowDown, Shuffle, TriangleAlert } from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { BrandMark } from "@/components/marketing/BrandMark";
import { useSectionCopy } from "@/i18n/copy";
import { HOME_COPY } from "../home.copy";

/**
 * The problem, shown as scatter rather than described as it. Seven places
 * information currently lives, six things that costs, and then one line that
 * collapses both columns into EMENDA — the shape of the section is the
 * argument the section is making.
 */
export function WhySection() {
  const c = useSectionCopy(HOME_COPY);

  return (
    <Section dataSection="home-why" className="bg-lp-bg">
      <SectionHeading
        eyebrow={c.why.eyebrow}
        eyebrowIcon={Shuffle}
        title={c.why.title}
        body={c.why.body}
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="flex h-full flex-col rounded-[22px] border border-lp-line bg-white p-7">
            <p className="text-[10px] font-semibold tracking-[0.1em] text-lp-muted uppercase">
              {c.why.sourcesLabel}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {c.why.sources.map((source) => (
                <li
                  key={source}
                  className="rounded-full border border-lp-line bg-lp-bg px-3.5 py-2 text-[13px] text-lp-muted"
                >
                  {source}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={90} className="h-full">
          <div className="flex h-full flex-col rounded-[22px] border border-lp-line bg-white p-7">
            <p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.1em] text-lp-muted uppercase">
              <TriangleAlert size={13} strokeWidth={2} aria-hidden="true" />
              {c.why.resultLabel}
            </p>
            <ul className="mt-5 space-y-2.5">
              {c.why.results.map((result) => (
                <li
                  key={result}
                  className="flex items-start gap-2.5 text-[14.5px] leading-[1.5] text-lp-ink"
                >
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-signal" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={160} className="mt-10 flex flex-col items-center">
        <ArrowDown
          size={20}
          strokeWidth={1.9}
          aria-hidden="true"
          className="text-lp-line"
        />
        <p className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-[20px] border border-lp-green/15 bg-lp-mint px-6 py-5 text-center font-display text-[19px] font-bold tracking-[-0.01em] text-lp-ink sm:text-[22px]">
          <BrandMark size={30} className="shrink-0" />
          {c.why.transition}
        </p>
      </Reveal>
    </Section>
  );
}
