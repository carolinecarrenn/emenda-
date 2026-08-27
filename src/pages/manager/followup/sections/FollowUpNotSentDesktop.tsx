import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import type { FollowUpSignal } from "../followupMock";
import { NotSentFailureCard } from "./NotSentFailureCard";
import { FollowUpPrivacyStrip } from "./FollowUpPrivacyStrip";

/* MD-09C Follow-up Not Sent, desktop composition (1226:1505).
   The 920px failure card sits 80px in from the content edge and carries the
   peach banner, the recipient, the guidance blocks and the "Return to
   Compose" / "Back to Queue" pair; a 920px mint boundary strip follows, then
   the closing privacy strip. The 390px EM-09C keeps its stacked cards. */
export function FollowUpNotSentDesktop({
  signal,
}: {
  signal: FollowUpSignal;
}) {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <div className="hidden lg:mt-[45px] lg:block">
      <div className="ml-[80px]">
        <NotSentFailureCard signal={signal}>
          <div className="flex gap-[20px]">
            <Link
              to={`/manager/follow-up/${signal.id}/compose`}
              className="flex h-[42px] w-[220px] shrink-0 items-center justify-center rounded-[9px] bg-[#0c5941] text-[12px] font-semibold text-white hover:bg-brand-deep"
            >
              {c.notSent.returnCta}
            </Link>
            <Link
              to="/manager/follow-up"
              className="flex h-[42px] w-[180px] shrink-0 items-center justify-center rounded-[9px] border border-[#dbe3de] bg-white text-[12px] font-semibold text-[#083d2d] hover:border-brand"
            >
              {c.notSent.backCta}
            </Link>
          </div>
        </NotSentFailureCard>

        <div className="mt-[30px] flex h-[72px] w-[920px] items-center rounded-[10px] bg-[#e3f0e8] px-[24px]">
          <p className="text-[11px] font-semibold text-[#083d2d]">
            {c.notSent.boundaryDesktop}
          </p>
        </div>
      </div>

      <div className="mt-[118px]">
        <FollowUpPrivacyStrip>
          {c.notSent.privacyStripDesktop}
        </FollowUpPrivacyStrip>
      </div>
    </div>
  );
}
