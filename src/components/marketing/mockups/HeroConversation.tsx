import { CircleCheck } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { MOCKS_COPY } from "@/pages/marketing/mocks.copy";
import { AssistantFrame } from "./AssistantFrame";
import { UserBubble } from "./UserBubble";
import { AssistantBubble } from "./AssistantBubble";
import { ChecklistBlock } from "./ChecklistBlock";
import { ActionCard } from "./ActionCard";

const CHIP: Record<string, string> = { en: "EN", ja: "日本語", id: "ID" };

/**
 * The homepage hero's product proof: one real question answered end to end —
 * explanation, the documents you need, then the place to go. A visitor should
 * understand what EMENDA does from this alone, without reading the headline.
 */
export function HeroConversation() {
  const m = useSectionCopy(MOCKS_COPY);
  const { language } = useLanguage();

  return (
    <div className="relative">
      <AssistantFrame
        appName={m.assistant.appName}
        status={m.assistant.status}
        languageChip={CHIP[language]}
        composer={m.assistant.composer}
      >
        <UserBubble>{m.address.userMessage}</UserBubble>

        <AssistantBubble>
          <p className="text-[13px] leading-[1.6] text-lp-ink">
            {m.address.answerLead}
          </p>
          <ChecklistBlock label={m.address.stepsLabel} items={m.address.steps} />
        </AssistantBubble>

        <ActionCard
          label={m.address.actionLabel}
          title={m.address.actionTitle}
          meta={m.address.actionMeta}
          cta={m.address.actionCta}
        />
      </AssistantFrame>

      {/* Follow-through, made visible: the answer became something with a
          deadline. It tucks under the frame's bottom-left corner rather than
          floating over it — an overlay here would sit on top of the composer,
          which is the one part of the mockup that has to stay legible. */}
      <div className="relative z-10 -mt-5 ml-1 w-[248px] rounded-[18px] border border-lp-line bg-white p-3.5 shadow-lp-lg sm:-ml-6 lg:-ml-10">
        <div className="flex items-start gap-2.5">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-lp-mint text-lp-green">
            <CircleCheck size={17} strokeWidth={1.9} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold tracking-[0.06em] text-lp-green uppercase">
              {m.address.savedLabel}
            </p>
            <p className="mt-1 text-[13px] font-semibold text-lp-ink">
              {m.address.savedTitle}
            </p>
            <p className="mt-0.5 text-[11px] text-lp-muted">
              {m.address.savedMeta}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
