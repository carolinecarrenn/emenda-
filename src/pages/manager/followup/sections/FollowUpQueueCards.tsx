import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import type { FollowUpSignal } from "../followupMock";
import { priorityLabel, signalMetaMobile, signalTitle } from "./followupLabels";

/* EM-09 "FOLLOW-UP QUEUE" cards (1030:139 · 146 · 153): full-width 94px
   cards, radius 14, #d6e3de hairline — the HIGH card on peach #ffe8de, the
   rest white. 13px #094033 worker name, 12px #094033 signal title, 10px
   #6e8a82 source line, a 78x28 priority pill top-right (peach #ffe8de /
   #b54a32 for HIGH, mint #e8f5f0 / #094033 otherwise) and a 10px #06634f
   "Review ›" link bottom-right. Mobile only. */
export function FollowUpQueueCards({ signals }: { signals: FollowUpSignal[] }) {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <section className="lg:hidden">
      <h2 className="text-[10px] font-semibold text-[#094033] uppercase">
        {c.center.queueTitle}
      </h2>
      <div className="mt-[10px] space-y-[14px]">
        {signals.map((signal) => (
          <div
            key={signal.id}
            className={`min-h-[94px] rounded-[14px] border border-[#d6e3de] px-[14px] py-[12px] ${
              signal.priority === "HIGH" ? "bg-[#ffe8de]" : "bg-white"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-[#094033]">
                  {signal.workerName}
                </p>
                <p className="mt-[3px] text-[12px] font-semibold text-[#094033]">
                  {signalTitle(c, signal)}
                </p>
              </div>
              <span
                className={`flex h-[28px] w-[78px] shrink-0 items-center justify-center rounded-[14px] border border-[#d6e3de] text-[10px] font-semibold ${
                  signal.priority === "HIGH"
                    ? "bg-[#ffe8de] text-[#b54a32]"
                    : "bg-[#e8f5f0] text-[#094033]"
                }`}
              >
                {priorityLabel(c, signal.priority)}
              </span>
            </div>
            <div className="mt-[5px] flex items-end justify-between gap-3">
              <p className="text-[10px] text-[#6e8a82]">
                {signalMetaMobile(c, signal)}
              </p>
              <Link
                to={`/manager/follow-up/${signal.id}/review`}
                className="shrink-0 text-[10px] font-semibold text-[#06634f] hover:text-brand-deep"
              >
                {c.center.reviewLink}
              </Link>
            </div>
          </div>
        ))}
        {signals.length === 0 && (
          <div className="rounded-[14px] border border-[#d6e3de] bg-white px-[14px] py-[22px] text-center text-[10px] text-[#6e8a82]">
            {c.states.emptyTitle}
          </div>
        )}
      </div>
    </section>
  );
}
