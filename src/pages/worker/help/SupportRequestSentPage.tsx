import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useHelpCopy } from "./help.copy";
import { HELP_LINKS } from "./helpMock";
import { SupportReceivedCard } from "./sections/SupportReceivedCard";

/** Support Request Sent (Figma WD-48G node 1182:546; mobile W-48G node
 *  899:383). A dedicated confirmation page — not a modal: "Help & support"
 *  breadcrumb, 34px H1, subtitle, the mint "We received your request" card,
 *  then the "Back to Help & support" / "Knowledge & Q&A" button pair. */
export function SupportRequestSentPage() {
  const c = useHelpCopy();

  return (
    <div className="max-w-[1012px] pt-2 lg:pt-[2px]">
      {/* W-48G draws the back chevron after the label inside a 170px row
          (nodes 899:408/899:410); WD-48G is the bare text breadcrumb. */}
      <Link
        to={HELP_LINKS.help}
        className="inline-flex w-[170px] items-center text-[13px] font-semibold text-lp-green hover:text-lp-button lg:w-auto lg:leading-[26px]"
      >
        {c.contact.breadcrumb}
        <ChevronLeft
          size={20}
          strokeWidth={1.8}
          className="ml-auto shrink-0 lg:hidden"
        />
      </Link>
      <h1 className="mt-[14px] text-[22px] font-semibold text-[#083d2d] lg:mt-[12px] lg:font-bold lg:text-[34px] lg:leading-[54px] lg:text-lp-ink">
        {c.sent.title}
      </h1>
      <p className="mt-[14px] text-[12px] text-lp-muted lg:mt-[4px] lg:text-[14px] lg:leading-[34px]">
        {c.sent.subtitle}
      </p>

      <div className="mt-[41px] lg:mt-[52px]">
        <SupportReceivedCard />
      </div>
    </div>
  );
}
