import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { BrandMark } from "@/components/marketing/BrandMark";
import { LandingButton } from "@/components/marketing/LandingButton";
import { useSectionCopy } from "@/i18n/copy";
import { MARKETING_COPY } from "../marketing.copy";
import type { MarketingNavLink } from "./navLinks";

/**
 * Mobile and tablet navigation panel. Mounted only while open, which keeps the
 * header's language switcher unique in the accessibility tree and lets the
 * scroll lock live with the panel that needs it.
 */
export function MarketingMobileMenu({
  links,
  onClose,
}: {
  links: MarketingNavLink[];
  onClose: () => void;
}) {
  const c = useSectionCopy(MARKETING_COPY);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={c.nav.menuTitle}
      className="fixed inset-0 z-50 overflow-y-auto bg-lp-bg xl:hidden"
    >
      <div className="flex h-[68px] items-center justify-between px-5 sm:px-8">
        <span className="flex items-center gap-2.5 font-display text-[19px] font-bold text-lp-green">
          <BrandMark size={30} />
          EMENDA
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label={c.nav.closeMenu}
          className="flex size-10 items-center justify-center rounded-full border border-lp-line bg-white text-lp-ink"
        >
          <X size={18} strokeWidth={1.75} aria-hidden="true" />
        </button>
      </div>

      <nav className="flex flex-col gap-1 px-5 pt-4 sm:px-8">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            onClick={onClose}
            className={({ isActive }) =>
              `rounded-[14px] px-3 py-3 font-display text-[21px] font-semibold ${
                isActive ? "text-lp-green" : "text-lp-ink"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-6 space-y-3 px-5 pb-10 sm:px-8">
        <LandingButton
          to="/signin"
          variant="primary"
          size="lg"
          className="w-full"
        >
          {c.nav.tryCta}
        </LandingButton>
        <LandingButton
          to="/signin"
          variant="secondary"
          size="lg"
          className="w-full"
        >
          {c.nav.signIn}
        </LandingButton>
        <p className="pt-2 text-center text-[12px] text-lp-muted">
          {c.cta.languageNote}
        </p>
      </div>
    </div>
  );
}
