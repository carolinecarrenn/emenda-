import type { RosterWorker } from "../workspaceMock";

/* MD-04 filter chips (1213:316…325). Filter identity is language
   independent — only the chip labels localize — so the roster keeps working
   across a language switch without resetting the manager's selection. */
export const ROSTER_FILTERS = [
  "all",
  "needsReview",
  "unread",
  "visaAdmin",
  "disconnected",
] as const;

export type RosterFilter = (typeof ROSTER_FILTERS)[number];

function matchesFilter(worker: RosterWorker, filter: RosterFilter): boolean {
  switch (filter) {
    case "needsReview":
      return worker.connection === "needsReview" || worker.reports === "missing";
    case "unread":
      return worker.unread > 0;
    case "visaAdmin":
      return worker.visaAdmin !== "clear";
    case "disconnected":
      return worker.connection === "disconnected";
    default:
      return true;
  }
}

/** MD-04 search covers worker, EMENDA ID, role and status. */
function matchesSearch(worker: RosterWorker, query: string): boolean {
  if (!query) return true;
  return [
    worker.name,
    worker.emendaId,
    worker.role,
    worker.connection,
    worker.reports,
    worker.visaAdmin,
  ]
    .join(" ")
    .toLowerCase()
    .includes(query);
}

export function filterRoster(
  workers: RosterWorker[],
  filter: RosterFilter,
  search: string,
): RosterWorker[] {
  const query = search.trim().toLowerCase();
  return workers.filter(
    (worker) => matchesFilter(worker, filter) && matchesSearch(worker, query),
  );
}
