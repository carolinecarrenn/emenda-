import type { ReactNode } from "react";

/** Shared overlay chrome for the Personal Profile section.
 *  Desktop (Figma WD-19D/E/F/G, WD-20E, Country Selector): centered 520px
 *  panel, 18px radius, over a 28% black scrim. Mobile (W-19D etc.): the same
 *  panel becomes a rounded-top bottom sheet sliding over the dimmed page. */
const SHEET_PANEL =
  "w-full rounded-t-[24px] px-6 pt-5 pb-6 lg:w-[520px] lg:rounded-[18px]";

export function ProfileOverlay({
  background = "#f7f9f6",
  bordered = false,
  placement = "sheet",
  panelClassName = SHEET_PANEL,
  onScrimClick,
  children,
}: {
  background?: string;
  bordered?: boolean;
  /** W-20E is a centered card on mobile too; every other overlay is a sheet. */
  placement?: "sheet" | "center";
  /** Replaces the panel's geometry classes (width, radius, padding). */
  panelClassName?: string;
  onScrimClick?: () => void;
  children: ReactNode;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center bg-[rgba(0,0,0,0.28)] lg:items-center ${
        placement === "center" ? "items-center" : "items-end"
      }`}
      onClick={onScrimClick}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`${panelClassName} ${
          bordered ? "border border-[#d1dbd6]" : ""
        }`}
        style={{ backgroundColor: background }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
