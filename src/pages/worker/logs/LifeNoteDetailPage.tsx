import { useParams } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { LOGS_COPY } from "./logs.copy";
import { LIFE_NOTES } from "./logsMock";
import { NoteDetailScreen } from "./sections/NoteDetailScreen";

/** Private Life note detail — Figma WD-61P (1187:1188) · delete confirmation
 *  WD-61S3 (1187:2245); mobile W-61P. */
export function LifeNoteDetailPage() {
  const { noteId } = useParams();
  const c = useSectionCopy(LOGS_COPY);

  const note = LIFE_NOTES.find((item) => item.id === noteId);

  return (
    <NoteDetailScreen
      crumb={c.life.title}
      crumbTo="/worker/logs/life"
      title={c.lifeNote.detailTitle}
      subtitle={c.lifeNote.detailSubtitle}
      note={
        note
          ? {
              title: note.title,
              category: note.category,
              date: note.date,
              body: note.body,
            }
          : undefined
      }
      /* WD-61P — CATEGORY | TITLE, privacy line printed under the card. */
      privacyPlacement="below-card"
      privacyTitle={c.life.privacyTitle}
      privacyBody={c.life.privacyBody}
      editTo={`/worker/logs/life/note/${note?.id ?? ""}/edit`}
      deleteBody={c.deleteReview.lifeBody}
      deletedTitle={c.deleted.lifeTitle}
      deletedBody={c.deleted.lifeBody}
      returnTo="/worker/logs/life"
    />
  );
}
