import type { CaregiverReport } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_COPY } from "../../manager.copy";

/* EM-11A "WORKER TIMELINE": white card with 9px timeline rows. */
export function WorkerTimelineCard({ report }: { report: CaregiverReport }) {
  const c = useSectionCopy(MANAGER_COPY);

  const rows = [
    `08:02 · ${c.detail.timelineActivity}`,
    `09:08 · ${c.detail.timelineComm}`,
    `${report.submittedAt} · ${c.detail.timelineSubmitted}`,
    report.status === "verified"
      ? `${report.verifiedAt} · ${c.detail.timelineVerified}`
      : c.detail.timelinePending,
  ];

  return (
    <section>
      <h2 className="text-[10px] font-semibold text-brand-deep uppercase lg:text-[11px]">
        {c.detail.workerTimeline}
      </h2>
      <div className="mt-[10px] space-y-[8px] rounded-[10px] border border-[#c9ded4] bg-white px-[14px] py-[13px]">
        {rows.map((row) => (
          <p key={row} className="text-[9px] text-[#1f473b] lg:text-[11px]">
            {row}
          </p>
        ))}
      </div>
    </section>
  );
}
