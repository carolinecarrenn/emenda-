import { useSectionCopy } from "@/i18n/copy";
import { NOTIFICATIONS_COPY } from "../notifications.copy";

/** WD-53B / W-53B empty state. Desktop: single large white 260px card,
 *  18px radius, centered "No notifications yet" (20px semibold) over
 *  "Updates from EMENDA will appear here." plus the account/Japan-prep/
 *  employer-access caption (overlapping text layers in the mock — rendered
 *  stacked here). Mobile (952:1069): left-aligned 184px white card, 14px
 *  radius, #d9e1dc border, 28/20/24 padding, a 36px #f0f8f3 mint icon chip,
 *  the 16px semibold title and the two-line 12px caption, each 10px apart. */
export function NotificationsEmptyState() {
  const c = useSectionCopy(NOTIFICATIONS_COPY);

  return (
    <div className="mt-[62px] min-h-[184px] rounded-[14px] border border-[#d9e1dc] bg-white px-[20px] pt-[28px] pb-[24px] lg:mt-[64px] lg:flex lg:h-[260px] lg:min-h-0 lg:flex-col lg:items-center lg:justify-start lg:rounded-[18px] lg:border-lp-line lg:px-0 lg:pt-[62px] lg:pb-0 lg:text-center">
      <div
        className="size-[36px] rounded-full bg-[#f0f8f3] lg:hidden"
        aria-hidden
      />
      <p className="mt-[10px] text-[16px] leading-[20px] font-semibold text-ink lg:mt-0 lg:text-[20px] lg:leading-normal lg:text-lp-ink">
        {c.empty.title}
      </p>
      <p className="hidden lg:mt-[24px] lg:block lg:text-[14px] lg:text-lp-muted">
        {c.empty.body}
      </p>
      <p className="mt-[10px] text-[12px] leading-[17px] text-ink-muted lg:mt-[10px] lg:max-w-[820px] lg:text-[14px] lg:leading-normal lg:text-lp-muted">
        {c.empty.caption}
      </p>
    </div>
  );
}
