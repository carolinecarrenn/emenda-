/* Section 09 2x2 tile grid (EM-16 1109:2-13, EM-16A 1109:36-47,
   EM-STATE-01 1109:119-130): 168x52 tiles on a 14px column / 10px row gap,
   radius 12, 1px #ccded6, mint #e8f5f0 (yellow #fff5c7 when the tile flags
   pending work), 8px caps #667a73 label over a 13px bold #083d2d value. */
export interface AuditMetricTile {
  key: string;
  label: string;
  value: string;
  tone?: "mint" | "caution";
}

export function AuditMetricTiles({
  tiles,
  columns = 4,
}: {
  tiles: AuditMetricTile[];
  /** Desktop track count: 4 inside the 1060px manager column, 2 on the
   *  narrow EM-STATE interstitial column, which stays 2x2 like the mock. */
  columns?: 2 | 4;
}) {
  return (
    <div
      className={`grid grid-cols-2 gap-x-[14px] gap-y-[10px] lg:gap-5 ${
        columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-2"
      }`}
    >
      {tiles.map((tile) => (
        <div
          key={tile.key}
          className={`h-[52px] rounded-[12px] border border-[#ccded6] px-[12px] py-[7px] lg:h-[96px] lg:px-4 lg:py-[14px] ${
            tile.tone === "caution" ? "bg-[#fff5c7]" : "bg-[#e8f5f0]"
          }`}
        >
          <p className="text-[8px] leading-[12px] font-semibold text-[#667a73] uppercase lg:text-[10px] lg:leading-[15px]">
            {tile.label}
          </p>
          <p className="mt-[8px] text-[13px] leading-[16px] font-bold text-[#083d2d] lg:mt-[6px] lg:text-[22px] lg:leading-[33px]">
            {tile.value}
          </p>
        </div>
      ))}
    </div>
  );
}
