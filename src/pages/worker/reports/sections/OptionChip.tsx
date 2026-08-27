/* Option chip.
   Mobile (W-55 / 55H / 55J / 55L, node 978:113): 30px tall pill, radius 15,
   10px medium label, 10px side padding — selected = #f0f8f3 fill with a
   #0c5941 border and label, unselected = white with a #d9e1dc border and an
   ink label.
   Desktop (WD-55H): 26px tall, radius 13, fixed 130/135px width, semibold
   label — selected = #e8f5ed fill, unselected = white + muted label. */
export function OptionChip({
  label,
  selected,
  onClick,
  size = "md",
  readOnly = false,
}: {
  label: string;
  selected: boolean;
  onClick?: () => void;
  size?: "sm" | "md";
  readOnly?: boolean;
}) {
  const desktopSize =
    size === "sm"
      ? "lg:w-[135px] lg:text-[9px]"
      : "lg:w-[130px] lg:text-[10px]";
  const base = `flex h-[30px] min-w-[76px] shrink-0 items-center justify-center rounded-[15px] border px-[10px] text-[10px] font-medium lg:h-[26px] lg:min-w-0 lg:rounded-[13px] lg:px-0 lg:font-semibold ${desktopSize} ${
    selected
      ? "border-lp-green bg-lp-tint text-lp-green lg:border-lp-line lg:bg-lp-mint"
      : "border-lp-line bg-white text-lp-ink lg:text-lp-muted"
  }`;

  if (readOnly) {
    return <span className={base}>{label}</span>;
  }
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`${base} ${selected ? "" : "hover:border-lp-green hover:text-lp-green"}`}
    >
      {label}
    </button>
  );
}
