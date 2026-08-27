import { useParams } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { LOGS_COPY } from "./logs.copy";
import { HEALTH_ENTRIES } from "./logsMock";
import { NoteDetailScreen } from "./sections/NoteDetailScreen";

/** Health note detail — Figma WD-61K (1187:887) · delete confirmation WD-61S2
 *  (1187:2189) · offline W-61 health offline; mobile W-61K. */
export function HealthNoteDetailPage() {
  const { noteId } = useParams();
  const c = useSectionCopy(LOGS_COPY);
  const { language } = useLanguage();

  const entry = HEALTH_ENTRIES.find(
    (item) => item.id === noteId && item.kind === "note",
  );

  return (
    <NoteDetailScreen
      crumb={c.health.title}
      crumbTo="/worker/logs/health"
      title={c.healthNote.detailTitle}
      subtitle={c.healthNote.detailSubtitle}
      note={
        entry
          ? {
              title: entry.title,
              category: entry.category ?? "",
              date: entry.date,
              body: entry.body ?? "",
            }
          : undefined
      }
      /* WD-61K — TYPE | DATE above the note, privacy sentence unlabelled. */
      fields={[
        { label: c.healthNote.typeLabel, value: entry?.category ?? "" },
        {
          label: c.noteForm.dateLabel,
          value: formatDisplayDate(entry?.date ?? "", language),
        },
      ]}
      showTimestampsOnDesktop={false}
      privacyTitle={c.health.privacyTitle}
      privacyBody={c.healthNote.detailPrivacyBody}
      editTo={`/worker/logs/health/note/${entry?.id ?? ""}/edit`}
      deleteBody={c.deleteReview.healthBody}
      deletedTitle={c.deleted.healthTitle}
      deletedBody={c.deleted.healthBody}
      returnTo="/worker/logs/health"
    />
  );
}
