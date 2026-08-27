interface SkeletonBlockProps {
  className?: string;
}

/* Loading skeleton. Mobile (W-41A/42A/45A): flat #e9efec fill on a 12px
   radius. Desktop (WD-41A/42A/45A): #e3ebe5 on an 8px radius. */
export function SkeletonBlock({ className = "" }: SkeletonBlockProps) {
  return (
    <div
      className={`animate-pulse rounded-[12px] bg-[#e9efec] lg:rounded-[8px] lg:bg-[#e3ebe5] ${className}`}
    />
  );
}
