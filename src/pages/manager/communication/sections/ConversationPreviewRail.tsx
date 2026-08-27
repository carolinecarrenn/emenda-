import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY, fillCopy } from "../communication.copy";
import type { ConversationSummary, ConversationThread } from "../communicationData";

/* MD-06 preview pane (1225:72–82): 420x340 white card, radius 12, #dbe3de
   hairline — a 17px #083d2d name over an 11px #65746d "Worker · Bahasa
   Indonesia · Translate ON" line, then three stacked blocks each headed by a
   10px semibold #0c5941 label (MANAGER ORIGINAL · 日本語 / TRANSLATED ·
   Bahasa Indonesia / WORKER ORIGINAL · Bahasa Indonesia) over 12px #141f1a
   raw text, closing with the 180x42 #0c5941 "Open Conversation" button.
   Desktop only — the 390px inbox opens the thread directly. */
export function ConversationPreviewRail({
  conversation,
  thread,
}: {
  conversation: ConversationSummary;
  thread: ConversationThread | undefined;
}) {
  const c = useSectionCopy(COMMUNICATION_COPY);

  const managerMessage = thread?.messages.find(
    (message) => message.author === "manager",
  );
  const workerMessage = thread?.messages.find(
    (message) => message.author === "worker",
  );

  const blocks = [
    {
      label: c.list.preview.managerOriginal,
      body: managerMessage?.original,
    },
    {
      label: c.list.preview.translated,
      body: managerMessage?.translation,
    },
    {
      label: fillCopy(c.list.preview.workerOriginal, {
        language: conversation.language,
      }),
      body: workerMessage?.original,
    },
  ];

  return (
    <aside className="hidden lg:mt-[24px] lg:block lg:w-[420px] lg:shrink-0">
      <div className="rounded-[12px] border border-[#dbe3de] bg-white px-[24px] pt-[22px] pb-[6px]">
        <p className="text-[17px] font-semibold text-brand-deep">
          {conversation.name}
        </p>
        <p className="mt-[2px] text-[11px] text-[#65746d]">
          {fillCopy(c.list.preview.workerLine, {
            language: conversation.language,
          })}
        </p>

        <div className="mt-[24px] space-y-[30px]">
          {blocks.map((block) => (
            <div key={block.label}>
              <p className="text-[10px] font-semibold text-brand">
                {block.label}
              </p>
              <p className="mt-[8px] text-[12px] leading-[18px] text-[#141f1a]">
                {block.body}
              </p>
            </div>
          ))}
        </div>

        <Link
          to={`/manager/communication/${conversation.id}`}
          className="mt-[17px] flex h-[42px] w-[180px] items-center justify-start rounded-[9px] bg-brand px-[16px] text-[12px] font-semibold text-white hover:bg-brand-deep"
        >
          {c.list.preview.openConversation}
        </Link>
      </div>
    </aside>
  );
}
