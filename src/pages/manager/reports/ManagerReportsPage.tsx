import { useState } from "react";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_COPY } from "../manager.copy";
import { ReportsFilterBar } from "./sections/ReportsFilterBar";
import type { ReportsFilter } from "./sections/reportsFilter";
import { ReportsMetricRow } from "./sections/ReportsMetricRow";
import { ReportsList } from "./sections/ReportsList";

/** Manager Reports (Figma EM-11, node 761:1900 — desktop derived from the
 *  mobile IA inside the MD-03 shell; the desktop Reports section in Figma
 *  is still a placeholder). */
export function ManagerReportsPage() {
  const [filter, setFilter] = useState<ReportsFilter>("Today");
  const [search, setSearch] = useState("");
  const common = useCommonCopy();
  const c = useSectionCopy(MANAGER_COPY);

  return (
    <div className="max-w-[1060px]">
      <h1 className="text-[18px] font-bold text-brand-deep lg:text-[30px] lg:leading-[40px]">
        {common.managerNav.reports}
      </h1>
      <p className="mt-[16px] text-[10px] text-[#65746d] lg:mt-0 lg:text-[13px]">
        {c.reports.subtitle}
      </p>

      <div className="mt-[20px]">
        <ReportsFilterBar
          search={search}
          onSearch={setSearch}
          filter={filter}
          onFilter={setFilter}
        />
      </div>
      <div className="mt-[16px]">
        <ReportsMetricRow />
      </div>
      <div className="mt-[13px] lg:mt-[24px]">
        <ReportsList filter={filter} search={search} />
      </div>
      <div className="mt-[16px] rounded-[10px] border border-[#c9ded4] bg-[#e8f5f0] px-[14px] py-[11px]">
        <p className="text-[11px] font-semibold text-brand-deep">
          {c.reports.privacyTitle}
        </p>
        <p className="mt-[4px] text-[9px] text-[#6b8f80] lg:text-[11px]">
          {c.reports.privacyBody}
        </p>
      </div>
      <button
        type="button"
        className="mt-[16px] flex h-[44px] w-full items-center justify-center rounded-[10px] bg-[#076e57] text-[11px] font-semibold text-white hover:bg-brand-deep lg:w-[350px] lg:text-[12px]"
      >
        {c.reports.openGenerator}
      </button>
    </div>
  );
}
