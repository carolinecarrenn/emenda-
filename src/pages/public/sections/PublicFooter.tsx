import { Link } from "react-router-dom";
import { usePublicCopy } from "../public.copy";
import { PUBLIC_FOOTER_LINK_HREFS, PUBLIC_HOME_HREF } from "../publicMock";

/**
 * Public chrome footer shared by LP-02 / LP-03 / LP-04
 * (Figma 1147:146–1147:150 · 1147:242–1147:246 · 1147:308–1147:312).
 * Divider at y=2140, brand block at y=2174 / x=64, link row at y=2180 ending
 * at x=1334 (right inset 106) — the same right edge as the header switcher.
 */
export function PublicFooter() {
  const c = usePublicCopy();

  return (
    <footer className="w-full border-t border-[#d1ded6]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-start justify-between gap-6 px-6 pt-[33px] pb-[40px] lg:pr-[106px] lg:pl-16">
        <div>
          <Link
            to={PUBLIC_HOME_HREF}
            className="flex min-h-[32px] items-center text-[18px] font-bold text-[#055240]"
          >
            EMENDA
          </Link>
          <p className="mt-[4px] flex min-h-[26px] items-center text-[12px] text-[#63756b]">
            {c.footer.tagline}
          </p>
        </div>
        <div className="text-right lg:mt-[6px]">
          <div className="flex min-h-[28px] flex-wrap items-center justify-end gap-x-8 gap-y-2 text-[12px] text-[#63756b]">
            {c.footer.links.map((label, index) => (
              <a
                key={label}
                href={PUBLIC_FOOTER_LINK_HREFS[index]}
                className="transition-colors duration-150 hover:text-[#055240]"
              >
                {label}
              </a>
            ))}
          </div>
          <p className="mt-[8px] flex min-h-[24px] items-center justify-end text-[11px] text-[#63756b]">
            {c.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
