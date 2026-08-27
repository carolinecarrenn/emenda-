import type { ComponentType } from "react";

type EmptyIcon = ComponentType<{ size?: number; className?: string }>;

interface EmptyStateCardProps {
  icon: EmptyIcon;
  title: string;
  body: string;
  /** Desktop card height — 210 on WD-42C, 260 on WD-45B. */
  className?: string;
  /** Desktop max width of the body line — 680 on WD-42C, 620 on WD-45B. */
  bodyClassName?: string;
  /** Desktop distance from the card top to the glyph. */
  iconClassName?: string;
  /** Desktop gap between the glyph and the title. */
  titleClassName?: string;
}

/* Shared empty-state chassis for Knowledge (W-42C "No results found" and
   W-45B "No questions yet"). Mobile: white card on a #d7e2dc hairline, 16px
   radius, a centred 24px green glyph 27px from the card top, a 14px semibold
   title and an 11px muted body line capped at 290px. Desktop (WD-42C/45B)
   keeps the 18px-radius card with an 18px glyph and 13px body. */
export function EmptyStateCard({
  icon: Icon,
  title,
  body,
  className = "",
  bodyClassName = "",
  iconClassName = "",
  titleClassName = "",
}: EmptyStateCardProps) {
  return (
    <div
      className={`rounded-[16px] border border-lp-line bg-white px-[20px] pt-[27px] pb-[26px] text-center lg:rounded-[18px] ${className}`}
    >
      <Icon
        size={24}
        className={`mx-auto text-lp-green lg:size-[18px] ${iconClassName}`}
      />
      <p
        className={`text-[14px] leading-[22px] font-semibold text-[#17231f] lg:text-[18px] lg:leading-normal lg:text-[#0e1f18] ${titleClassName}`}
      >
        {title}
      </p>
      <p
        className={`mx-auto max-w-[290px] text-[11px] leading-[19px] text-lp-muted lg:text-[13px] lg:leading-normal ${bodyClassName}`}
      >
        {body}
      </p>
    </div>
  );
}
