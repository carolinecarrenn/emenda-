/** WD-23H/23I review-skill / review-language overlay. Desktop: centered
 *  520px card over a 28% scrim; mobile: bottom sheet (W-23 pattern).
 *  "Remove from import" is the danger action (red border + red label). */
export function ReviewItemSheet({
  title,
  body,
  item,
  keepLabel,
  removeLabel,
  cancelLabel,
  onKeep,
  onRemove,
  onCancel,
}: {
  title: string;
  body: string;
  item: string;
  keepLabel: string;
  removeLabel: string;
  cancelLabel: string;
  onKeep: () => void;
  onRemove: () => void;
  onCancel: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/28 lg:items-center"
      onClick={onCancel}
    >
      <div
        className="w-full rounded-t-[16px] bg-[#f9fbf8] px-[27px] py-[20px] lg:h-[394px] lg:w-[520px] lg:rounded-[20px]"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-[20px] font-semibold text-[#17231f]">{title}</p>
        <p className="mt-[12px] text-[13px] text-[#65746d]">{body}</p>
        <p className="mt-[36px] text-[15px] font-semibold text-[#17231f]">
          {item}
        </p>
        <button
          type="button"
          onClick={onKeep}
          className="mt-[33px] flex h-[48px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[13px] font-semibold text-white hover:bg-lp-green"
        >
          {keepLabel}
        </button>
        <button
          type="button"
          onClick={onRemove}
          className="mt-[10px] flex h-[46px] w-full items-center justify-center rounded-[14px] border border-[#eed2d0] bg-white text-[13px] font-semibold text-[#b42318] hover:bg-[#fdf3f2]"
        >
          {removeLabel}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="mt-[10px] flex h-[40px] w-full items-center justify-center rounded-[14px] border border-[#e3ebe7] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-lp-tint"
        >
          {cancelLabel}
        </button>
      </div>
    </div>
  );
}
