import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import type { FollowUpSignal } from "../followupMock";
import { fill } from "./followupLabels";

/* EM-09B "Manager note · not sent to worker" (1030:204): white card, radius
   12, #d6e3de hairline, 52px — 9px #6e8a82 label over the 9px #6e8a82
   reason line recording when the signal was reviewed. Manager-only: this
   text never reaches the worker. */
export function ManagerNoteCard({ signal }: { signal: FollowUpSignal }) {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <div className="min-h-[52px] rounded-[12px] border border-[#d6e3de] bg-white px-[14px] py-[9px]">
      <p className="text-[9px] font-semibold text-[#6e8a82] lg:text-[11px]">
        {c.compose.managerNoteLabel}
      </p>
      <p className="mt-[6px] text-[9px] text-[#6e8a82] lg:text-[11px]">
        {fill(c.compose.managerNoteBody, { value: signal.reviewedAt })}
      </p>
    </div>
  );
}
