import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINEMPLOYEES_COPY } from "../employees.copy";

/* Shared dialog chrome for the AD-02B action states (1226:6, 1226:28) and the
   AD-02D operational forms (1239:200, 1239:225, 1239:250). The frames draw the
   panels flat on a board, so the panel itself is supplied by the caller; this
   file only adds the scrim, the centring and a dismiss control — AD-02B's
   detail panel has no Cancel button, so an explicit close is required for the
   overlay to be escapable. */

const WIDTH = {
  /** AD-02B "Invite employee modal" (1226:6) is 320 wide. */
  invite: "max-w-[320px]",
  /** AD-02B "Employee detail" (1226:28) is 328 wide. */
  detail: "max-w-[328px]",
  /** The AD-02D operational panels (1239:200 …) are 760 wide. */
  wide: "max-w-[760px]",
} as const;

export function EmployeeOverlay({
  label,
  size,
  onClose,
  children,
}: {
  label: string;
  size: keyof typeof WIDTH;
  onClose: () => void;
  children: ReactNode;
}) {
  const c = useSectionCopy(ADMINEMPLOYEES_COPY);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 lg:p-[40px]">
      <button
        type="button"
        aria-label={c.closeOverlay}
        onClick={onClose}
        className="fixed inset-0 bg-[#0f1f1a]/45"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className={`relative z-10 mx-auto w-full ${WIDTH[size]}`}
      >
        {children}
        <button
          type="button"
          aria-label={c.closeOverlay}
          onClick={onClose}
          className="absolute top-[14px] right-[14px] flex size-[28px] items-center justify-center rounded-[8px] text-[#65746d] hover:bg-[#f7faf8]"
        >
          <X className="size-[16px]" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
