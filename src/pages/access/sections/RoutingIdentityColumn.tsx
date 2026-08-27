import { useSectionCopy } from "@/i18n/copy";
import { ACCESS_COPY } from "../access.copy";
import type { RoutingAccount } from "../accessMock";

/* LP-06/07/08 left identity column (Figma nodes 1053:989 ACCOUNT RECOGNIZED
   pill at y=160, 1053:991 H1 at y=210, 1053:992 subline at y=266, 1053:993
   EMENDA ID card 520x170 at y=350 / r16 with the 132px WORKER-OWNED pill at
   y=378). Only the card's status line changes between the three routing
   frames — the person's identity stays constant. */
export function RoutingIdentityColumn({ account }: { account: RoutingAccount }) {
  const c = useSectionCopy(ACCESS_COPY).routing;

  return (
    <div className="lg:w-[520px] lg:shrink-0">
      <span className="inline-flex h-[28px] items-center rounded-[14px] border border-[#d1ded6] bg-[#e8f5ed] px-[12px] text-[11px] font-semibold text-[#064a38]">
        {c.recognized}
      </span>

      <h1 className="mt-[22px] flex min-h-[50px] items-center text-[28px] leading-[36px] font-bold text-[#111f1a] lg:text-[36px] lg:leading-[44px]">
        {c.greeting(account.firstName)}
      </h1>
      <p className="mt-[6px] flex min-h-[36px] items-center text-[16px] text-[#5c6e63]">
        {c.subline}
      </p>

      <div className="relative mt-[48px] rounded-[16px] border border-[#d1ded6] bg-white px-[21px] pt-[19px] pb-[21px] lg:min-h-[170px] lg:w-[520px]">
        <p className="flex min-h-[20px] items-center text-[11px] font-semibold text-[#5c6e63]">
          {c.myEmendaId}
        </p>
        <span className="absolute top-[19px] right-[21px] inline-flex h-[28px] items-center justify-center rounded-[14px] border border-[#d1ded6] bg-[#e8f5ed] px-[12px] text-[11px] font-semibold text-[#064a38] lg:top-[27px] lg:right-[25px] lg:w-[132px]">
          {c.workerOwned}
        </span>
        <p className="mt-[8px] flex min-h-[38px] items-center text-[26px] leading-[38px] font-bold text-[#064a38]">
          {account.emendaId}
        </p>
        <p className="mt-[20px] flex min-h-[24px] items-center text-[14px] text-[#5c6e63]">
          {c.status[account.variant]}
        </p>
      </div>
    </div>
  );
}
