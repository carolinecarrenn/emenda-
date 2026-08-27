import { Building, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ACCESS_COPY } from "../access.copy";
import type { RoutingAccount } from "../accessMock";

/* LP-06/07/08 right route card (Figma nodes 1053:999 headless · 1053:1030 work
   mode · 1107:67 employee): 610x440 at x=700 / y=180, r20. Figma stacks the
   30px glyph at y=210, the title at y=206, the status pill at y=370, the
   550x52 primary at y=430, the 550x48 secondary at y=498 and the note at
   y=562. The headless card is tinted mint with a green check; the connected
   and organization cards are white with a building glyph and an amber pill.
   Nothing auto-redirects — the person always picks between the dark-green
   primary and the white-outline secondary. */
export function RoutingRouteCard({ account }: { account: RoutingAccount }) {
  const c = useSectionCopy(ACCESS_COPY).routing;
  const headless = account.variant === "headless";
  const block =
    account.variant === "headless"
      ? c.headless
      : account.variant === "work"
        ? c.work
        : c.employee;

  return (
    <div
      className={`rounded-[20px] border border-[#d1ded6] px-5 pt-[26px] pb-[24px] lg:h-[440px] lg:w-[610px] lg:px-[29px] lg:pt-[29px] ${
        headless ? "bg-[#e8f5ed]" : "bg-white"
      }`}
    >
      <div className="flex items-start gap-[22px]">
        {headless ? (
          <Check
            size={30}
            strokeWidth={2.4}
            className="shrink-0 text-[#064a38]"
          />
        ) : (
          <Building
            size={30}
            strokeWidth={1.8}
            className="shrink-0 text-[#064a38]"
          />
        )}
        <h2 className="flex min-h-[36px] items-center text-[22px] leading-[36px] font-semibold text-[#064a38] lg:text-[26px]">
          {block.title}
        </h2>
      </div>

      {headless ? (
        <p className="mt-[26px] flex min-h-[72px] items-center text-[15px] leading-[19px] text-[#5c6e63] lg:w-[550px]">
          {c.headless.body}
        </p>
      ) : (
        <>
          <p className="mt-[30px] flex min-h-[28px] items-center text-[18px] font-semibold text-[#111f1a]">
            {account.organization}
          </p>
          <p className="mt-[6px] flex min-h-[28px] items-center text-[14px] text-[#5c6e63]">
            {account.variant === "work"
              ? `${account.role} · ${c.managerLabel}: ${account.manager}`
              : c.employee.subline}
          </p>
        </>
      )}

      <div className={headless ? "mt-[26px]" : "mt-[32px]"}>
        <span
          className={`inline-flex h-[28px] items-center rounded-[14px] border px-[14px] text-[11px] font-semibold ${
            headless
              ? "border-[#d1ded6] bg-[#e8f5ed] text-[#064a38]"
              : "border-[#edb859] bg-[#fff6db] text-[#85570d]"
          }`}
        >
          {block.pill}
        </span>
      </div>

      <Link
        to={account.primaryTo}
        className="mt-[32px] flex h-[52px] w-full items-center justify-center rounded-[10px] bg-[#08664f] text-[14px] font-semibold text-white transition-colors duration-150 hover:bg-brand-deep lg:w-[550px]"
      >
        {block.primary}
      </Link>
      <Link
        to={account.secondaryTo}
        className="mt-[16px] flex h-[48px] w-full items-center justify-center rounded-[10px] border border-[#d1ded6] bg-white text-[14px] font-semibold text-[#064a38] transition-colors duration-150 hover:bg-[#f2f9f5] lg:w-[550px]"
      >
        {block.secondary}
      </Link>

      <p className="mt-[16px] flex min-h-[30px] items-center justify-center text-center text-[13px] leading-[20px] text-[#5c6e63] lg:w-[550px]">
        {block.footnote}
      </p>
    </div>
  );
}
