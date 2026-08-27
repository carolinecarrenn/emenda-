import type { ReactNode } from "react";

/* Mobile bottom sheet used by W-59D (attachment menu) and W-59H (source
   detail): full-screen scrim + white panel docked to the bottom with an
   18px top radius. Mobile only — the same content renders as an inline card
   inside the desktop workspace (WD-59D / WD-59H). */
export function AssistantSheet({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-30 flex items-end lg:hidden">
      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/40"
      />
      <div className="relative w-full rounded-t-[18px] border-t border-lp-line bg-white px-[20px] pt-[20px] pb-[30px]">
        {children}
      </div>
    </div>
  );
}
