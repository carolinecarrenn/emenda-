import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { fillOjtCopy, OJT_COPY } from "../ojt.copy";
import { OJT_MODULES, type OjtModule } from "../ojtMock";
import { OjtSectionHeading } from "./OjtSectionHeading";

/* EM-14 (761:2552) module list: 58px rounded-12 rows. The module awaiting
   human review sits on the pale-yellow #fff5c7 row with "Review ›";
   published modules stay white with "Open ›". */
export function OjtModuleList() {
  const c = useSectionCopy(OJT_COPY);

  const captionFor = (module: OjtModule) => {
    if (module.status === "needs-review") {
      return fillOjtCopy(c.hub.moduleNeedsReview, {
        pending: module.pendingWorkers,
        languages: module.languages,
      });
    }
    if (module.opensThisWeek !== undefined) {
      return fillOjtCopy(c.hub.modulePublishedOpens, {
        opens: module.opensThisWeek,
      });
    }
    return fillOjtCopy(c.hub.modulePublishedCompleted, {
      completed: module.completedWorkers ?? 0,
      total: module.assignedWorkers,
    });
  };

  return (
    <section>
      <OjtSectionHeading>{c.hub.listHeading}</OjtSectionHeading>
      <div className="mt-[9px] space-y-[8px] lg:mt-[11px]">
        {OJT_MODULES.map((module) => (
          <Link
            key={module.id}
            to={`/manager/knowledge-ojt/${module.id}`}
            className={`flex min-h-[58px] items-center justify-between gap-4 rounded-[12px] border border-[#ccded6] px-[14px] py-[10px] hover:border-brand ${
              module.status === "needs-review" ? "bg-[#fff5c7]" : "bg-white"
            }`}
          >
            <div>
              <p className="text-[10px] leading-[13px] font-semibold text-[#083d2d] lg:text-[13px] lg:leading-[17px]">
                {module.title}
              </p>
              <p className="mt-[6px] text-[9px] leading-[12px] text-[#667a73] lg:mt-[7px] lg:text-[11px] lg:leading-[15px]">
                {captionFor(module)}
              </p>
            </div>
            <span className="flex shrink-0 items-center gap-[1px] text-[9px] font-semibold text-[#0c5941] lg:text-[11px]">
              {module.status === "needs-review" ? c.hub.rowReview : c.hub.rowOpen}
              <ChevronRight className="size-[10px] lg:size-[12px]" strokeWidth={1.75} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
