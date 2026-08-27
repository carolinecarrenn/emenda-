import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { useHelpCopy } from "../help.copy";
import { HELP_LINKS } from "../helpMock";

/* WD-47 "Search knowledge" field (node 1200:254): 1012×44 white field,
   radius 12, border #d1ded6, 13px #63756b placeholder inset 16px. Mobile
   W-47 makes it 52px tall and puts an 18px magnifier before the placeholder.
   Tapping it opens the Knowledge & Q&A search screen — help never searches
   its own index, it defers to the official guidance base. */
export function HelpSearchField() {
  const c = useHelpCopy();

  return (
    <Link
      to={HELP_LINKS.knowledgeSearch}
      className="flex h-[52px] items-center gap-[12px] rounded-[12px] border border-lp-line bg-white px-[16px] hover:border-lp-green lg:h-[44px] lg:gap-0"
    >
      <Search
        size={18}
        strokeWidth={1.8}
        className="shrink-0 text-lp-muted lg:hidden"
      />
      <span className="truncate text-[13px] text-lp-muted">
        {c.hub.searchPlaceholder}
      </span>
    </Link>
  );
}
