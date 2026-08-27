/* Section 09 status chip (EM-17 "Ready" 1109:72, EM-16B "Failed" 1109:101,
   EM-STATE-01 "Offline" 1109:117, EM-STATE-02 "Back online" 1109:142):
   h28, radius 14, border #ccded6 — mint + semibold when positive,
   white + regular when the state is a failure/offline notice. */
export type AuditChipTone = "mint" | "plain";

export function AuditStatusChip({
  label,
  tone,
}: {
  label: string;
  tone: AuditChipTone;
}) {
  return (
    <span
      className={`inline-flex h-[28px] min-w-[78px] items-center justify-center rounded-[14px] border border-[#ccded6] px-[12px] text-[9px] text-[#083d2d] lg:text-[11px] ${
        tone === "mint" ? "bg-[#e8f5f0] font-semibold" : "bg-white font-normal"
      }`}
    >
      {label}
    </span>
  );
}
