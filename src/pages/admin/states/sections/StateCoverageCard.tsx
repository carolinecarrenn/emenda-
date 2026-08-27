import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { STATES_COPY, type StatesCopy } from "../states.copy";

/* AD-10 "State coverage" (1225:1349): a 1144x272 white card, radius 12, 1px
   #d6e3de — "State coverage" 13px bold at y15 over the 8px #65746d line at
   y33, then five rows on a 36px pitch (y61…y205) with the 10px semibold state
   name at x15 and its 10px #65746d rule at x179.

   Each row is the entry point to that state's own screen, so the five
   non-happy paths the card enumerates are reachable by clicking rather than
   by typing a query string. */

const COVERAGE_ROWS: {
  key: keyof StatesCopy["coverage"]["rows"];
  state: string;
}[] = [
  { key: "loading", state: "loading" },
  { key: "error", state: "error" },
  { key: "noPermission", state: "no-permission" },
  { key: "noResults", state: "no-results" },
  { key: "destructive", state: "destructive-confirm" },
];

export function StateCoverageCard() {
  const c = useSectionCopy(STATES_COPY);

  return (
    <div className="rounded-[12px] border border-[#d6e3de] bg-white p-[15px] lg:min-h-[272px]">
      <p className="text-[13px] leading-none font-bold text-[#17362e]">
        {c.coverage.title}
      </p>
      <p className="mt-[5px] text-[10px] leading-none text-[#65746d] lg:text-[8px]">
        {c.coverage.subtitle}
      </p>

      <div className="mt-[20px] flex flex-col">
        {COVERAGE_ROWS.map((row) => (
          <Link
            key={row.key}
            to={`/admin/states?state=${row.state}`}
            className="-mx-[7px] flex flex-col gap-[3px] rounded-[8px] px-[7px] py-[8px] hover:bg-[#f7faf8] lg:h-[36px] lg:flex-row lg:items-center lg:gap-0 lg:py-0"
          >
            <span className="text-[11px] leading-none font-semibold text-[#17362e] lg:w-[164px] lg:shrink-0 lg:text-[10px]">
              {c.coverage.rows[row.key].label}
            </span>
            <span className="text-[11px] leading-[15px] text-[#65746d] lg:text-[10px] lg:leading-none">
              {c.coverage.rows[row.key].detail}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
