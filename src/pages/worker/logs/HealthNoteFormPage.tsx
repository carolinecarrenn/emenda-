import { useParams } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { TODAY } from "@/data/caregiverReport";
import { LOGS_COPY } from "./logs.copy";
import { EMPTY_NOTE_DRAFT, HEALTH_ENTRIES } from "./logsMock";
import { NoteFormScreen } from "./sections/NoteFormScreen";

/** Add / Edit health note — Figma W-61L (1167:568) and WD-61L1 (1187:2017) ·
 *  offline draft W-61AO · unsaved changes W-61AC / AD. The health form is
 *  captioned TYPE · DATE (not TITLE · CATEGORY) and keeps its "PRIVAT BY
 *  DEFAULT" card on both the add and the edit frame. */
export function HealthNoteFormPage() {
  const { noteId } = useParams();
  const c = useSectionCopy(LOGS_COPY);
  const { language } = useLanguage();

  const entry = HEALTH_ENTRIES.find(
    (item) => item.id === noteId && item.kind === "note",
  );
  const isEdit = entry !== undefined;

  return (
    <NoteFormScreen
      crumb={c.health.title}
      crumbTo="/worker/logs/health"
      title={isEdit ? c.healthNote.editTitle : c.healthNote.addTitle}
      draftTitle={c.healthNote.draftTitle}
      subtitle={isEdit ? c.healthNote.editSubtitle : c.healthNote.addSubtitle}
      notePlaceholder={c.healthNote.notePlaceholder}
      fields={[
        {
          label: c.healthNote.typeLabel,
          placeholder: c.healthNote.typePlaceholder,
          initial: entry?.category ?? EMPTY_NOTE_DRAFT.category,
        },
        {
          label: c.noteForm.dateLabel,
          placeholder: formatDisplayDate(TODAY, language),
          initial: formatDisplayDate(entry?.date ?? TODAY, language),
        },
      ]}
      initialBody={entry?.body ?? EMPTY_NOTE_DRAFT.body}
      privacyTitle={c.healthNote.privacyTitle}
      privacyBody={c.healthNote.privacyBody}
      isEdit={isEdit}
      returnTo="/worker/logs/health"
    />
  );
}
