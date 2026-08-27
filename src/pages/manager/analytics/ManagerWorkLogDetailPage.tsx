import { Link, useParams } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useScreenState } from "@/hooks/useScreenState";
import { ANALYTICS_COPY } from "./analytics.copy";
import { findManagedWorker, findWorkLogRecord } from "./analytics.mock";
import { RecordsScreenHeader } from "./sections/RecordsScreenHeader";
import { RecordsIdentityCard } from "./sections/RecordsIdentityCard";
import { RecordMetaCard } from "./sections/RecordMetaCard";
import { RecordDescriptionCard } from "./sections/RecordDescriptionCard";
import { RecordEvidenceCard } from "./sections/RecordEvidenceCard";
import { VerificationSourceCard } from "./sections/VerificationSourceCard";
import { RecordDetailActions } from "./sections/RecordDetailActions";
import { MintNoteCard } from "./sections/MintNoteCard";
import { RecordsRestrictedState } from "./sections/RecordsRestrictedState";
import { RecordsEmptyState } from "./sections/RecordsEmptyState";

/** Manager Work Log Detail (Figma EM-R2-03, node 761:2510 — desktop derived
 *  from the mobile IA inside the MD shell).
 *  ?state=restricted → EM-R2-04, ?state=empty → EM-R2-06 (Manager 11). */
export function ManagerWorkLogDetailPage() {
  const { workerId, recordId } = useParams();
  const state = useScreenState();
  const c = useSectionCopy(ANALYTICS_COPY);
  const worker = findManagedWorker(workerId);
  const record = findWorkLogRecord(recordId);

  if (state === "restricted") return <RecordsRestrictedState worker={worker} />;
  if (state === "empty") return <RecordsEmptyState worker={worker} />;

  if (!record) {
    return (
      <div className="max-w-[1060px]">
        <RecordsScreenHeader
          title={c.recordDetail.title}
          subtitle={c.recordDetail.subtitle}
        />
        <div className="mt-[18px] rounded-[12px] border border-[#ccded6] bg-white px-[14px] py-[24px] text-center lg:max-w-[350px]">
          <p className="text-[11px] font-semibold text-[#083d2d] lg:text-[13px]">
            {c.recordDetail.notFound}
          </p>
          <Link
            to={`/manager/workers/${worker.id}/records/log`}
            className="mt-[14px] flex h-[40px] items-center justify-center rounded-[10px] border border-[#ccded6] bg-white px-4 text-[11px] font-semibold text-[#083d2d] hover:border-brand"
          >
            {c.recordDetail.backToWorkLog}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1060px]">
      <RecordsScreenHeader
        title={c.recordDetail.title}
        subtitle={c.recordDetail.subtitle}
      />

      <div className="mt-[18px] space-y-[16px]">
        <RecordsIdentityCard worker={worker} variant="detail" />
        <RecordMetaCard record={record} />
        <RecordDescriptionCard record={record} />
        <RecordEvidenceCard record={record} />
        <VerificationSourceCard record={record} />
        <RecordDetailActions worker={worker} />
        <MintNoteCard title={c.recordDetail.privacyTitle}>
          <p>{c.recordDetail.privacyBody}</p>
        </MintNoteCard>
      </div>
    </div>
  );
}
