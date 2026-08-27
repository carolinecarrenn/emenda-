import { Link } from "react-router-dom";
import { useReports } from "@/data/reportsContext";
import { WORKER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_COPY } from "../../manager.copy";

/* MD-03 "WORKER ACTIVITY": rows of name · event · status.
   First row reflects the live report; other rows are mock roster data
   (names stay raw — proper nouns are never translated). */
export function WorkerActivityCard() {
  const { todayReport } = useReports();
  const c = useSectionCopy(MANAGER_COPY);
  const ev = c.dashboard.activityEvents;
  const st = c.dashboard.activityStatuses;

  const rows = [
    todayReport
      ? {
          name: WORKER.name,
          event:
            todayReport.status === "verified" ? ev.verified : ev.submitted,
          status: st.completed,
          to: `/manager/reports/${todayReport.id}`,
        }
      : {
          name: WORKER.name,
          event: ev.notSubmitted,
          status: st.review,
          to: "/manager/reports",
        },
    {
      name: "Rina Sato",
      event: ev.followUpReply,
      status: st.review,
      to: "/manager/follow-up",
    },
    {
      name: "Dimas Pratama",
      event: ev.visaExpires,
      status: st.admin,
      to: "/manager/workers",
    },
    {
      name: "Maya Putri",
      event: ev.unreadComm,
      status: st.open,
      to: "/manager/communication",
    },
  ];

  return (
    <div className="rounded-[12px] border border-[#dbe3de] bg-white px-6 py-[26px] lg:h-[380px] lg:pb-0">
      <h2 className="text-[15px] font-semibold text-brand-deep lg:leading-[18px]">
        {c.dashboard.workerActivity}
      </h2>
      <div className="mt-[10px] lg:mt-0">
        {rows.map((row) => (
          <Link
            key={row.name}
            to={row.to}
            className="flex items-center gap-4 py-[18px] hover:bg-canvas lg:h-[68px] lg:gap-0 lg:py-0"
          >
            <span className="w-[160px] shrink-0 text-[13px] font-semibold text-[#17241f] lg:w-[196px]">
              {row.name}
            </span>
            <span className="flex-1 text-[12px] text-[#66736b] lg:w-[320px] lg:flex-none">
              {row.event}
            </span>
            <span className="shrink-0 text-[11px] font-semibold text-brand lg:flex-1 lg:shrink">
              {row.status}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
