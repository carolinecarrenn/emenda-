import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINTEAMS_COPY } from "../teams.copy";

/* The AD-03B (1226:57) and AD-03D (1239:274) panels are the action states of
   the AD-03 coverage screen, so they render over it as a centred dialog on a
   scrim — the AD-01 admin drawer pattern (AdminMobileNav, 1182:5693) reused
   for a modal. Below lg the panel becomes a full-width sheet with the same
   content, since Figma draws Company Admin at 1440 only. */
export function TeamsDialog({
  labelledBy,
  onClose,
  widthClass,
  children,
}: {
  labelledBy: string;
  onClose: () => void;
  /** Figma panel width, e.g. "lg:w-[322px]" (AD-03B) or "lg:w-[760px]". */
  widthClass: string;
  children: ReactNode;
}) {
  const c = useSectionCopy(ADMINTEAMS_COPY);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-40 flex items-start justify-center overflow-y-auto p-4 lg:items-center lg:p-[32px]">
      <button
        type="button"
        aria-label={c.closeDialog}
        onClick={onClose}
        className="absolute inset-0 bg-[#0f1f1a]/40"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={`relative w-full rounded-[12px] border border-[#d6e3de] bg-white p-[19px] lg:max-h-[calc(100vh-64px)] lg:overflow-y-auto ${widthClass}`}
      >
        <button
          type="button"
          aria-label={c.closeDialog}
          onClick={onClose}
          className="absolute top-[14px] right-[14px] flex size-[28px] items-center justify-center rounded-[8px] border border-[#d6e3de] bg-white hover:bg-[#f2f7f5]"
        >
          <X className="size-[14px] text-[#65746d]" aria-hidden="true" />
        </button>
        {children}
      </div>
    </div>
  );
}
