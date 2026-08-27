import { Check, Clock } from "lucide-react";

interface QuestionStatusCardProps {
  waiting: boolean;
  label: string;
  meta: string;
  className?: string;
}

/* Question status card (W-46 waiting · W-46A answered). Waiting: #fff8e6 on a
   #e7c98d hairline with a clock glyph and #8a5a12 text. Answered: #eef5f1 on
   #c7ded3 with a check glyph, a #0c5941 label and a muted meta line. */
export function QuestionStatusCard({
  waiting,
  label,
  meta,
  className = "",
}: QuestionStatusCardProps) {
  const Icon = waiting ? Clock : Check;

  return (
    <div
      className={`flex min-h-[76px] items-start gap-[12px] rounded-[12px] border px-[13px] py-[13px] lg:min-h-[88px] lg:items-center lg:gap-[21px] lg:px-[28px] lg:py-4 ${
        waiting
          ? "border-[#e7c98d] bg-[#fff8e6] lg:border-transparent lg:bg-[#fff5d6]"
          : "border-[#c7ded3] bg-[#eef5f1] lg:border-lp-line lg:bg-lp-mint"
      } ${className}`}
    >
      <Icon
        size={20}
        className={`mt-[4px] shrink-0 lg:mt-0 lg:size-[18px] ${
          waiting ? "text-[#8a5a12] lg:text-[#ad6b0a]" : "text-brand"
        }`}
        aria-hidden
      />
      <span className="min-w-0 flex-1 lg:flex-none">
        <span
          className={`block text-[12px] leading-[20px] font-semibold lg:text-[15px] ${
            waiting ? "text-[#8a5a12] lg:text-[#ad6b0a]" : "text-brand"
          }`}
        >
          {label}
        </span>
        <span
          className={`mt-[4px] block text-[10px] leading-[17px] lg:mt-[6px] lg:text-[12px] lg:text-lp-muted ${
            waiting ? "text-[#8a5a12]" : "text-lp-muted"
          }`}
        >
          {meta}
        </span>
      </span>
    </div>
  );
}
