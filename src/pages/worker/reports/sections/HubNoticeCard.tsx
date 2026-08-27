import type { ReactNode } from "react";

/**
 * The 350x100 notice / status card the mobile Reports hub uses for every
 * non-record block — "No active employer connection" (W-54 972:129),
 * "Today · No report submitted yet" (W-54C 972:353), the offline banner
 * (W-54D 972:425), "ABC Japan · Work access ended" (W-54E 972:502) and the
 * portable-history note. Figma: radius 14, 14px padding, 6px gap, 13px/18px
 * semibold ink title over an 11px/16px muted body; mint fill for neutral
 * blocks, amber (#fef6da) for offline / access-ended. Desktop keeps the same
 * block with the wider WD-54 padding and type scale.
 */
export function HubNoticeCard({
  tone = "mint",
  title,
  children,
  desktopTitle,
  desktopWhite = false,
}: {
  tone?: "mint" | "amber";
  title: string;
  children: ReactNode;
  /** WD-54 states the same notice with a longer sentence on desktop. */
  desktopTitle?: string;
  /** WD-54 / WD-54C draw the leading notice on white at desktop width. */
  desktopWhite?: boolean;
}) {
  const toneClasses =
    tone === "amber"
      ? "border-[#e8ab40] bg-[#fef6da]"
      : "border-lp-line bg-lp-tint";

  return (
    <div
      className={`rounded-[14px] border p-[14px] lg:rounded-[18px] lg:px-[27px] lg:py-[24px] ${toneClasses} ${
        desktopWhite ? "lg:min-h-[190px] lg:bg-white" : ""
      }`}
    >
      <p className="text-[13px] leading-[18px] font-semibold text-lp-ink lg:text-[17px] lg:leading-[24px]">
        {desktopTitle === undefined ? (
          title
        ) : (
          <>
            <span className="lg:hidden">{title}</span>
            <span className="hidden lg:inline">{desktopTitle}</span>
          </>
        )}
      </p>
      <div className="mt-[6px] max-w-[900px] text-[11px] leading-[16px] text-lp-muted lg:mt-[14px] lg:text-[14px] lg:leading-[22px]">
        {children}
      </div>
    </div>
  );
}
