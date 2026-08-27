import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  body: string;
  action?: ReactNode;
}

/* W-61J / X / Y / M2 empty screens.
   Mobile (W-61J · 1167:517, W-61Y · 1167:1114) is the shared W-61 card chassis
   — a white 350px card, radius 16, 1px #d6e0d9, 14/12px padding, an 11px
   semibold #096145 title over a 10px #596b61 body — with the category's own
   full-width "Add" CTA sitting 12px *below* the card.
   Desktop keeps the WD-61J centred card that wraps title, body and CTA. */
export function EmptyState({ title, body, action }: EmptyStateProps) {
  return (
    <div className="contents lg:flex lg:min-h-[240px] lg:flex-col lg:items-center lg:justify-center lg:rounded-[16px] lg:border lg:border-lp-line lg:bg-white lg:px-6 lg:py-[42px] lg:text-center">
      <div className="rounded-[16px] border border-lp-line bg-white px-[14px] py-[12px] lg:contents">
        <p className="text-[11px] leading-[15px] font-semibold text-lp-green lg:text-[17px] lg:leading-normal lg:text-lp-ink">
          {title}
        </p>
        <p className="mt-[6px] text-[10px] leading-[14px] text-lp-muted lg:mt-[12px] lg:max-w-[520px] lg:text-[13px] lg:leading-[20px]">
          {body}
        </p>
      </div>
      {action !== undefined && (
        <div className="mt-[12px] lg:mt-[26px] lg:flex lg:w-full lg:justify-center">
          {action}
        </div>
      )}
    </div>
  );
}
