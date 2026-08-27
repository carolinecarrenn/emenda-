import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ACCESS_COPY } from "../access.copy";

/* Account-creation door inside the LP-05 "Unified login card" (Figma node
   1107:19).

   FIGMA STATUS — deliberate deviation, see access.copy.ts:
   LP-05 (1060:43) draws NO sign-up path: its card ends at the "Secure access
   to your EMENDA account." helper (node 1107:31, y=444..486). The unified
   sign-in section is documented as "no role selector, no worker vs company
   toggle, and no registration link". But the CANONICAL mobile flow W-03
   Welcome (421:11) does carry the capability as a secondary "Create new
   account" button under the primary "Log in", with the employer-optional
   footnote below it — and the canonical-mobile rule says a capability that
   exists on mobile must exist here too. So the W-03 pattern (secondary
   button + its footnote, copy verbatim) is re-drawn in LP-05's own design
   system rather than W-03's mobile one:

     · W-03 secondary button — h56, r15, 1px #d4e1dd, label #08745e
     · LP-05 metrics used here — h52 / 484px wide / r12 (matching the card's
       own "Button · Log in" 1107:28), 1px #d1ded6 hairline (the card border
       and header divider color), label #056b54 (--color-lp-button, the card's
       own action green), hover tint #f2f9f5 (--color-lp-tint)

   Placed after the helper microcopy behind the same #d1ded6 hairline the page
   uses under its header, so the credential form stays the card's primary
   subject and account creation reads as the alternative below it. */
export function SignInCreateAccount() {
  const c = useSectionCopy(ACCESS_COPY).signIn;

  return (
    <div className="mt-[20px] border-t border-[#d1ded6] pt-[20px] lg:w-[484px]">
      <Link
        to="/auth/register"
        className="flex h-[52px] w-full items-center justify-center rounded-[12px] border border-[#d1ded6] bg-white text-[14px] font-semibold text-lp-button transition-colors duration-150 hover:bg-lp-tint"
      >
        {c.createAccount}
      </Link>
      <p className="mt-[10px] text-center text-[12px] leading-[18px] text-lp-muted">
        {c.createAccountNote}
      </p>
    </div>
  );
}
