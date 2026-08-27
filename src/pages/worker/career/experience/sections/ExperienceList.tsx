import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { EXPERIENCE_COPY } from "../experience.copy";
import { PillButton, PrimaryButton } from "../careerUi";
import {
  SELF_EXPERIENCE,
  VERIFIED_EXPERIENCE,
} from "../experienceMock";

/** WD-25 list — mint employer-verified card (view-only) + white self-added
 *  card + full-width "Add experience" primary under the right column. */
export function ExperienceList({
  readOnly = false,
  onView,
  onEdit,
  onAdd,
}: {
  /** Offline variant: cached cards render without action pills or Add. */
  readOnly?: boolean;
  onView?: () => void;
  onEdit?: () => void;
  onAdd?: () => void;
}) {
  const c = useSectionCopy(EXPERIENCE_COPY);
  const common = useCommonCopy();

  return (
    /* WD-25 desktop: two fixed 520px columns with a 40px gutter. Card action
       pills are pinned to the Figma offsets (x=362.5 → 23.8px right inset)
       instead of sharing a flex row with the meta line. */
    <div className="grid items-start gap-[12px] lg:grid-cols-[520px_520px] lg:gap-x-[40px]">
      {/* Employer-verified experience — view-only mint card */}
      <div className="relative min-h-[150px] rounded-[16px] border border-[#cfe2d9] bg-[#eaf4ef] px-[16px] lg:px-[23px] pt-[16px] pb-[15px]">
        <p className="text-[15px] leading-[20px] font-semibold text-[#17231f]">
          {VERIFIED_EXPERIENCE.role}
        </p>
        <p className="mt-[6px] text-[13px] leading-[18px] text-[#65746d]">
          {VERIFIED_EXPERIENCE.employer}
        </p>
        <p className="mt-[7px] text-[12px] leading-[18px] text-[#65746d]">
          {VERIFIED_EXPERIENCE.period} · {VERIFIED_EXPERIENCE.country}
        </p>
        <p className="mt-[9px] max-w-[210px] text-[11px] leading-[18px] font-semibold text-[#0b5842] lg:max-w-[312px]">
          {c.verifiedCaption}
        </p>
        {!readOnly && (
          <div className="absolute top-[101px] right-[16px] w-[90px] lg:right-[23px] lg:w-[134px]">
            <PillButton label={common.action.view} onClick={onView} />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-[16px] lg:gap-[18px]">
        {/* Self-added experience — white card with Edit */}
        <div className="relative min-h-[130px] rounded-[16px] border border-[#d5e0da] bg-white px-[16px] lg:px-[23px] pt-[16px] pb-[14px]">
          <p className="text-[15px] leading-[20px] font-semibold text-[#17231f]">
            {SELF_EXPERIENCE.role}
          </p>
          <p className="mt-[7px] text-[13px] leading-[18px] text-[#65746d]">
            {SELF_EXPERIENCE.employer}
          </p>
          <p className="mt-[7px] text-[12px] leading-[16px] text-[#65746d]">
            {SELF_EXPERIENCE.period} · {SELF_EXPERIENCE.country}
          </p>
          {!readOnly && (
            <div className="absolute top-[82px] right-[16px] w-[90px] lg:right-[23px] lg:w-[134px]">
              <PillButton label={common.action.edit} onClick={onEdit} />
            </div>
          )}
        </div>
        {!readOnly && (
          <PrimaryButton label={c.addExperience} onClick={onAdd} />
        )}
      </div>
    </div>
  );
}
