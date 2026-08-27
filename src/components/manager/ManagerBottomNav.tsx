import { NavLink } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { MANAGER_MOBILE_NAV } from "./managerNav";

/* EM-xx mobile bottom nav: 9px labels, inactive #8cb8a8, active bold
   #0c513b, hairline top border. */
export function ManagerBottomNav() {
  const c = useCommonCopy();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 flex border-t border-line bg-white lg:hidden">
      {MANAGER_MOBILE_NAV.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            `flex flex-1 flex-col items-center gap-1 py-2.5 text-[9px] ${
              isActive ? "font-bold text-[#0c513b]" : "text-[#8cb8a8]"
            }`
          }
        >
          <item.icon size={18} strokeWidth={1.5} />
          {c.managerNav[item.copyKey]}
        </NavLink>
      ))}
    </nav>
  );
}
