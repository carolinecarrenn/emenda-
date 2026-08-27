import type { ReactNode } from "react";
import { Mic, Plus, Send } from "lucide-react";
import { BrandMark } from "../BrandMark";

/**
 * Chrome for the EMENDA Assistant mockups: header row, conversation slot and
 * the pinned composer. It mirrors the real assistant surface (WD-59) — 18px
 * card, hairline header, 52px composer pill with plus / mic / send — so the
 * landing page shows the actual product rather than a marketing invention.
 *
 * Nothing inside is focusable. These are pictures of the product, and a
 * keyboard user tabbing through the page should not land on controls that do
 * nothing.
 */
export function AssistantFrame({
  appName,
  status,
  languageChip,
  composer,
  children,
  className = "",
}: {
  appName: string;
  status: string;
  languageChip?: string;
  composer: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[24px] border border-lp-line bg-white shadow-lp-lg ${className}`}
    >
      <header className="flex items-center gap-3 border-b border-lp-line bg-white/90 px-4 py-3.5 sm:px-5">
        <BrandMark size={36} className="shrink-0" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[14px] font-semibold text-lp-ink">
            {appName}
          </p>
          <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-lp-muted">
            <span className="size-1.5 shrink-0 rounded-full bg-[#3fbf88]" />
            {status}
          </p>
        </div>
        {languageChip ? (
          <span className="shrink-0 rounded-full border border-lp-line bg-lp-tint px-2.5 py-1 text-[11px] font-semibold text-lp-green">
            {languageChip}
          </span>
        ) : null}
      </header>

      <div className="space-y-3 bg-lp-bg px-4 py-5 sm:px-5">{children}</div>

      <div className="border-t border-lp-line bg-white px-4 py-3 sm:px-5">
        <div className="flex h-[46px] items-center gap-2 rounded-full border border-lp-line bg-white pr-1.5 pl-1.5">
          <span className="flex size-[32px] shrink-0 items-center justify-center rounded-full bg-lp-mint text-lp-green">
            <Plus size={16} strokeWidth={1.75} aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1 truncate text-[13px] text-lp-muted">
            {composer}
          </span>
          <span className="flex size-[32px] shrink-0 items-center justify-center rounded-full bg-lp-mint text-lp-green">
            <Mic size={15} strokeWidth={1.75} aria-hidden="true" />
          </span>
          <span className="flex size-[32px] shrink-0 items-center justify-center rounded-full bg-lp-button text-white">
            <Send size={15} strokeWidth={1.75} aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  );
}
