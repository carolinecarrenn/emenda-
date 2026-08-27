import { NavLink } from "react-router-dom";
import { EMPLOYER } from "@/data/caregiverReport";
import { useCommonCopy } from "@/i18n/common";

/* MD-03 header: no bell/avatar — a right-aligned context text block on
   desktop; the small EMENDA eyebrow on mobile (EM-xx chrome). */
export function ManagerTopBar() {
  const c = useCommonCopy();

  return (
    <header className="flex items-start justify-between px-5 pt-4 lg:justify-end lg:px-8 lg:pt-10">
      <NavLink
        to="/"
        className="text-[11px] font-bold text-brand-deep lg:hidden"
      >
        EMENDA
      </NavLink>
      <div className="hidden text-left lg:block lg:text-right">
        <p className="text-[13px] font-semibold text-brand-deep">
          {EMPLOYER.name} · {c.manager.facilityManager}
        </p>
        <p className="mt-1 text-[11px] text-[#66736b]">
          {c.manager.contextLine}
        </p>
      </div>
    </header>
  );
}
