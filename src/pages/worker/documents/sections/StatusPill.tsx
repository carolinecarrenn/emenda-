/** WD-37 provenance pills: mint (Verified / Self-added) vs amber (linked
 *  Verified). 84×24 fully-rounded, 10px semibold centered label. */
export function StatusPill({
  label,
  tone,
}: {
  label: string;
  tone: "mint" | "amber";
}) {
  const toneClass =
    tone === "amber"
      ? "border-[#e7c98d] bg-[#fff8e6] text-[#8a5a12]"
      : "border-[#bfd9ce] bg-[#eef5f1] text-brand";
  return (
    <span
      className={`flex h-[24px] w-[84px] shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold ${toneClass}`}
    >
      {label}
    </span>
  );
}
