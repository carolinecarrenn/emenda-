import { NavLink } from "react-router-dom";
import { EMPLOYER } from "@/data/caregiverReport";
import { useCommonCopy } from "@/i18n/common";
import { MANAGER_DESKTOP_NAV } from "./managerNav";

/* MD-03 sidebar: 248px #083d2d, EMENDA 26px bold white, org line 13px
   #e3f0e8, text-only items 40px; active = #0c5941 pill (radius 10, white). */
export function ManagerSidebar() {
  const c = useCommonCopy();

  return (
    <aside className="hidden w-[248px] shrink-0 flex-col bg-brand-deep px-4 lg:flex">
      <div className="px-3 pt-7 pb-4">
        <NavLink to="/" className="text-[26px] font-bold text-white">
          EMENDA
        </NavLink>
        <p className="mt-1 text-[13px] font-semibold text-brand-soft">
          {EMPLOYER.name}
        </p>
      </div>
      <nav className="flex flex-col gap-3">
        {MANAGER_DESKTOP_NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex h-[40px] items-center rounded-[10px] px-[18px] text-[13px] font-semibold ${
                isActive
                  ? "bg-brand text-white"
                  : "text-brand-soft hover:text-white"
              }`
            }
          >
            {c.managerNav[item.copyKey]}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
