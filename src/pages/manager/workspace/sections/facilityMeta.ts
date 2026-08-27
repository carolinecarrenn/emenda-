import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY, fill } from "../workspace.copy";
import type { ManagedFacility } from "../workspaceMock";

/* The facility meta line is assembled from localizable fragments so the
   MD-02 row reads "48 workers · Reports 96% · 4 follow-up · 2 visa/admin",
   "26 workers · Reports 100% · 1 follow-up · no admin alerts" and
   "18 workers · Reports 94% · 2 follow-up · 1 admin alert" verbatim, while
   MD-02B (1213:149/153/157) drops the report percentage. */
export function useFacilityMeta() {
  const c = useSectionCopy(WORKSPACE_COPY);

  const adminPart = (facility: ManagedFacility) => {
    if (facility.admin.kind === "visaAdmin")
      return fill(c.facility.metaVisaAdmin, { count: facility.admin.count });
    if (facility.admin.kind === "alert")
      return fill(c.facility.metaAdminAlert, { count: facility.admin.count });
    return c.facility.metaNoAdminAlerts;
  };

  return {
    /** MD-02 / EM-02 facility row. */
    full(facility: ManagedFacility) {
      return [
        fill(c.facility.metaWorkers, { count: facility.workers }),
        fill(c.facility.metaReports, { pct: facility.reportsPct }),
        fill(c.facility.metaFollowUp, { count: facility.followUp }),
        adminPart(facility),
      ].join(" · ");
    },
    /** EM-02 facility card — "48 workers · Reports 96% · Follow-up 4". */
    mobile(facility: ManagedFacility) {
      return [
        fill(c.facility.metaWorkers, { count: facility.workers }),
        fill(c.facility.metaReports, { pct: facility.reportsPct }),
        fill(c.facility.metaFollowUpMobile, { count: facility.followUp }),
      ].join(" · ");
    },
    /** EM-02B switch row (761:1125) — "34 workers · 2 follow-up". The 390px
     *  frame drops the admin clause the desktop row carries. */
    shortMobile(facility: ManagedFacility) {
      return [
        fill(c.facility.metaWorkers, { count: facility.workers }),
        fill(c.facility.metaFollowUp, { count: facility.followUp }),
      ].join(" · ");
    },
    /** MD-02B switch row — no report percentage, follow-up only when open. */
    short(facility: ManagedFacility) {
      const parts = [fill(c.facility.metaWorkers, { count: facility.workers })];
      if (facility.followUp > 0)
        parts.push(fill(c.facility.metaFollowUp, { count: facility.followUp }));
      parts.push(adminPart(facility));
      return parts.join(" · ");
    },
  };
}
