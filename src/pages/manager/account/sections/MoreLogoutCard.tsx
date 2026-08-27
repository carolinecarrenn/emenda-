import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";

/* Standalone logout card — MD-MORE 1223:64 (pale-red #fce8e0, 500x60, red
   #c74a3d "Logout" + grey "End Manager session") and EM-MORE 761:1066
   (41px row, #c24529 title with the caption right-aligned). */
export function MoreLogoutCard() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <>
      <Link
        to="/manager/logout"
        className="flex min-h-[41px] items-center justify-between gap-3 rounded-[10px] border border-[#d1e0d9] bg-[#fce8e0] py-[8px] pl-[14px] pr-[29px] lg:hidden"
      >
        <span className="text-[11px] font-bold text-[#c24529]">
          {c.more.logoutTitle}
        </span>
        <span className="text-right text-[9px] text-[#6e8a82]">
          {c.more.logoutCaption}
        </span>
      </Link>

      <Link
        to="/manager/logout"
        className="hidden h-[60px] grid-cols-[234px_1fr] items-center rounded-[10px] border border-[#dbe3de] bg-[#fce8e0] px-[16px] lg:grid lg:w-[500px]"
      >
        <span className="text-[13px] font-semibold text-[#c74a3d]">
          {c.more.logoutTitle}
        </span>
        <span className="text-[11px] text-[#65746d]">
          {c.more.logoutCaption}
        </span>
      </Link>
    </>
  );
}
