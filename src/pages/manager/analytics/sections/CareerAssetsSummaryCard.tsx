import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "../analytics.copy";
import type { ManagedWorker } from "../analytics.mock";
import { MintNoteCard } from "./MintNoteCard";

/* EM-R2-01 (1107:157–160) mint "CAREER ASSETS" summary: a 10px #667a73
   counts line over a 9px #667a73 portability note. */
export function CareerAssetsSummaryCard({ worker }: { worker: ManagedWorker }) {
  const c = useSectionCopy(ANALYTICS_COPY);

  const summary = c.continuity.careerAssetsSummary
    .replace("{certificates}", String(worker.certificates))
    .replace("{skills}", String(worker.skills));

  return (
    <MintNoteCard title={c.continuity.careerAssetsTitle}>
      <p>{summary}</p>
      <p className="text-[9px] leading-[11px] lg:text-[11px] lg:leading-[16px]">
        {c.continuity.careerAssetsNote}
      </p>
    </MintNoteCard>
  );
}
