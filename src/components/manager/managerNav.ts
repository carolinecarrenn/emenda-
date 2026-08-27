import {
  LayoutDashboard,
  Users,
  ClipboardList,
  MessageCircle,
  MoreHorizontal,
  type LucideIcon,
} from "lucide-react";
import type { CommonCopy } from "@/i18n/common";

type ManagerNavKey = keyof CommonCopy["managerNav"];

/* MD-03 desktop sidebar: 12 text-only destinations. "Follow-up"
   (MD-09 node 1226:1244) sits between Communication and Reports — the mobile
   bottom nav has always routed to it, so leaving it out of the desktop rail
   made an EM-canonical destination desktop-unreachable from the chrome. */
export const MANAGER_DESKTOP_NAV: {
  to: string;
  copyKey: ManagerNavKey;
  end?: boolean;
}[] = [
  { to: "/manager", copyKey: "dashboard", end: true },
  { to: "/manager/workers", copyKey: "workers" },
  { to: "/manager/communication", copyKey: "communication" },
  { to: "/manager/follow-up", copyKey: "followUp" },
  { to: "/manager/reports", copyKey: "reports" },
  { to: "/manager/alerts", copyKey: "alerts" },
  { to: "/manager/analytics", copyKey: "analytics" },
  { to: "/manager/knowledge-ojt", copyKey: "knowledgeOjt" },
  { to: "/manager/human-rights-dd", copyKey: "humanRightsDd" },
  { to: "/manager/audit-export", copyKey: "auditExport" },
  { to: "/manager/settings", copyKey: "settings" },
  { to: "/manager/support", copyKey: "support" },
];

/* EM-xx mobile bottom nav: Dashboard · Workers · Follow-up · Messages · More. */
export const MANAGER_MOBILE_NAV: {
  to: string;
  copyKey: ManagerNavKey;
  icon: LucideIcon;
  end?: boolean;
}[] = [
  { to: "/manager", copyKey: "dashboard", icon: LayoutDashboard, end: true },
  { to: "/manager/workers", copyKey: "workers", icon: Users },
  { to: "/manager/follow-up", copyKey: "followUp", icon: ClipboardList },
  { to: "/manager/communication", copyKey: "messages", icon: MessageCircle },
  { to: "/manager/more", copyKey: "more", icon: MoreHorizontal },
];
