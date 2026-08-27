/* W-60C "Loading" (1151:378–381): a tall 350x126 block for the balance card
   followed by three 350x72 rows, all #edf1ef at radius 14 and a 12px gap.
   Desktop WD-60C (1186:1600–1603) stacks four uniform 1012x90 blocks at 22px. */
const MOBILE_HEIGHTS = ["h-[126px]", "h-[72px]", "h-[72px]", "h-[72px]"];

export function CoinSkeleton() {
  return (
    <div className="space-y-[12px] lg:space-y-[22px]" aria-hidden="true">
      {MOBILE_HEIGHTS.map((height, row) => (
        <div
          key={row}
          className={`${height} animate-pulse rounded-[14px] bg-subtle lg:h-[90px] lg:rounded-[16px]`}
        />
      ))}
    </div>
  );
}
