/* Key-value row used across sections 03 / 10.
   EM-18 / EM-18B / EM-18E (761:1184): 51px white card, radius 10, 1px
   hairline, 10px grey label left, 11px bold green value right-aligned.
   EM-18C (1133:9…1133:23) and EM-19A / EM-19B (1133:95…1133:133) instead run
   a fixed key column with the value left-aligned beside it, on 50px / 48px
   cards — pass `keyWidth` + `minHeight` for those frames. */
export function KeyValueRow({
  label,
  value,
  tone = "default",
  keyWidth,
  minHeight = "min-h-[51px]",
}: {
  label: string;
  value: string;
  tone?: "default" | "warning";
  /** Fixed key-column width; when set the value is left-aligned beside it. */
  keyWidth?: string;
  minHeight?: string;
}) {
  return (
    <div
      className={`flex ${minHeight} items-center ${
        keyWidth ? "gap-[8px]" : "gap-4"
      } rounded-[10px] border border-[#d1e0d9] bg-white px-[14px] py-[10px]`}
    >
      <span
        className={`text-[#6e8a82] lg:text-[12px] ${
          keyWidth ? `shrink-0 text-[9px] ${keyWidth}` : "text-[10px]"
        }`}
      >
        {label}
      </span>
      <span
        className={`lg:text-[13px] ${
          keyWidth
            ? "min-w-0 text-[9px] font-semibold"
            : "ml-auto text-right text-[11px] font-bold"
        } ${tone === "warning" ? "text-[#c24529]" : "text-[#094033]"}`}
      >
        {value}
      </span>
    </div>
  );
}
