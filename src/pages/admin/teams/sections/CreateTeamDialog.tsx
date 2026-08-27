import { useSectionCopy } from "@/i18n/copy";
import { ADMIN_ORG } from "../../admin.mock";
import { ADMINTEAMS_COPY } from "../teams.copy";
import { CREATE_TEAM_DRAFT } from "../teams.mock";
import { TeamsDialog } from "./TeamsDialog";
import { NoteBlock, PrimaryButton, ReadOnlyField, SecondaryButton } from "./teamsUi";
import { fill } from "./teamsTokens";

/* AD-03D "Create team" (1239:278): 760x720 white panel — the CREATE TEAM
   pill, 19px title over its 11px subtitle, four tonal 42px fields (Team name
   * / Purpose / Primary manager / Initial members), the red "Name validation"
   note (1239:295), the Cancel / "Create team" pair and the 10px footnote. */
export function CreateTeamDialog({ onClose }: { onClose: () => void }) {
  const c = useSectionCopy(ADMINTEAMS_COPY);

  return (
    <TeamsDialog
      labelledBy="create-team-title"
      onClose={onClose}
      widthClass="lg:w-[760px]"
    >
      <span className="inline-flex h-[24px] items-center rounded-[12px] bg-[#e8f5f0] px-[9px] text-[10px] leading-none font-semibold text-[#083d2d]">
        {c.createDialog.pill}
      </span>
      <h2
        id="create-team-title"
        className="mt-[16px] text-[19px] leading-none font-semibold text-[#17362e]"
      >
        {c.createDialog.title}
      </h2>
      <p className="mt-[10px] text-[11px] leading-none text-[#65746d]">
        {c.createDialog.subtitle}
      </p>

      <div className="mt-[24px] flex flex-col gap-[15px]">
        <ReadOnlyField
          label={c.createDialog.teamName}
          value={CREATE_TEAM_DRAFT.name}
          variant="tonal"
        />
        <ReadOnlyField
          label={c.createDialog.purpose}
          value={CREATE_TEAM_DRAFT.purpose}
          variant="tonal"
        />
        <ReadOnlyField
          label={c.createDialog.primaryManager}
          value={c.createDialog.primaryManagerValue}
          variant="tonal"
        />
        <ReadOnlyField
          label={c.createDialog.initialMembers}
          value={fill(c.createDialog.initialMembersValue, {
            count: CREATE_TEAM_DRAFT.initialMemberCount,
          })}
          variant="tonal"
        />
      </div>

      <div className="mt-[15px]">
        <NoteBlock
          tone="red"
          title={c.createDialog.noteTitle}
          lines={[fill(c.createDialog.noteBody, { org: ADMIN_ORG })]}
        />
      </div>

      <div className="mt-[14px] flex items-center gap-[24px]">
        <SecondaryButton
          label={c.createDialog.cancel}
          onClick={onClose}
          className="h-[34px] flex-1 rounded-[8px] text-[#17362e] lg:w-[86px] lg:flex-none"
        />
        <PrimaryButton
          label={c.createDialog.createTeam}
          onClick={onClose}
          className="h-[34px] flex-1 rounded-[8px] lg:w-[105px] lg:flex-none"
        />
      </div>

      <p className="mt-[24px] text-[10px] leading-[14px] text-[#65746d]">
        {c.createDialog.footnote}
      </p>
    </TeamsDialog>
  );
}
