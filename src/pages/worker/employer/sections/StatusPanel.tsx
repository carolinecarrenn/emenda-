import { CircleCheck, CircleDot } from "lucide-react";

interface StatusPanelProps {
  tone: "mint" | "tint" | "white" | "red";
  title: string;
  body: string;
  /** Desktop wording when the WD- frame words the card differently from its
   *  W- twin — WD-51F nodes 1182:1673 / 1182:1674. */
  desktopTitle?: string;
  desktopBody?: string;
  /** WD-51F node 1223:12 — the 12px retention line under the desktop body. */
  note?: string;
  /** Eyebrow drawn inside the card (W-50B 917:357 / W-51B). */
  eyebrow?: string;
  /** WD-50B node 1182:1070 and WD-50D node 1182:1558 keep that eyebrow inside
   *  the desktop card too; WD-51B / WD-51D drop it. */
  eyebrowOnDesktop?: boolean;
  /** Desktop card height: 190 on WD-50C / WD-50F, 180 on every other frame. */
  desktopHeight?: 180 | 190;
  /** Mobile-only leading glyph: W-50C 917:398 check · W-50B 929:2 progress. */
  icon?: "check" | "progress";
  className?: string;
}

/* WD-50F "Result" (1182:1170), WD-51C / WD-51F "End state" (1182:1396 /
   1182:1672) are WHITE on desktop — only WD-50C's "Connected card"
   (1182:1119) is mint. Mobile draws all of them on the tint card. */
const TONE_CLASSES: Record<StatusPanelProps["tone"], string> = {
  mint: "border-lp-line bg-lp-mint",
  tint: "border-lp-line bg-lp-tint",
  white: "border-lp-line bg-lp-tint lg:bg-white",
  red: "border-[#c72924] bg-[#fff0ed]",
};

/* Only WD-50C sets the title in brand green; every other desktop panel uses
   the #0f1f1a ink of the frame, and the failed panels use #c72924. */
const TITLE_TONE: Record<StatusPanelProps["tone"], string> = {
  mint: "text-lp-ink lg:text-lp-green",
  tint: "text-lp-ink",
  white: "text-lp-ink",
  red: "text-[#c72924]",
};

/* WD-50D node 1182:1560 / WD-51D node 1182:1349 keep the body in #63756b
   muted even inside the red panel. */
const BODY_TONE: Record<StatusPanelProps["tone"], string> = {
  mint: "text-lp-muted",
  tint: "text-lp-muted",
  white: "text-lp-muted",
  red: "text-[#c72924] lg:text-lp-muted",
};

const DESKTOP_HEIGHT_CLASSES: Record<
  NonNullable<StatusPanelProps["desktopHeight"]>,
  string
> = {
  180: "lg:min-h-[180px]",
  190: "lg:min-h-[190px]",
};

/* Large status panel — WD-50C connected card (node 1182:1119) and the shape
   reused by WD-50B/50D/50F and WD-51B/51C/51D/51F: 180–190px tall, radius 18,
   28px inset, a 20px semibold title over a 14px body whose first line sits
   28px below the title. Widths come from the frame through className —
   800px on WD-50F, 820px on WD-50B/50D/51B/51D, 860px on WD-50C/51C/51F.

   Mobile draws the same panel as an icon row: W-50C node 917:397 / W-50F /
   W-51C / W-51F put a 24px check circle beside a 14px semibold title and an
   11px muted body in a 152px radius-16 card; W-50B node 917:356 / W-51B put
   a 28px progress ring beside the CONNECTION STATUS eyebrow, a 12px title
   and a 12px body in a 156px card. */
export function StatusPanel({
  tone,
  title,
  body,
  desktopTitle,
  desktopBody,
  note,
  eyebrow,
  eyebrowOnDesktop = false,
  desktopHeight = 190,
  icon,
  className = "",
}: StatusPanelProps) {
  const progress = icon === "progress";

  return (
    <div
      className={`rounded-[16px] border px-[15px] pt-[19px] pb-[19px] lg:rounded-[18px] lg:px-[28px] lg:pb-[22px] ${
        eyebrowOnDesktop ? "lg:pt-[20px]" : "lg:pt-[28px]"
      } ${progress ? "min-h-[156px]" : "min-h-[152px]"} ${
        DESKTOP_HEIGHT_CLASSES[desktopHeight]
      } ${TONE_CLASSES[tone]} ${className}`}
    >
      <div className="flex lg:block">
        {icon && (
          <span
            aria-hidden
            className="mr-[16px] shrink-0 text-lp-button lg:hidden"
          >
            {progress ? (
              <CircleDot className="size-[28px]" strokeWidth={1.6} />
            ) : (
              <CircleCheck className="size-[24px]" strokeWidth={1.5} />
            )}
          </span>
        )}
        <div className="min-w-0 flex-1">
          {eyebrow && (
            <p
              className={`text-[10px] font-semibold text-lp-muted ${
                eyebrowOnDesktop
                  ? "lg:text-[11px] lg:leading-[20px] lg:tracking-[0.06em]"
                  : "lg:hidden"
              }`}
            >
              {eyebrow}
            </p>
          )}
          <p
            className={`lg:text-[20px] lg:leading-[32px] lg:font-semibold ${
              eyebrowOnDesktop ? "lg:mt-[8px]" : "lg:mt-0"
            } ${
              progress
                ? "mt-[8px] text-[12px] leading-[16px] font-normal"
                : "text-[14px] leading-[20px] font-semibold"
            } ${TITLE_TONE[tone]}`}
          >
            <span className={desktopTitle ? "lg:hidden" : undefined}>
              {title}
            </span>
            {desktopTitle && (
              <span className="hidden lg:inline">{desktopTitle}</span>
            )}
          </p>
          <p
            className={`max-w-[800px] lg:text-[14px] lg:leading-[21px] ${
              eyebrowOnDesktop || desktopHeight === 190
                ? "lg:mt-[26px]"
                : "lg:mt-[34px]"
            } ${
              progress
                ? "mt-[10px] text-[12px] leading-[16px] text-lp-ink lg:text-lp-muted"
                : "mt-[8px] text-[11px] leading-[15px]"
            } ${progress ? "" : BODY_TONE[tone]}`}
          >
            <span className={desktopBody ? "lg:hidden" : undefined}>
              {body}
            </span>
            {desktopBody && (
              <span className="hidden lg:inline">{desktopBody}</span>
            )}
          </p>
          {note && (
            <p className="hidden max-w-[800px] text-[12px] leading-[17px] text-lp-muted lg:mt-[24px] lg:block">
              {note}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
