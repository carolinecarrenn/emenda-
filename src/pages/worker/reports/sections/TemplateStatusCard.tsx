import { OptionChip } from "./OptionChip";
import { FIELD_LABEL } from "./fieldShell";
import type { StatusValue } from "../templateDraft";

/* "REPORT STATUS".
   Mobile (W-55 node 978:111): caps label straight on the canvas with a single
   row of 30px pills under it — no card.
   Desktop (WD-55): white card, radius 14, 11px caps label, 130x26 chips. */
export function TemplateStatusCard({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly { value: StatusValue; label: string }[];
  value: StatusValue;
  onChange: (value: StatusValue) => void;
}) {
  return (
    <div className="lg:rounded-[14px] lg:border lg:border-lp-line lg:bg-white lg:px-[15px] lg:pt-[7px] lg:pb-[9px]">
      <p className={`${FIELD_LABEL} lg:text-[11px]`}>{label}</p>
      <div className="mt-[6px] flex flex-wrap gap-[8px] lg:mt-[9px] lg:gap-3">
        {options.map((option) => (
          <OptionChip
            key={option.value}
            label={option.label}
            selected={option.value === value}
            onClick={() => onChange(option.value)}
          />
        ))}
      </div>
    </div>
  );
}
