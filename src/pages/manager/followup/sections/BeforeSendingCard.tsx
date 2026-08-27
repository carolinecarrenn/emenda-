import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import { FollowUpCheckList } from "./FollowUpCheckList";

/* EM-09B "Before sending" (1030:207): yellow #fff4cc card, radius 12,
   #d6e3de hairline, 68px — 10px #094033 title over the five ✓ checks in
   #06634f (Recipient confirmed / Signal reviewed / Translation reviewed /
   Neutral wording / No private data). */
export function BeforeSendingCard() {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <div className="rounded-[12px] border border-[#d6e3de] bg-[#fff4cc] px-[14px] py-[10px]">
      <p className="text-[10px] font-semibold text-[#094033] lg:text-[12px]">
        {c.compose.beforeSendingTitle}
      </p>
      <div className="mt-[8px]">
        <FollowUpCheckList items={c.compose.beforeSendingChecks} />
      </div>
    </div>
  );
}
