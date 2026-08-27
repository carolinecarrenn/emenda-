import { Link } from "react-router-dom";

type Tone = "mint" | "white" | "amber";

interface UseOptionCardProps {
  /** Mobile fill. W-60J draws the reward example white and the caveat amber. */
  tone: Tone;
  /** Desktop fill when WD-60J differs from the mobile frame. */
  lgTone?: Tone;
  title: string;
  meta?: string;
  body: string;
  /** "row" = the 11px reward header · "note" = the 10px caveat title. */
  density?: "row" | "note";
  to?: string;
}

const SURFACE: Record<Tone, string> = {
  mint: "bg-lp-tint",
  white: "bg-white",
  amber: "bg-[#fef6da]",
};

const LG_SURFACE: Record<Tone, string> = {
  mint: "lg:bg-lp-tint",
  white: "lg:bg-white",
  amber: "lg:bg-[#fef6da]",
};

/* W-60J "Available reward example" (1179:458, white, 350x112, with a
   right-aligned green cost) and "No reward available" (1179:463, amber,
   350x88): radius 14, 14/12px padding, 5px gap. Desktop WD-60J draws the
   same pair as 492x140 mint/white cards at radius 16. */
export function UseOptionCard({
  tone,
  lgTone,
  title,
  meta,
  body,
  density = "row",
  to,
}: UseOptionCardProps) {
  const titleSize =
    density === "note"
      ? "text-[10px] leading-[14px]"
      : "text-[11px] leading-[15px]";

  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <p
          className={`${titleSize} font-semibold text-lp-ink lg:text-[15px] lg:leading-normal`}
        >
          {title}
        </p>
        {meta !== undefined && (
          <p className="text-[11px] leading-[15px] font-semibold text-lp-green lg:text-[13px] lg:leading-normal">
            {meta}
          </p>
        )}
      </div>
      <p className="mt-[5px] text-[9px] leading-[13px] text-lp-muted lg:mt-[14px] lg:text-[12px] lg:leading-[19px]">
        {body}
      </p>
    </>
  );

  const shape = `rounded-[14px] border border-lp-line px-[14px] py-[12px] ${SURFACE[tone]} ${LG_SURFACE[lgTone ?? tone]} lg:rounded-[16px] lg:p-[17px] lg:h-[140px]`;

  if (to === undefined) {
    return <div className={shape}>{content}</div>;
  }

  return (
    <Link to={to} className={`block ${shape} hover:border-lp-green`}>
      {content}
    </Link>
  );
}
