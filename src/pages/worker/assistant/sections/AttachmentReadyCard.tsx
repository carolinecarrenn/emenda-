import { useSectionCopy } from "@/i18n/copy";
import { ASSISTANT_COPY } from "../assistant.copy";
import { READY_ATTACHMENT } from "../assistantMock";

/* Attachment ready (Figma WD-59I · 1186:1344 / W-59I · 1084:1470): the picked
   file docked above the composer as a 690x72 strip — 15px semibold file name,
   muted meta line, and a 124x40 outline "Remove" pill on the right. Mobile
   adds the helper line "Attachment ready. Add a message, then send when
   you're ready." Nothing is sent until the worker sends it. */
export function AttachmentReadyCard({ onRemove }: { onRemove: () => void }) {
  const c = useSectionCopy(ASSISTANT_COPY);

  return (
    <div className="lg:max-w-[690px]">
      <div className="flex min-h-[72px] items-center justify-between gap-3 rounded-[16px] border border-lp-line bg-lp-tint px-[18px] py-[12px]">
        <div className="min-w-0">
          <p className="truncate text-[15px] font-semibold text-lp-ink">
            {READY_ATTACHMENT.name}
          </p>
          <p className="mt-[4px] text-[12px] text-lp-muted">
            <span className="lg:hidden">{c.attachmentMetaMobile}</span>
            <span className="hidden lg:inline">{c.attachmentMetaDesktop}</span>
          </p>
        </div>
        <button
          type="button"
          onClick={onRemove}
          className="flex h-[40px] w-[124px] shrink-0 items-center justify-center rounded-[12px] border border-lp-line bg-white text-[13px] font-semibold text-lp-green hover:border-lp-green"
        >
          {c.remove}
        </button>
      </div>
      <p className="mt-[10px] text-[12px] leading-[18px] text-lp-muted lg:hidden">
        {c.attachmentHelper}
      </p>
    </div>
  );
}
