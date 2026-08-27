import { useSectionCopy } from "@/i18n/copy";
import { NOTIFICATIONS_COPY } from "../notifications.copy";

/** W-53 mobile "Unread summary" row (lg:hidden — desktop puts the pill and
 *  button beside the H1 instead): 12px green count text on the left, plain
 *  "Mark all as read" text button on the right. All read (W-53A) swaps to a
 *  muted "All read" label with no button; offline (W-53D) dims the button
 *  to 45% opacity and prefixes the count with "Cached". */
export function MobileSummaryRow({
  countLabel,
  allRead,
  markAllDisabled,
  onMarkAll,
}: {
  countLabel: string;
  allRead: boolean;
  markAllDisabled: boolean;
  onMarkAll: () => void;
}) {
  const c = useSectionCopy(NOTIFICATIONS_COPY);

  return (
    <div className="mt-2 flex h-[32px] items-center justify-between lg:hidden">
      {allRead ? (
        <p className="text-[12px] leading-[16px] font-semibold text-ink-muted">
          {c.allRead}
        </p>
      ) : (
        <>
          <p className="text-[12px] leading-[16px] font-semibold text-brand">
            {countLabel}
          </p>
          <button
            type="button"
            onClick={onMarkAll}
            disabled={markAllDisabled}
            className={`h-[32px] rounded-[10px] pl-[12px] pr-[24px] text-[12px] leading-[16px] font-semibold text-brand ${
              markAllDisabled ? "opacity-45" : ""
            }`}
          >
            {c.markAllRead}
          </button>
        </>
      )}
    </div>
  );
}
