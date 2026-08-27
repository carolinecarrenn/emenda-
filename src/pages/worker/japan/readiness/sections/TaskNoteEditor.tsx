import { PrimaryButton, SecondaryButton } from "./primitives";

/* Task note editor. Mobile (Figma 629:13): 10px uppercase NOTE · OPTIONAL
   label, a 116px white note field with 13px regular text, a 48px solid
   Save note and a 44px white Cancel stacked under it. Desktop keeps the
   WD-34F two-column arrangement. Button label swaps per note state
   (Saving… / Try saving again / Save when online — WD-34N/O/P). */
export function TaskNoteEditor({
  label,
  note,
  onNoteChange,
  saveLabel,
  saving,
  cancelLabel,
  onSave,
  onCancel,
}: {
  label: string;
  note: string;
  onNoteChange: (value: string) => void;
  saveLabel: string;
  saving: boolean;
  cancelLabel: string;
  onSave: () => void;
  onCancel: () => void;
}) {
  return (
    <div>
      <p className="text-[10px] font-semibold tracking-[0.05em] text-[#5e7066] uppercase lg:text-[12px] lg:font-normal lg:tracking-normal lg:normal-case">
        {label}
      </p>
      <div className="mt-[8px] grid gap-y-[12px] lg:mt-[16px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[24px]">
        <div className="h-[116px] rounded-[14px] border border-[#d5e0db] bg-white px-[14px] py-[14px] lg:h-[104px] lg:px-[15px] lg:py-[15px]">
          <textarea
            aria-label={label}
            rows={3}
            value={note}
            onChange={(e) => onNoteChange(e.target.value)}
            className="h-full w-full resize-none border-0 bg-transparent p-0 text-[13px] leading-[20px] text-[#131f1a] focus:ring-0 focus:outline-none lg:text-[15px] lg:leading-[22px] lg:font-semibold"
          />
        </div>
        <div className="mt-[14px] lg:mt-0">
          <PrimaryButton label={saveLabel} onClick={onSave} disabled={saving} />
        </div>
        <SecondaryButton label={cancelLabel} onClick={onCancel} />
      </div>
    </div>
  );
}
