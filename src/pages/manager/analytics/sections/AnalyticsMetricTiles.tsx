import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "../analytics.copy";
import type { AnalyticsSnapshot } from "../analytics.mock";

/* EM-13 (1107:92–107) 2×2 mint metric tiles: 168×66, radius 12, bg #e8f5f0,
   border #ccded6 — 9px caps label #667a73, 15px bold value #083d2d, 9px
   caption #667a73 pinned right of the value. */
export function AnalyticsMetricTiles({
  snapshot,
}: {
  snapshot: AnalyticsSnapshot;
}) {
  const c = useSectionCopy(ANALYTICS_COPY);

  const tiles = [
    {
      label: c.analytics.tiles.d1,
      value: String(snapshot.questions),
      caption: c.analytics.captions.clarification,
    },
    {
      label: c.analytics.tiles.d2,
      value: snapshot.understanding,
      caption: c.analytics.captions.confirmed,
    },
    {
      label: c.analytics.tiles.d4,
      value: snapshot.workerLed,
      caption: c.analytics.captions.messages,
    },
    {
      label: c.analytics.tiles.d5,
      value: `${snapshot.responseMinutes} ${c.units.min}`,
      caption: c.analytics.captions.median,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-[14px] gap-y-[12px] lg:grid-cols-4 lg:gap-4">
      {tiles.map((tile) => (
        <div
          key={tile.label}
          className="min-h-[66px] rounded-[12px] border border-[#ccded6] bg-[#e8f5f0] px-[12px] py-[10px]"
        >
          <p className="text-[9px] font-semibold text-[#667a73] uppercase lg:text-[10px]">
            {tile.label}
          </p>
          <div className="mt-[8px] flex items-baseline justify-between gap-2">
            <p className="text-[15px] font-bold text-[#083d2d] lg:text-[20px]">
              {tile.value}
            </p>
            <p className="text-right text-[9px] text-[#667a73] lg:text-[10px]">
              {tile.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
