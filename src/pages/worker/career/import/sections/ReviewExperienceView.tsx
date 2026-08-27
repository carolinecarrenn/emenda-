import { useState } from "react";
import { Link } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY } from "../../career.copy";
import { EXTRACTED_EXPERIENCES } from "../../careerMock";
import { CareerBreadcrumb } from "../../sections/CareerBreadcrumb";
import { ExtractedField } from "./ExtractedField";

/** WD-23C per-category review — Experience: Keep/Edit/Remove per extracted
 *  item plus the WD-23F dedicated edit form (real React state). */
export function ReviewExperienceView() {
  const c = useSectionCopy(CAREER_COPY);
  const common = useCommonCopy();
  const [removed, setRemoved] = useState<Record<string, boolean>>({});
  const [editingId, setEditingId] = useState<string | null>(null);
  const [drafts, setDrafts] = useState(() =>
    Object.fromEntries(
      EXTRACTED_EXPERIENCES.map((e) => [
        e.id,
        {
          role: e.role,
          employer: e.employer,
          start: e.startDate,
          end: e.endDate,
          description: e.description,
        },
      ]),
    ),
  );

  if (editingId) {
    const draft = drafts[editingId];
    const set = (patch: Partial<typeof draft>) =>
      setDrafts({ ...drafts, [editingId]: { ...draft, ...patch } });
    return (
      <>
        <CareerBreadcrumb
          to="/worker/career/import"
          label={c.import.title}
        />
        <h1 className="mt-[14px] text-[30px] leading-[1.25] font-semibold text-[#17231f] lg:text-[32px]">
          {c.import.editExperienceTitle}
        </h1>
        <p className="mt-[6px] text-[13px] leading-[19px] text-[#65746d] lg:text-[16px] lg:leading-[24px]">
          {c.import.editSubtitle}
        </p>
        <div className="mt-[36px] grid gap-[23px] lg:grid-cols-[520px_520px] lg:gap-x-[40px]">
          <ExtractedField
            label={c.import.fieldRole}
            value={draft.role}
            onChange={(role) => set({ role })}
          />
          <ExtractedField
            label={c.import.fieldEmployer}
            value={draft.employer}
            onChange={(employer) => set({ employer })}
          />
          <ExtractedField
            label={c.import.fieldStart}
            value={draft.start}
            onChange={(start) => set({ start })}
          />
          <ExtractedField
            label={c.import.fieldEnd}
            value={draft.end}
            onChange={(end) => set({ end })}
          />
          <ExtractedField
            label={c.import.fieldDescription}
            value={draft.description}
            onChange={(description) => set({ description })}
          />
        </div>
        <button
          type="button"
          onClick={() => setEditingId(null)}
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
        {c.import.reviewExperienceTitle}
      </h1>
      <p className="mt-[6px] text-[13px] leading-[19px] text-[#65746d] lg:text-[16px] lg:leading-[24px]">
        {c.import.reviewExperienceSubtitle}
      </p>

      <div className="mt-[36px] flex flex-col gap-4 lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px] lg:gap-y-[18px]">
        {/* Extracted experience 1 — Keep + Edit/Remove */}
        <div className="min-h-[174px] rounded-[16px] border border-[#d5e0da] bg-white px-[16px] lg:px-[23px] py-[13px] lg:col-start-1 lg:row-start-1">
          <p
            className={`text-[12px] font-semibold ${
              removed["exp-1"] ? "text-[#65746d]" : "text-[#0b5842]"
            }`}
          >
            {removed["exp-1"] ? c.import.removed : c.import.kept}
          </p>
          <p className="mt-[13px] text-[15px] font-semibold text-[#17231f]">
            {drafts["exp-1"].role}
          </p>
          <p className="mt-[8px] text-[13px] text-[#65746d]">
            {drafts["exp-1"].employer} · {EXTRACTED_EXPERIENCES[0].period}
          </p>
          <div className="mt-[22px] flex gap-[15px]">
            <button
              type="button"
              onClick={() => setEditingId("exp-1")}
              className="flex h-[38px] flex-1 items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-lp-tint"
            >
              {common.action.edit}
            </button>
            <button
              type="button"
              onClick={() =>
                setRemoved({ ...removed, "exp-1": !removed["exp-1"] })
              }
              className={`flex h-[38px] flex-1 items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold hover:bg-lp-tint ${
                removed["exp-1"] ? "text-[#0b5842]" : "text-[#b42318]"
              }`}
            >
              {removed["exp-1"] ? c.import.keep : c.import.remove}
            </button>
          </div>
        </div>

        {/* Extracted experience 2 + WD-23C "Done" (19px under the card) */}
        <div className="flex flex-col gap-4 lg:col-start-2 lg:row-start-1 lg:gap-[19px]">
        <div className="min-h-[150px] rounded-[16px] border border-[#d5e0da] bg-white px-[16px] lg:px-[23px] py-[13px]">
          <p
            className={`text-[12px] font-semibold ${
              removed["exp-2"] ? "text-[#65746d]" : "text-[#0b5842]"
            }`}
          >
            {removed["exp-2"] ? c.import.removed : c.import.kept}
          </p>
          <p className="mt-[13px] text-[15px] font-semibold text-[#17231f]">
            {drafts["exp-2"].role}
          </p>
          <p className="mt-[8px] text-[13px] text-[#65746d]">
            {drafts["exp-2"].employer} · {EXTRACTED_EXPERIENCES[1].period}
          </p>
        </div>

        <Link
          to="/worker/career/import"
          className="flex h-[48px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[13px] font-semibold text-white hover:bg-lp-green"
        >
          {c.import.doneReviewing}
        </Link>
        </div>
      </div>
    </>
  );
}
