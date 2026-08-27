import { Link, useLocation } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ADMIN_COPY } from "../admin.copy";
import {
  ADMIN_PRIMARY_NAV,
  ADMIN_UTILITY_NAV,
} from "./adminNav";
import { useAdminNavLabels } from "./useAdminNavLabels";
import { adminActiveNavKeyFor } from "./adminHeader";

/* AD-01 sidebar body (1182:5693): brand block 68px with a 30px #083d2d "E"
   mark, primary nav (44px rows, 200px wide, radius 10 — active = #e8f5f0 pill
   with #083d2d semibold label), a flexible spacer, then the pinned utility
   rows (1182:5758 is 126 tall over two 44px rows, so 32px sits below Log out).
   Every nav *icon* is drawn #083d2d in the frame — only the labels go grey
   (#65746d) when inactive, and Log out is the single grey icon. Shared by the
   fixed desktop sidebar and the derived mobile drawer. */
export function AdminNavPanel({ onNavigate }: { onNavigate?: () => void }) {
  const c = useSectionCopy(ADMIN_COPY);
  const labels = useAdminNavLabels();
  // The frames highlight the item whose screen you are on, not always AD-01.
  const activeKey = adminActiveNavKeyFor(useLocation().pathname);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-[68px] shrink-0 items-center gap-[10px] py-[18px] pr-[16px] pl-[20px]">
        <div className="flex size-[30px] shrink-0 items-center justify-center rounded-[9px] bg-[#083d2d]">
          <span className="text-[15px] leading-none font-bold text-white">
            E
          </span>
        </div>
        <div className="flex flex-col gap-px">
          <span className="text-[18px] leading-none font-bold text-[#083d2d]">
            EMENDA
          </span>
          <span className="text-[8px] leading-none font-semibold tracking-[0.02em] text-[#6e8a82]">
            {c.brand.role}
          </span>
        </div>
      </div>

      <nav className="flex flex-col gap-[6px] px-[16px] py-[8px]">
        {ADMIN_PRIMARY_NAV.map((item) => {
          const active = item.key === activeKey;
          const Icon = item.icon;
          return (
            <Link
              key={item.key}
              to={item.to}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`flex h-[44px] w-full max-w-[200px] items-center gap-[12px] rounded-[10px] px-[12px] ${
                active ? "bg-[#e8f5f0]" : "hover:bg-[#f2f7f5]"
              }`}
            >
              <Icon
                className="size-[18px] shrink-0 text-[#083d2d]"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span
                className={`text-[13px] whitespace-nowrap ${
                  active
                    ? "font-semibold text-[#083d2d]"
                    : "font-medium text-[#65746d]"
                }`}
              >
                {labels[item.key]}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* 1182:5757 "Sidebar spacer" — pins the utility rows to the bottom. */}
      <div className="flex-1" />

      <div className="flex flex-col gap-[6px] px-[16px] pb-[32px]">
        {ADMIN_UTILITY_NAV.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.key}
              to={item.to}
              onClick={onNavigate}
              className="flex h-[44px] w-full max-w-[200px] items-center gap-[12px] rounded-[10px] px-[12px] hover:bg-[#f2f7f5]"
            >
              <Icon
                className={`size-[18px] shrink-0 ${
                  item.key === "logOut" ? "text-[#65746d]" : "text-[#083d2d]"
                }`}
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span className="text-[13px] font-medium whitespace-nowrap text-[#65746d]">
                {labels[item.key]}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
