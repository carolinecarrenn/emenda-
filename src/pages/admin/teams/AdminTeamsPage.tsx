import { useState } from "react";
import { AdminShell } from "../shell/AdminShell";
import {
  DEFAULT_SELECTED_TEAM_ID,
  DIRECTORY_TEAMS,
  type DirectoryTeam,
} from "./teams.mock";
import { useTeamsState } from "./teamsState";
import { TeamsIntro } from "./sections/TeamsIntro";
import { TeamsStatRow } from "./sections/TeamsStatRow";
import { TeamDirectoryCard } from "./sections/TeamDirectoryCard";
import { ManagerAssignmentCard } from "./sections/ManagerAssignmentCard";
import { CoverageIssuesCard } from "./sections/CoverageIssuesCard";
import { AssignManagerDialog } from "./sections/AssignManagerDialog";
import { ReassignEmployeesDialog } from "./sections/ReassignEmployeesDialog";
import { CreateTeamDialog } from "./sections/CreateTeamDialog";
import { ChangeManagerDialog } from "./sections/ChangeManagerDialog";
import { ArchiveTeamDialog } from "./sections/ArchiveTeamDialog";
import { TeamLifecyclePanel } from "./sections/TeamLifecyclePanel";

/** Company Admin · Teams & Managers — Coverage (Figma AD-03, node 1223:924 on
 *  page 06 · Company Admin Experience, 1182:5690), with the lettered
 *  companions that state the same screen:
 *
 *    AD-03B Team Assignment States (1226:57)  — assign / reassign dialogs
 *    AD-03C Team Lifecycle Flow    (1226:2680) — create → archive flow
 *    AD-03D Team Detailed States   (1239:274)  — create / change / archive
 *
 *  "Screen Content" (1223:1199) is a 1144px column, 16px between blocks — the
 *  intro row, the four-up stat row, and the 352 / 392 / 368 card trio. Every
 *  companion state is reachable both by clicking the control the frame draws
 *  as its entry point and through the app's ?state= convention.
 *
 *  Scope (Figma AD-SCOPE board): Company Admin ≠ Super Admin — this area
 *  changes ownership inside one company only; it creates no platform roles
 *  and no Super Admin accounts (AD-03C states this in the flow itself). */
export function AdminTeamsPage() {
  const { state, open, close } = useTeamsState();
  const [selectedTeamId, setSelectedTeamId] = useState(
    DEFAULT_SELECTED_TEAM_ID,
  );

  const selectedTeam: DirectoryTeam =
    DIRECTORY_TEAMS.find((team) => team.id === selectedTeamId) ??
    DIRECTORY_TEAMS[0];

  if (state === "lifecycle") {
    return (
      <AdminShell>
        <div className="flex w-full max-w-[1144px] flex-col gap-[16px]">
          <TeamLifecyclePanel onBack={close} />
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <div className="flex w-full max-w-[1144px] flex-col gap-[16px]">
        <TeamsIntro onAssignManager={() => open("assign-manager")} />
        <TeamsStatRow />
        <div className="flex flex-col gap-[16px] lg:flex-row lg:items-start">
          <TeamDirectoryCard
            selectedTeamId={selectedTeam.id}
            onSelectTeam={setSelectedTeamId}
          />
          <ManagerAssignmentCard
            onAssignManager={() => open("assign-manager")}
            onCreateTeam={() => open("create-team")}
            onChangeManager={() => open("change-manager")}
          />
          <CoverageIssuesCard
            selectedTeam={selectedTeam}
            onOpenState={open}
          />
        </div>
      </div>

      {state === "assign-manager" ? (
        <AssignManagerDialog onClose={close} />
      ) : null}
      {state === "reassign-employees" ? (
        <ReassignEmployeesDialog onClose={close} />
      ) : null}
      {state === "create-team" ? <CreateTeamDialog onClose={close} /> : null}
      {state === "change-manager" ? (
        <ChangeManagerDialog onClose={close} />
      ) : null}
      {state === "archive-team" ? <ArchiveTeamDialog onClose={close} /> : null}
    </AdminShell>
  );
}
