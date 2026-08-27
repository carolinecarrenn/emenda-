import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINEMPLOYEES_COPY } from "../employees.copy";
import { INVITE_DRAFT } from "../employees.mock";
import {
  OperationalPanel,
  PanelButton,
  PanelField,
  PanelFootnote,
  PanelHeader,
  PanelNote,
} from "./OperationalPanel";

/* AD-02D "Invite employee form" (1239:200): the INVITE panel — four read-back
   fields (Full name * / Email * / Role * / Team · Manager), the pink
   #fcebe8 "Duplicate email validation" note, the outlined "Cancel" (86x34)
   beside the filled #0a5740 "Send invite" (105x34), and the success footnote
   at the foot of the 720px panel. */
export function InviteEmployeeForm({
  onCancel,
  onSendInvite,
}: {
  onCancel: () => void;
  onSendInvite: () => void;
}) {
  const c = useSectionCopy(ADMINEMPLOYEES_COPY);
  const { language } = useLanguage();

  return (
    <OperationalPanel>
      <PanelHeader
        pill={c.inviteForm.pill}
        title={c.inviteForm.title}
        subtitle={c.inviteForm.subtitle}
      />

      <div className="mt-[33px] flex flex-col gap-[15px]">
        <PanelField
          label={c.inviteForm.fullName}
          value={INVITE_DRAFT.fullName}
        />
        <PanelField label={c.inviteForm.email} value={INVITE_DRAFT.email} />
        <PanelField
          label={c.inviteForm.role}
          value={`${localizeTerm(INVITE_DRAFT.role, language)} · ${c.inviteForm.roleNote}`}
        />
        <PanelField
          label={c.inviteForm.teamManager}
          value={`${localizeTerm(INVITE_DRAFT.team, language)} · ${c.inviteForm.teamNote}`}
        />
      </div>

      <div className="mt-[14px]">
        <PanelNote
          tone="red"
          title={c.inviteForm.noteTitle}
          body={c.inviteForm.noteBody}
        />
      </div>

      <div className="mt-[14px] flex flex-wrap items-center gap-[24px]">
        <PanelButton
          tone="ghost"
          label={c.inviteForm.cancel}
          onClick={onCancel}
        />
        <PanelButton
          tone="primary"
          label={c.inviteForm.sendInvite}
          onClick={onSendInvite}
        />
      </div>

      <PanelFootnote>{c.inviteForm.outcome}</PanelFootnote>
    </OperationalPanel>
  );
}
