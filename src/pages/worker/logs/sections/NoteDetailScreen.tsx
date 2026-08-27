import { useState } from "react";
import { Link } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { fillLogsCopy, LOGS_COPY } from "../logs.copy";
import { DeleteReviewScreen } from "./DeleteReviewScreen";
import { DetailField } from "./DetailField";
import { InfoCard } from "./InfoCard";
import { LogsAction } from "./LogsAction";
import { LogsHeader } from "./LogsHeader";
import { NoteDeletedScreen } from "./NoteDeletedScreen";
import { StateBanner } from "./StateBanner";

interface NoteDetailScreenProps {
  crumb: string;
  crumbTo: string;
  title: string;
  subtitle: string;
  /** Raw note data — never translated. */
  note?: {
    title: string;
    category: string;
    date: string;
    created?: string;
    updated?: string;
    body: string;
  };
  /** WD-61G TITLE · CATEGORY, WD-61K TYPE · DATE, WD-61P CATEGORY · TITLE —
   *  the pair of read-only fields above the note body. */
  fields?: { label: string; value: string }[];
  privacyTitle: string;
  privacyBody: string;
  /** WD-61P prints the privacy line under the detail card instead of in it. */
  privacyPlacement?: "in-card" | "below-card";
  /** WD-61G keeps the green "PRIVATE NOTE" caption above the privacy line;
   *  WD-61K shows the sentence alone. */
  privacyLabelOnDesktop?: boolean;
  /** WD-61K has no "Created … · Updated …" line on desktop. */
  showTimestampsOnDesktop?: boolean;
  editTo: string;
  /** WD-61S1/S2/S3 red review line naming the record class. */
  deleteBody: string;
  /** W-61S5 / S6 confirmation shown once the delete is confirmed. */
  deletedTitle: string;
  deletedBody: string;
  returnTo: string;
}

/* Shared private-note detail behind W-61K (health) and W-61P (life), with the
   W-61S2 / W-61S3 delete confirmation modal. W-61P (1167:752) stacks the mint
   privacy card, CATEGORY / TITLE / NOTE fields, the Edit / Delete pair and the
   "Created … · Updated …" line on a 12px rhythm. */
export function NoteDetailScreen({
  crumb,
  crumbTo,
  title,
  subtitle,
  note,
  fields,
  privacyTitle,
  privacyBody,
  privacyPlacement = "in-card",
  privacyLabelOnDesktop = false,
  showTimestampsOnDesktop = true,
  editTo,
  deleteBody,
  deletedTitle,
  deletedBody,
  returnTo,
}: NoteDetailScreenProps) {
  const state = useScreenState();
  const c = useSectionCopy(LOGS_COPY);
  const { language } = useLanguage();
  const [deleteOpen, setDeleteOpen] = useState(state === "delete-confirmation");
  const [deleted, setDeleted] = useState(state === "deleted");

  const timestamps = fillLogsCopy(c.noteActions.timestamps, {
    created: formatDisplayDate(note?.created ?? note?.date ?? "", language),
    updated: formatDisplayDate(note?.updated ?? note?.date ?? "", language),
  });

  if (deleted) {
    return (
      <NoteDeletedScreen
        crumb={crumb}
        crumbTo={returnTo}
        title={deletedTitle}
        body={deletedBody}
      />
    );
  }

  if (deleteOpen && note) {
    /* WD-61S1 / S2 / S3 — confirming a delete is a page of its own. */
    return (
      <DeleteReviewScreen
        crumb={crumb}
        crumbTo={crumbTo}
        recordTitle={note.title}
        body={deleteBody}
        onKeep={() => setDeleteOpen(false)}
        onConfirm={() => {
          setDeleteOpen(false);
          setDeleted(true);
        }}
      />
    );
  }

  if (!note) {
    return (
      <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
        <Link
          to={crumbTo}
          className="text-[13px] font-semibold text-lp-green hover:text-lp-button"
        >
          {crumb}
        </Link>
        <div className="mt-[22px] rounded-[14px] border border-lp-line bg-white p-8 text-center">
          <p className="text-[15px] font-semibold text-lp-ink">
            {c.record.notFound}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
      <LogsHeader
        crumb={crumb}
        crumbTo={crumbTo}
        title={title}
        subtitle={subtitle}
      />

      {state === "offline" && (
        <StateBanner
          className="mt-[26px]"
          tone="amber"
          title={c.states.offlineTitle}
          body={c.states.offlineBody}
        />
      )}

      {/* Mobile keeps the mint privacy card above the fields (W-61G/K/P);
          desktop folds the same sentence into the detail card. */}
      <InfoCard
        className="mt-[12px] lg:hidden"
        size="sm"
        title={privacyTitle}
        body={privacyBody}
      />

      {/* WD-61G/K/P — one 1012x330 white detail card at y=286. */}
      <div className="lg:mt-[50px] lg:min-h-[330px] lg:rounded-[16px] lg:border lg:border-lp-line lg:bg-white lg:px-[22px] lg:pt-[18px] lg:pb-[20px]">
        <div className="mt-[12px] grid gap-[12px] lg:mt-0 lg:grid-cols-2 lg:gap-[24px] lg:gap-x-[28px]">
          {(
            fields ?? [
              { label: c.noteForm.categoryLabel, value: note.category },
              { label: c.noteForm.titleLabel, value: note.title },
            ]
          ).map((field) => (
            <DetailField
              key={field.label}
              label={field.label}
              value={field.value}
            />
          ))}
        </div>
        <div className="mt-[12px] lg:mt-[22px]">
          <DetailField
            label={c.noteForm.noteLabel}
            value={note.body}
            multiline
            plainOnDesktop
          />
        </div>

        {privacyPlacement === "in-card" && (
          <div className="hidden lg:mt-[14px] lg:block">
            {privacyLabelOnDesktop && (
              <p className="text-[11px] font-semibold text-lp-green">
                {privacyTitle}
              </p>
            )}
            <p className="mt-[4px] text-[12px] leading-[18px] text-lp-muted">
              {privacyBody}
            </p>
          </div>
        )}

        {showTimestampsOnDesktop && (
          <p className="hidden text-[12px] text-lp-muted lg:mt-[8px] lg:block">
            {timestamps}
          </p>
        )}
      </div>

      {privacyPlacement === "below-card" && (
        <p className="hidden text-[12px] text-lp-muted lg:mt-[8px] lg:block">
          {privacyBody}
        </p>
      )}

      <div className="mt-[12px] flex flex-col gap-[12px] lg:mt-[30px] lg:flex-row lg:gap-4">
        <LogsAction
          to={editTo}
          label={c.noteActions.edit}
          heightClass="h-[46px]"
          widthClass="lg:w-[200px]"
        />
        <LogsAction
          label={c.noteActions.delete}
          variant="danger-outline"
          onClick={() => setDeleteOpen(true)}
          heightClass="h-[46px]"
          widthClass="lg:w-[200px]"
        />
      </div>

      <p className="mt-[12px] text-[11px] text-lp-muted lg:hidden">
        {timestamps}
      </p>

    </div>
  );
}
