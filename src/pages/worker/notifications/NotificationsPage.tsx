import { useState } from "react";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { EMPLOYER } from "@/data/caregiverReport";
import { NOTIFICATIONS_COPY } from "./notifications.copy";
import {
  NOTIFICATION_TARGETS,
  notificationsForMode,
  type NotificationsMode,
} from "./notificationsMock";
import { NotificationsHeader } from "./sections/NotificationsHeader";
import { OfflineBanner } from "./sections/OfflineBanner";
import { MobileSummaryRow } from "./sections/MobileSummaryRow";
import {
  NotificationFeed,
  type DisplayNotification,
} from "./sections/NotificationFeed";
import { NotificationsSkeleton } from "./sections/NotificationsSkeleton";
import { NotificationsEmptyState } from "./sections/NotificationsEmptyState";
import { PrivacyNote } from "./sections/PrivacyNote";

/** Notifications center (Figma WD-53 base + A..I, section 1182:2767;
 *  mobile W-53, 952:830). Three employer-lifecycle modes (Headless /
 *  Employer Connected / Employer Access Ended) crossed with unread,
 *  all-read, empty, loading and cached-offline states. Default render
 *  (no ?state=) = WD-53 Headless · Unread; "Mark all as read" is
 *  functional against the mock store, so the All-Read variants
 *  (WD-53A/F/I) are also reachable by clicking it in any unread mode.
 *  Every card is a link to the thing it is about, and opening one clears
 *  its own unread dot. */
export function NotificationsPage() {
  const state = useScreenState();
  const c = useSectionCopy(NOTIFICATIONS_COPY);

  /* "Mark all as read" is scoped to the ?state variant it was clicked in,
     so switching variants naturally resets the mock read status (and a
     language switch never remounts or resets it). */
  const [markedReadFor, setMarkedReadFor] = useState<string | null>(null);
  const [openedIds, setOpenedIds] = useState<string[]>([]);
  const markedAllRead = markedReadFor === (state ?? "");
  const markAllRead = () => setMarkedReadFor(state ?? "");
  const markOneRead = (id: string) =>
    setOpenedIds((ids) => (ids.includes(id) ? ids : [...ids, id]));

  const loading = state === "loading";
  const empty = state === "empty";
  const offline = state === "offline" || state === "connected-offline";
  const mode: NotificationsMode =
    state === "employer-connected" ||
    state === "connected-all-read" ||
    state === "connected-offline"
      ? "connected"
      : state === "access-ended" || state === "ended-all-read"
        ? "ended"
        : "headless";
  const allRead =
    markedAllRead ||
    state === "all-read" ||
    state === "connected-all-read" ||
    state === "ended-all-read";

  const items: DisplayNotification[] = notificationsForMode(mode).map(
    (item) => ({
      id: item.id,
      title: c.items[item.kind].title(EMPLOYER.name),
      body: c.items[item.kind].body(EMPLOYER.name),
      group: item.group,
      unread: item.unread && !allRead && !openedIds.includes(item.id),
      to: NOTIFICATION_TARGETS[item.kind],
    }),
  );
  const unreadCount = items.filter((item) => item.unread).length;

  const subtitle = loading
    ? c.subtitleLoading
    : offline
      ? c.subtitleOffline
      : c.subtitle;
  const countLabel = offline
    ? c.cachedUnreadCount(unreadCount)
    : c.unreadCount(unreadCount);
  const hasFeed = !loading && !empty;
  /* Mobile W-53A keeps a summary line ("All read") after everything is read;
     desktop mirrors that with the mint pill so the confirmation is not lost
     on the wider viewport — only the button drops away. */
  const pillLabel = hasFeed ? (unreadCount > 0 ? countLabel : c.allRead) : null;

  return (
    <div className="max-w-[1012px] pt-2 lg:pt-[7px]">
      <NotificationsHeader
        subtitle={subtitle}
        pillLabel={pillLabel}
        showMarkAll={hasFeed && unreadCount > 0}
        markAllDisabled={offline}
        onMarkAll={markAllRead}
      />

      {loading ? (
        <NotificationsSkeleton />
      ) : empty ? (
        <NotificationsEmptyState />
      ) : (
        <>
          {offline && <OfflineBanner />}
          <MobileSummaryRow
            countLabel={countLabel}
            allRead={unreadCount === 0}
            markAllDisabled={offline}
            onMarkAll={markAllRead}
          />
          <NotificationFeed
            items={items}
            tightTop={offline}
            onOpen={markOneRead}
          />
          <PrivacyNote />
        </>
      )}
    </div>
  );
}
