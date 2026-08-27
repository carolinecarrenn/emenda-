import { X } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { ASSISTANT_COPY } from "../assistant.copy";
import { AssistantSheet } from "./AssistantSheet";

/* "Add attachment" options (Figma WD-59D · 1186:935 desktop popover and
   W-59D · 1084:933 mobile bottom sheet). Four 336x40 rows on #f2f9f5
   radius-10 fills, each pairing an 11px semibold title with a 10px muted
   description in a second column — including the privacy-minded
   "Share location only when needed" caption on Location. */
export function AttachmentMenu({
  onSelectDocument,
  onClose,
}: {
  onSelectDocument: () => void;
  onClose: () => void;
}) {
  const c = useSectionCopy(ASSISTANT_COPY);
  const common = useCommonCopy();

  const options = [
    { title: c.photoTitle, desc: c.photoDesc, onSelect: onClose },
    {
      title: c.documentTitle,
      desc: c.documentDesc,
      onSelect: onSelectDocument,
    },
    { title: c.pasteTitle, desc: c.pasteDesc, onSelect: onClose },
    { title: c.locationTitle, desc: c.locationDesc, onSelect: onClose },
  ];

  const rows = (
    <div className="space-y-[4px]">
      {options.map((option) => (
        <button
          key={option.title}
          type="button"
          onClick={option.onSelect}
          className="flex w-full items-center gap-[10px] rounded-[10px] bg-lp-tint px-[12px] py-[10px] text-left hover:bg-lp-mint lg:h-[40px] lg:py-0"
        >
          <span className="w-[118px] shrink-0 text-[11px] font-semibold text-lp-ink">
            {option.title}
          </span>
          <span className="text-[10px] leading-[14px] text-lp-muted">
            {option.desc}
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <>
      {/* Desktop WD-59D — inline 360x230 popover card above the composer. */}
      <div className="relative hidden w-[360px] rounded-[16px] border border-lp-line bg-white px-[11px] pt-[11px] pb-[11px] lg:block">
        <div className="flex items-center justify-between pl-[6px]">
          <p className="text-[15px] font-semibold text-lp-ink">
            {c.addAttachment}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label={common.action.close}
            className="flex size-[28px] items-center justify-center rounded-[14px] text-lp-muted hover:bg-lp-tint hover:text-lp-green"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>
        <div className="mt-[8px]">{rows}</div>
      </div>

      {/* Mobile W-59D — scrim + bottom sheet with the same four rows. */}
      <AssistantSheet onClose={onClose}>
        <div className="flex items-center justify-between">
          <p className="text-[17px] font-semibold text-lp-ink">
            {c.addAttachment}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label={common.action.close}
            className="flex size-[28px] items-center justify-center rounded-[14px] text-lp-muted"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>
        <div className="mt-[14px]">{rows}</div>
      </AssistantSheet>
    </>
  );
}
