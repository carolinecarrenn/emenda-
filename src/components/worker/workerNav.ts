import {
  Home,
  FileText,
  MessageCircle,
  Sparkles,
  User,
  type LucideIcon,
} from "lucide-react";
import type { CommonCopy } from "@/i18n/common";

export interface WorkerNavItem {
  to: string;
  copyKey: keyof CommonCopy["nav"];
  icon: LucideIcon;
  end?: boolean;
}

/* Work-mode worker navigation as built in the Figma screens:
   Home · Reports · Chat · Assistant · Profile */
export const WORKER_NAV: WorkerNavItem[] = [
  { to: "/worker", copyKey: "home", icon: Home, end: true },
  { to: "/worker/reports", copyKey: "reports", icon: FileText },
  { to: "/worker/chat", copyKey: "chat", icon: MessageCircle },
  { to: "/worker/assistant", copyKey: "assistant", icon: Sparkles },
  { to: "/worker/profile", copyKey: "profile", icon: User },
];

/* Areas that sit under Profile in the worker IA — Career & CV, Japan
   preparation, Documents, Knowledge, Help, Notifications, Coin, Logs and
   Employer connection all keep Profile highlighted in their mocks
   (WD-19..WD-61), since they are reached from Profile / the Explore grid. */
const PROFILE_AREAS = [
  "/worker/profile",
  "/worker/career",
  "/worker/japan",
  "/worker/documents",
  "/worker/knowledge",
  "/worker/help",
  "/worker/notifications",
  "/worker/coin",
  "/worker/logs",
  "/worker/employer",
];

export function isWorkerNavItemActive(
  item: WorkerNavItem,
  pathname: string,
): boolean {
  if (item.copyKey === "profile") {
    return PROFILE_AREAS.some(
      (area) => pathname === area || pathname.startsWith(`${area}/`),
    );
  }
  if (item.end) return pathname === item.to;
  return pathname === item.to || pathname.startsWith(`${item.to}/`);
}
