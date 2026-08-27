/* Failure outcome badge shared by EM-18D (1133:32) and EM-19B (1133:117):
   a bare red "!" ahead of the 15px semibold #a62e1a line, inset 4px from the
   page gutter (x=24 on a 20px gutter). The page title and subtitle sit above
   it in `AccountPageHeader`; this row is only the outcome marker. */
export function StatusBadge({ label }: { label: string }) {
  return (
    <p className="ml-[4px] flex items-center gap-[10px] text-[15px] leading-[20px] font-semibold text-[#a62e1a] lg:text-[18px] lg:leading-[24px]">
      <span aria-hidden="true">!</span>
      {label}
    </p>
  );
}
