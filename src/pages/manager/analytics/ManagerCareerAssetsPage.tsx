import { useParams } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useScreenState } from "@/hooks/useScreenState";
import { ANALYTICS_COPY } from "./analytics.copy";
import { findManagedWorker } from "./analytics.mock";
import { RecordsScreenHeader } from "./sections/RecordsScreenHeader";
import { RecordsIdentityCard } from "./sections/RecordsIdentityCard";
import { CareerAssetRows } from "./sections/CareerAssetRows";
import { VerifiedEvidenceList } from "./sections/VerifiedEvidenceList";
import { MintNoteCard } from "./sections/MintNoteCard";
import { CareerAssetsActions } from "./sections/CareerAssetsActions";
import { RecordsRestrictedState } from "./sections/RecordsRestrictedState";
import { RecordsEmptyState } from "./sections/RecordsEmptyState";

/** Manager Career Assets (Figma EM-R2-05, node 761:2380 — desktop derived
 *  from the mobile IA inside the MD shell).
 *  ?state=restricted → EM-R2-04, ?state=empty → EM-R2-06 (Manager 11). */
export function ManagerCareerAssetsPage() {
  const { workerId } = useParams();
  const state = useScreenState();
  const c = useSectionCopy(ANALYTICS_COPY);
  const worker = findManagedWorker(workerId);

  if (state === "restricted") return <RecordsRestrictedState worker={worker} />;
  if (state === "empty") return <RecordsEmptyState worker={worker} />;

  return (
    <div className="max-w-[1060px]">
      <RecordsScreenHeader
        title={c.careerAssets.title}
        subtitle={c.careerAssets.subtitle}
      />

      <div className="mt-[18px] space-y-[16px]">
        <RecordsIdentityCard worker={worker} variant="assets" />
        <CareerAssetRows />
        <VerifiedEvidenceList worker={worker} />
        <MintNoteCard title={c.careerAssets.portabilityTitle}>
          <p>{c.careerAssets.portabilityBody}</p>
        </MintNoteCard>
        <CareerAssetsActions worker={worker} />
      </div>
    </div>
  );
}
