import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { MarketingNav } from "./sections/MarketingNav";
import { MarketingFooter } from "./sections/MarketingFooter";

/**
 * Layout for the public marketing site: one nav, one footer, one content
 * column width, on every route. Everything inside the outlet is storytelling;
 * the application layer behind /signin keeps its own chrome, and the two are
 * meant to read as different places.
 */
function useMarketingScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ block: "start" });
        return;
      }
    }
    // A new page should start at its own hero, not halfway down because the
    // previous page was scrolled.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);
}

export function MarketingShell() {
  useMarketingScroll();

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-lp-bg font-sans text-lp-ink">
      <MarketingNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <MarketingFooter />
    </div>
  );
}
