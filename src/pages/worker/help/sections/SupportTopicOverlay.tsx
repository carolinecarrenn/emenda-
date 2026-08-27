import { Check } from "lucide-react";
import { useCommonCopy } from "@/i18n/common";
import { useHelpCopy } from "../help.copy";
import { SUPPORT_TOPIC_IDS, type SupportTopicId } from "../helpMock";

/* Contact Support — Topic Overlay.

   Mobile is canonical (W-48F node 899:369): a 390×390 sheet docked to the
   bottom edge, radius 20 on all four corners, border #d7e2dc, inset 19 —
   18px semibold #17231f "Support topic", 12px #65746d helper, then five
   350×42 outlined option rows (radius 14, border #d7e2dc, CENTRED 12px
   semibold #0c5941 label) 8px apart.

   Desktop keeps WD-48F (node 1200:271): #141f1a scrim at 28%, centered 500px
   card, radius 18, border #d1ded6, inset 27px — 22px title, 14px helper and
   five 58px rows (radius 12, 14px medium #0f1f1a, inset 17px, 12px apart). */
interface SupportTopicOverlayProps {
  selected: SupportTopicId;
  onSelect: (topic: SupportTopicId) => void;
  onClose: () => void;
}

export function SupportTopicOverlay({
  selected,
  onSelect,
  onClose,
}: SupportTopicOverlayProps) {
  const c = useHelpCopy();
  const common = useCommonCopy();

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center lg:items-center">
      <button
        type="button"
        aria-label={common.action.close}
        onClick={onClose}
        className="absolute inset-0 bg-[#141f1a]/28"
      />
      <div className="relative w-full rounded-[20px] border border-[#d7e2dc] bg-white p-[19px] pb-[37px] lg:w-[500px] lg:rounded-[18px] lg:border-lp-line lg:p-[27px]">
        <p className="text-[18px] leading-[28px] font-semibold text-[#17231f] lg:text-[22px] lg:text-lp-ink">
          {c.overlay.title}
        </p>
        <p className="mt-[8px] text-[12px] leading-[18px] text-lp-muted lg:text-[14px]">
          {c.overlay.subtitle}
        </p>
        <div className="mt-[38px] space-y-[8px] lg:mt-[20px] lg:space-y-[12px]">
          {SUPPORT_TOPIC_IDS.map((topicId) => (
            <button
              key={topicId}
              type="button"
              aria-current={topicId === selected}
              onClick={() => onSelect(topicId)}
              className="relative flex h-[42px] w-full items-center justify-center rounded-[14px] border border-[#d7e2dc] bg-white text-[12px] font-semibold text-[#0c5941] hover:border-lp-green lg:h-[58px] lg:justify-between lg:rounded-[12px] lg:border-lp-line lg:px-[17px] lg:text-[14px] lg:font-medium lg:text-lp-ink"
            >
              {c.contact.topics[topicId]}
              {topicId === selected && (
                <Check
                  size={18}
                  strokeWidth={2}
                  className="absolute right-[13px] text-lp-green lg:static"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
