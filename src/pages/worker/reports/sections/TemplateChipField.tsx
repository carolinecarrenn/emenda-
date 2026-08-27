import { OptionChip } from "./OptionChip";
import { CHIP_ROW, CHIP_SHELL, FIELD_LABEL } from "./fieldShell";

/* Editable twin of ReadOnlyChipField — W-55J "SAFETY STATUS",
   W-55L "SERVICE CONDITION", W-55H "RESIDENT CONDITION".
   Mobile (W-55J node 989:114): caps label on the canvas over a bare row of
   30px pills. Desktop (WD-55J): white card, radius 12, 135x26 chips. */
export function TemplateChipField<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div className={CHIP_SHELL}>
      <p className={FIELD_LABEL}>{label}</p>
      <div className={CHIP_ROW}>
        {options.map((option) => (
          <OptionChip
            key={option.value}
            label={option.label}
            size="sm"
            selected={option.value === value}
            onClick={() => onChange(option.value)}
          />
        ))}
      </div>
    </div>
  );
}
