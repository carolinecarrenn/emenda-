import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { EDUCATION_COPY } from "../education.copy";
import { PillButton, PrimaryButton } from "../../experience/careerUi";
import { EDUCATION_ENTRY } from "../educationMock";

/** WD-26 list — one white education card (Edit pill) + full-width
 *  "Add education" primary at the top of the right column. */
export function EducationList({
  readOnly = false,
  onEdit,
  onAdd,
}: {
  readOnly?: boolean;
  onEdit?: () => void;
  onAdd?: () => void;
}) {
  const c = useSectionCopy(EDUCATION_COPY);
  const common = useCommonCopy();

  return (
    <div className="grid items-start gap-4 lg:grid-cols-2 lg:gap-x-[40px]">
      <div className="lg:min-h-[150px] rounded-[12px] border border-[#d5e0da] bg-white px-[16px] pt-[16px] pb-[15px] lg:rounded-[16px] lg:px-[23px] lg:py-[15px]">
        <p className="text-[15px] leading-[20px] font-semibold text-[#17231f]">
          {EDUCATION_ENTRY.degree}
        </p>
        <p className="mt-[6px] text-[13px] leading-[18px] text-[#65746d]">
          {EDUCATION_ENTRY.institution}
        </p>
        <p className="mt-[8px] text-[13px] leading-[18px] text-[#65746d] lg:text-[12px]">
          {EDUCATION_ENTRY.fieldOfStudy}
        </p>
        <div className="mt-[8px] flex items-start justify-between gap-3">
          <p className="text-[13px] leading-[18px] text-[#65746d] lg:text-[12px]">
            {EDUCATION_ENTRY.startYear} – {EDUCATION_ENTRY.endYear}
          </p>
          {!readOnly && (
            <div className="mt-[7px] lg:mt-[8px]">
              <PillButton label={common.action.edit} onClick={onEdit} />
            </div>
          )}
        </div>
      </div>
      {!readOnly && (
        <PrimaryButton label={c.addEducation} onClick={onAdd} />
      )}
    </div>
  );
}
