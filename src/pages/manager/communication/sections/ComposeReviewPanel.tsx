import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY } from "../communication.copy";
import type {
  ConversationSummary,
  MessageTemplateId,
} from "../communicationData";
import { CommunicationCheckList } from "./CommunicationCheckList";

/* MD-08 review panel (1225:200–218): a 320x456 white card, radius 12,
   #dbe3de hairline, headed "BEFORE SENDING" in 11px semibold #0c5941 over
   four ✓ rows (Original text preserved / Translation preview checked /
   Recipient & facility confirmed / No private worker data), then a 272x92
   mint #e3f0e8 radius-10 "Human review required" block, a 272x42 #0c5941
   "Review message" button and the 130x42 "Back" / "Demo failure" pair.
   "Demo failure" is how the mock reaches MD-07C without faking a send.
   Desktop only. */
export function ComposeReviewPanel({
  conversation,
  templateId,
}: {
  conversation: ConversationSummary;
  templateId: MessageTemplateId;
}) {
  const c = useSectionCopy(COMMUNICATION_COPY);
  const query = `to=${conversation.id}&template=${templateId}`;

  return (
    <aside className="hidden lg:block lg:w-[320px] lg:shrink-0">
      <div className="h-[456px] rounded-[12px] border border-[#dbe3de] bg-white px-[24px] pt-[24px]">
        <h2 className="text-[11px] font-semibold text-brand uppercase">
          {c.compose.panel.title}
        </h2>

        <div className="mt-[26px]">
          <CommunicationCheckList items={c.compose.panel.checks} />
        </div>

        <div className="mt-[35px] h-[92px] rounded-[10px] bg-[#e3f0e8] px-[16px] py-[16px]">
          <p className="text-[12px] font-semibold text-brand-deep">
            {c.compose.panel.humanReviewTitle}
          </p>
          <p className="mt-[9px] text-[10px] leading-[13px] text-[#65746d]">
            {c.compose.panel.humanReviewBody}
          </p>
        </div>

        <Link
          to={`/manager/communication/review?${query}`}
          className="mt-[30px] flex h-[42px] w-full items-center justify-start rounded-[9px] bg-brand px-[16px] text-[12px] font-semibold text-white hover:bg-brand-deep"
        >
          {c.compose.panel.reviewCta}
        </Link>

        <div className="mt-[8px] flex gap-[12px]">
          <Link
            to={`/manager/communication/${conversation.id}`}
            className="flex h-[42px] flex-1 items-center justify-start rounded-[9px] border border-[#dbe3de] bg-white px-[16px] text-[12px] font-semibold text-brand-deep hover:border-brand"
          >
            {c.compose.panel.backCta}
          </Link>
          <Link
            to={`/manager/communication/compose?${query}&state=failed`}
            className="flex h-[42px] flex-1 items-center justify-start rounded-[9px] border border-[#dbe3de] bg-white px-[16px] text-[12px] font-semibold text-brand-deep hover:border-brand"
          >
            {c.compose.panel.demoFailureCta}
          </Link>
        </div>
      </div>
    </aside>
  );
}
