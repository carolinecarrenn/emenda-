import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "../analytics.copy";
import type { WorkLogRecord } from "../analytics.mock";
import { MintNoteCard } from "./MintNoteCard";

/* EM-R2-03 (1107:223–225) mint "VERIFICATION & SOURCE" card: two 10px #667a73
   lines — status/source, then who recorded it and the preserved evidence. */
export function VerificationSourceCard({ record }: { record: WorkLogRecord }) {
  const common = useCommonCopy();
  const c = useSectionCopy(ANALYTICS_COPY);

  const statusLine = c.recordDetail.verificationStatusLine
    .replace(
      "{status}",
      record.status === "verified"
        ? common.status.verified
        : c.status.recorded,
    )
    .replace("{source}", c.workLog.sources[record.source]);

  const recordedLine = c.recordDetail.verificationRecordedLine
    .replace("{name}", record.recordedBy)
    .replace("{evidence}", c.recordDetail.preservedSource);

  return (
    <MintNoteCard title={c.recordDetail.verificationTitle}>
      <p>{statusLine}</p>
      <p>{recordedLine}</p>
    </MintNoteCard>
  );
}
