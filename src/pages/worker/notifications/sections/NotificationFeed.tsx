import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { NOTIFICATIONS_COPY } from "../notifications.copy";

/** One resolved feed entry (copy already applied over the mock item). */
export interface DisplayNotification {
  id: string;
  title: string;
  body: string;
  group: "today" | "earlier";
  unread: boolean;
  /** Route this card opens — the subject the notification is about. */
  to: string;
}

/** WD-53 notification card. Desktop: white 88px card, lp-line border,
 *  14px radius, 28px status circle on the left (mint fill = unread, hollow
 *  white = read), 15px semibold title + 13px gray preview. Mobile (W-53):
 *  76px card, unread = #f0f8f3 mint fill, read = white, 12px dark-green
 *  title + 10px gray preview, solid 8px green dot on the right edge.
 *  The whole card is the control: it opens the thing the notification is
 *  about (employer invite/access, residence status, profile, dates). */
function NotificationRow({
  item,
  onOpen,
}: {
  item: DisplayNotification;
  onOpen: (id: string) => void;
}) {
  return (
    <Link
      to={item.to}
      onClick={() => onOpen(item.id)}
      className={`relative block h-[76px] rounded-[14px] border hover:border-lp-green lg:flex lg:h-[88px] lg:items-center ${
        item.unread
          ? "border-[#dde3df] bg-[#f0f8f3] lg:border-lp-line lg:bg-white"
          : "border-[#dde3df] bg-white lg:border-lp-line"
      }`}
    >
      <span
        className={`hidden shrink-0 lg:ml-[17px] lg:block lg:size-[28px] lg:rounded-full lg:border lg:border-lp-line ${
          item.unread ? "lg:bg-lp-mint" : "lg:bg-white"
        }`}
      />
      <div className="min-w-0 px-[13px] pt-[10px] pr-[24px] lg:ml-[16px] lg:px-0 lg:pt-0 lg:pr-[18px]">
        <p className="truncate text-[12px] leading-[20px] font-semibold text-brand-deep lg:text-[15px] lg:leading-[26px] lg:text-lp-ink">
          {item.title}
        </p>
        <p className="mt-[5px] truncate text-[10px] leading-[20px] text-[#6f7f76] lg:mt-[2px] lg:text-[13px] lg:leading-[28px] lg:text-lp-muted">
          {item.body}
        </p>
      </div>
      {item.unread && (
        <span className="absolute top-1/2 right-[12px] size-[8px] -translate-y-1/2 rounded-full bg-brand lg:hidden" />
      )}
    </Link>
  );
}

/** Date-grouped feed: tiny uppercase TODAY / EARLIER labels (green on
 *  desktop, muted on mobile) above full-width notification cards. `tightTop`
 *  is set when an offline banner already sits above the feed (WD-53D), where
 *  the mock leaves less room before the first group label. */
export function NotificationFeed({
  items,
  tightTop = false,
  onOpen,
}: {
  items: DisplayNotification[];
  tightTop?: boolean;
  /** Opening a card also clears its unread dot (W-53 → W-53A behaviour). */
  onOpen: (id: string) => void;
}) {
  const c = useSectionCopy(NOTIFICATIONS_COPY);
  const today = items.filter((item) => item.group === "today");
  const earlier = items.filter((item) => item.group === "earlier");

  const groups: { label: string; entries: DisplayNotification[] }[] = [
    { label: c.groupToday, entries: today },
    { label: c.groupEarlier, entries: earlier },
  ].filter((group) => group.entries.length > 0);

  return (
    <div>
      {groups.map((group, index) => (
        <section
          key={group.label}
          className={
            index === 0 && tightTop
              ? "mt-2 lg:mt-0"
              : "mt-2 lg:mt-[26px]"
          }
        >
          <p className="text-[11px] leading-[14px] font-semibold text-ink-muted uppercase lg:leading-[18px] lg:text-lp-green">
            {group.label}
          </p>
          <div className="mt-2 space-y-2 lg:space-y-3">
            {group.entries.map((item) => (
              <NotificationRow key={item.id} item={item} onOpen={onOpen} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
