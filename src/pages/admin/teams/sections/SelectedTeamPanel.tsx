import { useSectionCopy } from "@/i18n/copy";
import { ADMINTEAMS_COPY } from "../teams.copy";
import type { DirectoryTeam } from "../teams.mock";
import { fill } from "./teamsTokens";

/* AD-03 "Selected team" panel (1223:1304): 336x244 #f7faf8 block, radius 10 —
   the 10px semibold label, the 18px bold team name, the "<n> members ·
   <n> manager · <n> open reports" meta line, then "Top actions" over three
   7px-dot bullets. Its content follows the row selected in the Team
   directory card. */
export function SelectedTeamPanel({ team }: { team: DirectoryTeam }) {
  const c = useSectionCopy(ADMINTEAMS_COPY);

  const actions = [
    fill(c.selected.actions.movePool, { count: team.movePoolCount }),
    c.selected.actions.addBackup,
    fill(c.selected.actions.reviewOverdue, { count: team.overdueFollowUps }),
  ];

  return (
    <div className="mt-[8px] rounded-[10px] bg-[#f7faf8] p-[12px] lg:h-[244px]">
      <p className="text-[10px] leading-none font-semibold text-[#65746d]">
        {c.selected.label}
      </p>
      <p className="mt-[10px] text-[18px] leading-none font-bold text-[#17362e]">
        {team.name}
      </p>
      <p className="mt-[10px] text-[10px] leading-[14px] text-[#65746d]">
        {fill(c.selected.meta, {
          members: team.members,
          managers: team.manager === null ? 0 : 1,
          reports: team.openReports,
        })}
      </p>
      <p className="mt-[18px] text-[10px] leading-none font-semibold text-[#65746d]">
        {c.selected.topActions}
      </p>
      <ul className="mt-[12px] flex flex-col gap-[14px]">
        {actions.map((action) => (
          <li key={action} className="flex items-start gap-[9px]">
            <span className="mt-[3px] size-[7px] shrink-0 rounded-full bg-[#083d2d]" />
            <span className="text-[10px] leading-[13px] text-[#17362e] lg:text-[9px]">
              {action}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
