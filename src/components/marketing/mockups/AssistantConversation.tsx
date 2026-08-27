import { FileText, Sparkles } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { MOCKS_COPY } from "@/pages/marketing/mocks.copy";
import { AssistantFrame } from "./AssistantFrame";
import { UserBubble } from "./UserBubble";
import { AssistantBubble } from "./AssistantBubble";

/**
 * A photographed document explained back in plain language, with the citation
 * chip and the follow-up EMENDA offers next. Used on the homepage product
 * preview and again on /features.
 */
export function AssistantConversation() {
  const m = useSectionCopy(MOCKS_COPY);

  return (
    <AssistantFrame
      appName={m.assistant.appName}
      status={m.assistant.status}
      composer={m.assistant.composerMultilingual}
    >
      <div className="flex justify-end">
        <span className="flex items-center gap-2 rounded-[14px] border border-lp-line bg-white px-3 py-2 text-[11.5px] font-medium text-lp-muted shadow-lp-sm">
          <FileText size={14} strokeWidth={1.75} aria-hidden="true" />
          {m.document.fileName}
        </span>
      </div>

      <UserBubble>{m.document.userMessage}</UserBubble>

      <AssistantBubble>
        <p className="text-[13px] leading-[1.6] font-semibold text-lp-ink">
          {m.document.answerLead}
        </p>
        <p className="mt-1.5 text-[13px] leading-[1.6] text-lp-muted">
          {m.document.answerBody}
        </p>
        <span className="mt-3 inline-flex items-center rounded-full border border-lp-line bg-lp-tint px-2.5 py-1 text-[10.5px] font-semibold text-lp-green">
          {m.document.sourceChip}
        </span>
      </AssistantBubble>

      <div className="flex">
        <span className="inline-flex items-center gap-2 rounded-full border border-lp-line bg-white px-3.5 py-2 text-[12px] font-medium text-lp-green shadow-lp-sm">
          <Sparkles size={13} strokeWidth={1.9} aria-hidden="true" />
          {m.document.followUp}
        </span>
      </div>
    </AssistantFrame>
  );
}
