import { PriorityDistributionCard } from "./PriorityDistributionCard";
import { ReportQueueCard } from "./ReportQueueCard";
import { ReportStatCards } from "./ReportStatCards";
import { ReportsFilterBar } from "./ReportsFilterBar";
import { ReportsIntro } from "./ReportsIntro";
import { SelectedReportCard } from "./SelectedReportCard";

/* AD-04 "Screen Content" (1223:1592): the 1144px column — intro row, the
   44px filter bar 12px below it, then the 776 / 352 split (16px gutter)
   carrying the report queue beside the stat pair, priority distribution and
   selected-report summary. Below lg the split becomes one column. */
export function ReportsQueueView() {
  return (
    <div className="flex w-full max-w-[1144px] flex-col">
      <ReportsIntro />
      <div className="mt-[12px]">
        <ReportsFilterBar />
      </div>
      <div className="mt-[16px] flex flex-col gap-[16px] lg:flex-row lg:items-start lg:gap-[16px]">
        <ReportQueueCard />
        <div className="flex flex-col gap-[16px] lg:w-[352px] lg:shrink-0">
          <ReportStatCards />
          <PriorityDistributionCard />
          <SelectedReportCard />
        </div>
      </div>
    </div>
  );
}
