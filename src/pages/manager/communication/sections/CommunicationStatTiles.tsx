import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY } from "../communication.copy";
import { COMMUNICATION_METRICS } from "../communicationData";

/* EM-06 stat tiles (1002:2 / 1002:6): two 170x58 mint #e8f5f0 tiles on a
   #d6e3de border, radius 12 — 9px caps label, 15px value, 8px caption
   right of the value. Mobile only; desktop uses the four-card KPI row. */
export function CommunicationStatTiles() {
  const c = useSectionCopy(COMMUNICATION_COPY);
  const values = [
    COMMUNICATION_METRICS.workerInitiated,
    COMMUNICATION_METRICS.managerResponse,
  ];

  return (
    <div className="grid grid-cols-2 gap-[10px]">
      {c.list.tiles.map((tile, index) => (
        <div
          key={tile.label}
          className="min-h-[58px] rounded-[12px] border border-[#d6e3de] bg-[#e8f5f0] px-[14px] py-[10px]"
        >
          <p className="text-[9px] text-[#6e8a82] uppercase">{tile.label}</p>
          {/* 1002:4/5 · the caption opens a fixed 70px right of the value
              column and sits centred on it, not on its baseline. */}
          <div className="mt-[2px] flex items-center">
            <p className="w-[70px] shrink-0 text-[15px] font-semibold text-[#094033]">
              {values[index]}
            </p>
            <p className="text-[8px] text-[#6e8a82]">{tile.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
