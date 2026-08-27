import { useSectionCopy } from "@/i18n/copy";
import { CHAT_COPY } from "../chat.copy";
import { READY_ATTACHMENT } from "../chatMock";
import { ChatGhostButton } from "./chatUi";

/** File type printed in the attachment meta line — derived from the mock file
 *  name, so it stays raw data rather than translated copy. */
function fileKind(fileName: string): string {
  const dot = fileName.lastIndexOf(".");
  return dot === -1 ? "" : fileName.slice(dot + 1).toUpperCase();
}

/* W-58M — Attachment Ready (1051:994): a 350x62 white card, radius 14, with a
   40px mint file tile, the file name at 13/18 semibold and the
   "PDF · 248 KB · Ready to send" meta at 11/15.
   Desktop WD-58M (1182:7729) keeps the mint strip with the 130x42 "Remove". */
export function AttachmentReadyCard({ onRemove }: { onRemove?: () => void }) {
  const c = useSectionCopy(CHAT_COPY);
  return (
    <>
      <div className="flex min-h-[62px] items-center gap-[12px] rounded-[14px] border border-[#d9e1dc] bg-white px-[12px] py-[10px] lg:hidden">
        <span
          className="size-[40px] shrink-0 rounded-[10px] bg-[#e8f2ec]"
          aria-hidden
        />
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[13px] leading-[18px] font-semibold text-[#131f1a]">
            {READY_ATTACHMENT.fileName}
          </span>
          <span className="block truncate text-[11px] leading-[15px] text-[#596b61]">
            {fileKind(READY_ATTACHMENT.fileName)} · {READY_ATTACHMENT.size} ·{" "}
            {c.attach.readyToSend}
          </span>
        </span>
        <button
          type="button"
          onClick={onRemove}
          className="shrink-0 text-[11px] leading-[15px] font-semibold text-[#0c5941]"
        >
          {c.attach.remove}
        </button>
      </div>

      <div className="hidden min-h-[76px] rounded-[14px] border border-lp-line bg-white px-[18px] py-[10px] lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0">
          <p className="truncate text-[14px] leading-[22px] font-semibold text-[#0a4738]">
            {READY_ATTACHMENT.fileName}
          </p>
          <p className="mt-[1px] truncate text-[12px] leading-[22px] text-lp-muted">
            {fileKind(READY_ATTACHMENT.fileName)} · {READY_ATTACHMENT.size} ·{' '}
            {c.attach.readyToSend}
          </p>
        </div>
        <ChatGhostButton onClick={onRemove} className="h-[42px] w-[130px] shrink-0">
          {c.attach.remove}
        </ChatGhostButton>
      </div>
    </>
  );
}
