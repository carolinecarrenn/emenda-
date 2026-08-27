import { useSectionCopy } from "@/i18n/copy";
import { ADMINTEAMS_COPY } from "../teams.copy";
import { ASSIGN_MANAGER_DRAFT } from "../teams.mock";
import { TeamsDialog } from "./TeamsDialog";
import { NoteBlock, PrimaryButton, ReadOnlyField, SecondaryButton } from "./teamsUi";
import { fill } from "./teamsTokens";

/* AD-03B "Assign manager" (1226:61): 322x560 white panel — 16px bold title,
   the Team / Primary manager / Backup manager fields (36px, radius 10, 1px
   #d6e3de), the amber "Capacity warning" block (1226:72) and the Cancel /
   "Assign anyway" pair. The frame keeps the primary action enabled: the
   warning informs, it does not block. */
export function AssignManagerDialog({ onClose }: { onClose: () => void }) {
  const c = useSectionCopy(ADMINTEAMS_COPY);

  return (
    <TeamsDialog
      labelledBy="assign-manager-title"
      onClose={onClose}
      widthClass="lg:w-[322px]"
    >
      <h2
        id="assign-manager-title"
        className="text-[16px] leading-none font-bold text-[#17362e]"
      >
        {c.assignDialog.title}
      </h2>

      <div className="mt-[24px] flex flex-col gap-[14px]">
        <ReadOnlyField
          label={c.assignDialog.team}
          value={ASSIGN_MANAGER_DRAFT.team}
        />
        <ReadOnlyField
          label={c.assignDialog.primaryManager}
          value={ASSIGN_MANAGER_DRAFT.primaryManager}
        />
        <ReadOnlyField
          label={c.assignDialog.backupManager}
          value={c.assignDialog.selectBackup}
        />
      </div>

      <div className="mt-[20px]">
        <NoteBlock
          tone="amber"
          title={c.assignDialog.capacityWarning}
          lines={[
            fill(c.assignDialog.capacityLine, {
              name: ASSIGN_MANAGER_DRAFT.primaryManagerShortName,
              count: ASSIGN_MANAGER_DRAFT.workersAfterAssignment,
            }),
            fill(c.assignDialog.recommendedLimit, {
              limit: ASSIGN_MANAGER_DRAFT.recommendedLimit,
            }),
          ]}
        />
      </div>

      <div className="mt-[24px] flex items-center gap-[27px]">
        <SecondaryButton
          label={c.assignDialog.cancel}
          onClick={onClose}
          className="flex-1 lg:w-[65px] lg:flex-none"
        />
        <PrimaryButton
          label={c.assignDialog.assignAnyway}
          onClick={onClose}
          className="flex-1 lg:w-[108px] lg:flex-none"
        />
      </div>
    </TeamsDialog>
  );
}
