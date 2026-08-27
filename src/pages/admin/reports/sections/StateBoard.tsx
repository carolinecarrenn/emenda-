import type { ReactNode } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINREPORTS_COPY } from "../reports.copy";

/* Shared chrome for the AD-04B / AD-04C / AD-04D boards: a #f7faf8 panel,
   radius 14, 1px #d6e3de, holding the 10px semibold #083d2d eyebrow, the
   bold #17362e board title and its #65746d description.

   The frames draw these boards as canvas panels with no way in or out, so
   the "Back to report queue" link is added here — without it a ?state=
   screen would be a dead end in the running app. */
export function StateBoard({
  eyebrow,
  title,
  description,
  titleClassName = "text-[18px] leading-[22px]",
  trailing,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  titleClassName?: string;
  trailing?: ReactNode;
  children: ReactNode;
}) {
  const c = useSectionCopy(ADMINREPORTS_COPY);

  return (
    <div className="flex w-full max-w-[1144px] flex-col">
      <Link
        to="/admin/reports"
        className="flex h-[32px] w-fit items-center gap-[6px] rounded-[10px] border border-[#d6e3de] bg-white px-[11px] text-[11px] font-semibold text-[#083d2d]"
      >
        <ChevronLeft className="size-[14px]" aria-hidden="true" />
        {c.boards.back}
      </Link>

      <div className="mt-[12px] rounded-[14px] border border-[#d6e3de] bg-[#f7faf8] p-[16px] lg:p-[23px]">
        <div className="flex flex-col gap-[12px] sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="text-[10px] leading-[12px] font-semibold tracking-[0.06em] text-[#083d2d]">
              {eyebrow}
            </p>
            <h2
              className={`mt-[6px] font-bold text-[#17362e] ${titleClassName}`}
            >
              {title}
            </h2>
            <p className="mt-[8px] text-[10px] leading-[14px] text-[#65746d]">
              {description}
            </p>
          </div>
          {trailing}
        </div>

        <div className="mt-[24px]">{children}</div>
      </div>
    </div>
  );
}
