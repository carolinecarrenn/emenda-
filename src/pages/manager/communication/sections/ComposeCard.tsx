import { WORKER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY } from "../communication.copy";
import type {
  ConversationSummary,
  MessageTemplate,
  MessageTemplateId,
} from "../communicationData";
import { ComposeTemplateChips } from "./ComposeTemplateChips";

/* MD-08 compose card (1225:181–199): a 720x456 white card, radius 12,
   #dbe3de hairline, headed by an 11px semibold #0c5941 "COMPOSE MESSAGE".
   Inside, 10px #65746d field labels sit over 13px semibold #083d2d values —
   Recipient (name · EMENDA ID) and Original language (日本語) on the left,
   the Template chip row on the right — then a 648x90 #f1f6f3 radius-10
   message box in 12px #141f1a and, under the 10px #0c5941 "TRANSLATION
   PREVIEW · Bahasa Indonesia" label, a 648x74 #e3f0e8 radius-10 preview box.
   Desktop only; the 390px compose screen stacks the same facts as cards.
   The message box is a real field — switching template reseeds it. */
export function ComposeCard({
  conversation,
  template,
  templateId,
  onTemplate,
}: {
  conversation: ConversationSummary;
  template: MessageTemplate;
  templateId: MessageTemplateId;
  onTemplate: (value: MessageTemplateId) => void;
}) {
  const c = useSectionCopy(COMMUNICATION_COPY);

  const recipientLine =
    conversation.id === "putri-rahayu"
      ? `${conversation.name} · ${WORKER.emendaId}`
      : conversation.name;

  return (
    <section className="hidden lg:block lg:w-[720px] lg:shrink-0">
      <div className="h-[456px] rounded-[12px] border border-[#dbe3de] bg-white px-[24px] py-[24px]">
        <h2 className="text-[11px] font-semibold text-brand uppercase">
          {c.compose.card.title}
        </h2>

        <div className="mt-[20px]">
          <p className="text-[10px] font-semibold text-[#65746d]">
            {c.compose.card.recipient}
          </p>
          <p className="mt-[6px] text-[13px] font-semibold text-brand-deep">
            {recipientLine}
          </p>
        </div>

        {/* 1225:185–193 · the Template column opens 216px right of the field
            gutter, so the chips line up under their own label. */}
        <div className="mt-[20px] flex">
          <div className="w-[216px] shrink-0">
            <p className="text-[10px] font-semibold text-[#65746d]">
              {c.compose.card.originalLanguage}
            </p>
            <p className="mt-[6px] text-[13px] font-semibold text-brand-deep">
              {c.compose.card.originalLanguageValue}
            </p>
          </div>
          <ComposeTemplateChips
            surface="desktop"
            template={templateId}
            onTemplate={onTemplate}
          />
        </div>

        <div className="mt-[22px]">
          <p className="text-[10px] font-semibold text-[#65746d]">
            {c.compose.card.message}
          </p>
          <textarea
            key={templateId}
            aria-label={c.compose.messageAriaLabel}
            defaultValue={template.originalLines.join("\n")}
            rows={3}
            className="mt-[5px] block h-[90px] w-[648px] max-w-full resize-none rounded-[10px] bg-[#f1f6f3] px-[16px] py-[16px] text-[12px] leading-[15px] text-[#141f1a] focus:outline-2 focus:outline-offset-2 focus:outline-brand"
          />
        </div>

        <div className="mt-[22px]">
          <p className="text-[10px] font-semibold text-brand">
            {c.compose.translationPreviewDesktop}
          </p>
          <div className="mt-[3px] h-[74px] w-[648px] max-w-full rounded-[10px] bg-[#e3f0e8] px-[16px] py-[16px]">
            {template.translationLines.map((line) => (
              <p key={line} className="text-[12px] leading-[15px] text-[#141f1a]">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
