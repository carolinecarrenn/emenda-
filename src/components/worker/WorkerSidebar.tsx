import { NavLink, useLocation } from "react-router-dom";
import { Settings, LogOut } from "lucide-react";
import { useCommonCopy } from "@/i18n/common";
import { WORKER_NAV, isWorkerNavItemActive } from "./workerNav";

/* Figma WD-54I sidebar: 232px, #f6f9f7, EMENDA 18px bold #054d3d,
   items 44px rounded-10, active bg #e8f5ed semibold #054d3d,
   inactive regular #63756b, Settings/Log out pinned above bottom. */
export function WorkerSidebar() {
  const c = useCommonCopy();
  const { pathname } = useLocation();

  return (
    <aside className="hidden w-[232px] shrink-0 flex-col bg-[#f6f9f7] px-4 lg:flex">
      <NavLink
        to="/"
        className="flex h-[64px] items-center text-[18px] font-bold text-lp-green"
      >
        EMENDA
      </NavLink>
      <nav className="flex flex-col gap-[6px]">
        {WORKER_NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={`flex h-[44px] items-center gap-[14px] rounded-[10px] px-3 text-[14px] ${
              isWorkerNavItemActive(item, pathname)
                ? "bg-lp-mint font-semibold text-lp-green"
                : "font-normal text-lp-muted hover:text-lp-green"
            }`}
          >
            <item.icon size={18} strokeWidth={1.5} />
            {c.nav[item.copyKey]}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto">
        <div className="h-px w-full bg-lp-line" />
        <div className="flex flex-col gap-[6px] py-4">
          <NavLink
            to="/worker/profile"
            className="flex h-[44px] items-center gap-[14px] rounded-[10px] px-3 text-[14px] text-lp-muted hover:text-lp-green"
          >
            <Settings size={18} strokeWidth={1.5} />
            {c.nav.settings}
          </NavLink>
          <NavLink
            to="/auth/logout"
            className="flex h-[44px] items-center gap-[14px] rounded-[10px] px-3 text-[14px] text-lp-muted hover:text-lp-green"
          >
            <LogOut size={18} strokeWidth={1.5} />
            {c.nav.logOut}
          </NavLink>
        </div>
      </div>
    </aside>
  );
}
