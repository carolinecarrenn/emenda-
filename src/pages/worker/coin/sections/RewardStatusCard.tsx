import { Link } from "react-router-dom";
import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { COIN_COPY } from "../coin.copy";
import { formatSignedCoin } from "../coinFormat";
import { PENDING_REWARD } from "../coinMock";

/* WD-60 "Pending" strip (1186:1418): full-width white card 1012x104,
   radius 16 — 15px title, 12px status line and the amber "+20 pending"
   amount that keeps pending Coin visually apart from the green balance.
   Mobile (W-60 node 1179:345) is the 350x104 card at radius 14: a 22px
   header with a 12px title and a 10px "1 pending" action, then a 42px row
   whose 10px green amount sits right-aligned beside the 10px report title
   and its 9px meta line. Opens WD-60K. */
export function RewardStatusCard() {
  const c = useSectionCopy(COIN_COPY);
  const { language } = useLanguage();
  const amount = c.pendingAmount(
    formatSignedCoin(PENDING_REWARD.amount, language),
  );

  return (
    <Link
      to="/worker/coin?state=pending-reward"
      className="block h-[104px] rounded-[14px] border border-lp-line bg-white px-[14px] py-[12px] hover:border-lp-green lg:flex lg:items-start lg:justify-between lg:rounded-[16px] lg:px-[17px] lg:py-[14px]"
    >
      {/* W-60 node 1179:346 — mobile header carries the pending count */}
      <div className="flex h-[22px] items-center justify-between gap-3 lg:block lg:h-auto">
        <p className="text-[12px] leading-[16px] font-semibold text-lp-ink lg:text-[15px] lg:leading-normal">
          {c.overview.currentRewardStatus}
        </p>
        <p className="text-[10px] leading-[14px] font-semibold text-lp-green lg:hidden">
          {c.overview.pendingCount("1")}
        </p>
        <p className="mt-[10px] hidden text-[12px] leading-[18px] text-lp-muted lg:block">
          {c.overview.pendingBody(EMPLOYER.name)}
        </p>
      </div>

      {/* W-60 node 1179:349 — mobile pending row */}
      <div className="mt-[5px] flex h-[42px] items-center justify-between gap-3 lg:hidden">
        <div className="h-[42px]">
          <p className="text-[10px] leading-[13px] font-semibold text-lp-ink">
            {c.overview.pendingTitle(EMPLOYER.name)}
          </p>
          <p className="text-[9px] leading-[12px] text-lp-muted">
            {c.overview.pendingMeta}
          </p>
        </div>
        <p className="text-[10px] leading-[14px] font-semibold text-lp-green">
          {amount}
        </p>
      </div>

      <p className="hidden text-[13px] font-semibold text-[#804d0d] lg:mt-[17px] lg:mr-[15px] lg:block">
        {amount}
      </p>
    </Link>
  );
}
