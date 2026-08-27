import { useProfileCopy } from "../profile.copy";
import { ProfileOverlay } from "./ProfileOverlay";

/** WD-20E / W-20E "Discard changes?" guard dialog: Keep editing (primary)
 *  above Discard changes (outline, red label). */
export function UnsavedChangesDialog({
  onKeepEditing,
  onDiscard,
}: {
  onKeepEditing: () => void;
  onDiscard: () => void;
}) {
  const c = useProfileCopy();
  return (
    <ProfileOverlay
      background="#ffffff"
      bordered
      placement="center"
      panelClassName="mx-5 w-[calc(100%-40px)] rounded-[20px] px-5 pt-5 pb-5 lg:mx-0 lg:w-[520px] lg:rounded-[18px] lg:px-6 lg:pb-6"
      onScrimClick={onKeepEditing}
    >
      <p className="text-[20px] leading-[24px] font-semibold text-[#121f1a] lg:leading-[30px]">
        {c.discardTitle}
      </p>
      <p className="mt-[10px] text-[13px] text-[#61756e] lg:mt-2">
        {c.discardBody}
      </p>
      <div className="mt-[34px] flex flex-col gap-[10px] lg:mt-5">
        <button
          type="button"
          onClick={onKeepEditing}
          className="flex h-[48px] w-full items-center justify-center rounded-[14px] bg-[#085b41] text-[14px] font-semibold text-white hover:bg-brand-deep"
        >
          {c.keepEditing}
        </button>
        <button
          type="button"
          onClick={onDiscard}
          className="flex h-[46px] w-full items-center justify-center rounded-[14px] border border-[#d1dbd6] bg-white text-[14px] font-semibold text-[#b21f1a] hover:bg-[#fff6f4]"
        >
          {c.discardChanges}
        </button>
      </div>
    </ProfileOverlay>
  );
}
