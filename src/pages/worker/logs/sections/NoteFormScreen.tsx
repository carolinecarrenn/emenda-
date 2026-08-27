import { useState, type MouseEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { LOGS_COPY } from "../logs.copy";
import { ConfirmModal } from "./ConfirmModal";
import { HeadlessNoteStrip } from "./HeadlessNoteStrip";
import { InfoCard } from "./InfoCard";
import { LogsHeader } from "./LogsHeader";
import { NoteForm } from "./NoteForm";
import { SaveFailedScreen } from "./SaveFailedScreen";
import { StateBanner } from "./StateBanner";

export interface NoteFormFieldSeed {
  label: string;
  placeholder: string;
  initial: string;
}

interface NoteFormScreenProps {
  crumb: string;
  crumbTo: string;
  /** W-61H / 61I header title. */
  title: string;
  /** W-61AN / AO / AP replace the header title while the note is a draft. */
  draftTitle: string;
  subtitle: string;
  notePlaceholder: string;
  initialBody: string;
  /** The two captioned inputs above NOTE, in frame order. */
  fields: [NoteFormFieldSeed, NoteFormFieldSeed];
  /** Mint privacy card — only the add frames carry one. */
  privacyTitle?: string;
  privacyBody?: string;
  /** W-61I / 61R say "Save changes" instead of "Save note". */
  isEdit?: boolean;
  /** Where Save / Cancel / discard return to. */
  returnTo: string;
}

/* Shared add + edit note screen behind W-61H / 61I (career), W-61L / 61L1
   (health) and W-61Q / 61R (life): the note form plus its offline-draft
   notice (W-61AN), save-failed review (W-61T) and unsaved-changes guard
   (W-61AA–AF). */
export function NoteFormScreen({
  crumb,
  crumbTo,
  title,
  draftTitle,
  subtitle,
  notePlaceholder,
  initialBody,
  fields,
  privacyTitle,
  privacyBody,
  isEdit = false,
  returnTo,
}: NoteFormScreenProps) {
  const state = useScreenState();
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const c = useSectionCopy(LOGS_COPY);

  const [first, setFirst] = useState(fields[0].initial);
  const [second, setSecond] = useState(fields[1].initial);
  const [body, setBody] = useState(initialBody);
  const [unsavedOpen, setUnsavedOpen] = useState(state === "unsaved-changes");

  const saveFailed = state === "save-failed";
  /* W-61T "Back to edit" / "Try saving again" both return to the form. */
  const [formReopened, setFormReopened] = useState(false);
  /* W-61AQ is the headless twin of the W-61AN/AO/AP offline draft. */
  const headlessDraft = state === "headless-offline-draft";
  const headlessOffline = state === "headless-offline";
  const offlineDraft = state === "offline-draft" || headlessDraft;
  const offline = state === "offline" || headlessOffline;
  const headless = headlessDraft || headlessOffline;

  const dirty =
    first !== fields[0].initial ||
    second !== fields[1].initial ||
    body !== initialBody;

  const guard = (action: () => void) => {
    if (dirty) {
      setUnsavedOpen(true);
      return;
    }
    action();
  };

  const handleCrumb = (event: MouseEvent<HTMLAnchorElement>) => {
    if (dirty) {
      event.preventDefault();
      setUnsavedOpen(true);
    }
  };

  /* Offline-first: saving without a connection keeps the note on this device
     (W-61AN / AO / AP, W-61AQ headless) instead of failing. */
  const handleSave = () => {
    if (offline || offlineDraft) {
      const next = new URLSearchParams(params);
      next.set("state", headless ? "headless-offline-draft" : "offline-draft");
      setParams(next);
      return;
    }
    navigate(returnTo);
  };

  if (saveFailed && !formReopened) {
    /* W-61T — a failed save replaces the form with its own review screen;
       both actions return to the still-filled form. */
    return (
      <SaveFailedScreen
        crumb={crumb}
        crumbTo={crumbTo}
        onBackToEdit={() => setFormReopened(true)}
        onRetry={() => setFormReopened(true)}
      />
    );
  }

  const saveLabel =
    offline || offlineDraft
      ? c.sync.saveDraftCta
      : isEdit
        ? c.noteForm.editSaveLabel
        : c.noteForm.saveLabel;

  return (
    <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
      <LogsHeader
        crumb={crumb}
        crumbTo={crumbTo}
        onCrumbClick={handleCrumb}
        title={offlineDraft ? draftTitle : title}
        subtitle={subtitle}
      />

      {(offline || offlineDraft) && (
        <div className="mt-[12px] lg:mt-[26px]">
          {offline && (
            <StateBanner
              tone="amber"
              title={c.states.offlineTitle}
              body={c.states.offlineBody}
            />
          )}
          {offlineDraft && (
            /* W-61AN (1196:604) — the amber draft notice sits alone between the
               lead line and the TITLE caption; the sync run is reached from the
               offline hub, not from inside the form. */
            <InfoCard
              size="sm"
              fill="amber"
              lead
              title={c.sync.draftTitle}
              body={c.sync.draftBody}
            />
          )}
        </div>
      )}

      <NoteForm
        fields={[
          {
            label: fields[0].label,
            placeholder: fields[0].placeholder,
            value: first,
            onChange: setFirst,
          },
          {
            label: fields[1].label,
            placeholder: fields[1].placeholder,
            value: second,
            onChange: setSecond,
          },
        ]}
        body={body}
        onBodyChange={setBody}
        notePlaceholder={notePlaceholder}
        privacyTitle={privacyTitle}
        privacyBody={privacyBody}
        saveLabel={saveLabel}
        onSave={handleSave}
        onCancel={() => guard(() => navigate(returnTo))}
      />

      {headless && (
        <HeadlessNoteStrip
          className="mt-[12px] lg:mt-[20px]"
          note={c.overview.headlessNote}
        />
      )}

      {unsavedOpen && (
        <ConfirmModal
          primaryOutline
          title={c.unsaved.title}
          body={c.unsaved.body}
          primaryLabel={c.unsaved.keep}
          secondaryLabel={c.unsaved.discard}
          onPrimary={() => setUnsavedOpen(false)}
          onSecondary={() => navigate(returnTo)}
          onDismiss={() => setUnsavedOpen(false)}
        />
      )}
    </div>
  );
}
