import { useSectionCopy } from "@/i18n/copy";
import { ACTIVITY_LOG_COPY } from "../activity-log.copy";
import type { ActivityLogRow } from "../activity-log.mock";
import { ActivityDetailPanel } from "./ActivityDetailPanel";

/* AD-08B · Activity Detail States (1226:1144): the #f7faf8 board, radius 14,
   1px #d6e3de — "INTERACTION STATES" eyebrow, the 18px "Activity detail"
   title, the 10px "Inspect one change without leaving the audit trail." line,
   and the detail card itself indented 60px from the board padding.

   In the frame the eyebrow and the title are drawn on top of each other
   (both at y≈21); they are stacked here so both stay readable. */
export function ActivityDetailBoard({
  row,
  onClose,
}: {
  row: ActivityLogRow;
  onClose: () => void;
}) {
  const c = useSectionCopy(ACTIVITY_LOG_COPY);

  return (
    <section className="rounded-[14px] border border-[#d6e3de] bg-[#f7faf8] p-[16px] lg:p-[23px]">
      <p className="text-[10px] leading-none font-semibold tracking-[0.04em] text-[#083d2d]">
        {c.detail.eyebrow}
      </p>
      <h2 className="mt-[8px] text-[18px] leading-none font-bold text-[#17362e]">
        {c.detail.frameTitle}
      </h2>
      <p className="mt-[8px] text-[10px] leading-[14px] text-[#65746d]">
        {c.detail.frameSubtitle}
      </p>
      <div className="mt-[26px] lg:pl-[60px]">
        <ActivityDetailPanel row={row} onClose={onClose} />
      </div>
    </section>
  );
}
