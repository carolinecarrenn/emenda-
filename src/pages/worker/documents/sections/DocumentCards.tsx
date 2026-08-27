import { Link } from "react-router-dom";
import { StatusPill } from "./StatusPill";

/** WD-37 hub cards: white 14px-radius cards (~108px) with 14px semibold
 *  title, 11px grey meta line, and a right-aligned provenance pill. */

export function DocumentCard({
  to,
  name,
  meta,
  pillLabel,
  pillTone,
}: {
  to: string;
  name: string;
  meta: string;
  pillLabel: string;
  pillTone: "mint" | "amber";
}) {
  return (
    <Link
      to={to}
      className="block min-h-[108px] rounded-[14px] border border-[#d7e2dc] bg-white px-[15px] py-[13px] hover:border-brand"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-[14px] font-semibold text-[#17231f]">{name}</p>
        <StatusPill label={pillLabel} tone={pillTone} />
      </div>
      <p className="mt-[6px] max-w-[420px] text-[11px] text-[#65746d]">{meta}</p>
    </Link>
  );
}

/** W-37A loading (Figma 758:118..121): four flat 72px #e9efec blocks at 80%
 *  opacity with a 12px radius — no card border, no inner placeholder bars. */
export function SkeletonDocumentCards() {
  return (
    <>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-[72px] animate-pulse rounded-[12px] bg-[#e9efec] opacity-80"
        />
      ))}
    </>
  );
}
