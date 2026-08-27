import { useSectionCopy } from "@/i18n/copy";
import { ADMINTEAMS_COPY } from "../teams.copy";
import { MANAGER_ASSIGNMENTS } from "../teams.mock";
import { PrimaryButton, SecondaryButton, TeamsCard } from "./teamsUi";

/* AD-03 "Manager assignment" (1223:1254): 392x512 white card — a four-column
   table (Manager 154 / Primary team 108 / Members 56 / Status) under a 1px
   #d6e3de rule, five 72px-pitch rows, then the dark-green "Assign manager"
   and outline "Create team" buttons (1223:1282 / 1223:1284).

   Each row opens the AD-03D "Assign / change manager" state (1239:303), the
   frame that changes the owner of an already-owned team. The table keeps its
   four columns at 390 and scrolls horizontally rather than dropping the
   header row. */
export function ManagerAssignmentCard({
  onAssignManager,
  onCreateTeam,
  onChangeManager,
}: {
  onAssignManager: () => void;
  onCreateTeam: () => void;
  onChangeManager: () => void;
}) {
  const c = useSectionCopy(ADMINTEAMS_COPY);

  return (
    <TeamsCard
      title={c.assignment.title}
      subtitle={c.assignment.subtitle}
      className="w-full lg:h-[512px] lg:w-[392px]"
    >
      <div className="mt-[12px] flex-1 overflow-x-auto">
        <div className="min-w-[336px]">
          <div className="grid grid-cols-[1.5fr_1.1fr_0.6fr_0.8fr] gap-[6px] pb-[10px] text-[9px] leading-none font-semibold text-[#65746d] lg:text-[8px]">
            <span>{c.assignment.columns.manager}</span>
            <span>{c.assignment.columns.primaryTeam}</span>
            <span>{c.assignment.columns.members}</span>
            <span>{c.assignment.columns.status}</span>
          </div>
          <div className="h-px w-full bg-[#d6e3de]" />
          <ul>
            {MANAGER_ASSIGNMENTS.map((row) => (
              <li key={row.id}>
                <button
                  type="button"
                  onClick={onChangeManager}
                  className="grid w-full grid-cols-[1.5fr_1.1fr_0.6fr_0.8fr] items-center gap-[6px] rounded-[8px] py-[12px] text-left hover:bg-[#f7faf8] lg:h-[72px] lg:py-0"
                >
                  <span className="truncate text-[10px] font-semibold text-[#17362e] lg:text-[9px]">
                    {row.name}
                  </span>
                  <span className="truncate text-[10px] text-[#65746d] lg:text-[9px]">
                    {row.team}
                  </span>
                  <span className="text-[10px] text-[#65746d] lg:text-[9px]">
                    {row.members}
                  </span>
                  <span className="truncate text-[10px] text-[#65746d] lg:text-[9px]">
                    {c.assignment.status[row.status]}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-[16px] flex items-center gap-[13px]">
        <PrimaryButton
          label={c.assignment.assignManager}
          onClick={onAssignManager}
          className="flex-1 lg:w-[115px] lg:flex-none"
        />
        <SecondaryButton
          label={c.assignment.createTeam}
          onClick={onCreateTeam}
          className="flex-1 lg:w-[94px] lg:flex-none"
        />
      </div>
    </TeamsCard>
  );
}
