import { useCallback, useEffect, useMemo, useState } from "react";
import {
  EMPTY_DRAFT,
  TODAY,
  WORKER,
  type CaregiverReport,
  type CaregiverReportDraft,
} from "./caregiverReport";
import { ReportsContext } from "./reportsContext";

const STORAGE_KEY = "emenda-caregiver-reports";

const SEED_REPORTS: CaregiverReport[] = [
  {
    id: "rpt-2026-08-24",
    workerName: WORKER.name,
    workerRole: WORKER.role,
    date: "24 Aug 2026",
    shift: "Day shift",
    submittedAt: "17:38",
    status: "verified",
    verifiedAt: "25 Aug 08:55",
    reportFlag: "Normal",
    resident: "Tanaka-san · 田中さん",
    residentCondition: "Stable",
    meal: "Full portion · Porsi penuh",
    careNotes:
      "Morning mobility exercise completed. Resident joined the group activity and rested well in the afternoon.",
    careNotesTranslated:
      "Latihan mobilitas pagi selesai. Penghuni mengikuti kegiatan kelompok dan beristirahat dengan baik.",
    quickNotes: ["Condition normal"],
    followUp: "",
  },
  {
    id: "rpt-2026-08-23",
    workerName: WORKER.name,
    workerRole: WORKER.role,
    date: "23 Aug 2026",
    shift: "Day shift",
    submittedAt: "17:45",
    status: "verified",
    verifiedAt: "24 Aug 09:10",
    reportFlag: "Needs attention",
    resident: "Tanaka-san · 田中さん",
    residentCondition: "Needs attention",
    meal: "Half portion · Setengah porsi",
    careNotes:
      "Appetite lower than usual at lunch. Fluid intake normal. Shared with the next shift during handover.",
    careNotesTranslated:
      "Nafsu makan lebih rendah dari biasanya saat makan siang. Asupan cairan normal. Sudah disampaikan ke shift berikutnya.",
    quickNotes: ["Meal reduced", "Monitor"],
    followUp: "Monitor meal portions for the next two days.",
  },
];

function loadReports(): CaregiverReport[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as CaregiverReport[];
  } catch {
    // storage unavailable — fall back to seed data
  }
  return SEED_REPORTS;
}

export function ReportsProvider({ children }: { children: React.ReactNode }) {
  const [reports, setReports] = useState<CaregiverReport[]>(loadReports);
  const [draft, setDraft] = useState<CaregiverReportDraft>(EMPTY_DRAFT);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
    } catch {
      // storage unavailable — state stays in memory
    }
  }, [reports]);

  const resetDraft = useCallback(() => setDraft(EMPTY_DRAFT), []);

  const submitDraft = useCallback(() => {
    const now = new Date();
    const submittedAt = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    const report: CaregiverReport = {
      ...draft,
      id: `rpt-${Date.now()}`,
      workerName: WORKER.name,
      workerRole: WORKER.role,
      date: TODAY,
      shift: WORKER.shift,
      submittedAt,
      status: "submitted",
    };
    setReports((prev) => [report, ...prev]);
    setDraft(EMPTY_DRAFT);
    return report;
  }, [draft]);

  const verifyReport = useCallback((id: string) => {
    setReports((prev) =>
      prev.map((report) =>
        report.id === id
          ? { ...report, status: "verified", verifiedAt: `${TODAY} · now` }
          : report,
      ),
    );
  }, []);

  const todayReport = useMemo(
    () => reports.find((report) => report.date === TODAY),
    [reports],
  );

  const value = useMemo(
    () => ({
      reports,
      draft,
      setDraft,
      resetDraft,
      submitDraft,
      verifyReport,
      todayReport,
    }),
    [reports, draft, resetDraft, submitDraft, verifyReport, todayReport],
  );

  return (
    <ReportsContext.Provider value={value}>{children}</ReportsContext.Provider>
  );
}
