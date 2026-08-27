import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";

/* Shared board chrome for the three lettered Daily Reports frames — AD-06B
   (1226:1079 … :1081), AD-06C (1226:3691 … :3693) and AD-06D
   (1239:512 … :514). Each opens with a 10px semibold #083d2d eyebrow, a bold
   title and a muted line, then its own content.

   The back link is the app's own affordance: the boards are states of
   /admin/daily-reports, and Figma draws them as standalone canvases with no
   route chrome of their own. */
export function StateBoard({
  eyebrow,
  title,
  subtitle,
  titleClassName = "text-[18px] leading-[24px] font-bold text-[#17362e] lg:leading-none",
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  titleClassName?: string;
  children: ReactNode;
}) {
  const common = useCommonCopy();

  return (
    <div className="flex w-full flex-col gap-[16px]">
      <Link
        to="/admin/daily-reports"
        className="flex items-center gap-[6px] text-[11px] font-semibold text-[#083d2d] hover:underline"
      >
        <ArrowLeft className="size-[14px]" aria-hidden="true" />
        {common.action.back}
      </Link>

      <div className="flex flex-col gap-[6px]">
        <p className="text-[10px] leading-none font-semibold tracking-[0.08em] text-[#083d2d]">
          {eyebrow}
        </p>
        <p className={titleClassName}>{title}</p>
        <p className="text-[10px] leading-[15px] text-[#65746d]">{subtitle}</p>
      </div>

      {children}
    </div>
  );
}
