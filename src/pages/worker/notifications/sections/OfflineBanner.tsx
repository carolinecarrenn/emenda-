import { useSectionCopy } from "@/i18n/copy";
import { NOTIFICATIONS_COPY } from "../notifications.copy";

/** WD-53D / W-53D amber offline banner — the only warm color in this
 *  section. Desktop: #fff5d6 fill with an #ed911a border and #804d0d 13px
 *  text at the top of the TODAY group. Mobile: borderless #fef6da pill with
 *  11px muted text above the unread summary row. */
export function OfflineBanner() {
  const c = useSectionCopy(NOTIFICATIONS_COPY);

  return (
    <div className="mt-2 flex h-[62px] items-center rounded-[14px] bg-[#fef6da] px-[14px] lg:mt-[34px] lg:h-[64px] lg:border lg:border-[#ed911a] lg:bg-[#fff5d6] lg:px-[17px]">
      <p className="max-w-[320px] text-[11px] leading-[15px] text-ink-muted lg:max-w-none lg:text-[13px] lg:leading-normal lg:text-[#804d0d]">
        {c.offlineBanner}
      </p>
    </div>
  );
}
