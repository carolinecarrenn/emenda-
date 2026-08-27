import { useSectionCopy } from "@/i18n/copy";
import { ADMINTEAMS_COPY } from "../teams.copy";
import {
  COVERAGE_ISSUES,
  type CoverageIssue,
  type CoverageIssueKind,
  type DirectoryTeam,
} from "../teams.mock";
import type { TeamsState } from "../teamsState";
import { SelectedTeamPanel } from "./SelectedTeamPanel";
import { TeamsCard, TonePill } from "./teamsUi";
import { fill } from "./teamsTokens";

/* AD-03 "Coverage issues" (1223:1286): 368x512 white card — three 48px
   #f7faf8 rows (radius 9) with the 9px semibold case line, its 8px reason and
   the High (#fdf0ef) / Medium (#fdf7ec) pill, followed by the "Selected team"
   panel (1223:1304).

   Each row is the entry point of the state that resolves it: the unassigned
   pool opens AD-03B "Reassign employees" (1226:80), the near-limit workload
   opens AD-03D "Assign / change manager" (1239:303), and the missing backup
   opens AD-03B "Assign manager" (1226:61). */

const ISSUE_STATE: Record<CoverageIssueKind, TeamsState> = {
  unassignedEmployees: "reassign-employees",
  workloadNearLimit: "change-manager",
  noBackupManager: "assign-manager",
};

export function CoverageIssuesCard({
  selectedTeam,
  onOpenState,
}: {
  selectedTeam: DirectoryTeam;
  onOpenState: (state: TeamsState) => void;
}) {
  const c = useSectionCopy(ADMINTEAMS_COPY);

  function issueTitle(issue: CoverageIssue): string {
    return issue.kind === "unassignedEmployees"
      ? c.coverage.unassignedEmployees
      : (issue.team ?? "");
  }

  function issueDetail(issue: CoverageIssue): string {
    return issue.kind === "unassignedEmployees"
      ? fill(c.coverage.details.unassignedEmployees, {
          count: issue.count ?? 0,
        })
      : c.coverage.details[issue.kind];
  }

  return (
    <TeamsCard
      title={c.coverage.title}
      subtitle={c.coverage.subtitle}
      className="w-full lg:h-[512px] lg:w-[368px]"
    >
      <ul className="mt-[12px] flex flex-col gap-[8px]">
        {COVERAGE_ISSUES.map((issue) => (
          <li key={issue.id}>
            <button
              type="button"
              onClick={() => onOpenState(ISSUE_STATE[issue.kind])}
              className="flex h-[48px] w-full items-center gap-[10px] rounded-[9px] bg-[#f7faf8] px-[12px] text-left hover:bg-[#eef4f1]"
            >
              <span className="flex min-w-0 flex-1 flex-col gap-[4px]">
                <span className="truncate text-[10px] leading-none font-semibold text-[#17362e] lg:text-[9px]">
                  {issueTitle(issue)}
                </span>
                <span className="truncate text-[9px] leading-none text-[#65746d] lg:text-[8px]">
                  {issueDetail(issue)}
                </span>
              </span>
              <TonePill
                label={c.coverage.severity[issue.severity]}
                tone={issue.severity === "high" ? "red" : "amber"}
              />
            </button>
          </li>
        ))}
      </ul>

      <SelectedTeamPanel team={selectedTeam} />
    </TeamsCard>
  );
}
