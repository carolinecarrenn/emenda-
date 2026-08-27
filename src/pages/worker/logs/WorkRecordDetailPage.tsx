import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { EMPLOYER } from "@/data/caregiverReport";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { fillLogsCopy, LOGS_COPY } from "./logs.copy";
import { WORK_RECORDS } from "./logsMock";
import { DetailField } from "./sections/DetailField";
import { InfoCard } from "./sections/InfoCard";
import { LogsHeader } from "./sections/LogsHeader";
import { NoteDeletedScreen } from "./sections/NoteDeletedScreen";
import { NoteDetailScreen } from "./sections/NoteDetailScreen";
import { StateBanner } from "./sections/StateBanner";

/** Work record detail — Figma WD-61F verified employer record (1187:615) and
 *  WD-61G career note detail (1187:666) · delete confirmation WD-61S1
 *  (1187:2133); mobile W-61F/W-61G. Verified records keep the
 *  "VERIFIED · READ ONLY" ownership strip and expose no edit affordance. */
export function WorkRecordDetailPage() {
  const { noteId } = useParams();
  const state = useScreenState();
  const c = useSectionCopy(LOGS_COPY);
  const { language } = useLanguage();
  const [deleted] = useState(state === "deleted");

  const record = WORK_RECORDS.find((item) => item.id === noteId);
  const offline = state === "offline";

  if (deleted) {
    /* W-61S4 — the personal note is gone; verified records are untouched. */
    return (
      <NoteDeletedScreen
        crumb={c.work.title}
        crumbTo="/worker/logs/work"
        title={c.deleted.careerTitle}
        body={c.deleted.careerBody}
      />
    );
  }

  if (!record) {
    return (
      <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
        <Link
          to="/worker/logs/work"
          className="text-[13px] font-semibold text-lp-green hover:text-lp-button"
        >
          {c.work.title}
        </Link>
        <div className="mt-[12px] lg:mt-[22px] rounded-[14px] border border-lp-line bg-white p-8 text-center">
          <p className="text-[15px] font-semibold text-lp-ink">
            {c.record.notFound}
          </p>
        </div>
      </div>
    );
  }

  const offlineBanner = offline ? (
    <StateBanner
      className="mt-[12px] lg:mt-[26px]"
      tone="amber"
      title={c.states.offlineTitle}
      body={c.states.offlineBody}
    />
  ) : null;

  const eventLine = `${record.eventTitle ?? record.title} · ${formatDisplayDate(
    record.date ?? "",
    language,
  )}`;
  const sourceLine = fillLogsCopy(c.record.sourceValue, {
    employer: record.employer ?? EMPLOYER.name,
  });

  if (record.kind === "verified") {
    /* W-61F (1167:318) — the read-only notice, then EMPLOYER / ROLE / STATUS /
       LATEST VERIFIED EVENT as flat fields and the SOURCE card. */
    return (
      <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
        <LogsHeader
          crumb={c.work.title}
          crumbTo="/worker/logs/work"
          title={c.record.title}
          subtitle={c.record.subtitle}
        />
        {offlineBanner}

        {/* Mobile W-61F (1167:318) — flat notice, fields and source card. */}
        <div className="lg:hidden">
          <InfoCard
            className="mt-[12px]"
            title={c.record.readOnlyLabel}
            body={c.record.readOnlyBody}
          />

          <div className="mt-[12px] grid gap-[12px]">
            <DetailField
              label={c.record.employerLabel}
              value={record.employer ?? EMPLOYER.name}
            />
            <DetailField label={c.record.roleLabel} value={record.role ?? ""} />
          </div>

          <div className="mt-[12px] grid gap-[12px]">
            <DetailField
              label={c.record.statusLabel}
              value={fillLogsCopy(c.record.activeStatus, {
                month: record.sinceMonth ?? "",
              })}
            />
            <DetailField
              label={c.record.eventLabel}
              value={eventLine}
            />
          </div>

          <InfoCard
            className="mt-[12px]"
            fill="white"
            size="sm"
            title={c.record.sourceLabel}
            body={sourceLine}
          />
        </div>

        {/* WD-61F (1215:41) — one 1012x390 card: the employer as its heading,
            ROLE | STATUS on the 460px grid, the verified event and source as
            captioned text, then the read-only strip over "Active · since …". */}
        <div className="mt-[12px] lg:mt-[50px] hidden min-h-[390px] rounded-[16px] border border-lp-line bg-white px-[22px] pt-[18px] pb-[18px] lg:block">
          <p className="text-[19px] leading-[30px] font-semibold text-lp-ink">
            {record.employer ?? EMPLOYER.name}
          </p>

          <div className="mt-[16px] grid grid-cols-2 gap-x-[28px]">
            <DetailField label={c.record.roleLabel} value={record.role ?? ""} />
            <DetailField
              label={c.record.statusLabel}
              value={c.record.statusValue}
            />
          </div>

          <p className="mt-[12px] lg:mt-[22px] text-[11px] font-semibold text-lp-green">
            {c.record.eventLabel}
          </p>
          <p className="mt-[6px] text-[14px] leading-[28px] text-lp-ink">
            {eventLine}
          </p>

          <p className="mt-[12px] lg:mt-[20px] text-[11px] font-semibold text-lp-green">
            {c.record.sourceLabel}
          </p>
          <p className="mt-[6px] text-[13px] leading-[20px] text-lp-muted">
            {sourceLine}
          </p>

          <div className="mt-[14px] flex items-start gap-[40px]">
            <p className="w-[268px] shrink-0 text-[11px] font-semibold text-lp-green">
              {c.record.readOnlyLabel}
            </p>
            <p className="max-w-[620px] text-[12px] leading-[18px] text-lp-muted">
              {c.record.readOnlyBody}
            </p>
          </div>
          <p className="mt-[8px] text-[12px] text-lp-muted">
            {fillLogsCopy(c.record.activeStatus, {
              month: record.sinceMonth ?? "",
            })}
          </p>
        </div>
      </div>
    );
  }

  /* W-61G (1167:366) / WD-61G (1215:56) — the personal career note shares the
     private-note detail screen: mobile keeps the mint PRIVATE NOTE card above
     TITLE / CATEGORY / NOTE, desktop folds the same content into the 1012x330
     detail card with the privacy caption and the created/updated line inside
     it. Editable, deletable, never an employer record. */
  return (
    <NoteDetailScreen
      crumb={c.work.title}
      crumbTo="/worker/logs/work"
      title={c.careerNote.detailTitle}
      subtitle={c.careerNote.detailSubtitle}
      note={{
        title: record.title,
        category: record.category ?? "",
        date: record.date ?? "",
        created: record.created,
        updated: record.updated,
        body: record.body ?? "",
      }}
      fields={[
        { label: c.noteForm.titleLabel, value: record.title },
        { label: c.noteForm.categoryLabel, value: record.category ?? "" },
      ]}
      privacyLabelOnDesktop
      privacyTitle={c.careerNote.privacyTitle}
      privacyBody={c.careerNote.privacyBody}
      editTo={`/worker/logs/work/${record.id}/edit`}
      deleteBody={c.deleteReview.careerBody}
      deletedTitle={c.deleted.careerTitle}
      deletedBody={c.deleted.careerBody}
      returnTo="/worker/logs/work"
    />
  );
}
