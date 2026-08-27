import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Bell, Menu, Search } from "lucide-react";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { ADMIN_COPY } from "../admin.copy";
import { ADMIN_ORG, ADMIN_USER } from "../admin.mock";
import { ADMIN_HEADER_COPY, adminHeaderKeyFor } from "./adminHeader";

/* AD-01 "Company Admin Header" (1182:5766): 76px white bar, 1px #d6e3de
   bottom border, 32px side padding, 16px gaps — heading block (580),
   240px search field, 40px #083d2d bell button with a red badge dot, and the
   Nadia / Company Admin avatar chip. Below lg the mock has no variant, so the
   derived treatment keeps every drawn part: the menu button replaces the fixed
   sidebar, the sub-line wraps instead of truncating, and the search field plus
   the whole identity chip (avatar + name + role) drop to a second row. */
export function AdminTopBar({ onOpenNav }: { onOpenNav: () => void }) {
  const common = useCommonCopy();
  const c = useSectionCopy(ADMIN_COPY);
  const [search, setSearch] = useState("");
  // Each Admin frame draws its own heading, sub-line and search placeholder,
  // so the chrome follows the route rather than repeating AD-01 everywhere.
  const { pathname } = useLocation();
  const header = useSectionCopy(ADMIN_HEADER_COPY)[adminHeaderKeyFor(pathname)];

  const identityChip = (
    <div className="flex shrink-0 items-center gap-[8px] lg:w-[128px]">
      <div className="flex size-[34px] items-center justify-center rounded-full bg-[#083d2d]">
        <span className="text-[13px] leading-none font-bold text-white">
          {ADMIN_USER.initial}
        </span>
      </div>
      <div className="flex flex-col gap-px">
        <span className="text-[10px] leading-none font-semibold text-[#17362f]">
          {ADMIN_USER.name}
        </span>
        <span className="text-[8px] leading-none text-[#65746d]">
          {c.shell.profileRole}
        </span>
      </div>
    </div>
  );

  const searchField = (
    <div className="flex h-[40px] items-center gap-[8px] rounded-[10px] border border-[#d6e3de] bg-[#f7faf8] px-[12px]">
      <Search
        className="size-[18px] shrink-0 text-[#65746d]"
        strokeWidth={1.75}
        aria-hidden="true"
      />
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        aria-label={header.searchPlaceholder}
        placeholder={header.searchPlaceholder}
        className="w-full min-w-0 bg-transparent text-[12px] text-[#17362f] outline-none placeholder:text-[#65746d] lg:text-[10px]"
      />
    </div>
  );

  return (
    <header className="border-b border-[#d6e3de] bg-white px-4 py-[14px] lg:h-[76px] lg:px-[32px] lg:py-[18px]">
      <div className="flex items-center gap-[12px] lg:gap-[16px]">
        <button
          type="button"
          onClick={onOpenNav}
          aria-label={c.shell.openNavigation}
          className="flex size-[40px] shrink-0 items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white lg:hidden"
        >
          <Menu className="size-[18px] text-[#083d2d]" aria-hidden="true" />
        </button>

        <div className="flex min-w-0 flex-1 flex-col gap-[2px] lg:w-[580px] lg:flex-none">
          <h1 className="truncate text-[20px] leading-none font-bold text-[#083d2d]">
            {header.title}
          </h1>
          <p className="text-[11px] leading-[15px] text-[#65746d] lg:truncate lg:text-[10px] lg:leading-none">
            {`${ADMIN_ORG} · ${header.scope}`}
          </p>
        </div>

        <div className="hidden w-[240px] shrink-0 lg:block">{searchField}</div>

        <button
          type="button"
          aria-label={common.nav.notifications}
          className="relative size-[40px] shrink-0 rounded-[10px] border border-[#d6e3de] bg-white"
        >
          <Bell
            className="absolute top-[10px] left-[10px] size-[18px] text-[#083d2d]"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          {/* 1182:5781 sits at 26,7 inside the 40px button — 7px clear of the
              right edge, which is 6px in from the 1px border. */}
          <span className="absolute top-[6px] right-[6px] size-[7px] rounded-full bg-[#b04139]" />
        </button>

        <div className="hidden lg:flex">{identityChip}</div>
      </div>

      <div className="mt-[12px] flex items-center gap-[12px] lg:hidden">
        <div className="min-w-0 flex-1">{searchField}</div>
        {identityChip}
      </div>
    </header>
  );
}
