import { useSectionCopy } from "@/i18n/copy";
import { EMPLOYER_COPY } from "../employer.copy";
import { EMPLOYER_CONNECTION } from "../employerMock";

interface ScopeSummaryCardProps {
  eyebrow: string;
  protectedLine: string;
  className?: string;
}

/* Condensed scope recap — WD-50B "Approved connection details" (node 1203:38)
   and WD-51B "Current connection details" (node 1203:41): an 820x168 tint
   card, radius 16, 20px inset, whose green 11px eyebrow sits INSIDE the card
   at y=18 over a 13px/16px ink block — legal name, EMPLOYER CAN ACCESS, the
   two access pairs, a blank line, then the protection line.
   Mobile (W-50B node 917:362 / W-51B) keeps its own 166px white card with the
   eyebrow at 10px muted, an EMPLOYER label over the 12px legal name, an
   EMPLOYER CAN ACCESS label over the two 10px pairs, then the 9px line. */
export function ScopeSummaryCard({
  eyebrow,
  protectedLine,
  className = "",
}: ScopeSummaryCardProps) {
  const c = useSectionCopy(EMPLOYER_COPY);

  return (
    <div className={className}>
      <div className="min-h-[166px] rounded-[16px] border border-lp-line bg-white lg:rounded-[14px] px-[15px] pt-[15px] pb-[3px] lg:min-h-[168px] lg:max-w-[820px] lg:bg-lp-tint lg:px-[20px] lg:pt-[18px] lg:pb-[24px]">
        <p className="text-[10px] leading-[14px] font-semibold text-lp-muted lg:text-[11px] lg:leading-[20px] lg:text-lp-green">
          {eyebrow}
        </p>
        <p className="mt-[6px] text-[10px] leading-[12px] font-semibold text-lp-muted lg:hidden">
          {c.scope.employerLabel}
        </p>
        <p className="mt-[4px] text-[12px] leading-[18px] text-lp-ink lg:mt-[9px] lg:text-[13px] lg:leading-[16px] lg:font-normal">
          {EMPLOYER_CONNECTION.legalName}
        </p>
        <p className="mt-[16px] text-[10px] leading-[12px] font-semibold text-lp-muted lg:mt-0 lg:text-[13px] lg:leading-[16px] lg:font-normal lg:text-lp-ink">
          {c.scope.canAccessTitle}
        </p>
        <div className="mt-[6px] text-[10px] leading-[13px] text-lp-muted lg:mt-0 lg:text-[13px] lg:leading-[16px] lg:text-lp-ink">
          {c.scope.accessPairs.map((pair) => (
            <p key={pair}>{pair}</p>
          ))}
        </div>
        <p className="mt-[10px] text-[9px] leading-[12px] font-semibold text-lp-muted lg:mt-[16px] lg:text-[13px] lg:leading-[16px] lg:font-normal lg:text-lp-ink">
          {protectedLine}
        </p>
      </div>
    </div>
  );
}
