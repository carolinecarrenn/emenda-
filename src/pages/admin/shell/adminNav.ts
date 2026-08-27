import {
  CalendarRange,
  CircleDollarSign,
  Clock,
  FileText,
  LayoutGrid,
  LogOut,
  Network,
  NotebookText,
  Sun,
  Users,
  type LucideIcon,
} from "lucide-react";

/* AD-01 "Desktop · Company Admin Primary navigation" (1182:5700) and
   "Desktop · Company Admin Utility navigation" (1182:5758). Icon glyphs are
   matched to the drawn glyph, not to the Figma layer name (dashboard / users /
   org / reports / follow / daily / reward / audit · settings / log out):
   "Icon · dashboard" is a 2x2 of four EQUAL squares (LayoutGrid, not
   LayoutDashboard), "Icon · daily" is a calendar with bars and no tick
   (CalendarRange, not CalendarCheck), "Icon · reward" is a single coin circle
   (CircleDollarSign, not the two-circle Coins), "Icon · audit" is a spined
   notebook with three rules (NotebookText, not the curled ScrollText) and
   "Icon · settings" is drawn as a sun burst, not a gear.

   Every item used to resolve to /admin because AD-01 was the only Company
   Admin frame the inventory knew about. The orphan scan found the rest of the
   role (AD-00 access through AD-10 states), so each destination now points at
   its own route. Dashboard is still the item drawn active in AD-01. */

export type AdminPrimaryNavKey =
  | "dashboard"
  | "employees"
  | "teamsManagers"
  | "reports"
  | "followUp"
  | "dailyReports"
  | "rewardsCoin"
  | "activityLog";

export type AdminUtilityNavKey = "companySettings" | "logOut";

export interface AdminNavItem<K extends string> {
  key: K;
  to: string;
  icon: LucideIcon;
}

export const ADMIN_PRIMARY_NAV: AdminNavItem<AdminPrimaryNavKey>[] = [
  { key: "dashboard", to: "/admin", icon: LayoutGrid },
  { key: "employees", to: "/admin/employees", icon: Users },
  { key: "teamsManagers", to: "/admin/teams", icon: Network },
  { key: "reports", to: "/admin/reports", icon: FileText },
  { key: "followUp", to: "/admin/follow-up", icon: Clock },
  { key: "dailyReports", to: "/admin/daily-reports", icon: CalendarRange },
  { key: "rewardsCoin", to: "/admin/rewards", icon: CircleDollarSign },
  { key: "activityLog", to: "/admin/activity-log", icon: NotebookText },
];

export const ADMIN_UTILITY_NAV: AdminNavItem<AdminUtilityNavKey>[] = [
  { key: "companySettings", to: "/admin/settings", icon: Sun },
  { key: "logOut", to: "/auth/logout", icon: LogOut },
];

/* Which item wears the mint active pill is decided per route in
   adminHeader.ts — every Admin frame highlights its own screen, so a single
   constant could only ever be right on one of them. */
