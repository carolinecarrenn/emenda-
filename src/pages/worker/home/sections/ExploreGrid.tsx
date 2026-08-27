import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { HOME_COPY } from "../home.copy";

/* WD-18 "Explore shortcuts": 2-column grid of 56px white cards,
   10.5px semibold labels, green › chevron glyph. The fifth tile is the
   only state-driven one: "Connect employer" (headless), "Employer
   connection" (connected), or "Employer access history" (access ended).
   W-18 makes this grid the headless hub's router into Career, Japan
   preparation, Documents, Knowledge, the employer surface and Help —
   each tile opens its own section. */
export function ExploreGrid({
  fifthTile,
}: {
  fifthTile: "connect" | "connection" | "history";
}) {
  const c = useSectionCopy(HOME_COPY);

  const fifth =
    fifthTile === "connection"
      ? { label: c.explore.employerConnection, to: "/worker/employer" }
      : fifthTile === "history"
        ? {
            label: c.explore.employerAccessHistory,
            to: "/worker/employer/history",
          }
        : { label: c.explore.connectEmployer, to: "/worker/employer/connect" };

  const items = [
    { label: c.explore.careerCv, to: "/worker/career" },
    { label: c.explore.japanPreparation, to: "/worker/japan" },
    { label: c.explore.documentsRecords, to: "/worker/documents" },
    { label: c.explore.knowledgeQa, to: "/worker/knowledge" },
    fifth,
    { label: c.explore.helpSupport, to: "/worker/help" },
  ];

  return (
    <section>
      <h2 className="text-[14px] leading-[18px] font-semibold text-ink">
        {c.explore.heading}
      </h2>
      <div className="mt-2 grid grid-cols-2 gap-x-2 gap-y-[7px] lg:mt-4">
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="flex h-[44px] items-center justify-between rounded-[12px] border border-line bg-white px-[10px] hover:border-brand lg:h-[56px]"
          >
            <span className="text-[10.5px] leading-[16px] font-semibold text-ink">
              {item.label}
            </span>
            <span className="text-[16px] leading-[18px] font-semibold text-brand-deep">
              ›
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
