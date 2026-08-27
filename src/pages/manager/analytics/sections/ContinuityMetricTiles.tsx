import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "../analytics.copy";
import type { ManagedWorker } from "../analytics.mock";

/* EM-R2-01 (1107:135–146) 2×2 white metric tiles: 168×52, radius 12,
   border #ccded6 — 9px caps label #667a73 over a 14px bold value #083d2d. */
export function ContinuityMetricTiles({ worker }: { worker: ManagedWorker }) {
  const c = useSectionCopy(ANALYTICS_COPY);

  const tiles = [
    { label: c.continuity.tiles.workRecords, value: String(worker.workRecords) },
    {
      label: c.continuity.tiles.achievements,
      value: String(worker.achievements),
    },
    {
      label: c.continuity.tiles.certificates,
      value: String(worker.certificates),
    },
    {
      label: c.continuity.tiles.tenure,
      value: `${worker.tenureDays} ${c.units.days}`,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-[14px] gap-y-[10px] lg:grid-cols-4 lg:gap-4">
      {tiles.map((tile) => (
        <div
          key={tile.label}
          className="min-h-[52px] rounded-[12px] border border-[#ccded6] bg-white px-[12px] py-[9px]"
        >
          <p className="text-[9px] font-semibold text-[#667a73] uppercase lg:text-[10px]">
            {tile.label}
          </p>
          <p className="mt-[5px] text-[14px] leading-[16px] font-bold text-[#083d2d] lg:text-[18px] lg:leading-[27px]">
            {tile.value}
          </p>
        </div>
      ))}
    </div>
  );
}
