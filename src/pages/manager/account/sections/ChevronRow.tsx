import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/* Stacked chevron row used by EM-MORE OPERATIONS (761:1037, 51px: 12px bold
   title over a 9px descriptor with a right ›), EM-18 ACCESS & ACCOUNT
   (761:1197, 51px title-only) and EM-19 HELP TOPICS (1133:59, 58px: 10px
   semibold title over a 9px body, 14px #0c513b chevron). */
export function ChevronRow({
  to,
  title,
  description,
  size = "compact",
}: {
  to: string;
  title: string;
  description?: string;
  size?: "compact" | "topic";
}) {
  const topic = size === "topic";

  return (
    <Link
      to={to}
      className={`flex items-center justify-between gap-3 rounded-[10px] border border-[#d1e0d9] bg-white px-[14px] hover:border-brand ${
        topic ? "min-h-[58px] py-[10px]" : "h-[51px]"
      }`}
    >
      <span className="min-w-0">
        <span
          className={`block text-[#083d2d] ${
            topic
              ? "text-[10px] font-semibold lg:text-[12px]"
              : "text-[12px] leading-[15px] font-bold lg:text-[13px] lg:leading-[18px]"
          }`}
        >
          {title}
        </span>
        {description && (
          <span className="mt-[4px] block text-[9px] leading-[11px] text-[#65746d] lg:text-[11px] lg:leading-[16px]">
            {description}
          </span>
        )}
      </span>
      <ChevronRight
        size={topic ? 14 : 16}
        strokeWidth={2}
        className={topic ? "shrink-0 text-[#0c513b]" : "shrink-0 text-[#6e8a82]"}
      />
    </Link>
  );
}
