import { useSectionCopy } from "@/i18n/copy";
import { SKILLS_COPY, levelLabel } from "../skills.copy";
import { PrimaryButton } from "../../experience/careerUi";
import {
  LANGUAGES,
  TOTAL_SKILLS,
  VISIBLE_SKILLS,
  type LanguageEntry,
} from "../skillsMock";

/** WD-27 base — "Skills" chip card (inline text chips + "12 skills total"
 *  footer) and "Languages" label/value rows with the edit primary below. */
export function SkillsOverview({
  readOnly = false,
  onEdit,
}: {
  readOnly?: boolean;
  onEdit?: () => void;
}) {
  const c = useSectionCopy(SKILLS_COPY);
  const hidden = TOTAL_SKILLS - VISIBLE_SKILLS.length;
  /* WD-27 lays the chips out as two rows of three (5 skills + "+N more"). */
  const chips = [...VISIBLE_SKILLS, c.moreSkills(hidden)];
  const chipRows: string[][] = [];
  for (let i = 0; i < chips.length; i += 3) chipRows.push(chips.slice(i, i + 3));

  return (
    /* WD-27 desktop: two fixed 520px columns with a 40px gutter. The skill
       chips run three to a line exactly as the mock draws them. */
    <div className="grid items-start gap-4 lg:grid-cols-[520px_520px] lg:gap-x-[40px]">
      <div className="min-h-[176px] rounded-[16px] border border-[#d5e0da] bg-white px-[16px] lg:px-[23px] pt-[14px] pb-[26px]">
        <p className="text-[14px] leading-[18px] font-semibold text-[#17231f]">
          {c.skillsCardTitle}
        </p>
        <div className="mt-[16px] flex flex-col gap-[14px]">
          {chipRows.map((row) => (
            <div key={row.join("|")} className="flex flex-wrap gap-x-[10px]">
              {row.map((skill) => (
                <span
                  key={skill}
                  className="text-[13px] leading-[22px] text-[#17231f]"
                >
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-[26px] text-[12px] leading-[18px] text-[#65746d]">
          {c.skillsTotal(TOTAL_SKILLS)}
        </p>
      </div>

      <div className="flex flex-col gap-[18px]">
        <div className="min-h-[148px] rounded-[16px] border border-[#d5e0da] bg-white px-[16px] lg:px-[23px] pt-[14px] pb-[20px]">
          <p className="text-[14px] leading-[18px] font-semibold text-[#17231f]">
            {c.languagesCardTitle}
          </p>
          <div className="mt-[16px] flex flex-col gap-[13px]">
            {LANGUAGES.map((lang: LanguageEntry) => (
              <div
                key={lang.name}
                className="flex h-[18px] items-center justify-between"
              >
                <p className="text-[13px] leading-[18px] text-[#65746d]">
                  {lang.name}
                </p>
                <p className="text-[13px] leading-[18px] text-[#17231f]">
                  {levelLabel(c, lang.level)}
                </p>
              </div>
            ))}
          </div>
        </div>
        {!readOnly && <PrimaryButton label={c.editButton} onClick={onEdit} />}
      </div>
    </div>
  );
}
