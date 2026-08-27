import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { SKILLS_COPY, levelLabel } from "../skills.copy";
import { type LanguageEntry } from "../skillsMock";

/** WD-27B edit mode — Skills editor card (removable "×" chips, "+ Add skill",
 *  Edit pill) and Languages editor card (rows, "+ Add language", "Edit
 *  levels" pill). Each chip and each language row is itself a control that
 *  opens the W-27F / W-27G sheet for that entry, so every item can be edited,
 *  not only the first one behind the card-level pill. */
export function SkillsEditor({
  skills,
  languages,
  onRemoveSkill,
  onAddSkill,
  onEditSkill,
  onAddLanguage,
  onEditLanguage,
}: {
  skills: string[];
  languages: LanguageEntry[];
  onRemoveSkill: (skill: string) => void;
  onAddSkill: () => void;
  onEditSkill: (index: number) => void;
  onAddLanguage: () => void;
  onEditLanguage: (index: number) => void;
}) {
  const c = useSectionCopy(SKILLS_COPY);
  const common = useCommonCopy();

  return (
    <div className="grid items-start gap-[12px] lg:grid-cols-2 lg:gap-4 lg:gap-x-[40px]">
      {/* Skills editor */}
      <div className="min-h-[190px] rounded-[12px] border border-[#d5e0da] bg-white px-[16px] pt-[14px] pb-[18px] lg:h-[190px] lg:rounded-[16px] lg:px-[23px] lg:py-[20px]">
        <div className="flex items-center justify-between">
          <p className="text-[14px] leading-[17px] font-semibold text-[#17231f]">
            {c.skillsCardTitle}
          </p>
          <button
            type="button"
            onClick={() => onEditSkill(0)}
            className="h-[30px] rounded-[12px] border border-[#d1ddd7] bg-white px-[14px] text-[12px] font-semibold text-[#0b5842] hover:bg-[#f4f8f5]"
          >
            {common.action.edit}
          </button>
        </div>
        <div className="mt-[16px] flex flex-wrap gap-x-[18px] gap-y-[12px] lg:mt-[17px] lg:max-w-[232px] lg:gap-x-[13px] lg:gap-y-[17px]">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="inline-flex items-center gap-[10px] text-[13px] text-[#17231f]"
            >
              <button
                type="button"
                onClick={() => onEditSkill(index)}
                className="text-[13px] text-[#17231f] underline-offset-4 hover:underline"
              >
                {skill}
              </button>
              <button
                type="button"
                aria-label={c.removeSkillAria(skill)}
                onClick={() => onRemoveSkill(skill)}
                className="text-[13px] leading-none text-[#65746d] hover:text-[#b42318]"
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={onAddSkill}
          className="mt-[28px] h-[40px] w-full rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-[#f4f8f5] lg:mt-[31px] lg:h-[34px]"
        >
          {c.addSkillChip}
        </button>
      </div>

      {/* Languages editor */}
      <div className="min-h-[194px] rounded-[12px] border border-[#d5e0da] bg-white px-[16px] py-[14px] lg:h-[190px] lg:rounded-[16px] lg:px-[23px] lg:py-[20px]">
        <div className="flex items-center justify-between">
          <p className="text-[14px] leading-[17px] font-semibold text-[#17231f]">
            {c.languagesCardTitle}
          </p>
          <button
            type="button"
            onClick={() => onEditLanguage(0)}
            className="h-[30px] rounded-[12px] border border-[#d1ddd7] bg-white px-[14px] text-[12px] font-semibold text-[#0b5842] hover:bg-[#f4f8f5]"
          >
            {c.editLevels}
          </button>
        </div>
        <div className="mt-[16px] flex flex-col gap-[12px] lg:mt-[17px] lg:gap-[17px]">
          {languages.map((lang, index) => (
            <button
              key={lang.name}
              type="button"
              onClick={() => onEditLanguage(index)}
              className="-mx-[8px] flex items-center justify-between rounded-[8px] px-[8px] py-[2px] text-left leading-[17px] hover:bg-[#f4f8f5] lg:py-0"
            >
              <span className="text-[13px] text-[#65746d]">{lang.name}</span>
              <span className="text-[13px] text-[#17231f]">
                {levelLabel(c, lang.level)}
              </span>
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={onAddLanguage}
          className="mt-[10px] h-[36px] w-full rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-[#f4f8f5] lg:mt-[7px] lg:h-[34px]"
        >
          {c.addLanguageChip}
        </button>
      </div>
    </div>
  );
}
