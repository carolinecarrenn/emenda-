import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { BrandMark } from "@/components/marketing/BrandMark";
import { LandingButton } from "@/components/marketing/LandingButton";
import { LanguageToggle } from "@/components/marketing/LanguageToggle";
import { useSectionCopy } from "@/i18n/copy";
import { MARKETING_COPY } from "../marketing.copy";
import { buildNavLinks, buildMobileNavLinks } from "./navLinks";
import { MarketingMobileMenu } from "./MarketingMobileMenu";

/**
 * Site header, shared by all seven marketing pages. It starts transparent over
 * each page's hero and only takes on a surface once the page moves, so a 390
 * screen keeps its full first impression.
 *
 * Three breakpoints, because a six-item nav plus two actions does not fit a
 * laptop: below lg it is logo + language + hamburger; from lg the two actions
 * appear; from xl the full nav does. The language switcher is in the bar at
 * every width — it is the page's only button-role language control, and a
 * visitor who cannot read the current language needs it before they open
 * anything.
 */
export function MarketingNav() {
  const c = useSectionCopy(MARKETING_COPY);
  const links = buildNavLinks(c);
  const mobileLinks = buildMobileNavLinks(c);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-colors duration-200 ease-standard ${
          scrolled
            ? "border-b border-lp-line bg-lp-bg/85 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[68px] w-full max-w-[1280px] items-center gap-3 px-5 sm:px-8 lg:h-[72px] lg:px-10">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2 font-display text-[17px] font-bold tracking-[-0.01em] text-lp-green sm:gap-2.5 sm:text-[19px]"
          >
            <BrandMark size={30} className="size-7 sm:size-[30px]" />
            EMENDA
          </Link>

          <nav className="ml-3 hidden items-center gap-0.5 xl:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-[14px] font-medium transition-colors duration-150 ${
                    isActive
                      ? "bg-lp-mint text-lp-green"
                      : "text-lp-muted hover:bg-lp-mint/60 hover:text-lp-green"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:gap-3">
            <LanguageToggle />

            <Link
              to="/signin"
              className="hidden rounded-full px-3 py-2 text-[14px] font-semibold text-lp-ink transition-colors duration-150 hover:text-lp-green lg:block"
            >
              {c.nav.signIn}
            </Link>

            <span className="hidden lg:block">
              <LandingButton to="/signin">{c.nav.tryCta}</LandingButton>
            </span>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={c.nav.openMenu}
              aria-expanded={menuOpen}
              className="flex size-10 items-center justify-center rounded-full border border-lp-line bg-white text-lp-ink xl:hidden"
            >
              <Menu size={18} strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <MarketingMobileMenu
          links={mobileLinks}
          onClose={() => setMenuOpen(false)}
        />
      ) : null}
    </>
  );
}
