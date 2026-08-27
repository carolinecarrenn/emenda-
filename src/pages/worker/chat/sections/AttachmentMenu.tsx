import { Clipboard, FileText, Image, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { CHAT_COPY } from "../chat.copy";

/* W-58E — Attachment Menu (1051:677): a 350x250 white sheet, radius 18,
   floating above the composer over a scrim that covers the thread body only.
   Each row is a 32px mint tile beside a 12/16 semibold title and a 10/14
   caption. Desktop WD-58E (1182:6936) is the 380x260 inline popover. */
export function AttachmentMenu({
  onSelect,
  onDismiss,
}: {
  onSelect: () => void;
  onDismiss: () => void;
}) {
  const c = useSectionCopy(CHAT_COPY);
  const options: { icon: LucideIcon; title: string; body: string }[] = [
    { icon: Image, title: c.attach.photoTitle, body: c.attach.photoBody },
    { icon: FileText, title: c.attach.documentTitle, body: c.attach.documentBody },
    { icon: Clipboard, title: c.attach.pasteTitle, body: c.attach.pasteBody },
    { icon: MapPin, title: c.attach.locationTitle, body: c.attach.locationBody },
  ];

  return (
    <>
      {/* Desktop inline popover */}
      <div className="hidden w-[380px] rounded-[14px] border border-lp-line bg-white p-[14px] shadow-[0_8px_24px_rgba(12,89,65,0.08)] lg:block">
        <p className="text-[15px] leading-[24px] font-semibold text-lp-ink">
          {c.attach.menuTitle}
        </p>
        <div className="mt-[12px] space-y-[4px]">
          {options.map((option) => (
            <button
              key={option.title}
              type="button"
              onClick={onSelect}
              className="flex h-[46px] w-full flex-col justify-center rounded-[10px] bg-lp-tint px-[14px] text-left hover:bg-lp-mint"
            >
              <span className="text-[12px] leading-[18px] font-semibold text-lp-ink">
                {option.title}
              </span>
              <span className="text-[11px] leading-[18px] text-lp-muted">
                {option.body}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile sheet + scrim (W-58E) */}
      <div className="lg:hidden">
        <button
          type="button"
          aria-hidden
          tabIndex={-1}
          onClick={onDismiss}
          className="fixed inset-0 z-40 cursor-default bg-black/25"
        />
        <div className="relative z-50 rounded-[18px] border border-[#d9e1dc] bg-white px-[14px] py-[14px] shadow-[0_8px_24px_rgba(12,89,65,0.14)]">
          <p className="text-[15px] leading-[20px] font-semibold text-[#131f1a]">
            {c.attach.menuTitle}
          </p>
          <div className="mt-[10px] flex flex-col gap-[8px]">
            {options.map((option) => (
              <button
                key={option.title}
                type="button"
                onClick={onSelect}
                className="flex items-center gap-[12px] rounded-[10px] px-[2px] py-[4px] text-left hover:bg-lp-tint"
              >
                <span className="flex size-[32px] shrink-0 items-center justify-center rounded-[8px] bg-[#e8f2ec] text-[#2f6a53]">
                  <option.icon size={16} strokeWidth={1.8} aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-[12px] leading-[16px] font-semibold text-[#131f1a]">
                    {option.title}
                  </span>
                  <span className="block text-[10px] leading-[14px] text-[#596b61]">
                    {option.body}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
