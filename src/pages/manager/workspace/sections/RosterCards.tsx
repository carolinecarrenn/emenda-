import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY, fill } from "../workspace.copy";
import { needsAttention, type RosterWorker } from "../workspaceMock";
import { useWorkerLabels } from "./workerLabels";

/* EM-04 (761:142) worker cards — the 390px roster. One full-width radius-14
   card per worker: mint #e3f0e8 when the worker is clear, peach #ffe8e0 when
   anything needs action (missing report, connection review, visa window).
   The card is name-plus-two-lines, exactly as the mock prints it —
   "Warehouse Operator · Report 09:14 · 1 unread" over
   "EMD-2024-JP-004821 · Connected · Visa 74d" — with no status chips and no
   chevron; the whole card is the tap target. */
export function RosterCards({ workers }: { workers: RosterWorker[] }) {
  const c = useSectionCopy(WORKSPACE_COPY);
  const labels = useWorkerLabels();

  return (
    <ul className="space-y-[12px] lg:hidden">
      {workers.map((worker) => {
        const attention = needsAttention(worker);

        const operational = [
          labels.role[worker.role],
          worker.reportTime
            ? fill(c.roster.chipReportAt, { time: worker.reportTime })
            : c.roster.chipReportMissing,
        ];
        if (worker.unread > 0)
          operational.push(fill(c.roster.chipUnread, { count: worker.unread }));

        const identity = [
          worker.emendaId,
          worker.connection === "needsReview"
            ? c.roster.chipConnectionNeedsReview
            : labels.connection[worker.connection],
          worker.visaDaysRemaining !== null
            ? fill(c.roster.chipVisaDays, { days: worker.visaDaysRemaining })
            : c.roster.chipVisaClear,
        ];

        return (
          <li key={worker.id}>
            <Link
              to={`/manager/workers/${worker.id}`}
              className={`block rounded-[14px] border px-[18px] py-[16px] ${
                attention
                  ? "border-[#ffe8e0] bg-[#ffe8e0]"
                  : "border-[#e3f0e8] bg-[#e3f0e8]"
              }`}
            >
              <p className="text-[15px] font-semibold text-[#083d2d]">
                {worker.name}
              </p>
              <div className="mt-[10px] space-y-[2px] text-[11px] leading-[17px] text-[#66736b]">
                <p>{operational.join(" · ")}</p>
                <p>{identity.join(" · ")}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
