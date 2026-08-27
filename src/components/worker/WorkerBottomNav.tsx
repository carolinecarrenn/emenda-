import { NavLink, useLocation } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { WORKER_NAV, isWorkerNavItemActive } from "./workerNav";

export function WorkerBottomNav() {
  const c = useCommonCopy();
  const { pathname } = useLocation();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 flex border-t border-line bg-surface lg:hidden">
      {WORKER_NAV.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={`flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] ${
            isWorkerNavItemActive(item, pathname)
              ? "font-semibold text-brand"
              : "text-ink-muted"
          }`}
        >
          <item.icon size={20} strokeWidth={1.5} />
          {c.nav[item.copyKey]}
        </NavLink>
      ))}
    </nav>
  );
}
