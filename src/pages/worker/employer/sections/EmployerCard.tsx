import { useSectionCopy } from "@/i18n/copy";
import { EMPLOYER_COPY } from "../employer.copy";
import { EMPLOYER_CONNECTION } from "../employerMock";

interface EmployerCardProps {
  /** Desktop card height: WD-50 draws 100px, WD-51 draws 96px. */
  minHeight?: 96 | 100;
  className?: string;
}

const MIN_HEIGHT_CLASSES: Record<
  NonNullable<EmployerCardProps["minHeight"]>,
  string
> = {
  96: "lg:min-h-[96px]",
  100: "lg:min-h-[100px]",
};

/* EMPLOYER card — WD-50 node 1182:953 / WD-51 node 1182:1221.
   Desktop: 1012px white card, radius 16, 1px #d1ded6 border; 11px semibold
   muted eyebrow over the 20px semibold legal name.
   Mobile (W-50 node 917:273 / W-51 node 938:17 / W-50D node 943:17): a 72px
   radius-14 card inset 13px, a 10px semibold muted label at y13 and the legal
   name in 12px regular at y37. The name is record data. */
export function EmployerCard({
  minHeight = 100,
  className = "",
}: EmployerCardProps) {
  const c = useSectionCopy(EMPLOYER_COPY);

  return (
    <div
      className={`min-h-[72px] rounded-[14px] border border-lp-line bg-white px-[13px] pt-[13px] pb-[13px] lg:rounded-[16px] lg:px-[19px] lg:pt-[16px] lg:pb-[18px] ${MIN_HEIGHT_CLASSES[minHeight]} ${className}`}
    >
      <p className="text-[10px] leading-[14px] font-semibold text-lp-muted lg:text-[11px] lg:leading-normal">
        {c.scope.employerLabel}
      </p>
      <p className="mt-[10px] text-[12px] leading-[18px] text-lp-ink lg:text-[20px] lg:leading-normal lg:font-semibold">
        {EMPLOYER_CONNECTION.legalName}
      </p>
    </div>
  );
}
