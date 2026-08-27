/* W-61D / WD-61D loading skeleton: quiet fill, rounded, pulsing. The mobile
   hub skeleton (W-61D · 1163:358) is a 350x96 #f4f6f4 block at radius 18. */
export function SkeletonBlock({
  className = "",
  radiusClass = "rounded-[18px] lg:rounded-[16px]",
}: {
  className?: string;
  radiusClass?: string;
}) {
  return (
    <div className={`animate-pulse bg-[#f4f6f4] lg:bg-subtle ${radiusClass} ${className}`} />
  );
}
