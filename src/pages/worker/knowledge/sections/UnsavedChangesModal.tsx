import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { KNOWLEDGE_COPY } from "../knowledge.copy";
import { KnowledgeButton } from "./KnowledgeButton";

interface UnsavedChangesModalProps {
  onKeepEditing: () => void;
  onDiscard: () => void;
}

/* Unsaved-changes guard (W-44E / WD-44E): a centred white 18px-radius card
   over the scrim — 334px wide on mobile, 520px on desktop — with an 18px
   title, a 12px body and the two stacked actions the mock orders as outlined
   "Keep editing" above filled "Discard changes". */
export function UnsavedChangesModal({
  onKeepEditing,
  onDiscard,
}: UnsavedChangesModalProps) {
  const c = useSectionCopy(KNOWLEDGE_COPY);
  const common = useCommonCopy();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-[28px] lg:px-0">
      <button
        type="button"
        aria-label={common.action.close}
        onClick={onKeepEditing}
        className="absolute inset-0 bg-[#141c1a]/35"
      />
      <div className="relative w-full rounded-[18px] bg-white px-[19px] pt-[21px] pb-[19px] lg:w-[520px] lg:p-[28px]">
        <p className="text-[18px] leading-[28px] font-semibold text-[#17231f] lg:text-[20px] lg:leading-normal lg:text-[#0e1f18]">
          {c.ask.unsavedTitle}
        </p>
        <p className="mt-[10px] min-h-[70px] text-[12px] leading-[19px] text-lp-muted lg:min-h-0 lg:text-[13px] lg:leading-[20px]">
          {c.ask.unsavedBody}
        </p>
        <div className="mt-[46px] space-y-[10px] lg:mt-[34px] lg:space-y-3">
          <KnowledgeButton variant="secondary" onClick={onKeepEditing}>
            {c.ask.keepEditing}
          </KnowledgeButton>
          <KnowledgeButton onClick={onDiscard}>
            {c.ask.discardChanges}
          </KnowledgeButton>
        </div>
      </div>
    </div>
  );
}
