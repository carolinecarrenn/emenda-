interface ActionNoticeCardProps {
  /** rose = #fcedeb failure · amber = #fef6da offline · white = neutral. */
  tone?: "rose" | "amber" | "white";
  title: string;
  body: string;
  action?: string;
  /** W-60I draws the action as an inert #b8cfc4 button at 55% opacity. */
  actionDisabled?: boolean;
  /** WD-60H (1186:1905) outlines the failure card in #c72924 and draws its
   *  title in the same red; the mobile W-60H card does not. */
  redOutline?: boolean;
  onAction?: () => void;
  className?: string;
}

/* W-60H "Check-in failed" (1158:562) and W-60I "Daily check-in offline"
   (1158:636): a tinted 350px card at radius 14, 14/12px padding and a 6px
   gap — a 12px/16 semibold ink title, a 10px/14 muted body and the 322x38
   button at radius 12 with an 11px/14 label. Desktop WD-60H (1186:1905)
   keeps the white 1012x170 card with a 20px title and a 260x42 pill. */
export function ActionNoticeCard({
  tone = "white",
  title,
  body,
  action,
  actionDisabled = false,
  redOutline = false,
  onAction,
  className = "",
}: ActionNoticeCardProps) {
  const surface = redOutline
    ? "bg-[#fcedeb] lg:border-[#c72924] lg:bg-[#fff0ed]"
    : tone === "rose"
      ? "bg-[#fcedeb] lg:bg-white"
      : tone === "amber"
        ? "bg-[#fef6da] lg:bg-white"
        : "bg-white";
  const titleColor = redOutline
    ? "text-lp-ink lg:text-[#c72924]"
    : "text-lp-ink";

  return (
    <div
      className={`rounded-[14px] border border-lp-line px-[14px] py-[12px] ${surface} lg:rounded-[18px] lg:px-[25px] lg:py-[22px] lg:min-h-[170px] ${className}`}
    >
      <p
        className={`text-[12px] leading-[16px] font-semibold lg:text-[20px] lg:leading-normal ${titleColor}`}
      >
        {title}
      </p>
      <p className="mt-[6px] max-w-[650px] text-[10px] leading-[14px] text-lp-muted lg:mt-[14px] lg:text-[14px] lg:leading-[21px]">
        {body}
      </p>
      {action !== undefined &&
        (actionDisabled ? (
          <div className="mt-[6px] flex h-[38px] w-full items-center justify-center rounded-[12px] bg-[#b8cfc4] text-[11px] leading-[14px] font-semibold text-white opacity-55 lg:mt-[18px] lg:h-[42px] lg:w-[260px] lg:text-[13px] lg:leading-normal">
            {action}
          </div>
        ) : (
          <button
            type="button"
            onClick={onAction}
            className="mt-[6px] flex h-[38px] w-full items-center justify-center rounded-[12px] bg-lp-button text-[11px] leading-[14px] font-semibold text-white hover:bg-lp-green lg:mt-[18px] lg:h-[42px] lg:w-[260px] lg:text-[13px] lg:leading-normal"
          >
            {action}
          </button>
        ))}
    </div>
  );
}
