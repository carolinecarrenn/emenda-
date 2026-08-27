interface OfflineBannerProps {
  title: string;
  action: string;
  onAction?: () => void;
  className?: string;
}

/** Inline "No internet connection" alert banner ("Connection unavailable"
 *  component family).
 *
 *  Mobile (W-05D 435:78 / W-06G 452:26): 50px, radius 12, #f0f7ff fill with a
 *  #2e73ad hairline, 12px semibold #2e73ad title at x=11 and an 11px semibold
 *  #055e4d action flush to x=335.
 *
 *  Desktop (WD-04D 744:175 / WD-08D 745:1203 / WD-09E 745:1350 / WD-11B
 *  761:3271) keeps exactly that dress — same #2e73ad hairline, #f0f7ff fill,
 *  #2e73ad 12px title and #055e4d 11px action — and only grows to 56px on a
 *  14px radius with the title at x=12 and the action flush to x=500. */
export function OfflineBanner({
  title,
  action,
  onAction,
  className = "",
}: OfflineBannerProps) {
  return (
    <div
      className={`flex h-[50px] items-center justify-between rounded-[12px] border border-[#2e73ad] bg-[#f0f7ff] pl-[11px] pr-[15px] lg:h-[56px] lg:rounded-[14px] lg:pl-[12px] lg:pr-[20px] ${className}`}
    >
      <p className="text-[12px] leading-[16px] font-semibold text-[#2e73ad]">
        {title}
      </p>
      <button
        type="button"
        onClick={onAction}
        className="cursor-pointer text-[11px] leading-[16px] font-semibold text-[#055e4d] hover:text-[#0b5d4c]"
      >
        {action}
      </button>
    </div>
  );
}

interface CalloutProps {
  title: string;
  body: string;
  className?: string;
  titleClass?: string;
  bodyClass?: string;
}

/** Pale-mint informational callout (#e3f3ee, 16px radius): "PIN requirements",
 *  "Why verify again?", "Your data is preserved", …
 *  Figma boxes are 16px top padding, 16px title line, 10px gap, 18px body line
 *  and a deeper bottom padding that varies per screen (padClass). */
export function MintCallout({
  title,
  body,
  className = "",
  titleClass = "text-[#173a32]",
  bodyClass = "text-[#7c918b]",
  padClass = "px-[16px] pt-[16px] pb-[16px]",
}: CalloutProps & { padClass?: string }) {
  return (
    <div className={`rounded-[16px] bg-[#e3f3ee] ${padClass} ${className}`}>
      <p className={`text-[13px] leading-[16px] font-semibold ${titleClass}`}>
        {title}
      </p>
      <p className={`mt-[10px] text-[12px] leading-[18px] ${bodyClass}`}>
        {body}
      </p>
    </div>
  );
}

/** Compact inline alert card (WD-09C "PIN updated" / WD-09D "Couldn't update
 *  PIN"): 13px semibold title over a 12px body line.
 *
 *  Desktop (745:1306): 56px tall on a 15px title line at y=9 and a 15px body
 *  line at y=28, inside the 1px status hairline the caller passes in. */
export function InlineAlertCard({
  title,
  body,
  className = "rounded-[14px] bg-[#e3f3ee]",
  titleClass = "text-[#173a32]",
  bodyClass = "text-[#7c918b]",
}: CalloutProps) {
  return (
    <div
      className={`px-[12px] pt-[9px] pb-[4px] lg:pt-[8px] lg:pb-[12px] ${className}`}
    >
      <p
        className={`text-[13px] leading-[16px] font-semibold lg:leading-[15px] ${titleClass}`}
      >
        {title}
      </p>
      <p
        className={`mt-[3px] text-[12px] leading-[20px] lg:mt-[4px] lg:leading-[15px] ${bodyClass}`}
      >
        {body}
      </p>
    </div>
  );
}
