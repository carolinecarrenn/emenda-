import {
  RESIDENT_CONDITIONS,
  type ResidentCondition,
} from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { CAREGIVER_COPY } from "../caregiver.copy";
import { OptionChip } from "./OptionChip";
import { CHIP_ROW, CHIP_SHELL, FIELD_LABEL } from "./fieldShell";

/* "Resident condition".
   Mobile (W-55H node 978:408): caps label on the canvas over a bare row of
   30px pills. Desktop (WD-55H): white card, radius 12, 135x26 chips.
   The condition VALUES are enum data: they display through localizeTerm and
   stay English when stored. */
export function ResidentConditionCard({
  value,
  onChange,
  readOnly = false,
}: {
  value: ResidentCondition;
  onChange?: (value: ResidentCondition) => void;
  readOnly?: boolean;
}) {
  const c = useSectionCopy(CAREGIVER_COPY);
  const { language } = useLanguage();

  return (
    <div className={CHIP_SHELL}>
      <p className={FIELD_LABEL}>{c.form.residentCondition}</p>
      <div className={CHIP_ROW}>
        {RESIDENT_CONDITIONS.map((condition) => (
          <OptionChip
            key={condition}
            label={localizeTerm(condition, language)}
            size="sm"
            selected={value === condition}
            readOnly={readOnly}
            onClick={() => onChange?.(condition)}
          />
        ))}
      </div>
    </div>
  );
}
