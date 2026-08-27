import type { ReactNode } from "react";

interface AnswerCardProps {
  eyebrow: string;
  body: string;
  source?: string;
  className?: string;
  children?: ReactNode;
}

/* Official / cached answer card (W-46A · W-46B). White card on a #d7e2dc
   hairline, 14px radius, green 10px eyebrow, 12px body and an optional 10px
   muted attribution line. Desktop keeps the 18px-radius panel. */
export function AnswerCard({
  eyebrow,
  body,
  source,
  className = "",
}: AnswerCardProps) {
  return (
    <div
      className={`rounded-[14px] border border-lp-line bg-white px-[13px] py-[13px] lg:rounded-[18px] lg:p-[23px] ${className}`}
    >
      <p className="text-[10px] leading-[16px] font-semibold text-brand lg:text-[11px] lg:text-lp-green">
        {eyebrow}
      </p>
      <p className="mt-[12px] max-w-[920px] text-[12px] leading-[19px] text-[#17231f] lg:mt-[16px] lg:text-[14px] lg:leading-[22px] lg:text-[#0e1f18]">
        {body}
      </p>
      {source !== undefined && (
        <p className="mt-[10px] text-[10px] leading-[18px] text-lp-muted lg:mt-[14px] lg:text-[12px]">
          {source}
        </p>
      )}
    </div>
  );
}
