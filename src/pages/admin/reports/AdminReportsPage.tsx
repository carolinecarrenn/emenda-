import { useScreenState } from "@/hooks/useScreenState";
import { AdminShell } from "../shell/AdminShell";
import { AssignOwnerBoard } from "./sections/AssignOwnerBoard";
import { ReportDetailBoard } from "./sections/ReportDetailBoard";
import { ReportLifecycleFlowBoard } from "./sections/ReportLifecycleFlowBoard";
import { ReportsQueueView } from "./sections/ReportsQueueView";
import { RequestEvidenceBoard } from "./sections/RequestEvidenceBoard";
import { ResolveReopenBoard } from "./sections/ResolveReopenBoard";

/** Company Admin · Reports Oversight (Figma page 06 · Company Admin
 *  Experience, 1182:5690).
 *
 *    AD-04  Reports Oversight — Queue   1223:1317  /admin/reports
 *    AD-04B Report Detail & Actions     1226:96    ?state=detail
 *    AD-04C Report Resolution Flow      1226:2775  ?state=flow
 *    AD-04D Report Detailed States      1239:353   ?state=assign-owner
 *                                                  ?state=request-evidence
 *                                                  ?state=outcome
 *
 *  The lettered frames are states of this one screen, so they live on this
 *  route behind `?state=` (src/hooks/useScreenState.ts) and are reached by
 *  clicking the queue's Open / Open detail / Assign owner controls and the
 *  detail board's action row.
 *
 *  Scope (Figma AD-SCOPE board): Company Admin ≠ Super Admin — this area
 *  governs one company's own reports only. */
export function AdminReportsPage() {
  const state = useScreenState();

  return (
    <AdminShell>
      {state === "detail" ? (
        <ReportDetailBoard />
      ) : state === "flow" ? (
        <ReportLifecycleFlowBoard />
      ) : state === "assign-owner" ? (
        <AssignOwnerBoard />
      ) : state === "request-evidence" ? (
        <RequestEvidenceBoard />
      ) : state === "outcome" ? (
        <ResolveReopenBoard />
      ) : (
        <ReportsQueueView />
      )}
    </AdminShell>
  );
}
