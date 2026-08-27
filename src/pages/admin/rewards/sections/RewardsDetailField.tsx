/* AD-07D read-only field (1239:599/600 and siblings): an 11px semibold
 * #13332b label over a 720x42 #edf7f2 box, radius 8, holding the 11px
 * #63756e value. */
export function RewardsDetailField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-[6px]">
      <p className="text-[11px] leading-none font-semibold text-[#13332b]">
        {label}
      </p>
      <div className="flex h-[42px] items-center rounded-[8px] bg-[#edf7f2] px-[11px]">
        <p className="truncate text-[11px] text-[#63756e]">{value}</p>
      </div>
    </div>
  );
}
