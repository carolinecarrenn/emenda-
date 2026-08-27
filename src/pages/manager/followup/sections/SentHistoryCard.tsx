import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import { FOLLOW_UP_HISTORY } from "../followupMock";
import {
  historyNextLabel,
  historySignalLabel,
  historyStatusLabel,
} from "./followupLabels";

/* MD-10 "FOLLOW-UP HISTORY" card (1226:1484): white, radius 12, #dbe3de
   hairline, 24px padding, 11px #0c5941 caps heading over three 1012x52
   #f1f6f3 rows (radius 8, 12px gutter). Each row is a four-column record —
   worker (11px semibold #083d2d), signal (11px #65746d), status (11px
   semibold #0c5941) and next step (11px #65746d). Desktop only. */
export function SentHistoryCard() {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <section className="rounded-[12px] border border-[#dbe3de] bg-white p-[24px] pb-[10px]">
      <h2 className="text-[11px] font-semibold text-[#0c5941] uppercase">
        {c.sent.historyTitleDesktop}
      </h2>
      <div className="mt-[19px] space-y-[12px]">
        {FOLLOW_UP_HISTORY.map((row) => (
          <div
            key={row.id}
            className="grid h-[52px] grid-cols-[200px_270px_200px_minmax(0,1fr)] items-center rounded-[8px] bg-[#f1f6f3] px-[16px]"
          >
            <p className="text-[11px] font-semibold text-[#083d2d]">
              {row.workerName}
            </p>
            <p className="text-[11px] text-[#65746d]">
              {historySignalLabel(c, row.signalKind)}
            </p>
            <p className="text-[11px] font-semibold text-[#0c5941]">
              {historyStatusLabel(c, row.statusKind)}
            </p>
            <p className="text-[11px] text-[#65746d]">
              {historyNextLabel(c, row.nextKind)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
