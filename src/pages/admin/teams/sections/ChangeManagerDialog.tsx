import { useSectionCopy } from "@/i18n/copy";
import { ADMINTEAMS_COPY } from "../teams.copy";
import { CHANGE_MANAGER_DRAFT } from "../teams.mock";
import { TeamsDialog } from "./TeamsDialog";
import { NoteBlock, PrimaryButton, ReadOnlyField, SecondaryButton } from "./teamsUi";
import { fill } from "./teamsTokens";

/* AD-03D "Assign / change manager" (1239:303): 760x720 white panel — the
   ASSIGN pill, 19px title over its subtitle, the Team / Current manager /
   New manager fields, the amber "Capacity warning" note (1239:317), the
   "Effective from" field, the Cancel / "Assign anyway" pair and the footnote
   about history retention. */
export function ChangeManagerDialog({ onClose }: { onClose: () => void }) {
  const c = useSectionCopy(ADMINTEAMS_COPY);

  return (
    <TeamsDialog
      labelledBy="change-manager-title"
      onClose={onClose}
      widthClass="lg:w-[760px]"
    >
      <span className="inline-flex h-[24px] items-center rounded-[12px] bg-[#e8f5f0] px-[9px] text-[10px] leading-none font-semibold text-[#083d2d]">
        {c.changeManagerDialog.pill}
      </span>
      <h2
        id="change-manager-title"
        className="mt-[16px] text-[19px] leading-none font-semibold text-[#17362e]"
      >
        {c.changeManagerDialog.title}
      </h2>
      <p className="mt-[10px] text-[11px] leading-none text-[#65746d]">
        {c.changeManagerDialog.subtitle}
      </p>

      <div className="mt-[24px] flex flex-col gap-[15px]">
        <ReadOnlyField
          label={c.changeManagerDialog.team}
          value={fill(c.changeManagerDialog.teamValue, {
            team: CHANGE_MANAGER_DRAFT.team,
            count: CHANGE_MANAGER_DRAFT.teamMembers,
          })}
          variant="tonal"
        />
        <ReadOnlyField
          label={c.changeManagerDialog.currentManager}
          value={CHANGE_MANAGER_DRAFT.currentManager}
          variant="tonal"
        />
        <ReadOnlyField
          label={c.changeManagerDialog.newManager}
          value={CHANGE_MANAGER_DRAFT.newManager}
          variant="tonal"
        />
      </div>

      <div className="mt-[15px]">
        <NoteBlock
          tone="amber"
          title={c.changeManagerDialog.capacityWarning}
          lines={[
            fill(c.changeManagerDialog.capacityBody, {
              name: CHANGE_MANAGER_DRAFT.newManagerShortName,
              count: CHANGE_MANAGER_DRAFT.workersAfterAssignment,
              limit: CHANGE_MANAGER_DRAFT.companyThreshold,
            }),
          ]}
        />
      </div>

      <div className="mt-[15px]">
        <ReadOnlyField
          label={c.changeManagerDialog.effectiveFrom}
          value={c.changeManagerDialog.effectiveFromValue}
          variant="tonal"
        />
      </div>

      <div className="mt-[14px] flex items-center gap-[24px]">
        <SecondaryButton
          label={c.changeManagerDialog.cancel}
          onClick={onClose}
          className="h-[34px] flex-1 rounded-[8px] text-[#17362e] lg:w-[86px] lg:flex-none"
        />
        <PrimaryButton
          label={c.changeManagerDialog.assignAnyway}
          onClick={onClose}
          className="h-[34px] flex-1 rounded-[8px] lg:w-[119px] lg:flex-none"
        />
      </div>

      <p className="mt-[24px] text-[10px] leading-[14px] text-[#65746d]">
        {c.changeManagerDialog.footnote}
      </p>
    </TeamsDialog>
  );
}
