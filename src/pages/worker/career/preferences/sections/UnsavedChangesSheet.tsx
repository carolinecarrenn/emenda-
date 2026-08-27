import { SheetOverlay } from "./SheetOverlay";

/* WD-29D / WD-31C unsaved-changes confirm sheet: white 520px panel,
   20px title, 13px muted body, solid "Keep editing", outline red
   "Discard changes". Copy is passed in so both screens reuse it. */
export function UnsavedChangesSheet({
  title,
  body,
  keepLabel,
  discardLabel,
  onKeep,
  onDiscard,
}: {
  title: string;
  body: string;
  keepLabel: string;
  discardLabel: string;
  onKeep: () => void;
  onDiscard: () => void;
}) {
  return (
    <SheetOverlay tone="dialog" onScrimClick={onKeep}>
      <p className="text-[20px] leading-[26px] font-semibold text-[#17231f]">
        {title}
      </p>
      <p className="mt-[9px] text-[13px] leading-[20px] text-[#65746d]">{body}</p>
      <button
        type="button"
        onClick={onKeep}
        className="mt-[36px] flex h-[48px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[13px] font-semibold text-white hover:bg-[#0b5842]"
      >
        {keepLabel}
      </button>
      <button
        type="button"
        onClick={onDiscard}
        className="mt-[10px] flex h-[46px] w-full items-center justify-center rounded-[14px] border border-[#d1ddd7] bg-white text-[13px] font-semibold text-[#b3261e] hover:bg-[#fff1ef]"
      >
        {discardLabel}
      </button>
    </SheetOverlay>
  );
}
