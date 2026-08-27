import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINFOLLOWUP_COPY } from "../followup.copy";

/* Return path out of the AD-05B / AD-05C / AD-05D state screens back to the
   AD-05 board. The companion frames are drawn as standalone boards with no
   chrome of their own, so this is the app's standard `?state=` return link
   rather than a control the frames draw. */
export function BackToBoardLink() {
  const c = useSectionCopy(ADMINFOLLOWUP_COPY);

  return (
    <Link
      to="/admin/follow-up"
      className="flex w-fit items-center gap-[6px] text-[11px] font-semibold text-[#083d2d] hover:underline"
    >
      <ArrowLeft className="size-[14px]" strokeWidth={2} aria-hidden="true" />
      {c.nav.backToBoard}
    </Link>
  );
}
