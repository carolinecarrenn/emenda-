import { useSectionCopy } from "@/i18n/copy";
import { ADMINTEAMS_COPY } from "../teams.copy";
import { REASSIGN_EMPLOYEES_DRAFT } from "../teams.mock";
import { TeamsDialog } from "./TeamsDialog";
import { PrimaryButton, ReadOnlyField, SecondaryButton } from "./teamsUi";
import { fill } from "./teamsTokens";

/* AD-03B "Reassign employees" (1226:80): 326x420 white panel — 16px bold
   title over the 9px "Move selected employees to a new team without losing
   history." line, the Employees / New team / New manager fields, and the
   Back / "Confirm move" pair (1226:92 / 1226:94). */
export function ReassignEmployeesDialog({ onClose }: { onClose: () => void }) {
  const c = useSectionCopy(ADMINTEAMS_COPY);

  return (
    <TeamsDialog
      labelledBy="reassign-employees-title"
      onClose={onClose}
      widthClass="lg:w-[326px]"
    >
      <h2
        id="reassign-employees-title"
        className="text-[16px] leading-none font-bold text-[#17362e]"
      >
        {c.reassignDialog.title}
      </h2>
      <p className="mt-[10px] text-[10px] leading-[14px] text-[#65746d] lg:text-[9px]">
        {c.reassignDialog.subtitle}
      </p>

      <div className="mt-[20px] flex flex-col gap-[14px]">
        <ReadOnlyField
          label={c.reassignDialog.employees}
          value={fill(c.reassignDialog.selected, {
            count: REASSIGN_EMPLOYEES_DRAFT.selectedCount,
          })}
        />
        <ReadOnlyField
          label={c.reassignDialog.newTeam}
          value={REASSIGN_EMPLOYEES_DRAFT.newTeam}
        />
        <ReadOnlyField
          label={c.reassignDialog.newManager}
          value={REASSIGN_EMPLOYEES_DRAFT.newManager}
        />
      </div>

      <div className="mt-[36px] flex items-center gap-[27px]">
        <SecondaryButton
          label={c.reassignDialog.back}
          onClick={onClose}
          className="flex-1 lg:w-[55px] lg:flex-none"
        />
        <PrimaryButton
          label={c.reassignDialog.confirmMove}
          onClick={onClose}
          className="flex-1 lg:w-[103px] lg:flex-none"
        />
      </div>
    </TeamsDialog>
  );
}
