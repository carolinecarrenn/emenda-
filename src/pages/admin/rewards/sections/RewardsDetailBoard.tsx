import type { ReactNode } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINREWARDS_COPY } from "../rewards.copy";

/* AD-07D "Rewards Detailed States" (1239:590): a #fafcfb board, radius 16,
   1px #d1e3db — "CONCRETE OPERATIONAL STATES" eyebrow, the 23px semibold
   title and the 11px transaction-integrity line, then the 760x720 detail
   panels (radius 14, 1px #d1e3db) drawn 60px apart.

   The board draws its three panels side by side as a states catalogue; each
   panel is reachable on its own here (?state=rule-edit / adjust-detail /
   transaction) so it can be opened from the AD-07 screen it belongs to. */
export function RewardsDetailBoard({ children }: { children: ReactNode }) {
  const c = useSectionCopy(ADMINREWARDS_COPY);

  return (
    <div className="w-full max-w-[806px] rounded-[16px] border border-[#d1e3db] bg-[#fafcfb] px-[16px] py-[19px] lg:px-[23px]">
      <p className="text-[10px] leading-none font-semibold tracking-[0.04em] text-[#0a5740]">
        {c.detail.eyebrow}
      </p>
      <h2 className="mt-[16px] text-[20px] leading-[28px] font-semibold text-[#13332b] lg:text-[23px]">
        {c.detail.title}
      </h2>
      <p className="mt-[10px] text-[11px] leading-[16px] text-[#63756e]">
        {c.detail.description}
      </p>

      <div className="mt-[26px]">{children}</div>
    </div>
  );
}
