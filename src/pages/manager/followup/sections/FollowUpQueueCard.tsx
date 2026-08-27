import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import type { FollowUpSignal } from "../followupMock";
import { priorityLabel, signalMetaDesktop } from "./followupLabels";

/* MD-09 "FOLLOW-UP QUEUE" card (1226:1282): white, radius 12, #dbe3de
   hairline, 24px padding, 11px #0c5941 caps heading. Rows (1226:1284 …) sit
   on soft grey-green #f1f6f3, radius 9, 64px tall — 12px #083d2d name over
   an 11px #65746d signal line, a priority tag (HIGH #c74a3d, MEDIUM / LOW
   #0c5941) and a 110x42 white "Review" button inset 26px from the row edge.
   Figma draws no selected-row treatment, so selection only drives the rail.
   Desktop only. */
export function FollowUpQueueCard({
  signals,
  selectedId,
  onSelect,
}: {
  signals: FollowUpSignal[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <section className="hidden rounded-[12px] border border-[#dbe3de] bg-white p-[24px] lg:block lg:h-full">
      <h2 className="text-[11px] font-semibold text-[#0c5941] uppercase">
        {c.center.queueTitle}
      </h2>
      <div className="mt-[17px] space-y-[12px]">
        {signals.map((signal) => (
          <div
            key={signal.id}
            role="button"
            tabIndex={0}
            aria-pressed={selectedId === signal.id}
            onClick={() => onSelect(signal.id)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSelect(signal.id);
              }
            }}
            className="flex h-[64px] cursor-pointer items-center gap-[22px] rounded-[9px] bg-[#f1f6f3] pr-[26px] pl-[16px] hover:ring-1 hover:ring-[#dbe3de]"
          >
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-semibold text-[#083d2d]">
                {signal.workerName}
              </p>
              <p className="mt-[2px] text-[11px] text-[#65746d]">
                {signalMetaDesktop(c, signal)}
              </p>
            </div>
            <p
              className={`w-[84px] shrink-0 text-[10px] font-semibold ${
                signal.priority === "HIGH"
                  ? "text-[#c74a3d]"
                  : "text-[#0c5941]"
              }`}
            >
              {priorityLabel(c, signal.priority)}
            </p>
            <Link
              to={`/manager/follow-up/${signal.id}/review`}
              onClick={(event) => event.stopPropagation()}
              className="flex h-[42px] w-[110px] shrink-0 items-center justify-center rounded-[9px] border border-[#dbe3de] bg-white text-[12px] font-semibold text-[#083d2d] hover:border-brand"
            >
              {c.center.reviewButton}
            </Link>
          </div>
        ))}
        {signals.length === 0 && (
          <div className="rounded-[9px] bg-[#f1f6f3] px-[16px] py-[22px] text-center text-[11px] text-[#65746d]">
            {c.states.emptyTitle}
          </div>
        )}
      </div>
    </section>
  );
}
