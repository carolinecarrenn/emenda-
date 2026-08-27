import { Link } from "react-router-dom";
import { ChevronRight, type LucideIcon } from "lucide-react";

/* Hub card shared by WD-47 (nodes 1182:46 / 1182:49 / 1182:52 / 1182:55) and
   mobile W-47. Desktop: 492×116 white card, radius 16, border #d1ded6, title
   16px semibold #0f1f1a at 19/17, body 13px #63756b at 19/49 — no icon.
   Mobile: full-width card, radius 14, border #d7e2dc, 22px green line icon
   at inset 15/17,
   13px semibold title, 11px body (quick-help cards are 108px tall with a
   10px body), optional trailing chevron on the action cards. */
interface HelpCardProps {
  to: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  /** Mobile-only trailing chevron (the two action cards in W-47). */
  chevron?: boolean;
  /** QUICK HELP variant: 108px tall on mobile with the lower 10px body. */
  quickHelp?: boolean;
}

export function HelpCard({
  to,
  icon: Icon,
  title,
  desc,
  chevron = false,
  quickHelp = false,
}: HelpCardProps) {
  return (
    <Link
      to={to}
      className={`relative block rounded-[14px] border border-[#d7e2dc] bg-white px-[15px] py-[13px] hover:border-lp-green lg:h-[116px] lg:rounded-[16px] lg:border-lp-line lg:px-[19px] lg:py-[17px] ${
        quickHelp ? "h-[108px]" : "h-[86px]"
      }`}
    >
      <div className="flex gap-[14px] lg:block">
        <Icon
          size={22}
          strokeWidth={1.8}
          className="mt-[4px] shrink-0 text-lp-green lg:hidden"
        />
        <div className={`min-w-0 lg:pr-0 ${chevron ? "pr-[22px]" : ""}`}>
          <p className="text-[13px] font-semibold text-[#17231f] lg:text-[16px] lg:leading-[28px] lg:text-lp-ink">
            {title}
          </p>
          <p
            className={`text-[#65746d] lg:mt-[4px] lg:text-[13px] lg:leading-[46px] lg:text-lp-muted ${
              quickHelp ? "mt-[24px] text-[10px]" : "mt-[4px] text-[11px]"
            }`}
          >
            {desc}
          </p>
        </div>
      </div>
      {chevron && (
        <ChevronRight
          size={18}
          strokeWidth={2}
          className="absolute top-1/2 right-[16px] -translate-y-1/2 text-lp-green lg:hidden"
        />
      )}
    </Link>
  );
}
