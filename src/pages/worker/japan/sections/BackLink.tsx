import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { JAPAN_COPY } from "../japan.copy";

/** Green "← Japan preparation" back link shared by every WD-32/33 sub-page.
 *  `onIntercept` lets form screens open their unsaved-changes sheet instead
 *  of navigating (WD-32K / WD-33H / WD-33L / WD-33R). */
export function BackLink({
  to = "/worker/japan",
  onIntercept,
}: {
  to?: string;
  onIntercept?: () => void;
}) {
  const c = useSectionCopy(JAPAN_COPY);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (onIntercept) {
      event.preventDefault();
      onIntercept();
    }
  };

  return (
    <div className="flex items-center lg:h-[28px]">
      <Link
        to={to}
        onClick={handleClick}
        className="inline-flex items-center gap-[8px] text-[13px] leading-[20px] font-semibold text-[#08664d] hover:text-[#0b6b57]"
      >
        <ArrowLeft className="h-[18px] w-[18px]" strokeWidth={2} />
        {c.back}
      </Link>
    </div>
  );
}
