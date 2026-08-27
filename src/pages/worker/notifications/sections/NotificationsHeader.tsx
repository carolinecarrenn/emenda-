import { Link } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { NOTIFICATIONS_COPY } from "../notifications.copy";

/** WD-53 header zone: 13px green "Home" breadcrumb (desktop only — the
 *  mobile W-53 tab screen starts at the H1), 34px H1 with the mint unread
 *  pill + white "Mark all as read" outline button right-aligned on desktop,
 *  then the 14px gray subtitle. Mobile drops the desktop controls; its
 *  summary row renders separately below (after the offline banner). */
export function NotificationsHeader({
  subtitle,
  pillLabel,
  showMarkAll,
  markAllDisabled,
  onMarkAll,
}: {
  subtitle: string;
  pillLabel: string | null;
  showMarkAll: boolean;
  markAllDisabled: boolean;
  onMarkAll: () => void;
}) {
  const common = useCommonCopy();
  const c = useSectionCopy(NOTIFICATIONS_COPY);

  return (
    <div>
      <Link
        to="/worker"
        className="hidden text-[13px] font-semibold text-lp-green hover:text-lp-button lg:inline-block"
      >
        {common.nav.home}
      </Link>
      <div className="flex items-center justify-between gap-4 lg:mt-[22px] lg:items-start">
        <h1 className="text-[28px] leading-[34px] font-bold text-ink lg:text-[34px] lg:leading-[1.2] lg:text-lp-ink">
          {common.nav.notifications}
        </h1>
        {(pillLabel !== null || showMarkAll) && (
          <div className="hidden shrink-0 gap-[14px] lg:-mt-[11px] lg:flex lg:items-start">
            {pillLabel !== null && (
              <span className="flex h-[30px] min-w-[100px] items-center justify-center rounded-[15px] border border-lp-line bg-lp-mint px-[14px] text-[12px] font-semibold text-lp-green lg:mt-[8px]">
                {pillLabel}
              </span>
            )}
            {showMarkAll && (
              <button
                type="button"
                onClick={onMarkAll}
                disabled={markAllDisabled}
                className="h-[40px] w-[120px] rounded-[12px] border border-lp-line bg-white px-[16px] text-[14px] leading-[20px] font-semibold text-lp-green hover:border-lp-green disabled:cursor-default disabled:hover:border-lp-line"
              >
                {c.markAllRead}
              </button>
            )}
          </div>
        )}
      </div>
      <p className="mt-[8px] text-[12px] leading-[17px] text-ink-muted lg:mt-[21px] lg:text-[14px] lg:leading-normal lg:text-lp-muted">
        {subtitle}
      </p>
    </div>
  );
}
