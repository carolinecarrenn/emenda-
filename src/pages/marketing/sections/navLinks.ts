import type { MarketingChromeCopy } from "../marketing.copy";

export interface MarketingNavLink {
  label: string;
  to: string;
}

/**
 * The site's primary navigation.
 *
 * Ordered platform-first: Platform, then the two audiences, then how it works.
 * EMENDA Assistant is deliberately NOT in the desktop header — it is one
 * capability inside the platform, and giving it a top-level slot beside
 * Platform would say the opposite. It is reachable from the homepage section,
 * the platform page, the footer, and the mobile menu.
 */
export function buildNavLinks(c: MarketingChromeCopy): MarketingNavLink[] {
  return [
    { label: c.nav.platform, to: "/platform" },
    { label: c.nav.workers, to: "/workers" },
    { label: c.nav.organizations, to: "/organizations" },
    { label: c.nav.howItWorks, to: "/how-it-works" },
    { label: c.nav.useCases, to: "/use-cases" },
    { label: c.nav.about, to: "/about" },
  ];
}

/** The mobile panel has room for the full set, so it carries Home, the
 *  assistant and Help as well. */
export function buildMobileNavLinks(
  c: MarketingChromeCopy,
): MarketingNavLink[] {
  return [
    { label: c.nav.home, to: "/" },
    ...buildNavLinks(c),
    { label: c.nav.assistant, to: "/assistant" },
    { label: c.nav.help, to: "/help" },
  ];
}
