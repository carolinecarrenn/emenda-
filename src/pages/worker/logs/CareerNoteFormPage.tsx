import { useParams } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { LOGS_COPY } from "./logs.copy";
import { EMPTY_NOTE_DRAFT, WORK_RECORDS } from "./logsMock";
import { NoteFormScreen } from "./sections/NoteFormScreen";

/** Add / Edit career note — Figma W-61H (1167:405) and W-61I (1167:450) ·
 *  save failed W-61T · offline draft W-61AN · unsaved changes W-61AA / AB.
 *  TITLE + CATEGORY + NOTE; the add frame closes with the mint PRIVAT card,
 *  the edit frame drops it and carries the privacy sentence in its lead line. */
export function CareerNoteFormPage() {
  const { noteId } = useParams();
  const c = useSectionCopy(LOGS_COPY);

  const record = WORK_RECORDS.find((item) => item.id === noteId);
  const isEdit = record !== undefined;

  return (
    <NoteFormScreen
      crumb={c.work.title}
      crumbTo="/worker/logs/work"
      title={isEdit ? c.careerNote.editTitle : c.careerNote.addTitle}
      draftTitle={c.careerNote.draftTitle}
      subtitle={isEdit ? c.careerNote.editSubtitle : c.careerNote.addSubtitle}
      notePlaceholder={c.careerNote.notePlaceholder}
      fields={[
        {
          label: c.noteForm.titleLabel,
          placeholder: c.noteForm.titlePlaceholder,
          initial: record?.title ?? EMPTY_NOTE_DRAFT.title,
        },
        {
          label: c.noteForm.categoryLabel,
          placeholder: c.noteForm.categoryPlaceholder,
          initial: record?.category ?? EMPTY_NOTE_DRAFT.category,
        },
      ]}
      initialBody={record?.body ?? EMPTY_NOTE_DRAFT.body}
      privacyTitle={isEdit ? undefined : c.noteForm.privacyTitle}
      privacyBody={isEdit ? undefined : c.noteForm.privacyBody}
      isEdit={isEdit}
      returnTo="/worker/logs/work"
    />
  );
}
