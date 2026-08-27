import { Check } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { KNOWLEDGE_COPY } from "../knowledge.copy";
import {
  KNOWLEDGE_TOPIC_IDS,
  type KnowledgeTopicId,
} from "../knowledgeMock";

interface TopicOverlayProps {
  selected: KnowledgeTopicId;
  onSelect: (topic: KnowledgeTopicId) => void;
  onClose: () => void;
}

/* Question topic picker. Mobile (W-44F): a white 20px-radius sheet docked to
   the bottom edge, an 18px title over a 12px helper and five 42px outlined
   options whose green 12px labels are centred — the selected one keeps a
   check pinned to the right so the label stays centred. Desktop (WD-44F):
   the same card centred at 568px over a dim scrim. */
export function TopicOverlay({
  selected,
  onSelect,
  onClose,
}: TopicOverlayProps) {
  const c = useSectionCopy(KNOWLEDGE_COPY);
  const common = useCommonCopy();

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center lg:items-center">
      <button
        type="button"
        aria-label={common.action.close}
        onClick={onClose}
        className="absolute inset-0 bg-[#141c1a]/35"
      />
      <div className="relative w-full rounded-t-[20px] border border-lp-line bg-white px-[19px] pt-[19px] pb-[37px] lg:w-[568px] lg:rounded-[18px] lg:p-[27px]">
        <p className="text-[18px] leading-[28px] font-semibold text-[#17231f] lg:text-[20px] lg:leading-normal lg:text-[#0e1f18]">
          {c.ask.overlayTitle}
        </p>
        <p className="mt-[8px] min-h-[38px] text-[12px] leading-[19px] text-lp-muted lg:min-h-0 lg:text-[13px] lg:leading-normal">
          {c.ask.overlayHelper}
        </p>
        <div className="mt-[18px] space-y-[8px] lg:mt-[20px] lg:space-y-[14px]">
          {KNOWLEDGE_TOPIC_IDS.map((topicId) => (
            <button
              key={topicId}
              type="button"
              onClick={() => onSelect(topicId)}
              className="relative flex h-[42px] w-full items-center justify-center rounded-[14px] border border-lp-line bg-white text-[12px] font-semibold text-brand hover:border-lp-green lg:h-[52px] lg:justify-between lg:rounded-[10px] lg:px-[17px] lg:text-[14px] lg:font-medium lg:text-[#0e1f18]"
            >
              {c.topics[topicId]}
              {topicId === selected && (
                <Check
                  size={18}
                  className="absolute right-[14px] text-lp-green lg:static"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
