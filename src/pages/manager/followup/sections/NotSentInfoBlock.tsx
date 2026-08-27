import type { ReactNode } from "react";

/* MD-09C "SAFE RETRY" block (1226:1533): 840px #f1f6f3 panel, radius 10, an
   11px semibold #0c5941 caps label 20px in, and an 11px #65746d body 28px
   below it. DRAFT PRESERVED reuses the same block. Desktop only. */
export function NotSentInfoBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[10px] bg-[#f1f6f3] px-[20px] pt-[20px] pb-[42px]">
      <p className="text-[11px] font-semibold text-[#0c5941] uppercase">
        {title}
      </p>
      <p className="mt-[11px] text-[11px] leading-[18px] text-[#65746d]">
        {children}
      </p>
    </div>
  );
}
