import { useState } from "react";
import { Link } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY } from "../../career.copy";
import { EXTRACTED_EDUCATION } from "../../careerMock";
import { CareerBreadcrumb } from "../../sections/CareerBreadcrumb";
import { ExtractedField } from "./ExtractedField";

/** WD-23D per-category review — Education, with the WD-23G edit form. */
export function ReviewEducationView() {
  const c = useSectionCopy(CAREER_COPY);
  const common = useCommonCopy();
  const entry = EXTRACTED_EDUCATION[0];
  const [isRemoved, setIsRemoved] = useState(false);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState({
    school: entry.school,
    degree: entry.degree,
    fieldOfStudy: entry.fieldOfStudy,
    start: entry.startDate,
    end: entry.endDate,
  });

  if (editing) {
    const set = (patch: Partial<typeof draft>) =>
      setDraft({ ...draft, ...patch });
    return (
      <>
        <CareerBreadcrumb
          to="/worker/career/import"
          label={c.import.title}
        />
        <h1 className="mt-[14px] text-[30px] leading-[1.25] font-semibold text-[#17231f] lg:text-[32px]">
          {c.import.editEducationTitle}
        </h1>
        <p className="mt-[6px] text-[13px] leading-[19px] text-[#65746d] lg:text-[16px] lg:leading-[24px]">
          {c.import.editSubtitle}
        </p>
        <div className="mt-[36px] grid gap-[23px] lg:grid-cols-[520px_520px] lg:gap-x-[40px]">
          <ExtractedField
            label={c.import.fieldSchool}
            value={draft.school}
            onChange={(school) => set({ school })}
          />
          <ExtractedField
            label={c.import.fieldDegree}
            value={draft.degree}
            onChange={(degree) => set({ degree })}
          />
          <ExtractedField
            label={c.import.fieldFieldOfStudy}
            value={draft.fieldOfStudy}
            onChange={(fieldOfStudy) => set({ fieldOfStudy })}
          />
          <ExtractedField
            label={c.import.fieldStartYear}
            value={draft.start}
            onChange={(start) => set({ start })}
          />
          <ExtractedField
            label={c.import.fieldEndYear}
            value={draft.end}
            onChange={(end) => set({ end })}
          />
        </div>
        <button
          type="button"
          onClick={() => setEditing(false)}
          className="mt-[43px] flex h-[52px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[13px] font-semibold text-white hover:bg-lp-green lg:ml-[560px] lg:w-[520px]"
        >
          {c.import.saveExtractedItem}
        </button>
      </>
    );
  }

  return (
    <>
      <CareerBreadcrumb />
      <h1 className="mt-[14px] text-[30px] leading-[1.25] font-semibold text-[#17231f] lg:text-[32px]">
        {c.import.reviewEducationTitle}
      </h1>
      <p className="mt-[6px] text-[13px] leading-[19px] text-[#65746d] lg:text-[16px] lg:leading-[24px]">
        {c.import.reviewEducationSubtitle}
      </p>

      <div className="mt-[36px] flex flex-col gap-4 lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px] lg:gap-y-[18px]">
        <div className="min-h-[174px] rounded-[16px] border border-[#d5e0da] bg-white px-[16px] lg:px-[23px] py-[13px] lg:col-start-1 lg:row-start-1">
          <p
            className={`text-[12px] font-semibold ${
              isRemoved ? "text-[#65746d]" : "text-[#0b5842]"
            }`}
          >
            {isRemoved ? c.import.removed : c.import.kept}
          </p>
          <p className="mt-[13px] text-[15px] font-semibold text-[#17231f]">
            {draft.degree}
          </p>
          <p className="mt-[8px] text-[12px] text-[#65746d]">
            {draft.school} · {entry.period}
          </p>
          <div className="mt-[22px] flex gap-[15px]">
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="flex h-[38px] flex-1 items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-lp-tint"
            >
              {common.action.edit}
            </button>
            <button
              type="button"
              onClick={() => setIsRemoved(!isRemoved)}
              className={`flex h-[38px] flex-1 items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold hover:bg-lp-tint ${
                isRemoved ? "text-[#0b5842]" : "text-[#b42318]"
              }`}
            >
              {isRemoved ? c.import.keep : c.import.remove}
            </button>
          </div>
        </div>

        <Link
          to="/worker/career/import"
          className="flex h-[48px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[13px] font-semibold text-white hover:bg-lp-green lg:col-start-2 lg:row-start-1 lg:self-start"
        >
          {c.import.doneReviewing}
        </Link>
      </div>
    </>
  );
}
