/* Section 08 stat tiles (EM-14 / 14A / 15 / 15A): 168x52 rounded-12 tiles
   (168x46 on EM-14A), mint #e8f5f0 or white with #ccded6 hairline, cream
   #fff5c7 for the attention tile (EM-15 OPEN GAPS). Caps label #667a73 over
   a bold #083d2d value, label 9px from the top and the value 18px under it.
   2x2 on the 390px mock — 14px column gap, 10px row gap (8px on EM-14A) —
   and 4-across inside the MD desktop shell. */

export type OjtTileTone = "mint" | "white" | "attention";

export interface OjtTile {
  label: string;
  value: string;
  tone?: OjtTileTone;
}

const TONE_CLASS: Record<OjtTileTone, string> = {
  mint: "bg-[#e8f5f0] border-[#ccded6]",
  white: "bg-white border-[#ccded6]",
  attention: "bg-[#fff5c7] border-[#ccded6]",
};

export function OjtStatTiles({
  tiles,
  scale = "hub",
}: {
  tiles: OjtTile[];
  /** hub = 9px label / 13px value (EM-14) · metric = 8px / 13px (EM-15,
   *  EM-15A) · detail = 8px / 11px white tiles (EM-14A). */
  scale?: "hub" | "metric" | "detail";
}) {
  const isDetail = scale === "detail";

  const labelClass = isDetail
    ? "text-[8px] leading-[11px] lg:text-[10px] lg:leading-[14px]"
    : scale === "hub"
      ? "text-[9px] leading-[12px] lg:text-[11px] lg:leading-[15px]"
      : "text-[8px] leading-[12px] lg:text-[10px] lg:leading-[15px]";
  const valueClass = isDetail
    ? "mt-[8px] text-[11px] leading-[13px] lg:mt-[9px] lg:text-[16px] lg:leading-[20px]"
    : "mt-[6px] text-[13px] leading-[16px] lg:mt-[7px] lg:text-[18px] lg:leading-[22px]";
  const tileClass = isDetail
    ? "min-h-[46px] pt-[8px] pb-[5px] lg:min-h-[62px] lg:pt-[12px] lg:pb-[10px]"
    : "min-h-[52px] pt-[9px] pb-[7px] lg:min-h-[66px] lg:pt-[12px] lg:pb-[10px]";

  return (
    <div
      className={`grid grid-cols-2 gap-x-[14px] lg:grid-cols-4 lg:gap-y-[14px] ${
        isDetail ? "gap-y-[8px]" : "gap-y-[10px]"
      }`}
    >
      {tiles.map((tile) => (
        <div
          key={tile.label}
          className={`rounded-[12px] border px-[12px] lg:px-[16px] ${TONE_CLASS[tile.tone ?? "mint"]} ${tileClass}`}
        >
          <p className={`font-semibold text-[#667a73] uppercase ${labelClass}`}>
            {tile.label}
          </p>
          <p className={`font-bold text-[#083d2d] ${valueClass}`}>
            {tile.value}
          </p>
        </div>
      ))}
    </div>
  );
}
