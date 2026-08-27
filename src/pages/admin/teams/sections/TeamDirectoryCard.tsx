import { useSectionCopy } from "@/i18n/copy";
import { ADMINTEAMS_COPY } from "../teams.copy";
import { DIRECTORY_TEAMS } from "../teams.mock";
import { TeamsCard, TonePill } from "./teamsUi";
import { fill } from "./teamsTokens";

/* AD-03 "Team directory" (1223:1231): 352x512 white card — six 48px #f7faf8
   rows (radius 9) carrying "<team> · <n> members" in 9px semibold #17362e
   over the 8px "Manager: <name>" line. The unassigned pool row ends in the
   mint "No owner" pill (1223:1252).

   The card feeds the "Selected team" panel of AD-03 (1223:1304), so each row
   is the real control that selects a team. */
export function TeamDirectoryCard({
  selectedTeamId,
  onSelectTeam,
}: {
  selectedTeamId: string;
  onSelectTeam: (teamId: string) => void;
}) {
  const c = useSectionCopy(ADMINTEAMS_COPY);

  return (
    <TeamsCard
      title={c.directory.title}
      subtitle={c.directory.subtitle}
      className="w-full lg:h-[512px] lg:w-[352px]"
    >
      <ul className="mt-[12px] flex flex-col gap-[20px]">
        {DIRECTORY_TEAMS.map((team) => {
          const selected = team.id === selectedTeamId;
          return (
            <li key={team.id}>
              <button
                type="button"
                aria-pressed={selected}
                aria-label={`${c.directory.selectTeam}: ${team.name}`}
                onClick={() => onSelectTeam(team.id)}
                className={`flex h-[48px] w-full items-center gap-[10px] rounded-[9px] px-[12px] text-left ${
                  selected
                    ? "bg-[#e8f5f0] ring-1 ring-[#083d2d]"
                    : "bg-[#f7faf8] hover:bg-[#eef4f1]"
                }`}
              >
                <span className="flex min-w-0 flex-1 flex-col gap-[4px]">
                  <span className="truncate text-[10px] leading-none font-semibold text-[#17362e] lg:text-[9px]">
                    {team.name} ·{" "}
                    {fill(c.directory.members, { count: team.members })}
                  </span>
                  <span className="truncate text-[9px] leading-none text-[#65746d] lg:text-[8px]">
                    {team.manager === null
                      ? c.directory.noManager
                      : fill(c.directory.manager, { name: team.manager })}
                  </span>
                </span>
                {team.manager === null ? (
                  <TonePill label={c.directory.noOwner} tone="mint" />
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </TeamsCard>
  );
}
