import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { HOME_COPY } from "../home.copy";
import { HOME_COIN_BALANCE } from "../homeMock";

/* W-18 Emenda Coin card (Figma 529:3 → 1151:440): 74px pale-mint card, title
   left, balance right-aligned in dark green, one quiet caption line under it,
   linking to the Coin section. Mobile-only in the mocks — the WD-18 desktop
   rail omits it — but a capability is never dropped between viewports, so the
   desktop rail carries it too, above Recent updates. */
export function EmendaCoinCard() {
  const c = useSectionCopy(HOME_COPY);

  return (
    <Link
      to="/worker/coin"
      className="flex h-[74px] flex-col gap-1 rounded-[14px] border border-line bg-[#f0f8f3] px-[14px] pt-3 hover:bg-brand-soft"
    >
      <div className="flex h-[22px] items-center justify-between">
        <p className="text-[11px] leading-[15px] font-semibold text-ink">
          {c.coin.title}
        </p>
        <p className="text-[13px] leading-[17px] font-semibold text-brand-deep">
          {HOME_COIN_BALANCE}
        </p>
      </div>
      <p className="text-[10px] leading-[14px] text-ink-muted">
        {c.coin.caption}
      </p>
    </Link>
  );
}
