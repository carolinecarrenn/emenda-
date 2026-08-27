import { useScreenState } from "@/hooks/useScreenState";
import { AdminShell } from "../shell/AdminShell";
import { FollowUpBoardView } from "./sections/FollowUpBoardView";
import { EscalationDecisionView } from "./sections/EscalationDecisionView";
import { EscalationFlowView } from "./sections/EscalationFlowView";
import { EscalationDetailView } from "./sections/EscalationDetailView";

/** Company Admin Follow-up & Escalation (Figma page 06 · Company Admin
 *  Experience, 1182:5690).
 *
 *  AD-05  (1223:1997) — the board: intro row, four-up stat strip, the 808px
 *         follow-up board and the 320px escalation queue with its playbook.
 *  AD-05B (1226:131)  — ?state=escalate  · the escalation decision card,
 *         reached from the board's "Escalate case" button.
 *  AD-05C (1226:2870) — ?state=lifecycle · the end-to-end follow-up
 *         lifecycle, attention → intervention → recovery.
 *  AD-05D (1239:432)  — ?state=detail    · the three concrete operational
 *         states: intervene, escalate, recovery checkpoint.
 *
 *  The AD-05 frame draws the full Company Admin chrome; the sidebar, header
 *  and mobile nav all come from AdminShell, so this page owns only the
 *  "Screen Content" region.
 *
 *  Scope (Figma AD-SCOPE board): Company Admin ≠ Super Admin — escalation
 *  destinations stay inside this one company. */
export function AdminFollowUpPage() {
  const state = useScreenState();

  return (
    <AdminShell>
      {state === "escalate" ? (
        <EscalationDecisionView />
      ) : state === "lifecycle" ? (
        <EscalationFlowView />
      ) : state === "detail" ? (
        <EscalationDetailView />
      ) : (
        <FollowUpBoardView />
      )}
    </AdminShell>
  );
}
