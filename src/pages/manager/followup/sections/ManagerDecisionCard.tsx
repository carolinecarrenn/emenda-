import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import { FollowUpCheckList } from "./FollowUpCheckList";

/* EM-09A "Manager decision" (1030:177): yellow #fff4cc card, radius 14,
   #d6e3de hairline — 11px #094033 title, the 10px #6e8a82 instruction
   "Send a neutral Daily Report reminder. Do not infer misconduct from a
   missing submission alone." on a 12px leading, then the three ✓ checks in
   #06634f. The mock's 98px rect is shorter than the text it holds, so the
   card keeps a real 12px bottom inset instead of overflowing. */
export function ManagerDecisionCard() {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <div className="rounded-[14px] border border-[#d6e3de] bg-[#fff4cc] px-[14px] py-[12px]">
      <p className="text-[11px] font-semibold text-[#094033] lg:text-[13px]">
        {c.review.decisionTitle}
      </p>
      <p className="mt-[10px] text-[10px] leading-[12px] text-[#6e8a82] lg:text-[12px] lg:leading-[16px]">
        {c.review.decisionBody}
      </p>
      <div className="mt-[12px]">
        <FollowUpCheckList items={c.review.checks} />
      </div>
    </div>
  );
}
