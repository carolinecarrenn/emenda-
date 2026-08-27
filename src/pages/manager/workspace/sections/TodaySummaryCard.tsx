import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY, fill } from "../workspace.copy";
import type { RosterWorker } from "../workspaceMock";
import { WorkspaceLinkButton } from "./WorkspaceButtons";
import { useWorkerLabels } from "./workerLabels";

/* MD-05 TODAY SUMMARY (1213:519…523): a 560x280 white card, radius 12 —
   the log runs on a flat 16px rhythm and the button sits on the card floor,
   18px above the bottom edge —
   14px semibold #083d2d heading, the timestamped 13px #66736b event log,
   the "Professional evidence available: {n} verified work-log entries."
   line, and the "Open Worker Timeline" outline button. EM-05 (761:234…237)
   restates the same block as a mint #e3f0e8 card headed by the sentence-case
   "Today" and closes without a button — the 390px surface reaches the
   timeline through the Career / Work Log action instead. Timestamps are DATA
   and stay raw; only the event labels localize. */
export function TodaySummaryCard({ worker }: { worker: RosterWorker }) {
  const c = useSectionCopy(WORKSPACE_COPY);
  const labels = useWorkerLabels();

  return (
    <section className="rounded-[12px] border border-[#e3f0e8] bg-[#e3f0e8] px-[18px] py-[18px] lg:flex lg:h-[280px] lg:flex-col lg:border-[#dbe3de] lg:bg-white lg:px-[24px] lg:pt-[24px] lg:pb-[18px]">
      <h2 className="text-[15px] font-bold text-[#083d2d] lg:text-[14px] lg:font-semibold">
        <span className="lg:hidden">{c.worker.mobileTodaySummary}</span>
        <span className="hidden lg:inline">{c.worker.todaySummary}</span>
      </h2>

      <ul className="mt-[16px] space-y-[6px] text-[12px] leading-[19px] text-[#66736b] lg:space-y-0 lg:text-[13px] lg:leading-[16px]">
        {worker.timeline.map((entry) => (
          <li key={`${entry.time}-${entry.event}`}>
            {entry.time} · {labels.timeline[entry.event]}
          </li>
        ))}
      </ul>

      <p className="mt-[16px] text-[12px] leading-[19px] text-[#66736b] lg:text-[13px] lg:leading-[16px]">
        {fill(c.worker.evidenceLine, { count: worker.workLogEntries })}
      </p>

      <WorkspaceLinkButton
        to={`/manager/workers/${worker.id}/records`}
        className="mt-[18px] hidden w-full lg:mt-auto lg:flex lg:h-[40px] lg:w-[190px]"
      >
        {c.worker.openWorkerTimeline}
      </WorkspaceLinkButton>
    </section>
  );
}
