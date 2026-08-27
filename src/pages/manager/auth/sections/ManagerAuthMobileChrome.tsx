import { MANAGER_AUTH_STATUS_TIME } from "../managerAuthMock";

/** Fixed mobile chrome repeated on every EM-AUTH-00…04 frame (nodes
 *  842:1452-1455): iOS status bar — 11px semibold time at x=18 y=6 and the
 *  battery outline at x=350 y=9 (24x10, r3) with its 17x6 fill at x=353
 *  y=11 — over the 18px bold green EMENDA wordmark at x=20 y=34. The page
 *  pads 20px, so the time and battery pull back out to their frame x. */
export function ManagerAuthMobileChrome() {
  return (
    <div className="lg:hidden">
      <div className="flex h-[24px] items-start justify-between">
        <p className="-ml-[2px] text-[11px] leading-[14px] font-semibold text-[#17362f]">
          {MANAGER_AUTH_STATUS_TIME}
        </p>
        <div className="relative -mr-[4px] mt-[3px] h-[10px] w-[24px] rounded-[3px] border border-[#17362f] bg-[#f7faf8]">
          <div className="absolute top-[1px] left-[2px] h-[6px] w-[17px] rounded-[2px] bg-[#17362f]" />
        </div>
      </div>
      <p className="mt-[4px] font-display text-[18px] font-bold tracking-[-0.05em] text-[#0b6b57]">
        EMENDA
      </p>
    </div>
  );
}
