import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import type { FollowUpSignal } from "../followupMock";
import { fill, priorityLabel, signalTitle } from "./followupLabels";

/* EM-09A worker signal card (1030:164): mint #e8f5f0, radius 14, #d6e3de
   hairline, 78px — 13px #094033 "worker · role" line, 10px #6e8a82
   "signal · PRIORITY · expected …" meta, and a 58x28 peach HIGH pill
   (mint for MEDIUM / LOW) pinned top-right. */
export function ReviewSignalHeaderCard({
  signal,
}: {
  signal: FollowUpSignal;
}) {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <div className="min-h-[78px] rounded-[14px] border border-[#d6e3de] bg-[#e8f5f0] px-[14px] py-[9px]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-[#094033] lg:text-[15px]">
            {signal.workerName} · {signal.workerRole}
          </p>
          <p className="mt-[8px] text-[10px] text-[#6e8a82] lg:text-[12px]">
            {fill(c.review.headerMeta, {
              title: signalTitle(c, signal),
              priority: priorityLabel(c, signal.priority),
              value: signal.expectedValue,
            })}
          </p>
        </div>
        <span
          className={`flex h-[28px] w-[58px] shrink-0 items-center justify-center rounded-[14px] border border-[#d6e3de] text-[10px] font-semibold ${
            signal.priority === "HIGH"
              ? "bg-[#ffe8de] text-[#b54a32]"
              : "bg-[#e8f5f0] text-[#094033]"
          }`}
        >
          {priorityLabel(c, signal.priority)}
        </span>
      </div>
    </div>
  );
}
