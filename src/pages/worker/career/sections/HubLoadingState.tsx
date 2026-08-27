/** WD-21A loading skeleton: tinted placeholders in the exact card geometry
 *  (left 70 / 190 · right 112 / 76 / 78 px) while title + subtitle stay
 *  visible. Desktop keeps the frame's two independent 520px columns on an
 *  18px rhythm, so each column flows on its own placeholder heights. */
export function HubLoadingState() {
  return (
    <div className="mt-[36px] flex max-w-[1080px] flex-col gap-4 lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px]">
      <div className="contents lg:flex lg:flex-col lg:gap-[18px]">
        <div className="h-[70px] animate-pulse rounded-[16px] bg-[#e5f0eb] max-lg:order-1" />
        <div className="h-[190px] animate-pulse rounded-[16px] bg-[#e5f0eb] max-lg:order-3" />
      </div>
      <div className="contents lg:flex lg:flex-col lg:gap-[18px]">
        <div className="h-[112px] animate-pulse rounded-[16px] bg-[#e5f0eb] max-lg:order-2" />
        <div className="h-[76px] animate-pulse rounded-[16px] bg-[#e5f0eb] max-lg:order-4" />
        <div className="h-[78px] animate-pulse rounded-[16px] bg-[#e5f0eb] max-lg:order-5" />
      </div>
    </div>
  );
}
