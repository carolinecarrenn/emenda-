import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, Circle } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY, fillCopy } from "../../career.copy";
import { VERIFIED_UPDATE } from "../../careerMock";

/** WD-24B review update with checkbox-style suggested changes. Toggling the
 *  selections reproduces WD-24H (experience only), WD-24I (skills /
 *  qualification only) and WD-24J (nothing selected → Apply disabled). */
export function ReviewUpdateView() {
  const c = useSectionCopy(CAREER_COPY);
  const navigate = useNavigate();
  const [experienceSelected, setExperienceSelected] = useState(true);
  const [skillsSelected, setSkillsSelected] = useState(true);
  const nothingSelected = !experienceSelected && !skillsSelected;

  const sourceRows = [
    { label: c.cv.review.labelRole, value: VERIFIED_UPDATE.role },
    { label: c.cv.review.labelPeriod, value: VERIFIED_UPDATE.period },
    { label: c.cv.review.labelSource, value: c.cv.review.sourceValue },
  ];

  const option = (
    selected: boolean,
    toggle: () => void,
    label: string,
    sub: string,
  ) => (
    <button type="button" onClick={toggle} className="block w-full text-left">
      {/* WD-24B/H/J marker: a bare green check when the change is selected,
          an empty circle outline when it is not — never a filled box. */}
      <span className="flex items-center gap-[8px]">
        <span className="flex size-[14px] items-center justify-center text-[#0b5842]">
          {selected ? (
            <Check size={14} strokeWidth={2} />
          ) : (
            <Circle size={11} strokeWidth={1.6} className="text-[#17231f]" />
          )}
        </span>
        <span className="text-[13px] text-[#17231f]">{label}</span>
      </span>
      <span className="mt-[6px] block pl-[22px] text-[11px] text-[#65746d]">
        {sub}
      </span>
    </button>
  );

  return (
    /* WD-24B/H/I/J: each desktop column stacks on its own (20px gap); the
       cards are not tied to shared grid rows. */
    <div className="mt-[36px] flex flex-col gap-[14px] lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px] lg:gap-y-4">
      <div className="contents lg:col-start-1 lg:flex lg:flex-col lg:gap-[20px]">
      {/* Verified source (mint) */}
      <div className="order-1 rounded-[16px] border border-[#cfe2d9] bg-[#eaf4ef] px-[16px] py-[13px] lg:order-none lg:h-[124px] lg:px-[23px] lg:py-[11px]">
        <p className="text-[14px] font-semibold text-[#0b5842]">
          {fillCopy(c.cv.review.verifiedBy, {
            employer: VERIFIED_UPDATE.employer,
          })}
        </p>
        <div className="mt-[8px] lg:mt-[4px]">
          {sourceRows.map((row) => (
            <div
              key={row.label}
              className="flex h-[29px] items-center justify-between lg:h-[27px]"
            >
              <span className="text-[13px] text-[#65746d]">{row.label}</span>
              <span className="text-[13px] text-[#17231f]">{row.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Snapshot note */}
      <div className="order-3 rounded-[16px] border border-[#d5e0da] bg-[#f3f7f5] px-[16px] py-[12px] lg:order-none lg:h-[68px] lg:px-[23px] lg:py-[11px]">
        <p className="text-[13px] font-semibold text-[#0b5842]">
          {c.cv.review.noteTitle}
        </p>
        <p className="mt-[7px] text-[11px] text-[#65746d]">
          {c.cv.review.noteBody}
        </p>
      </div>

      <Link
        to="/worker/career/cv"
        className="order-5 flex h-[44px] w-full items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-lp-tint lg:order-none"
      >
        {c.cv.review.notNow}
      </Link>
      </div>

      <div className="contents lg:col-start-2 lg:flex lg:flex-col lg:gap-[19px]">
      {/* Suggested changes (selectable) */}
      <div className="order-2 min-h-[176px] rounded-[16px] border border-[#d5e0da] bg-white px-[16px] py-[13px] lg:order-none lg:px-[23px]">
        <p className="text-[14px] font-semibold text-[#17231f]">
          {c.cv.review.suggestedTitle}
        </p>
        <div className="mt-[16px]">
          {option(
            experienceSelected,
            () => setExperienceSelected(!experienceSelected),
            c.cv.review.optionExperience,
            VERIFIED_UPDATE.experienceSummary,
          )}
        </div>
        <div className="mt-[18px]">
          {option(
            skillsSelected,
            () => setSkillsSelected(!skillsSelected),
            c.cv.review.optionSkills,
            VERIFIED_UPDATE.skillsSummary,
          )}
        </div>
      </div>

      <button
        type="button"
        disabled={nothingSelected}
        onClick={() => navigate("/worker/career/cv?state=updated")}
        className={`order-4 flex h-[52px] w-full items-center justify-center rounded-[14px] text-[13px] font-semibold text-white lg:order-none ${
          nothingSelected
            ? "cursor-not-allowed bg-[#9dbbad]"
            : "bg-[#0c664b] hover:bg-lp-green"
        }`}
      >
        {nothingSelected ? c.cv.review.applyDisabledCta : c.cv.review.applyCta}
      </button>
      </div>
    </div>
  );
}
