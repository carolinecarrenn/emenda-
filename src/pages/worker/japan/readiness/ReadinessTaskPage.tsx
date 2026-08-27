import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import {
  READINESS_COPY,
  READINESS_DETAIL_SLUGS,
  type ReadinessDetailSlug,
} from "./readiness.copy";
import { TASK_DETAIL_COMPLETE, TASK_NOTE_DRAFT } from "./readinessMock";
import { TaskNoteEditor } from "./sections/TaskNoteEditor";
import {
  ConfirmSheet,
  JapanSubPageHeader,
  PrimaryButton,
  SecondaryButton,
} from "./sections/primitives";

/** WD-34G..M task actions are solid green on desktop, outlined on mobile. */
const SOLID_ON_DESKTOP =
  "lg:border-transparent lg:bg-[#08664d] lg:text-white lg:hover:bg-[#0b6b57]";

const NOTE_STATES = new Set([
  "note",
  "note-saving",
  "note-save-failed",
  "note-offline",
  "note-unsaved",
]);

/** Japan readiness per-task detail (Figma WD-34G..M) + private task-note
 *  editor (WD-34F) with its Saving / Save Failed / Offline / Unsaved
 *  Changes states (WD-34N/O/P/Q). */
export function ReadinessTaskPage() {
  const c = useSectionCopy(READINESS_COPY);
  const common = useCommonCopy();
  const state = useScreenState();
  const navigate = useNavigate();
  const { task } = useParams();

  const slug = READINESS_DETAIL_SLUGS.find((s) => s === task) as
    | ReadinessDetailSlug
    | undefined;

  const [complete, setComplete] = useState(
    slug ? TASK_DETAIL_COMPLETE[slug] : false,
  );
  const [noteMode, setNoteMode] = useState(false);
  const [note, setNote] = useState(TASK_NOTE_DRAFT);
  const [noteDirty, setNoteDirty] = useState(false);
  const [showDiscard, setShowDiscard] = useState(false);
  /* Interactive counterpart of ?state=note-saving (W-34N): "Save note" holds
     the button in its Saving… label before the editor closes. */
  const [savingNote, setSavingNote] = useState(false);

  if (!slug) return <Navigate to="/worker/japan/readiness" replace />;

  const detail = c.details[slug];
  const noteState = state !== null && NOTE_STATES.has(state) ? state : null;
  const inNoteView = noteState !== null || noteMode;
  const basePath = `/worker/japan/readiness/${slug}`;

  const closeNote = () => {
    setNoteMode(false);
    setShowDiscard(false);
    setSavingNote(false);
    setNote(TASK_NOTE_DRAFT);
    setNoteDirty(false);
    if (noteState) navigate(basePath);
  };

  /* W-34N Note Saving → back to the task detail once the note is stored. */
  const handleSaveNote = () => {
    if (savingNote) return;
    setSavingNote(true);
    window.setTimeout(closeNote, 800);
  };

  const keepEditingNote = () => {
    setShowDiscard(false);
    if (noteState === "note-unsaved") {
      setNoteMode(true);
      navigate(basePath);
    }
  };

  const handleCancelNote = () => {
    if (noteDirty) {
      setShowDiscard(true);
      return;
    }
    closeNote();
  };

  const saveLabel =
    noteState === "note-saving" || savingNote
      ? c.savingEllipsis
      : noteState === "note-save-failed"
        ? c.trySavingAgain
        : noteState === "note-offline"
          ? c.saveWhenOnline
          : c.saveNote;

  if (inNoteView) {
    /* WD-34F Task note editor view (sub-pages drop chrome on mobile and
       lead with the green back link, per the W-xx mocks). */
    return (
      <div className="max-w-[1080px] pt-[20px] lg:pt-0">
        <JapanSubPageHeader
          backLabel={c.japanPreparation}
          title={c.noteTitle}
          subtitle={
            noteState === "note-offline"
              ? c.noteSubtitleOffline
              : noteState === "note-saving"
                ? c.noteSubtitleSaving
                : c.noteSubtitle
          }
          onBackClick={(event) => {
            if (noteDirty) {
              /* W-34Q — leaving an edited note asks before discarding. */
              event.preventDefault();
              setShowDiscard(true);
            }
          }}
        />
        <div className="mt-[24px] lg:mt-[18px]">
          <TaskNoteEditor
            label={c.noteLabel}
            note={note}
            onNoteChange={(value) => {
              setNote(value);
              setNoteDirty(true);
            }}
            saveLabel={saveLabel}
            saving={
              noteState === "note-saving" ||
              noteState === "note-offline" ||
              savingNote
            }
            cancelLabel={common.action.cancel}
            onSave={handleSaveNote}
            onCancel={handleCancelNote}
          />
        </div>
        {(noteState === "note-unsaved" || showDiscard) && (
          <ConfirmSheet
            title={c.discardNoteTitle}
            body={<p>{c.discardNoteBody}</p>}
            primaryLabel={c.keepEditing}
            secondaryLabel={c.discardChanges}
            onPrimary={keepEditingNote}
            onSecondary={closeNote}
          />
        )}
      </div>
    );
  }

  /* WD-34G..M task detail: white card with task sentence, guidance line and
     STATUS rows; primary actions swap with completion state. */
  return (
    <div className="max-w-[1080px] pt-[20px] lg:pt-0">
      <JapanSubPageHeader
        backLabel={c.japanPreparation}
        title={detail.pageTitle}
        subtitle={c.detailSubtitle}
      />
      {/* Mobile (Figma 637:74): 190px card with the STATUS row split
          label-left / value-right, then two white outline actions. */}
      <div className="mt-[18px] grid gap-y-[12px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[24px]">
        <div className="min-h-[190px] rounded-[14px] border border-[#d5e0db] bg-white px-[15px] py-[15px] lg:min-h-[118px] lg:pb-[3px]">
          <p className="text-[15px] leading-[22px] font-semibold text-[#131f1a]">
            {detail.title}
          </p>
          <p className="mt-[10px] text-[12px] leading-[22px] text-[#5e7066] lg:mt-[6px] lg:text-[13px]">
            {detail.body}
          </p>
          <div className="mt-[14px] flex items-baseline justify-between gap-[12px] lg:mt-[2px] lg:block">
            <p className="text-[10px] leading-[16px] font-semibold tracking-[0.05em] text-[#5e7066] uppercase lg:text-[13px] lg:leading-[22px] lg:font-normal lg:tracking-normal">
              {c.statusLabel}
            </p>
            <p className="text-right text-[12px] leading-[18px] text-[#131f1a] lg:mt-[2px] lg:text-left lg:text-[13px] lg:leading-[22px] lg:text-[#5e7066]">
              {complete ? c.statusComplete : c.statusNeedsAction}
            </p>
          </div>
        </div>
        {/* WD-34G..M put Add note in the right column of a completed task
            and the completion toggle underneath; mobile keeps the toggle
            first, so the pair only swaps at lg. */}
        <div className={`mt-[12px] lg:mt-0 ${complete ? "lg:order-2" : ""}`}>
          {/* W-34J keeps the completion action solid until the task is
              done; W-34H turns it into the white "Mark not complete". */}
          {complete ? (
            <SecondaryButton
              label={c.markNotComplete}
              onClick={() => setComplete(false)}
              className={SOLID_ON_DESKTOP}
            />
          ) : (
            <PrimaryButton
              label={c.markComplete}
              onClick={() => setComplete(true)}
            />
          )}
        </div>
        <SecondaryButton
          label={c.addNote}
          onClick={() => setNoteMode(true)}
          className={`${complete ? "lg:order-1" : ""} ${SOLID_ON_DESKTOP}`}
        />
      </div>
    </div>
  );
}
