import { Check } from "lucide-react";

interface ConsentRowProps {
  label: string;
  checked: boolean;
  onToggle: () => void;
  className?: string;
}

/* Consent strip — WD-50 node 1203:25 with the WD-50A selected state: 58px
   mint #f2f9f5 row, radius 12, 1px #d1ded6 border, a 24px radius-6 checkbox
   inset 15px and the 13px agreement sentence at 53px.
   Mobile (W-50 node 917:287 / W-50A) draws an 86px radius-14 decision card
   inset 13px: a 20px radius-4 checkbox pinned to the top beside the 10px
   agreement sentence at x47. */
export function ConsentRow({
  label,
  checked,
  onToggle,
  className = "",
}: ConsentRowProps) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onToggle}
      className={`flex min-h-[86px] w-full items-start rounded-[14px] border border-lp-line bg-lp-tint px-[13px] py-[15px] text-left hover:border-lp-green lg:min-h-[58px] lg:items-center lg:rounded-[12px] lg:px-[15px] lg:py-[12px] ${className}`}
    >
      <span
        className={`mt-[1px] flex size-[20px] shrink-0 items-center justify-center rounded-[4px] border lg:mt-0 lg:size-[24px] lg:rounded-[6px] ${
          checked
            ? "border-lp-button bg-lp-button"
            : "border-lp-line bg-white"
        }`}
      >
        {checked && (
          <Check
            className="size-[12px] text-white lg:size-[14px]"
            strokeWidth={3}
          />
        )}
      </span>
      <span className="ml-[14px] text-[10px] leading-[13px] text-lp-muted lg:text-[13px] lg:leading-normal lg:text-lp-ink">
        {label}
      </span>
    </button>
  );
}
