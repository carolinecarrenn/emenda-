import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { ADMINSETTINGS_COPY } from "../settings.copy";
import { PENDING_CHANGES, changeArrow } from "../settings.mock";
import { StateButton, StateField, StateNote, StatePanel } from "./StatePanel";

/* AD-09D "Unsaved settings" (1239:752) — ?state=unsaved.
   The dirty state AD-09C step 02 specifies: the EDITING pill, the three
   pending before/after values, the amber "Unsaved changes" note that spells
   out the Stay / Discard prompt, the Discard + Save changes pair, and the
   inline validation example. */
export function UnsavedSettingsPanel() {
  const c = useSectionCopy(ADMINSETTINGS_COPY);
  const { language } = useLanguage();

  return (
    <StatePanel
      pill={c.unsaved.pill}
      title={c.unsaved.title}
      subtitle={c.unsaved.subtitle}
      footnote={c.unsaved.footnote}
    >
      <StateField
        label={c.unsaved.escalationWindow}
        value={changeArrow(PENDING_CHANGES.escalationWindow)}
      />
      <StateField
        label={c.unsaved.dailyReminder}
        value={changeArrow(PENDING_CHANGES.dailyReminderWithZone)}
      />
      <StateField
        label={c.unsaved.evidenceRequired}
        value={localizeTerm(PENDING_CHANGES.evidenceRequired, language)}
      />
      <StateNote
        tone="amber"
        title={c.unsaved.noteTitle}
        body={c.unsaved.noteBody}
      />
      <div className="flex items-center gap-[24px]">
        <StateButton tone="outline">{c.unsaved.discard}</StateButton>
        <StateButton tone="primary">{c.unsaved.saveChanges}</StateButton>
      </div>
      <StateField
        label={c.unsaved.validationLabel}
        value={c.unsaved.validationBody}
      />
    </StatePanel>
  );
}
