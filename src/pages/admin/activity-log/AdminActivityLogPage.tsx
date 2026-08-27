import { useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { AdminShell } from "../shell/AdminShell";
import {
  ACTIVITY_DETAIL_ROW_ID,
  ACTIVITY_LOG_ROWS,
  NO_RESULTS_QUERY,
} from "./activity-log.mock";
import { ActivityAuditFlow } from "./sections/ActivityAuditFlow";
import { ActivityDetailBoard } from "./sections/ActivityDetailBoard";
import { ActivityDetailedStates } from "./sections/ActivityDetailedStates";
import { ActivityLogScreen } from "./sections/ActivityLogScreen";

/** Company Admin · Activity Log — Audit.
 *
 *  Figma page 06 · Company Admin Experience (1182:5690):
 *    AD-08  Activity Log — Audit     (1225:345)  → the base screen
 *    AD-08B Activity Detail States   (1226:1144) → ?state=detail
 *    AD-08C Activity Audit Flow      (1226:3880) → ?state=flow
 *    AD-08D Activity Detailed States (1239:669)  → ?state=advanced
 *                                                → ?state=no-results
 *
 *  AD-08B is also the live overlay behind every row of the trail, so the
 *  detail is reachable by clicking, not only by URL. `?state=no-results`
 *  seeds the search field with a query that matches nothing, which is the
 *  case AD-08D's amber note governs (1239:694).
 *
 *  Scope (Figma AD-SCOPE board + the AD-08C flow rule): the trail is
 *  append-only and company-scoped — inspect and export only, never alter,
 *  delete or hide, and never across companies. */
export function AdminActivityLogPage() {
  const state = useScreenState();
  const navigate = useNavigate();

  const detailRow =
    ACTIVITY_LOG_ROWS.find((row) => row.id === ACTIVITY_DETAIL_ROW_ID) ??
    ACTIVITY_LOG_ROWS[0];

  const toBaseScreen = () => navigate("/admin/activity-log");

  return (
    <AdminShell>
      {state === "detail" ? (
        <div className="w-full max-w-[1144px]">
          <ActivityDetailBoard row={detailRow} onClose={toBaseScreen} />
        </div>
      ) : state === "flow" ? (
        <div className="w-full max-w-[1144px]">
          <ActivityAuditFlow />
        </div>
      ) : state === "advanced" ? (
        <div className="w-full max-w-[1144px]">
          <ActivityDetailedStates row={detailRow} />
        </div>
      ) : (
        <ActivityLogScreen
          key={state ?? "base"}
          initialQuery={state === "no-results" ? NO_RESULTS_QUERY : ""}
          onReset={toBaseScreen}
        />
      )}
    </AdminShell>
  );
}
