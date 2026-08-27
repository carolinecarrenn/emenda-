import { createContext, useContext } from "react";
import type {
  CaregiverReport,
  CaregiverReportDraft,
} from "./caregiverReport";

export interface ReportsContextValue {
  reports: CaregiverReport[];
  draft: CaregiverReportDraft;
  setDraft: (draft: CaregiverReportDraft) => void;
  resetDraft: () => void;
  submitDraft: () => CaregiverReport;
  verifyReport: (id: string) => void;
  todayReport: CaregiverReport | undefined;
}

export const ReportsContext = createContext<ReportsContextValue | null>(null);

export function useReports(): ReportsContextValue {
  const ctx = useContext(ReportsContext);
  if (!ctx) throw new Error("useReports must be used within ReportsProvider");
  return ctx;
}
