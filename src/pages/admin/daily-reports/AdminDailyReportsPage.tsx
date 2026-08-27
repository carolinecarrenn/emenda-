import { useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { AdminShell } from "../shell/AdminShell";
import { DailyReportsIntro } from "./sections/DailyReportsIntro";
import { DailyReportsStatRow } from "./sections/DailyReportsStatRow";
import { TeamHealthCard } from "./sections/TeamHealthCard";
import { LateMissingCard } from "./sections/LateMissingCard";
import { DailyReportsBoardLinks } from "./sections/DailyReportsBoardLinks";
import { ReminderActionsBoard } from "./sections/ReminderActionsBoard";
import { DailyReportsFlowBoard } from "./sections/DailyReportsFlowBoard";
import { DetailedStatesBoard } from "./sections/DetailedStatesBoard";

/** Company Admin · Daily Reports — Monitoring
 *  (Figma AD-06, node 1223:2373 on page 06 · Company Admin Experience,
 *  1182:5690, plus its lettered companions).
 *
 *  AD-06 "Screen Content" (1223:2648): a 1144px column — the intro row with
 *  Export daily status / Send reminder, the Expected / Submitted / Late /
 *  Missing stat quad, then the 560px "Daily report health" card beside the
 *  568px "Late & missing submissions" table.
 *
 *  States, all URL-addressable via the app's `?state=` convention:
 *    (none)              AD-06  monitoring, as drawn
 *    ?state=reminder     AD-06B "Send reminder" composer      (Send reminder)
 *    ?state=reminder-sent AD-06B "Reminder sent"              (composer submit)
 *    ?state=flow         AD-06C end-to-end flow board
 *    ?state=detail       AD-06D all three detailed panels
 *    ?state=compose      AD-06D "Compose reminder"
 *    ?state=delivery     AD-06D "Reminder delivery result"    (View activity)
 *    ?state=submission   AD-06D "Employee submission detail"  (table row)
 *
 *  Scope (Figma AD-SCOPE board): Company Admin ≠ Super Admin — monitoring and
 *  reminders for one company only, and per AD-06C the admin never authors or
 *  rewrites an employee's daily report. */
export function AdminDailyReportsPage() {
  const state = useScreenState();
  const navigate = useNavigate();

  const go = (next: string) => navigate(`/admin/daily-reports${next}`);

  if (state === "reminder" || state === "reminder-sent") {
    return (
      <AdminShell>
        <ReminderActionsBoard
          step={state === "reminder" ? "compose" : "sent"}
          onCancel={() => go("")}
          onSend={() => go("?state=reminder-sent")}
          onViewActivity={() => go("?state=delivery")}
        />
      </AdminShell>
    );
  }

  if (state === "flow") {
    return (
      <AdminShell>
        <DailyReportsFlowBoard />
      </AdminShell>
    );
  }

  if (
    state === "detail" ||
    state === "compose" ||
    state === "delivery" ||
    state === "submission"
  ) {
    return (
      <AdminShell>
        <DetailedStatesBoard
          focus={state === "detail" ? "all" : state}
          onCancelCompose={() => go("")}
          onSendCompose={() => go("?state=delivery")}
        />
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <div className="flex w-full max-w-[1144px] flex-col gap-[16px]">
        <DailyReportsIntro onSendReminder={() => go("?state=reminder")} />
        <DailyReportsStatRow />
        <div className="flex flex-col gap-[16px] lg:flex-row lg:items-start">
          <TeamHealthCard />
          <LateMissingCard
            onSendReminder={() => go("?state=reminder")}
            onOpenRow={() => go("?state=submission")}
          />
        </div>
        <DailyReportsBoardLinks />
      </div>
    </AdminShell>
  );
}
