import { useSectionCopy } from "@/i18n/copy";
import { ADMIN_COPY } from "../../admin.copy";
import { STATES_COPY } from "../states.copy";
import {
  STATES_REFERENCE_CARD_SLOTS,
  STATES_SKELETON_ROWS,
} from "../states.mock";

/* ?state=loading — the "Loading" row of the AD-10 coverage card (1225:1353,
   "Skeleton for lists, KPI cards, and detail panels") applied to AD-10's own
   geometry: the 44px intro band, the three 368x320 reference cards, and the
   1144x272 coverage card, each held as quiet #eef3ef blocks.

   The list inside the coverage slot is AD-10B's "Loading list" (1226:1206)
   verbatim — 26px #f7faf8 rows carrying a 110x8 and an 80x8 #d6e3de bar —
   because that frame is the concrete reference for a pending list. AD-10C
   step 01 is the rule this obeys: keep the structure, never a blank page. */
export function StatesLoadingState() {
  const admin = useSectionCopy(ADMIN_COPY);
  const c = useSectionCopy(STATES_COPY);

  return (
    <div
      role="status"
      aria-label={admin.shell.loading}
      aria-busy="true"
      className="flex animate-pulse flex-col gap-[26px]"
    >
      <div className="flex flex-col gap-[12px] lg:h-[44px] lg:flex-row lg:items-start">
        <div className="flex flex-1 flex-col gap-[9px]">
          <div className="h-[22px] w-[420px] max-w-full rounded-[6px] bg-[#eef3ef]" />
          <div className="h-[9px] w-[300px] max-w-full rounded-[4px] bg-[#eef3ef]" />
        </div>
        <div className="flex gap-[10px] lg:mt-[6px]">
          <div className="h-[32px] w-[102px] rounded-[10px] bg-[#eef3ef]" />
          <div className="h-[32px] w-[112px] rounded-[10px] bg-[#eef3ef]" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-3">
        {STATES_REFERENCE_CARD_SLOTS.map((slot) => (
          <div
            key={slot}
            className="flex flex-col rounded-[12px] border border-[#d6e3de] bg-white p-[23px] pb-[29px] lg:h-[320px]"
          >
            <div className="size-[56px] rounded-full bg-[#eef3ef]" />
            <div className="mt-[16px] h-[18px] w-[180px] max-w-full rounded-[6px] bg-[#eef3ef]" />
            <div className="mt-[14px] h-[10px] w-full rounded-[4px] bg-[#eef3ef]" />
            <div className="mt-[6px] h-[10px] w-[70%] rounded-[4px] bg-[#eef3ef]" />
            <div className="mt-[20px] h-[32px] w-[112px] rounded-[10px] bg-[#eef3ef] lg:mt-auto" />
          </div>
        ))}
      </div>

      <div className="rounded-[12px] border border-[#d6e3de] bg-white p-[19px] lg:min-h-[272px]">
        <p className="text-[15px] leading-none font-bold text-[#17362e]">
          {c.systemStates.loadingList}
        </p>
        <div className="mt-[27px] flex flex-col gap-[14px]">
          {STATES_SKELETON_ROWS.map((row) => (
            <div
              key={row}
              className="relative h-[26px] rounded-[7px] bg-[#f7faf8]"
            >
              {/* AD-10B's 280px row keeps its bars at 10/156 with widths
                  110/80; held as ratios so the same rhythm survives the
                  1144 column. */}
              <span className="absolute top-[9px] left-[3.57%] h-[8px] w-[39.29%] rounded-[4px] bg-[#d6e3de]" />
              <span className="absolute top-[9px] left-[55.71%] h-[8px] w-[28.57%] rounded-[4px] bg-[#d6e3de]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
