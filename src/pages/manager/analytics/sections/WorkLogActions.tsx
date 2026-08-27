import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "../analytics.copy";
import type { ManagedWorker } from "../analytics.mock";

/* EM-R2-02 (1107:206–207): full-width outline "Back to Continuity" —
   350×40, radius 10, white, border #ccded6, 11px semibold #083d2d. */
export function WorkLogActions({ worker }: { worker: ManagedWorker }) {
  const c = useSectionCopy(ANALYTICS_COPY);

  return (
    <Link
      to={`/manager/workers/${worker.id}/records`}
      className="flex h-[40px] items-center justify-center rounded-[10px] border border-[#ccded6] bg-white px-4 text-center text-[11px] font-semibold text-[#083d2d] hover:border-brand lg:max-w-[350px]"
    >
      {c.workLog.backToContinuity}
    </Link>
  );
}
