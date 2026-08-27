import { EMPLOYER } from "@/data/caregiverReport";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_COPY } from "../../manager.copy";

/* MD-03: H1 30px bold #083d2d, 13px #66736b subtitle. */
export function DashboardHeader() {
  const common = useCommonCopy();
  const c = useSectionCopy(MANAGER_COPY);

  return (
    <div>
      <h1 className="text-[24px] leading-[30px] font-bold text-brand-deep lg:text-[30px] lg:leading-[40px]">
        {common.managerNav.dashboard}
      </h1>
      <p className="mt-[8px] text-[13px] text-[#66736b] lg:mt-0">
        {c.dashboard.subtitle.replace("{facility}", EMPLOYER.facility)}
      </p>
    </div>
  );
}
