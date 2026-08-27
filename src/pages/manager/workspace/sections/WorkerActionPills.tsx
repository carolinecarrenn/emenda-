import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";

/* MD-05 action row (1213:493…502): five 150x42 pills, radius 10 — Message
   filled #0c5941, then Follow-up / View report / Career / Work Log /
   Visa / Admin as white #dbe3de outlines, labels alone and left-aligned
   18px inside the pill.
   EM-05 (761:227…233) states the 390px surface differently: a bold
   "QUICK ACTIONS" eyebrow over three equal mint #e3f0e8 pills — Message,
   Follow-up, View report — with Career / Work Log and Visa / Admin moved
   down to the work-and-administration button pair. Each pill routes to the
   real manager surface that owns the action. */
export function WorkerActionPills({ workerId }: { workerId: string }) {
  const c = useSectionCopy(WORKSPACE_COPY);

  const actions = [
    {
      key: "message",
      label: c.worker.actionMessage,
      to: "/manager/communication",
      primary: true,
      quick: true,
    },
    {
      key: "follow-up",
      label: c.worker.actionFollowUp,
      to: "/manager/follow-up",
      quick: true,
    },
    {
      key: "report",
      label: c.worker.actionViewReport,
      to: "/manager/reports",
      quick: true,
    },
    {
      key: "career",
      label: c.worker.actionCareerWorkLog,
      to: `/manager/workers/${workerId}/records`,
    },
    {
      key: "visa",
      label: c.worker.actionVisaAdmin,
      to: `/manager/workers/${workerId}/visa`,
    },
  ];

  return (
    <div>
      <p className="text-[11px] font-bold text-[#083d2d] lg:hidden">
        {c.worker.quickActions}
      </p>

      <nav className="mt-[10px] flex gap-[10px] lg:mt-0 lg:flex-wrap lg:gap-[12px]">
        {actions.map((action) => (
          <Link
            key={action.key}
            to={action.to}
            className={`h-[40px] flex-1 items-center justify-center rounded-[10px] border border-[#e3f0e8] bg-[#e3f0e8] text-[11px] font-semibold text-[#083d2d] lg:h-[42px] lg:w-[150px] lg:flex-none lg:justify-start lg:px-[18px] lg:text-[12px] ${
              action.quick ? "flex" : "hidden lg:flex"
            } ${
              action.primary
                ? "lg:border-[#0c5941] lg:bg-[#0c5941] lg:text-white lg:hover:border-brand-deep lg:hover:bg-brand-deep"
                : "lg:border-[#dbe3de] lg:bg-white lg:hover:border-brand"
            }`}
          >
            {action.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
