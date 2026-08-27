import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY } from "../career.copy";

/** Green "← Career & CV" back link used by every career sub-page
 *  (Figma WD-23C..J / WD-24E/F back link; mobile W-2x sub-screen chrome).
 *  The extracted-item edit forms (WD-23F/23G) point back at the import
 *  review instead, so `to`/`label` can be overridden. */
export function CareerBreadcrumb({
  to = "/worker/career",
  label,
}: {
  to?: string;
  label?: string;
} = {}) {
  const c = useSectionCopy(CAREER_COPY);
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-[6px] text-[13px] font-semibold text-[#0b684f] hover:text-lp-button"
    >
      <ArrowLeft size={18} strokeWidth={1.5} />
      {label ?? c.breadcrumb}
    </Link>
  );
}
