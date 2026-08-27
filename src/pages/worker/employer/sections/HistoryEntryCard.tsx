import type { ReactNode } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { EMPLOYER_COPY } from "../employer.copy";
import type { AccessHistoryEntry } from "../employerMock";

interface HistoryEntryCardProps {
  entry: AccessHistoryEntry;
  /** WD-52 renders "Status: Active"; WD-52A renders "Status: Ended". */
  ended: boolean;
  className?: string;
}

/* Audit-log entry — WD-52 node 1182:1723 (nodes 1203:50-56): 1012px white
   card, radius 18, 19px inset; ACCESS SCOPE eyebrow · 13px uppercase status
   header · 16px employer name · 13px access line · 13px green status ·
   CONSENT SCOPE eyebrow · 13px muted consent paragraph. WD-52A / W-52A add
   the EMPLOYER ACCESS ENDED entry below.

   Mobile (W-52 nodes 946:1183 / 946:1186, W-52A node 946:1223) files the same
   record as one labelled card per block: a 126px EMPLOYER CONNECTION APPROVED
   card carrying the name, access line and status, a 142px CONSENT SCOPE card,
   and — once revoked — a 126px EMPLOYER ACCESS ENDED card. */
export function HistoryEntryCard({
  entry,
  ended,
  className = "",
}: HistoryEntryCardProps) {
  const c = useSectionCopy(EMPLOYER_COPY);

  if (entry.kind === "ended") {
    return (
      <div className={className}>
        <MobileHistoryCard
          label={c.history.endedHeader}
          minHeight="min-h-[126px]"
        >
          <p>{c.history.endedText(entry.employerName)}</p>
        </MobileHistoryCard>

        <div className="hidden rounded-[18px] border border-lp-line bg-white px-[19px] pt-[19px] pb-[24px] lg:block">
          <p className="text-[11px] font-semibold text-lp-green">
            {c.scope.accessScope}
          </p>
          <p className="mt-[16px] text-[13px] font-semibold text-lp-ink">
            {c.history.endedHeader}
          </p>
          <p className="mt-[10px] text-[16px] font-semibold text-lp-ink">
            {entry.employerName}
          </p>
          <p className="mt-[16px] max-w-[940px] text-[13px] text-lp-muted">
            {c.history.endedText(entry.employerName)}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="space-y-4 lg:hidden">
        <MobileHistoryCard
          label={c.history.approvedHeader}
          minHeight="min-h-[126px]"
        >
          <p>{entry.employerName}</p>
          <p>{c.history.accessLine}</p>
          <p>{ended ? c.history.statusEnded : c.history.statusActive}</p>
        </MobileHistoryCard>
        <MobileHistoryCard
          label={c.history.consentScope}
          minHeight="min-h-[142px]"
        >
          <p>{c.history.consentParagraph}</p>
        </MobileHistoryCard>
      </div>

      <div className="hidden min-h-[320px] rounded-[18px] border border-lp-line bg-white px-[19px] pt-[19px] pb-[24px] lg:block">
        <p className="text-[11px] font-semibold text-lp-green">
          {c.scope.accessScope}
        </p>
        <p className="mt-[12px] text-[13px] font-semibold text-lp-ink">
          {c.history.approvedHeader}
        </p>
        <p className="mt-[9px] text-[16px] font-semibold text-lp-ink">
          {entry.employerName}
        </p>
        <p className="mt-[14px] max-w-[920px] text-[13px] text-lp-ink">
          {c.history.accessLine}
        </p>
        <p className="mt-[6px] text-[13px] font-semibold text-lp-green">
          {ended ? c.history.statusEnded : c.history.statusActive}
        </p>
        <p className="mt-[19px] text-[11px] font-semibold text-lp-green">
          {c.history.consentScope}
        </p>
        <p className="mt-[29px] max-w-[940px] text-[13px] text-lp-muted">
          {c.history.consentParagraph}
        </p>
      </div>
    </div>
  );
}

/** One W-52 mobile record card: 10px muted label over 12px record lines. */
function MobileHistoryCard({
  label,
  minHeight,
  children,
}: {
  label: string;
  minHeight: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`${minHeight} rounded-[14px] border border-lp-line bg-white px-[13px] pt-[13px] pb-[13px] lg:hidden`}
    >
      <p className="text-[10px] font-semibold text-lp-muted">{label}</p>
      <div className="mt-[10px] text-[12px] leading-[18px] text-lp-ink">
        {children}
      </div>
    </div>
  );
}
