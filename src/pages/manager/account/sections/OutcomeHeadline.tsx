import { Check } from "lucide-react";

/* Success outcome badge shared by EM-18C (1133:4) and EM-19A (1133:90):
   a bare green check ahead of the 15px semibold #083d2d line, inset 4px from
   the page gutter (x=24 on a 20px gutter). The page title and subtitle sit
   above it in `AccountPageHeader`; this row is only the outcome marker. */
export function OutcomeHeadline({ title }: { title: string }) {
  return (
    <p className="ml-[4px] flex items-center gap-[8px] text-[15px] leading-[20px] font-semibold text-brand-deep lg:text-[18px] lg:leading-[24px]">
      <Check className="shrink-0" size={15} strokeWidth={2.5} />
      {title}
    </p>
  );
}
