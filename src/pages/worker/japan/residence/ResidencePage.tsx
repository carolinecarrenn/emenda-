import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { JAPAN_COPY, fill } from "../japan.copy";
import { RESIDENCE_RECORD, VERIFIED_RESIDENCE_RECORD } from "../japanMock";
import { BackLink } from "../sections/BackLink";
import { HubCard } from "../sections/HubCard";
import { DiscardSheet } from "../sections/Overlays";
import { SecondaryButton } from "../sections/PrimaryButton";
import { ResidenceForm } from "./sections/ResidenceForm";
import { ResidenceNoteForm } from "./sections/ResidenceNoteForm";
import { ResidenceRecordCard } from "./sections/ResidenceRecordCard";
import { ReviewUpdateCards } from "./sections/ReviewUpdateCards";

const EDIT_STATES = new Set([
  "edit",
  "validation-error",
  "saving",
  "save-failed",
  "offline",
  "unsaved",
  "status-sheet",
  "work-sheet",
  "date-sheet",
]);
const ADD_STATES = new Set(["add", "add-unsaved"]);
const NOTE_STATES = new Set([
  "note",
  "note-saving",
  "note-save-failed",
  "note-offline",
  "note-unsaved",
]);

type Mode =
  | "base"
  | "empty"
  | "add"
  | "edit"
  | "expiry"
  | "update"
  | "review"
  | "verified"
  | "note";

function resolveMode(state: string | null): Mode {
  if (state === null) return "base";
  if (state === "empty") return "empty";
  if (ADD_STATES.has(state)) return "add";
  if (EDIT_STATES.has(state)) return "edit";
  if (state === "expiry-soon") return "expiry";
  if (state === "update-available") return "update";
  if (state === "review-update") return "review";
  if (state === "verified-source") return "verified";
  if (NOTE_STATES.has(state)) return "note";
  return "base";
}

/** Residence status (Figma WD-33, node 1014:941) and its 21 lettered
 *  variants: empty / add / edit / validation / saving / save-failed /
 *  offline / unsaved ×3 / expiry-soon / update-available / review verified
 *  update (Apply / Keep) / verified-source / personal-note states /
 *  selector + date-picker overlays. */
