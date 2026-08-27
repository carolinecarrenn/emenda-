import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "../analytics.copy";
import type { ManagedWorker } from "../analytics.mock";

/* EM-R2-05 (1107:266–269): solid #083d2d "Open Work Log" + outline
   "View Worker" — 168×40, radius 10, 11px semibold. */
export function CareerAssetsActions({ worker }: { worker: ManagedWorker }) {
  const c = useSectionCopy(ANALYTICS_COPY);

  return (
    <div className="grid grid-cols-2 gap-[14px] lg:max-w-[350px]">
      <Link
        to={`/manager/workers/${worker.id}/records/log`}
        className="flex h-[40px] items-center justify-center rounded-[10px] border border-[#ccded6] bg-[#083d2d] px-3 text-center text-[11px] font-semibold text-white hover:bg-brand"
      >
        {c.careerAssets.openWorkLog}
      </Link>
      <Link
        to="/manager/workers"
        className="flex h-[40px] items-center justify-center rounded-[10px] border border-[#ccded6] bg-white px-3 text-center text-[11px] font-semibold text-[#083d2d] hover:border-brand"
      >
        {c.careerAssets.viewWorker}
      </Link>
    </div>
  );
}
