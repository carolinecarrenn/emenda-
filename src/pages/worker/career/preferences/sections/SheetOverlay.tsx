import type { ReactNode } from "react";

/* Desktop selector/confirm sheets (WD-29D/29E-H): full-screen scrim with a
   520px rounded-18 panel centered at ~y230. On mobile (W-29E-H) the same
   panel renders as a bottom sheet sliding over the dimmed screen. */
export function SheetOverlay({
  children,
  tone = "sheet",
  onScrimClick,
}: {
  children: ReactNode;
  /** "sheet" = #f9fbf8 selector panel · "dialog" = white confirm panel */
  tone?: "sheet" | "dialog";
  onScrimClick?: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center lg:items-center ${
        tone === "dialog" ? "items-center" : "items-end"
      }`}
    >
      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        onClick={onScrimClick}
        className={`absolute inset-0 cursor-default ${
          tone === "dialog" ? "bg-black/[0.05]" : "bg-black/[0.28]"
        }`}
      />
      <div
        className={`relative w-full lg:w-[520px] lg:rounded-[18px] lg:p-[27px] ${
          tone === "dialog"
            ? "rounded-[20px] bg-white px-[20px] pt-[24px] pb-[56px] lg:rounded-[18px] lg:px-[27px] lg:pt-[22px] lg:pb-[80px]"
            : "rounded-t-[18px] bg-[#f9fbf8] p-[27px]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
