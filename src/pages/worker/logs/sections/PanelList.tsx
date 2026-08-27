import { Link } from "react-router-dom";

export interface PanelListItem {
  id: string;
  title: string;
  meta: string;
  /** Rows without a target render as static (W-61Z "BELUM TERSEDIA"). */
  to?: string;
  /** Right-aligned status label (W-61Z availability rows). */
  right?: string;
  /** W-61Z fills the PRIVAT · HEALTH card mint on mobile. */
  mint?: boolean;
}

/* WD-61C "Private notes" (1012x252) and WD-61Z "Availability" (1012x328):
   one white card, radius 16 over 1px #d1ded6, holding 980x64 mint rows on a
   74px rhythm. Each row carries a 15px semibold title in a 22px box at y=6, a
   12px muted meta box of 20px at y=30 and an optional right-aligned 12px green
   status label inset 30px from the row's right edge.
   Mobile drops the wrapping panel entirely: W-61C (1167:301) is a stack of
   350x66 white rows at radius 14 with a 12px title at y=11 and a 10px meta at
   y=33, 12px apart; W-61Z (1170:278) uses taller 96px cards at radius 16 with
   a 13px title, an 11px green status label on the title line and an 11px body
   at y=47. */
export function PanelList({
  items,
  variant = "row",
  className = "",
}: {
  items: PanelListItem[];
  /** row = W-61C note list · card = W-61Z availability cards. */
  variant?: "row" | "card";
  className?: string;
}) {
  const card = variant === "card";
  const rowBase = card
    ? "relative block min-h-[96px] rounded-[16px] border border-lp-line pt-[17px] pl-[13px] pr-[13px] pb-[14px] lg:min-h-0 lg:h-[64px] lg:rounded-[10px] lg:border-0 lg:bg-lp-tint lg:pt-[6px] lg:pr-0 lg:pb-0 lg:pl-[16px]"
    : "relative block h-[66px] rounded-[14px] border border-lp-line pt-[11px] pl-[13px] lg:h-[64px] lg:rounded-[10px] lg:border-0 lg:bg-lp-tint lg:pt-[6px] lg:pl-[16px]";

  return (
    <div
      className={`space-y-[12px] lg:space-y-[10px] lg:rounded-[16px] lg:border lg:border-lp-line lg:bg-white lg:px-[15px] lg:pt-[11px] lg:pb-[27px] ${className}`}
    >
      {items.map((item) => {
        const rowClasses = `${rowBase} ${
          item.mint === true ? "bg-lp-mint lg:bg-lp-tint" : "bg-white"
        }`;
        const body = (
          <>
            <span
              className={`block truncate pr-[80px] font-semibold text-lp-ink lg:pr-[120px] lg:text-[15px] lg:leading-[22px] ${
                card
                  ? "text-[13px] leading-[18px]"
                  : "text-[12px] leading-[16px]"
              }`}
            >
              {item.title}
            </span>
            <span
              className={`block text-lp-muted lg:mt-[2px] lg:truncate lg:pr-[120px] lg:text-[12px] lg:leading-[20px] ${
                card
                  ? "mt-[12px] text-[11px] leading-[16px]"
                  : "mt-[6px] truncate pr-[80px] text-[10px] leading-[14px]"
              }`}
            >
              {item.meta}
            </span>
            {item.right !== undefined && (
              <span
                className={`absolute right-[15px] text-[11px] font-semibold text-lp-green lg:top-0 lg:right-[30px] lg:flex lg:h-full lg:items-center lg:text-[12px] ${
                  card ? "top-[17px]" : "top-0 flex h-full items-center"
                }`}
              >
                {item.right}
              </span>
            )}
          </>
        );

        return item.to !== undefined ? (
          <Link
            key={item.id}
            to={item.to}
            className={`${rowClasses} hover:border-lp-green lg:hover:bg-lp-mint`}
          >
            {body}
          </Link>
        ) : (
          <div key={item.id} className={rowClasses}>
            {body}
          </div>
        );
      })}
    </div>
  );
}
