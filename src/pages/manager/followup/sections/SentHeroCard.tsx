import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import type { FollowUpSignal } from "../followupMock";
import { fill } from "./followupLabels";

/* MD-10 success hero (1226:1469): full 1060px mint #e3f0e8 band, radius 12,
   92px tall — an 18px semibold #083d2d "Follow-up sent · {worker}" over an
   11px #65746d confirmation line, both inset 24px. Desktop only. */
export function SentHeroCard({ signal }: { signal: FollowUpSignal }) {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <div className="h-[92px] rounded-[12px] bg-[#e3f0e8] px-[24px] pt-[22px]">
      <p className="text-[18px] font-semibold text-[#083d2d]">
        {fill(c.sent.heroTitle, { worker: signal.workerName })}
      </p>
      <p className="mt-[4px] text-[11px] text-[#65746d]">{c.sent.heroBody}</p>
    </div>
  );
}
