import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import { COMPOSE_LANGUAGE_PAIR, type FollowUpSignal } from "../followupMock";
import {
  composeReasonShort,
  fill,
  priorityTitleLabel,
} from "./followupLabels";

/* EM-09B follow-up context card (1030:186): mint #e8f5f0, radius 14,
   #d6e3de hairline, 72px — two columns pairing "Recipient · Putri Rahayu /
   Reason · Missing report" with "Language · ID → JA / Priority · High ·
   human review". Labels are 10px #094033 semibold, values 10px / 9px
   #6e8a82. */
export function ComposeRecipientCard({ signal }: { signal: FollowUpSignal }) {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <div className="grid min-h-[72px] grid-cols-2 gap-x-[12px] gap-y-[8px] rounded-[14px] border border-[#d6e3de] bg-[#e8f5f0] px-[14px] py-[14px]">
      <p className="text-[10px] font-semibold text-[#094033] lg:text-[12px]">
        {fill(c.compose.recipientLabel, { value: signal.workerName })}
      </p>
      <p className="text-[10px] font-semibold text-[#094033] lg:text-[12px]">
        {fill(c.compose.languageLabel, { value: COMPOSE_LANGUAGE_PAIR })}
      </p>
      <p className="text-[10px] text-[#6e8a82] lg:text-[11px]">
        {fill(c.compose.reasonLabel, { value: composeReasonShort(c, signal) })}
      </p>
      <p className="text-[9px] text-[#6e8a82] lg:text-[11px]">
        {fill(c.compose.priorityLabel, {
          value: fill(c.compose.priorityValue, {
            priority: priorityTitleLabel(c, signal.priority),
          }),
        })}
      </p>
    </div>
  );
}
