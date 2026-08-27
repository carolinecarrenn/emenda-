import { Link } from "react-router-dom";
import { BrandMark } from "@/components/marketing/BrandMark";
import { LanguageSelect } from "@/components/marketing/LanguageSelect";
import { useSectionCopy } from "@/i18n/copy";
import { MARKETING_COPY } from "../marketing.copy";

/**
 * Site footer, identical on all seven pages. Internal destinations render as
 * router links; anything without a page behind it yet stays a plain anchor
 * rather than pretending to route somewhere. The language selector is a native
 * <select> here so the header toggle remains the site's only button-role
 * language control.
 */
export function MarketingFooter() {
  const c = useSectionCopy(MARKETING_COPY);

  return (
    <footer className="bg-lp-deep">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] lg:gap-10">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 font-display text-[19px] font-bold text-white">
              <BrandMark size={30} />
              EMENDA
            </div>
            <p className="mt-4 max-w-[300px] text-[14px] leading-[1.7] text-lp-onDark">
              {c.footer.tagline}
            </p>
          </div>

          {c.footer.groups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <p className="text-[12px] font-semibold tracking-[0.1em] text-white/45 uppercase">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-[14px] text-lp-onDark transition-colors duration-150 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-[14px] text-lp-onDark transition-colors duration-150 hover:text-white"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col-reverse items-start gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-white/50">{c.footer.copyright}</p>
          <LanguageSelect label={c.footer.languageLabel} />
        </div>
      </div>
    </footer>
  );
}
