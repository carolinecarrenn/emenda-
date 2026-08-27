/* Section 09 key/value row (EM-16 1109:15-26, EM-16A 1109:49-60,
   EM-17 1109:79-90): 350x40 white card, radius 12, 1px #ccded6,
   9px label left / 9px value right-aligned. `emphasis` follows the mock:
   "label" = grey label + dark value (EM-16 scope), "value" = dark label +
   grey value (EM-16A contents), "both" = dark label + green value (EM-17). */
export type AuditRowEmphasis = "label" | "value" | "both";

export function AuditKeyValueRow({
  label,
  value,
  emphasis,
}: {
  label: string;
  value: string;
  emphasis: AuditRowEmphasis;
}) {
  const labelClass =
    emphasis === "label"
      ? "font-semibold text-[#667a73]"
      : "font-semibold text-[#083d2d]";
  const valueClass =
    emphasis === "label"
      ? "font-semibold text-[#083d2d]"
      : emphasis === "value"
        ? "font-normal text-[#667a73]"
        : "font-semibold text-[#0c5941]";

  return (
    <div className="flex min-h-[40px] items-center justify-between gap-4 rounded-[12px] border border-[#ccded6] bg-white px-[14px] py-[10px] lg:min-h-[52px] lg:px-5">
      <p className={`text-[9px] lg:text-[12px] ${labelClass}`}>{label}</p>
      <p className={`text-right text-[9px] lg:text-[12px] ${valueClass}`}>
        {value}
      </p>
    </div>
  );
}
