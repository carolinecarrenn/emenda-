import { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY } from "../../career.copy";
import {
  EXTRACTED_LANGUAGE,
  EXTRACTED_LANGUAGES,
  EXTRACTED_SKILL,
  EXTRACTED_SKILLS,
} from "../../careerMock";
import { CareerBreadcrumb } from "../../sections/CareerBreadcrumb";
import { ReviewItemSheet } from "./ReviewItemSheet";

/** WD-23E per-category review — Skills & languages, with the WD-23H review
 *  skill and WD-23I review language sheets (bottom sheet on mobile). Every
 *  extracted entry is its own check-marked chip inside the card. */
export function ReviewSkillsView() {
  const c = useSectionCopy(CAREER_COPY);
  const common = useCommonCopy();
  const [skillKept, setSkillKept] = useState(true);
  const [languageKept, setLanguageKept] = useState(true);
  const [sheet, setSheet] = useState<"skill" | "language" | null>(null);

  const decision = (kept: boolean) => (
    <span
      className={`text-[11px] font-semibold ${
        kept ? "text-[#0b5842]" : "text-[#65746d]"
      }`}
    >
      {kept ? c.import.keep : c.import.removed}
    </span>
  );

  const chips = (entries: string[]) => (
    <div className="flex min-w-0 flex-1 flex-wrap gap-x-[14px] gap-y-[9px] lg:w-[258px] lg:flex-none">
      {entries.map((entry) => (
        <span
          key={entry}
          className="inline-flex items-center gap-[6px] text-[13px] text-[#17231f]"
        >
          <Check size={14} strokeWidth={2} className="shrink-0" />
          {entry}
        </span>
      ))}
    </div>
  );

  return (
    <>
      <CareerBreadcrumb />
      <h1 className="mt-[14px] text-[30px] leading-[1.25] font-semibold text-[#17231f] lg:text-[32px]">
        {c.import.reviewSkillsTitle}
      </h1>
      <p className="mt-[6px] text-[13px] leading-[19px] text-[#65746d] lg:text-[16px] lg:leading-[24px]">
        {c.import.reviewSkillsSubtitle}
      </p>

      <div className="mt-[36px] flex flex-col gap-4 lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px]">
        {/* Extracted skills */}
        <div className="rounded-[16px] border border-[#d5e0da] bg-white px-[16px] py-[13px] lg:col-start-1 lg:row-start-1 lg:min-h-[160px] lg:px-[23px]">
          <p className="text-[14px] font-semibold text-[#17231f]">
            {c.import.skillsCardTitle}
          </p>
          <div className="mt-[13px] flex items-start gap-3 lg:gap-[13px]">
            {chips(EXTRACTED_SKILLS)}
            <div className="ml-auto flex shrink-0 items-center gap-[9px] lg:ml-0 lg:min-w-0 lg:flex-1 lg:justify-between">
              {decision(skillKept)}
              <button
                type="button"
                onClick={() => setSheet("skill")}
                className="flex h-[30px] w-[104px] shrink-0 items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[12px] font-semibold text-[#0b5842] hover:bg-lp-tint"
              >
                {common.status.review}
              </button>
            </div>
          </div>
        </div>

        {/* Extracted languages + WD-23E "Done" (19px under the card) */}
        <div className="flex flex-col gap-4 lg:col-start-2 lg:row-start-1 lg:gap-[19px]">
          <div className="rounded-[16px] border border-[#d5e0da] bg-white px-[16px] py-[13px] lg:min-h-[136px] lg:px-[23px]">
            <p className="text-[14px] font-semibold text-[#17231f]">
              {c.import.languagesCardTitle}
            </p>
            <div className="mt-[13px] flex items-start gap-3 lg:gap-[13px]">
              {chips(EXTRACTED_LANGUAGES)}
              <div className="ml-auto flex shrink-0 items-center gap-[9px] lg:ml-0 lg:min-w-0 lg:flex-1 lg:justify-between">
                {decision(languageKept)}
                <button
                  type="button"
                  onClick={() => setSheet("language")}
                  className="flex h-[30px] w-[104px] shrink-0 items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[12px] font-semibold text-[#0b5842] hover:bg-lp-tint"
                >
                  {common.status.review}
                </button>
              </div>
            </div>
          </div>

          <Link
            to="/worker/career/import"
            className="flex h-[48px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[13px] font-semibold text-white hover:bg-lp-green"
          >
            {c.import.doneReviewing}
          </Link>
        </div>
      </div>

      {sheet === "skill" && (
        <ReviewItemSheet
          title={c.import.reviewSkillSheetTitle}
          body={c.import.reviewSkillSheetBody}
          item={EXTRACTED_SKILL}
          keepLabel={c.import.keepSkill}
          removeLabel={c.import.removeSkill}
          cancelLabel={common.action.cancel}
          onKeep={() => {
            setSkillKept(true);
            setSheet(null);
          }}
          onRemove={() => {
            setSkillKept(false);
            setSheet(null);
          }}
          onCancel={() => setSheet(null)}
        />
      )}
      {sheet === "language" && (
        <ReviewItemSheet
          title={c.import.reviewLanguageSheetTitle}
          body={c.import.reviewLanguageSheetBody}
          item={EXTRACTED_LANGUAGE}
          keepLabel={c.import.keepLanguage}
          removeLabel={c.import.removeLanguage}
          cancelLabel={common.action.cancel}
          onKeep={() => {
            setLanguageKept(true);
            setSheet(null);
          }}
          onRemove={() => {
            setLanguageKept(false);
            setSheet(null);
          }}
          onCancel={() => setSheet(null)}
        />
      )}
    </>
  );
}
