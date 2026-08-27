import { useEffect } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { ACTIVITY_LOG_COPY } from "../activity-log.copy";
import type { ActivityLogRow } from "../activity-log.mock";
import { ActivityDetailPanel } from "./ActivityDetailPanel";

/* AD-08B "Inspect one change without leaving the audit trail." (1226:1147) —
   the detail card is an overlay over AD-08, so the filtered trail underneath
   is never torn down and AD-08D's rule "Filters are retained when opening and
   closing an event detail" (1239:697) holds by construction. */
export function ActivityDetailDialog({
  row,
  onClose,
}: {
  row: ActivityLogRow | null;
  onClose: () => void;
}) {
  const c = useSectionCopy(ACTIVITY_LOG_COPY);

  useEffect(() => {
    if (!row) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [row, onClose]);

  if (!row) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#0f1f1a]/40 p-[16px] lg:items-center lg:p-[32px]">
      <button
        type="button"
        aria-label={c.detail.close}
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={c.detail.title}
        className="relative w-full max-w-[552px]"
      >
        <ActivityDetailPanel row={row} onClose={onClose} />
      </div>
    </div>
  );
}
