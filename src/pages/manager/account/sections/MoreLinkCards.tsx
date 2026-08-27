import { Link } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { MORE_LINKS, type MoreLink } from "../accountData";
import { ChevronRow } from "./ChevronRow";
import { SectionLabel } from "./SectionLabel";

/* MD-MORE menu grid (1223:40…1223:63): two columns of 500x60 white cards,
   13px semibold name at 16px in, 11px #65746d descriptor at the 250px
   column, 30px column gap / 18px row gap. The label pair sits at y+13, not
   centred in the 60px card (1223:41/42 against 1223:40).
   EM-MORE (761:1037…761:1065): OPERATIONS renders 51px stacked chevron rows,
   GOVERNANCE & ACCOUNT renders 41px rows with the descriptor right-aligned
   to x=340 — 30px in from the card edge (761:1056/1059/1062/1065). */
export function MoreLinkCards() {
  const common = useCommonCopy();
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  const operations = MORE_LINKS.filter((l) => l.group === "operations");
  const governance = MORE_LINKS.filter((l) => l.group === "governance");

  const name = (link: MoreLink) => common.managerNav[link.id];

  return (
    <>
      {/* EM-MORE mobile — grouped under the two caps labels */}
      <div className="lg:hidden">
        <SectionLabel>{c.more.operations}</SectionLabel>
        <div className="mt-[13px] flex flex-col gap-[11px]">
          {operations.map((link) => (
            <ChevronRow
              key={link.id}
              to={link.to}
              title={name(link)}
              description={c.more.descriptors[link.id]}
            />
          ))}
        </div>

        <div className="mt-[22px]">
          <SectionLabel>{c.more.governance}</SectionLabel>
        </div>
        <div className="mt-[13px] flex flex-col gap-[7px]">
          {governance.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className="flex min-h-[41px] items-center justify-between gap-3 rounded-[10px] border border-[#d1e0d9] bg-white py-[8px] pl-[14px] pr-[29px] hover:border-brand"
            >
              <span className="text-[11px] font-bold text-[#094033]">
                {name(link)}
              </span>
              <span className="text-right text-[9px] text-[#6e8a82]">
                {c.more.descriptors[link.id]}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* MD-MORE desktop — 2-column card grid */}
      <div className="hidden gap-x-[30px] gap-y-[18px] lg:grid lg:grid-cols-[500px_500px]">
        {MORE_LINKS.map((link) => (
          <Link
            key={link.id}
            to={link.to}
            className="grid h-[60px] grid-cols-[233px_1fr] items-center rounded-[10px] border border-[#dbe3de] bg-white px-[16px] pb-[14px] hover:border-brand"
          >
            <span className="text-[13px] font-semibold text-brand-deep">
              {name(link)}
            </span>
            <span className="text-[11px] text-[#65746d]">
              {c.more.descriptors[link.id]}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
