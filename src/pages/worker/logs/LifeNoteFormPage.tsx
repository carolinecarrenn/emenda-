import { useParams } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { LOGS_COPY } from "./logs.copy";
import { EMPTY_NOTE_DRAFT, LIFE_NOTES } from "./logsMock";
import { NoteFormScreen } from "./sections/NoteFormScreen";

/** Add / Edit private life note — Figma W-61Q (1167:791) and W-61R (1167:836) ·
 *  offline draft W-61AP · unsaved changes W-61AE / AF. The Private Life form
 *  leads with CATEGORY and closes with the "ONLY YOU" card on the add frame;
 *  the edit frame drops the card. */
export function LifeNoteFormPage() {
  const { noteId } = useParams();
  const c = useSectionCopy(LOGS_COPY);

  const note = LIFE_NOTES.find((item) => item.id === noteId);
  const isEdit = note !== undefined;

  return (
    <NoteFormScreen
      crumb={c.life.title}
      crumbTo="/worker/logs/life"
      title={isEdit ? c.lifeNote.editTitle : c.lifeNote.addTitle}
      draftTitle={c.lifeNote.draftTitle}
      subtitle={isEdit ? c.lifeNote.editSubtitle : c.lifeNote.addSubtitle}
      notePlaceholder={c.lifeNote.notePlaceholder}
      fields={[
        {
          label: c.noteForm.categoryLabel,
          placeholder: c.noteForm.categoryPlaceholder,
          initial: note?.category ?? EMPTY_NOTE_DRAFT.category,
        },
        {
          label: c.noteForm.titleLabel,
          placeholder: c.noteForm.titlePlaceholder,
          initial: note?.title ?? EMPTY_NOTE_DRAFT.title,
        },
      ]}
      initialBody={note?.body ?? EMPTY_NOTE_DRAFT.body}
      privacyTitle={isEdit ? undefined : c.lifeNote.privacyTitle}
      privacyBody={isEdit ? undefined : c.life.privacyBody}
      isEdit={isEdit}
      returnTo="/worker/logs/life"
    />
  );
}
