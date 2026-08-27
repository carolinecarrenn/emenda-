import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { REPORTS_STATES_COPY } from "../reports.copy";
import {
  DETAIL_SUBMITTED_CACHED,
  DETAIL_VERIFIED_CACHED,
  type CachedReportRecord,
} from "../reportsStatesMock";
import { DetailBackRow } from "./DetailBackRow";
import { DetailContentCard } from "./DetailContentCard";
import {
  DetailCachedNotice,
  DetailOwnershipNote,
  DetailReadOnlyNotice,
} from "./DetailNotices";
import { StateBanner, StateNoteCard } from "./stateUi";

/* W-56B / W-56C — Daily Report Detail · Offline (submitted and verified).
   The detail layout stays intact and the content is read from the cached
   record, so nothing about the report changes offline.
   Mobile (W-56B node 973:589 / W-56C node 975:158): a single pale-amber
   "Cached report" card carries the title AND the offline sentence at the top
   of the page; there is no closing note.
   Desktop (WD-56B): a thin amber banner above the status hero and an amber
   cached-record note closing the page - both kept, shown from lg up. The
   desktop hero fill follows the lifecycle like WD-56/WD-56A: the Submitted
   record (WD-56B) keeps the #f2f9f5 tint, the Verified one (WD-56C) the
   deeper #e8f5ed mint. */
function CachedDetail({
  record,
  cachedTitle,
  cachedBody,
}: {
  record: CachedReportRecord;
  cachedTitle: string;
  cachedBody: string;
}) {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  const common = useCommonCopy();
  const isVerified = record.statusValue === "verified";

  return (
    <>
      <DetailBackRow label={common.nav.reports} />
      <h1 className="mt-[10px] text-[28px] leading-[34px] font-bold text-lp-ink lg:mt-[14px] lg:text-[34px] lg:leading-normal">
        {c.detail.title}
      </h1>
      <p className="mt-[8px] text-[12px] leading-[17px] text-lp-muted lg:mt-[18px] lg:text-[14px] lg:leading-normal">
        {record.title}
      </p>

      <div className="mt-[8px] lg:mt-[44px]">
        <DetailCachedNotice title={cachedTitle} body={cachedBody} />
        <div className="hidden lg:block">
          <StateBanner tone="amber" size="hub">
            {c.detail.offlineBanner}
          </StateBanner>
        </div>

        <div
          className={`mt-[8px] min-h-[90px] rounded-[14px] border border-lp-line bg-lp-tint px-[14px] py-[13px] lg:mt-[26px] lg:min-h-[96px] lg:px-[19px] lg:py-[15px] ${
            isVerified ? "lg:bg-lp-mint" : "lg:bg-lp-tint"
          }`}
        >
          <p className="text-[13px] leading-[18px] font-semibold text-lp-ink lg:text-[17px] lg:leading-normal lg:text-lp-green">
            {isVerified ? common.status.verified : common.status.submitted}
          </p>
          <p className="mt-[6px] text-[11px] leading-[16px] text-lp-muted lg:mt-[9px] lg:text-[13px] lg:leading-normal">
            {record.statusLine}
          </p>
        </div>

        <div className="mt-[8px] lg:mt-[24px]">
          <DetailReadOnlyNotice
            title={c.detail.readOnlyLabel}
            body={c.detail.readOnlyBody}
          />
        </div>

        <div className="mt-[8px] lg:mt-4">
          <DetailContentCard
            label={c.detail.workSummaryLabel}
            value={record.workSummary}
          />
        </div>
        {record.followUp.trim() !== "" && (
          <div className="mt-[8px] lg:mt-4">
            <DetailContentCard
              label={c.detail.followUpLabel}
              value={record.followUp}
            />
          </div>
        )}

        <div className="mt-[8px] lg:mt-4">
          <DetailOwnershipNote
            title={c.detail.portableTitle}
            body={c.detail.portableBody}
          />
        </div>

        <div className="mt-4 hidden lg:block">
          <StateNoteCard tone="amber" lines={[c.detail.offlineNote]} />
        </div>
      </div>
    </>
  );
}

/** W-56B — Daily Report Detail · Submitted · Offline. */
export function DetailOfflineState() {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  return (
    <CachedDetail
      record={DETAIL_SUBMITTED_CACHED}
      cachedTitle={c.detail.cachedTitle}
      cachedBody={c.detail.cachedBody}
    />
  );
}

/** W-56C / W-56E — Daily Report Detail · Verified · Offline. */
export function DetailVerifiedOfflineState() {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  return (
    <CachedDetail
      record={DETAIL_VERIFIED_CACHED}
      cachedTitle={c.detail.cachedVerifiedTitle}
      cachedBody={c.detail.cachedVerifiedBody}
    />
  );
}
