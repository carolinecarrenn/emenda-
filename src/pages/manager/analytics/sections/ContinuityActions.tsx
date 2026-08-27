import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "../analytics.copy";
import type { ManagedWorker } from "../analytics.mock";

/* EM-R2-01 (1107:161–166): solid #083d2d "Open Work Log" + outline
   "View Career Assets" (168×42, radius 10), then a full-width 350×40
   outline "View Worker". */
export function ContinuityActions({ worker }: { worker: ManagedWorker }) {
  const c = useSectionCopy(ANALYTICS_COPY);

  return (
    <div className="space-y-[10px] lg:max-w-[350px]">
      <div className="grid grid-cols-2 gap-[14px]">
        <Link
          to={`/manager/workers/${worker.id}/records/log`}
          className="flex h-[42px] items-center justify-center rounded-[10px] border border-[#ccded6] bg-[#083d2d] px-3 text-center text-[11px] font-semibold text-white hover:bg-brand"
        >
          {c.continuity.openWorkLog}
        </Link>
        <Link
          to={`/manager/workers/${worker.id}/records/assets`}
          className="flex h-[42px] items-center justify-center rounded-[10px] border border-[#ccded6] bg-white px-3 text-center text-[11px] font-semibold text-[#083d2d] hover:border-brand"
        >
          {c.continuity.viewCareerAssets}
        </Link>
      </div>
      <Link
        to="/manager/workers"
        className="flex h-[40px] items-center justify-center rounded-[10px] border border-[#ccded6] bg-white px-3 text-center text-[11px] font-semibold text-[#083d2d] hover:border-brand"
      >
        {c.continuity.viewWorker}
      </Link>
    </div>
  );
}
