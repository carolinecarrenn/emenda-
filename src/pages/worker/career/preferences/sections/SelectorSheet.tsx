import { useCommonCopy } from "@/i18n/common";
import { SheetOverlay } from "./SheetOverlay";

/* WD-29E/F/H selector sheet: 20px title, 13px body, 42px white option pills
   with 12px semibold #0b5842 labels, 36px Cancel pill. */
export function SelectorSheet({
  title,
  body,
  options,
  onSelect,
  onCancel,
}: {
  title: string;
  body: string;
  options: { key: string; label: string }[];
  onSelect: (key: string) => void;
  onCancel: () => void;
}) {
  const common = useCommonCopy();

  return (
    <SheetOverlay onScrimClick={onCancel}>
      <p className="text-[20px] leading-[28px] font-semibold text-[#17231f]">
        {title}
      </p>
      <p className="mt-[8px] text-[13px] text-[#65746d]">{body}</p>
      <div className="mt-[18px] space-y-[8px]">
        {options.map((option) => (
          <button
            key={option.key}
            type="button"
            onClick={() => onSelect(option.key)}
            className="flex h-[42px] w-full items-center justify-center rounded-[12px] border border-[#d1ddd7] bg-white text-[12px] font-semibold text-[#0b5842] hover:bg-[#ebf5ef]"
          >
            {option.label}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={onCancel}
        className="mt-[16px] flex h-[36px] w-full items-center justify-center rounded-[12px] border border-[#d1ddd7] bg-white text-[12px] font-semibold text-[#0b5842] hover:bg-[#ebf5ef]"
      >
        {common.action.cancel}
      </button>
    </SheetOverlay>
  );
}
