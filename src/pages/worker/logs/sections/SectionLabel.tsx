import type { ReactNode } from "react";

/* Semibold list caption used above every WD-61 record group ("VERIFIED WORK
   RECORDS", "YOUR PRIVATE ENTRIES", "HISTORY"). Figma sets it at 10px muted
   #63756b in a 14px box on mobile (W-61A) and 11px green #054d3d in a 20px box
   on desktop (WD-61A). */
export function SectionLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[10px] leading-[14px] font-semibold text-lp-muted lg:text-[11px] lg:leading-[20px] lg:text-lp-green ${className}`}
    >
      {children}
    </p>
  );
}
