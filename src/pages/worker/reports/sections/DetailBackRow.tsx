import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

/* Daily Report Detail back row — Figma "Back · Reports" (W-56 node 973:511,
   W-56A 973:568, W-56B 973:625).
   Mobile is a 170x28 row with 4px vertical padding: a 13px semibold #0b684f
   label in a fixed 142px box, a 6px gap and then the 20x20 back chevron.
   Desktop (WD-56) keeps the plain inline breadcrumb, so the chevron and the
   fixed row metrics are dropped from `lg` up. */
export function DetailBackRow({ label }: { label: string }) {
  return (
    <Link
      to="/worker/reports"
      className="flex h-[28px] w-[170px] items-center gap-[6px] py-[4px] text-[13px] font-semibold text-[#0b684f] hover:text-lp-button lg:inline lg:h-auto lg:w-auto lg:py-0 lg:text-lp-green"
    >
      <span className="w-[142px] lg:w-auto">{label}</span>
      <ChevronLeft size={20} strokeWidth={2} aria-hidden className="lg:hidden" />
    </Link>
  );
}
