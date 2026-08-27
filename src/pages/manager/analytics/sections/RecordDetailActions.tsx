import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "../analytics.copy";
import type { ManagedWorker } from "../analytics.mock";

/* EM-R2-03 (1107:226–229): two outline buttons side by side — 168×40,
   radius 10, white, border #ccded6, 11px semibold #083d2d. */
export function RecordDetailActions({ worker }: { worker: ManagedWorker }) {
  const c = useSectionCopy(ANALYTICS_COPY);

  return (
    <div className="grid grid-cols-2 gap-[14px] lg:max-w-[350px]">
      <Link
        to={`/manager/workers/${worker.id}/records/log`}
        className="flex h-[40px] items-center justify-center rounded-[10px] border border-[#ccded6] bg-white px-3 text-center text-[11px] font-semibold text-[#083d2d] hover:border-brand"
      >
        {c.recordDetail.backToWorkLog}
      </Link>
      <Link
        to="/manager/workers"
        className="flex h-[40px] items-center justify-center rounded-[10px] border border-[#ccded6] bg-white px-3 text-center text-[11px] font-semibold text-[#083d2d] hover:border-brand"
      >
        {c.recordDetail.viewWorker}
      </Link>
    </div>
  );
}