export function ResidencePage() {
  const state = useScreenState();
  const c = useSectionCopy(JAPAN_COPY);
  const { language } = useLanguage();
  const navigate = useNavigate();

  const mode = resolveMode(state);

  /* W-33D / W-33E / W-33F / W-33G / W-33H swap the form subtitle for the
     state message. */
  const formSubtitle = (fallback: string) =>
    state === "validation-error"
      ? c.residence.subtitleValidation
      : state === "save-failed"
        ? c.residence.subtitleSaveFailed
        : state === "saving"
          ? c.residence.subtitleSaving
          : state === "offline"
            ? c.residence.subtitleOfflineEdit
            : state === "unsaved" || state === "add-unsaved"
              ? c.residence.subtitleUnsaved
              : fallback;

  /* W-33P swaps the note subtitle; W-33R re-uses the edit heading with the
     unsaved-changes line (WD-33R `1015:276` / W-33R `653:190`). */
  const noteHeading =
    state === "note-unsaved"
      ? {
          title: c.residence.editTitle,
          subtitle: c.residence.subtitleUnsaved,
        }
      : {
          title: c.residence.noteTitle,
          subtitle:
            state === "note-save-failed"
              ? c.residence.subtitleNoteSaveFailed
              : state === "note-saving"
                ? c.residence.noteSubtitleSaving
                : state === "note-offline"
                  ? c.residence.noteSubtitleOffline
                  : c.residence.noteSubtitle,
        };

  const [discardOverride, setDiscardOverride] = useState<boolean | null>(null);
  const urlDiscard =
    state === "unsaved" || state === "add-unsaved" || state === "note-unsaved";
  const discardOpen = discardOverride ?? urlDiscard;
  const isFormMode = mode === "add" || mode === "edit" || mode === "note";

  const heading: Record<Mode, { title: string; subtitle: string }> = {
    base: { title: c.residence.title, subtitle: c.residence.subtitle },
    empty: { title: c.residence.title, subtitle: c.residence.subtitleEmpty },
    add: { title: c.residence.addTitle, subtitle: formSubtitle(c.residence.addSubtitle) },
    edit: { title: c.residence.editTitle, subtitle: formSubtitle(c.residence.editSubtitle) },
    expiry: { title: c.residence.title, subtitle: c.residence.subtitleExpiry },
    update: { title: c.residence.title, subtitle: c.residence.subtitleUpdate },
    review: {
      title: c.residence.reviewTitle,
      subtitle: c.residence.reviewSubtitle,
    },
    verified: {
      title: c.residence.title,
      subtitle: c.residence.subtitleVerified,
    },
    note: noteHeading,
  };

  const discardCopy =
    mode === "add"
      ? { title: c.residence.discardAddTitle, body: c.residence.discardAddBody }
      : mode === "note"
        ? {
            title: c.residence.discardNoteTitle,
            body: c.residence.discardNoteBody,
          }
        : {
            title: c.residence.discardEditTitle,
            body: c.residence.discardEditBody,
          };

  const expiresBody = fill(c.residence.expiresBody, {
    date: formatDisplayDate(RESIDENCE_RECORD.validUntil, language),
  });

  return (
    <div className="max-w-[1080px] pt-[20px] lg:pt-0">
      <BackLink
        onIntercept={isFormMode ? () => setDiscardOverride(true) : undefined}
      />
      <h1 className="mt-[14px] text-[30px] leading-[42px] font-bold text-[#131f1a] lg:mt-[12px] lg:text-[32px]">
        {heading[mode].title}
      </h1>
      <p className="mt-[4px] min-h-[44px] text-[13px] leading-[22px] text-[#5e7066] lg:mt-[6px] lg:text-[15px] lg:leading-[22px]">
        {heading[mode].subtitle}
      </p>

      <div className="mt-[18px]">
        {mode === "base" && (
          <>
            <div className="grid items-start gap-y-[18px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[24px]">
              <ResidenceRecordCard
                record={RESIDENCE_RECORD}
                sourceLabel={c.residence.sourceSelfAdded}
                editTo="/worker/japan/residence?state=edit"
              />
              <HubCard
                tone="amber"
                title={c.residence.reminderTitle}
                lines={[c.residence.reminderBody]}
                minHClass="min-h-[82px]"
                titleClassName="text-[12px] text-[#8a5a00]"
                className="lg:min-h-[104px]"
              />
            </div>
            <SecondaryButton
              label={c.visaPlan.manageImportantDates}
              to="/worker/japan/dates"
              sizeClass="mt-[20px] h-[46px] rounded-[13px] lg:mt-[24px] lg:h-[52px] lg:rounded-[12px]"
              className="lg:border-transparent lg:bg-[#08664d] lg:text-white lg:hover:bg-[#0b6b57]"
            />
            <p className="mt-[20px] text-[11px] leading-[18px] text-[#5e7066] lg:mt-[24px] lg:text-[12px] lg:leading-normal">
              {c.residence.disclaimer}
            </p>
          </>
        )}

        {mode === "empty" && (
          <div className="grid items-start gap-y-[18px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[24px]">
            {/* W-33A 626:924 — 350×170 card: 17px title, 13px body and a
                318×44 solid action inside the card (not a quiet text link). */}
            <HubCard
              title={c.residence.emptyTitle}
              titleClassName="text-[17px] text-[#131f1a] lg:text-[15px]"
              lines={[c.residence.emptyBody]}
              blockAction={{
                label: c.residence.emptyAction,
                to: "/worker/japan/residence?state=add",
                /* WD-33A `1014:1021` renders the same action as a quiet grey
                   line inside the 520×104 card. */
                desktopClass:
                  "lg:mt-[2px] lg:h-auto lg:justify-start lg:rounded-none lg:bg-transparent lg:text-[13px] lg:leading-[22px] lg:font-normal lg:text-[#5e7066]",
              }}
              minHClass="min-h-[170px] lg:min-h-[104px]"
            />
          </div>
        )}

        {(mode === "add" || mode === "edit") && (
          <ResidenceForm state={state ?? "edit"} />
        )}

        {mode === "expiry" && (
          <div className="grid items-start gap-y-[18px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[24px]">
            {/* W-33I 626:1090 — 350×150 amber warning with a 318×32
                white/outlined action inside the card. */}
            <HubCard
              tone="amber"
              title={c.residence.expiresTitle}
              titleClassName="text-[15px] text-[#8a5a00] lg:text-[14px]"
              lines={[expiresBody]}
              blockAction={{
                label: c.residence.reviewSavedDetails,
                to: "/worker/japan/residence",
                tone: "outline",
                heightClass: "h-[32px]",
                /* WD-33I `1014:1633` renders it as a quiet grey line. */
                desktopClass:
                  "lg:mt-[2px] lg:h-auto lg:justify-start lg:rounded-none lg:border-0 lg:bg-transparent lg:text-[13px] lg:leading-[22px] lg:font-normal lg:text-[#5e7066]",
              }}
              minHClass="min-h-[150px] lg:min-h-[104px]"
            />
            <HubCard
              title={c.residence.reminderTitle}
              lines={[c.residence.reminderActive]}
              action={{ label: c.action.manage, to: "/worker/japan/dates" }}
              className="lg:min-h-[116px]"
            />
          </div>
        )}

        {mode === "update" && (
          <div className="grid items-start gap-y-[18px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[24px]">
            <HubCard
              tone="mint"
              title={c.residence.updateTitle}
              lines={[c.residence.updateBody]}
              minHClass="min-h-[164px]"
              className="lg:min-h-[104px]"
            >
              {/* W-33J parks the review action inside the mint card. */}
              {/* Mobile keeps the solid in-card button; WD-33J draws the
                  same action as a quiet grey line under the body. */}
              <Link
                to="/worker/japan/residence?state=review-update"
                className="mt-[12px] flex h-[42px] w-full items-center justify-center rounded-[12px] bg-[#08664d] text-[13px] font-semibold text-white hover:bg-[#0b6b57] lg:mt-[2px] lg:h-auto lg:justify-start lg:rounded-none lg:bg-transparent lg:leading-[22px] lg:font-normal lg:text-[#5e7066] lg:hover:bg-transparent lg:hover:text-[#08664d]"
              >
                {c.residence.reviewUpdate}
              </Link>
            </HubCard>
            {/* WD-33J draws Not now as the solid green column action. */}
            <SecondaryButton
              label={c.residence.notNow}
              onClick={() => navigate("/worker/japan/residence")}
              sizeClass="h-[44px] rounded-[13px] lg:h-[52px] lg:rounded-[12px]"
              className="lg:border-transparent lg:bg-[#08664d] lg:text-white lg:hover:border-transparent lg:hover:bg-[#0b6b57]"
            />
          </div>
        )}

        {mode === "review" && <ReviewUpdateCards />}

        {/* W-33M 636:283 mobile order: verified summary → Add personal
            note → expiry reminder → Manage important dates → helper, with
            both actions drawn as quiet white 44/46px buttons. Desktop keeps
            the WD-33M order via `lg:order-*`. */}
        {mode === "verified" && (
          <div className="flex flex-col gap-y-[18px] lg:gap-y-[24px]">
            <div className="contents lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-[40px] lg:gap-y-[24px]">
              <div className="order-1 lg:order-none">
                <ResidenceRecordCard
                  record={VERIFIED_RESIDENCE_RECORD}
                  sourceLabel={c.residence.sourceVerifiedCard}
                />
              </div>
              <div className="order-3 lg:order-none">
                <HubCard
                  tone="amber"
                  title={c.residence.reminderTitle}
                  lines={[c.residence.reminderBody]}
                  minHClass="min-h-[82px]"
                  titleClassName="text-[12px] text-[#8a5a00]"
                  className="lg:min-h-[104px]"
                />
              </div>
            </div>
            <SecondaryButton
              label={c.residence.addNote}
              to="/worker/japan/residence?state=note"
              sizeClass="h-[44px] rounded-[13px] lg:h-[52px] lg:rounded-[12px]"
              className="order-2 lg:order-4"
            />
            <SecondaryButton
              label={c.visaPlan.manageImportantDates}
              to="/worker/japan/dates"
              sizeClass="h-[46px] rounded-[13px] lg:h-[52px] lg:rounded-[12px]"
              className="order-4 lg:order-2 lg:border-transparent lg:bg-[#08664d] lg:text-white lg:hover:bg-[#0b6b57]"
            />
            <p className="order-5 text-[11px] leading-[18px] text-[#5e7066] lg:order-3 lg:text-[12px] lg:leading-normal">
              {c.residence.verifiedHelper}
            </p>
          </div>
        )}

        {mode === "note" && <ResidenceNoteForm state={state ?? "note"} />}
      </div>

      {discardOpen && (
        <DiscardSheet
          title={discardCopy.title}
          body={discardCopy.body}
          onKeep={() => setDiscardOverride(false)}
          onDiscard={() => navigate("/worker/japan")}
        />
      )}
    </div>
  );
}
