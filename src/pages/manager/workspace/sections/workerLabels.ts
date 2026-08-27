import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";
import type {
  ConnectionKey,
  ReportsKey,
  VisaKey,
  WorkerRoleKey,
  WorkerTimelineEvent,
} from "../workspaceMock";

/* MD-04 prints status words as plain text and colours only the connection
   exceptions — "Needs review" and "Disconnected" in #c24a3d. Report and
   visa/admin words, "Missing" and "Expiry soon" included, stay #17241f in
   the mock; the amber tone is kept for surfaces that call for it. */
export const STATUS_TONE = {
  plain: "text-[#17241f]",
  alert: "text-[#c24a3d]",
  caution: "text-[#8a6116]",
} as const;

export type StatusTone = keyof typeof STATUS_TONE;

export function useWorkerLabels() {
  const c = useSectionCopy(WORKSPACE_COPY);

  const role: Record<WorkerRoleKey, string> = {
    careWorker: c.roster.roleCareWorker,
    support: c.roster.roleSupport,
    warehouse: c.roster.roleWarehouse,
  };
  const connection: Record<ConnectionKey, string> = {
    connected: c.roster.connectionConnected,
    needsReview: c.roster.connectionNeedsReview,
    disconnected: c.roster.connectionDisconnected,
  };
  const reports: Record<ReportsKey, string> = {
    done: c.roster.reportsDone,
    missing: c.roster.reportsMissing,
  };
  const visa: Record<VisaKey, string> = {
    clear: c.roster.visaClear,
    review: c.roster.visaReview,
    expirySoon: c.roster.visaExpirySoon,
  };
  const timeline: Record<WorkerTimelineEvent, string> = {
    reportSubmitted: c.worker.eventReportSubmitted,
    managerAcknowledged: c.worker.eventManagerAcknowledged,
    workerInitiated: c.worker.eventWorkerInitiated,
    messageRead: c.worker.eventMessageRead,
    reportMissing: c.worker.eventReportMissing,
  };

  const connectionTone: Record<ConnectionKey, StatusTone> = {
    connected: "plain",
    needsReview: "alert",
    disconnected: "alert",
  };
  const reportsTone: Record<ReportsKey, StatusTone> = {
    done: "plain",
    missing: "plain",
  };
  const visaTone: Record<VisaKey, StatusTone> = {
    clear: "plain",
    review: "plain",
    expirySoon: "plain",
  };

  return {
    role,
    connection,
    reports,
    visa,
    timeline,
    connectionTone,
    reportsTone,
    visaTone,
  };
}
