import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import type { FollowUpSignal } from "../followupMock";
import { SentHeroCard } from "./SentHeroCard";
import { SentMetricQuad } from "./SentMetricQuad";
import { SentHistoryCard } from "./SentHistoryCard";
import { FollowUpPrivacyStrip } from "./FollowUpPrivacyStrip";

/* MD-10 Follow-up Sent, desktop composition (1226:1447).
   Mint success hero → TEMPLATE / SENT / MANAGER / STATUS metric quad →
   FOLLOW-UP HISTORY table → a 200px "Back to Follow-up" button beside the
   840px mint boundary strip → the closing privacy strip. The 390px EM-10
   record card keeps its own stacked presentation. */
export function FollowUpSentDesktop({ signal }: { signal: FollowUpSignal }) {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <div className="hidden lg:mt-[25px] lg:block">
      <SentHeroCard signal={signal} />

      <div className="mt-[28px]">
        <SentMetricQuad signal={signal} />
      </div>

      <div className="mt-[24px]">
        <SentHistoryCard />
      </div>

      <div className="mt-[32px] flex items-start gap-[20px]">
        <Link
          to="/manager/follow-up"
          className="flex h-[42px] w-[200px] shrink-0 items-center justify-center rounded-[9px] border border-[#dbe3de] bg-white text-[12px] font-semibold text-[#083d2d] hover:border-brand"
        >
          {c.sent.backCta}
        </Link>
        <div className="flex h-[64px] min-w-0 flex-1 items-center rounded-[10px] bg-[#e3f0e8] px-[24px]">
          <p className="text-[11px] font-semibold text-[#083d2d]">
            {c.sent.boundaryDesktop}
          </p>
        </div>
      </div>

      <div className="mt-[94px]">
        <FollowUpPrivacyStrip>{c.sent.privacyStripDesktop}</FollowUpPrivacyStrip>
      </div>
    </div>
  );
}
