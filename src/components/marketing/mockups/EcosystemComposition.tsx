import { ArrowLeftRight, Sparkles } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { MOCKS_COPY } from "@/pages/marketing/mocks.copy";
import { PLATFORM_MOCKS_COPY } from "@/pages/marketing/platformMocks.copy";
import { WorkerHomeCard } from "./WorkerHomeCard";
import { DailyReportCard } from "./DailyReportCard";
import { ManagerOverviewCard } from "./ManagerOverviewCard";
import { LifecycleTrail } from "./LifecycleTrail";

/**
 * The hero composition: the worker's side and the organization's side of the
 * same platform, with the shared lifecycle between them.
 *
 * The whole point is that no single card dominates — a visitor should read
 * "system" before they read any one screen, and the assistant appears as a
 * small strip at the bottom rather than as the centrepiece. If you remove the
 * assistant strip, the composition still says what EMENDA is; that is the test
 * this layout is built to pass.
 */
export function EcosystemComposition() {
  const p = useSectionCopy(PLATFORM_MOCKS_COPY);
  const m = useSectionCopy(MOCKS_COPY);

  return (
    <div className="relative">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <div className="min-w-0 space-y-4">
          <p className="flex items-center gap-2 px-1 text-[10px] font-semibold tracking-[0.12em] text-lp-green">
            <span className="size-1.5 rounded-full bg-lp-button" />
            {p.sides.worker}
          </p>
          <WorkerHomeCard />
          <DailyReportCard />
        </div>

        <div className="min-w-0 space-y-4 sm:mt-9">
          <p className="flex items-center gap-2 px-1 text-[10px] font-semibold tracking-[0.12em] text-lp-green">
            <span className="size-1.5 rounded-full bg-lp-button" />
            {p.sides.organization}
          </p>
          <ManagerOverviewCard />
          <LifecycleTrail orientation="horizontal" />
        </div>
      </div>

      {/* The two sides are one system — said once, quietly, in the middle. */}
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 hidden size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-lp-line bg-white text-lp-green shadow-lp-md sm:flex"
      >
        <ArrowLeftRight size={17} strokeWidth={1.9} />
      </span>

      {/* The assistant is present, and deliberately the smallest thing here. */}
      <div className="mt-4 flex items-center gap-3 rounded-[16px] border border-lp-line bg-white px-4 py-3 shadow-lp-sm">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-lp-mint text-lp-green">
          <Sparkles size={15} strokeWidth={1.9} aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1 truncate text-[12.5px] text-lp-muted">
          {m.assistant.composer}
        </span>
        <span className="shrink-0 rounded-full border border-lp-line bg-lp-tint px-2.5 py-1 text-[10.5px] font-semibold text-lp-green">
          {m.assistant.appName}
        </span>
      </div>
    </div>
  );
}
