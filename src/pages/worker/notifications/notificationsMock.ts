/**
 * Notifications mock store (Figma WD-53 / mobile W-53, section 1182:2767 /
 * 952:830). The feed reflects the employer-relationship lifecycle: the top
 * TODAY item swaps between invite → active → ended while the rest of the
 * feed is shared. Data stays raw here (employer names come from the shared
 * EMPLOYER mock); all display text lives in notifications.copy.ts.
 */
export type NotificationKind =
  | "employerInvite"
  | "employerAccessActive"
  | "employerAccessEnded"
  | "residenceExpiry"
  | "identityVerified"
  | "municipalReminder";

export type NotificationGroup = "today" | "earlier";

export type NotificationsMode = "headless" | "connected" | "ended";

export interface NotificationItem {
  id: string;
  kind: NotificationKind;
  group: NotificationGroup;
  unread: boolean;
}

/** Shared tail of the feed — identical across all three modes. */
const SHARED_FEED: NotificationItem[] = [
  {
    id: "n-residence",
    kind: "residenceExpiry",
    group: "today",
    unread: true,
  },
  {
    id: "n-identity",
    kind: "identityVerified",
    group: "earlier",
    unread: false,
  },
  {
    id: "n-reminder",
    kind: "municipalReminder",
    group: "earlier",
    unread: false,
  },
];

const LEAD_KIND: Record<NotificationsMode, NotificationKind> = {
  headless: "employerInvite",
  connected: "employerAccessActive",
  ended: "employerAccessEnded",
};

/**
 * Where each notification card takes the worker — the mock W-53 previews all
 * name their destination ("Review what will be shared before connecting",
 * "review your saved details", "Review the retained access history", "open
 * your private important dates"), so every row is a real navigation target,
 * not a static card. Routes are app structure, not UI copy.
 */
export const NOTIFICATION_TARGETS: Record<NotificationKind, string> = {
  employerInvite: "/worker/employer/review",
  employerAccessActive: "/worker/employer",
  employerAccessEnded: "/worker/employer/history",
  residenceExpiry: "/worker/japan/residence",
  identityVerified: "/worker/profile",
  municipalReminder: "/worker/japan/dates",
};

/** Feed for one employer-lifecycle mode (WD-53 / WD-53E / WD-53H). */
export function notificationsForMode(
  mode: NotificationsMode,
): NotificationItem[] {
  return [
    { id: "n-employer", kind: LEAD_KIND[mode], group: "today", unread: true },
    ...SHARED_FEED,
  ];
}
