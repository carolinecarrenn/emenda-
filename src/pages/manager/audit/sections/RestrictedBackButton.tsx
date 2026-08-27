import { useNavigate } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";

/* EM-STATE-03 single "Back" CTA (1137:27-28): the permission screen uses a
   different button spec from the export flow — 350x44, radius 8, white on a
   1px #c7dbd1 border, 11px semibold #083d2d. It only returns the manager to
   the previous screen; no additional scope or data is revealed. */
export function RestrictedBackButton() {
  const navigate = useNavigate();
  const common = useCommonCopy();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="flex h-[44px] w-full items-center justify-center rounded-[8px] border border-[#c7dbd1] bg-white text-[11px] font-semibold text-[#083d2d] hover:border-brand"
    >
      {common.action.back}
    </button>
  );
}
