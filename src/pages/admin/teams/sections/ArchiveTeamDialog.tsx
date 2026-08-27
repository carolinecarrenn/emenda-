import { useSectionCopy } from "@/i18n/copy";
import { ADMINTEAMS_COPY } from "../teams.copy";
import { ARCHIVE_TEAM_DRAFT } from "../teams.mock";
import { TeamsDialog } from "./TeamsDialog";
import { DangerButton, NoteBlock, ReadOnlyField, SecondaryButton } from "./teamsUi";
import { fill } from "./teamsTokens";

/* AD-03D "Archive team" (1239:328): 760x720 white panel — the ARCHIVE pill,
   19px title over "Only when ownership is safe", the Team field, the red
   "Blocked" note (1239:336), the "Move members to" and "Open report owner"
   fields, the "Review dependencies" / "Archive team" pair (1239:345 /
   1239:347), the blue "After archive" note (1239:349) and the footnote about
   reversibility. */
export function ArchiveTeamDialog({ onClose }: { onClose: () => void }) {
  const c = useSectionCopy(ADMINTEAMS_COPY);

  return (
    <TeamsDialog
      labelledBy="archive-team-title"
      onClose={onClose}
      widthClass="lg:w-[760px]"
    >
      <span className="inline-flex h-[24px] items-center rounded-[12px] bg-[#e8f5f0] px-[9px] text-[10px] leading-none font-semibold text-[#083d2d]">
        {c.archiveDialog.pill}
      </span>
      <h2
        id="archive-team-title"
        className="mt-[16px] text-[19px] leading-none font-semibold text-[#17362e]"
      >
        {c.archiveDialog.title}
      </h2>
      <p className="mt-[10px] text-[11px] leading-none text-[#65746d]">
        {c.archiveDialog.subtitle}
      </p>

      <div className="mt-[24px]">
        <ReadOnlyField
          label={c.archiveDialog.team}
          value={fill(c.archiveDialog.teamValue, {
            team: ARCHIVE_TEAM_DRAFT.team,
            count: ARCHIVE_TEAM_DRAFT.teamMembers,
          })}
          variant="tonal"
        />
      </div>

      <div className="mt-[15px]">
        <NoteBlock
          tone="red"
          title={c.archiveDialog.blockedTitle}
          lines={[
            fill(c.archiveDialog.blockedBody, {
              members: ARCHIVE_TEAM_DRAFT.activeMembers,
              reports: ARCHIVE_TEAM_DRAFT.openReports,
            }),
          ]}
        />
      </div>

      <div className="mt-[15px] flex flex-col gap-[15px]">
        <ReadOnlyField
          label={c.archiveDialog.moveMembersTo}
          value={ARCHIVE_TEAM_DRAFT.moveMembersTo}
          variant="tonal"
        />
        <ReadOnlyField
          label={c.archiveDialog.openReportOwner}
          value={fill(c.archiveDialog.openReportOwnerValue, {
            name: ARCHIVE_TEAM_DRAFT.openReportOwner,
          })}
          variant="tonal"
        />
      </div>

      <div className="mt-[15px] flex items-center gap-[16px]">
        <SecondaryButton
          label={c.archiveDialog.reviewDependencies}
          onClick={onClose}
          className="h-[34px] flex-1 rounded-[8px] text-[#17362e] lg:w-[161px] lg:flex-none"
        />
        <DangerButton
          label={c.archiveDialog.archiveTeam}
          onClick={onClose}
          className="flex-1 lg:w-[112px] lg:flex-none"
        />
      </div>

      <div className="mt-[16px]">
        <NoteBlock
          tone="blue"
          title={c.archiveDialog.afterArchiveTitle}
          lines={[c.archiveDialog.afterArchiveBody]}
        />
      </div>

      <p className="mt-[24px] text-[10px] leading-[14px] text-[#65746d]">
        {c.archiveDialog.footnote}
      </p>
    </TeamsDialog>
  );
}
