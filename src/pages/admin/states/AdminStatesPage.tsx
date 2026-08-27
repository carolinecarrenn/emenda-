import type { ReactNode } from "react";
import { useScreenState } from "@/hooks/useScreenState";
import { AdminShell } from "../shell/AdminShell";
import { DeactivateConfirmCard } from "./sections/DeactivateConfirmCard";
import { RecoveryDetailBoard } from "./sections/RecoveryDetailBoard";
import { RecoveryFlowBoard } from "./sections/RecoveryFlowBoard";
import { ReferenceStateCards } from "./sections/ReferenceStateCards";
import { StateCoverageCard } from "./sections/StateCoverageCard";
import { StatesErrorState } from "./sections/StatesErrorState";
import { StatesIntro } from "./sections/StatesIntro";
import { StatesLoadingState } from "./sections/StatesLoadingState";
import { StatesNoPermissionState } from "./sections/StatesNoPermissionState";
import { StatesNoResultsState } from "./sections/StatesNoResultsState";
import { StatesSuccessState } from "./sections/StatesSuccessState";
import { SystemStatesBoard } from "./sections/SystemStatesBoard";

/** Company Admin · Empty & Access States (Figma page 06 · Company Admin
 *  Experience, 1182:5690).
 *
 *    AD-10  · Empty & Access States      — 1225:1044  the screen itself
 *    AD-10B · Loading Error Confirmation — 1226:1202  interaction states
 *    AD-10C · Global State Recovery Flow — 1226:4070  the lifecycle flow
 *    AD-10D · Recovery Detailed States   — 1239:827   the detailed states
 *
 *  AD-10's Screen Content (1225:1319) is a 1144 column: the 44px intro band
 *  at y22, the three 368x320 reference cards at y92, and the 1144x272 "State
 *  coverage" card at y446. B, C and D are the same area's companion boards
 *  and follow it in that order.
 *
 *  The five non-happy paths the coverage card enumerates each get their own
 *  screen behind `?state=`, reachable by clicking the coverage row that names
 *  it; confirming the destructive one lands on `?state=destructive-success`,
 *  the result AD-10C step 05 and AD-10D (1239:892) require. Every state keeps
 *  the intro band and the shell above it, which is the context-preservation
 *  rule AD-10C states in so many words. */
export function AdminStatesPage() {
  const state = useScreenState();

  if (state === "loading") {
    return (
      <AdminShell>
        <div className="flex w-full max-w-[1144px] flex-col">
          <StatesLoadingState />
        </div>
      </AdminShell>
    );
  }

  const stateScreen: ReactNode =
    state === "error" ? (
      <StatesErrorState />
    ) : state === "no-results" ? (
      <StatesNoResultsState />
    ) : state === "no-permission" ? (
      <StatesNoPermissionState />
    ) : state === "destructive-confirm" ? (
      <DeactivateConfirmCard />
    ) : state === "destructive-success" ? (
      <StatesSuccessState />
    ) : null;

  return (
    <AdminShell>
      <div className="flex w-full max-w-[1144px] flex-col">
        <StatesIntro />

        {stateScreen ? (
          <div className="mt-[26px]">{stateScreen}</div>
        ) : (
          <>
            <div className="mt-[26px]">
              <ReferenceStateCards />
            </div>
            <div className="mt-[34px]">
              <StateCoverageCard />
            </div>
            <div className="mt-[34px]">
              <SystemStatesBoard />
            </div>
            <div className="mt-[34px]">
              <RecoveryFlowBoard />
            </div>
            <div className="mt-[34px]">
              <RecoveryDetailBoard />
            </div>
          </>
        )}
      </div>
    </AdminShell>
  );
}
