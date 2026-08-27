import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useProfileCopy } from "../profile.copy";
import { COIN_BALANCE } from "../profileMock";

/** WD-19 rail — gray-tinted "Legal identity is managed separately" card with
 *  the "View identity" pill. Incomplete (WD-19B) swaps in the "Verified…"
 *  body copy. */
export function LegalIdentityCard({ incomplete = false }: { incomplete?: boolean }) {
  const c = useProfileCopy();
  return (
    <div className="relative rounded-[16px] border border-line bg-[#f0f4f2] px-4 pt-[14px] pb-0 lg:min-h-[116px] lg:pb-[14px]">
      <p className="text-[13px] leading-[18px] font-semibold text-brand-deep lg:leading-[20px]">
        {c.legalIdentityTitle}
      </p>
      {/* W-19B pins the body to a 190px column so the pill never sits on it. */}
      <p className="mt-[7px] w-[190px] text-[11px] leading-[14px] text-ink-muted lg:w-auto lg:max-w-[240px] lg:leading-[1.3]">
        {incomplete ? c.legalIdentityBodyIncomplete : c.legalIdentityBody}
      </p>
      <Link
        to="/worker/identity"
        className="absolute top-[40px] right-[16px] flex h-[32px] w-[112px] items-center justify-center rounded-[14px] border border-line bg-white text-[14px] font-semibold text-brand-deep hover:bg-brand-soft lg:top-[49px] lg:right-[23px] lg:h-[36px] lg:w-[140px]"
      >
        {c.viewIdentity}
      </Link>
    </div>
  );
}

/** W-19 mobile-only "Identity & documents" card with the stacked
 *  View identity / Documents pills. */
export function IdentityDocumentsCard() {
  const c = useProfileCopy();
  return (
    <div className="relative h-[92px] rounded-[16px] border border-line bg-[#f0f4f2] px-4 py-[14px]">
      <p className="text-[13px] leading-[18px] font-semibold text-brand-deep">
        {c.identityDocumentsTitle}
      </p>
      <p className="mt-[7px] max-w-[190px] text-[11px] leading-[1.3] text-ink-muted">
        {c.identityDocumentsBody}
      </p>
      <Link
        to="/worker/identity"
        className="absolute top-[29px] right-[15px] flex h-[26px] w-[112px] items-center justify-center rounded-[14px] border border-line bg-white text-[14px] font-semibold text-brand-deep hover:bg-brand-soft"
      >
        {c.viewIdentity}
      </Link>
      <Link
        to="/worker/documents"
        className="absolute top-[59px] right-[15px] flex h-[26px] w-[112px] items-center justify-center rounded-[14px] border border-line bg-white text-[14px] font-semibold text-brand-deep hover:bg-brand-soft"
      >
        {c.documents}
      </Link>
    </div>
  );
}

/** WD-19 / W-19 white "You control what is shared" privacy card. */
export function PrivacyCard() {
  const c = useProfileCopy();
  return (
    <div className="flex min-h-[82px] flex-col gap-[7px] rounded-[16px] border border-line bg-white px-4 py-[14px] lg:min-h-[104px]">
      <p className="text-[13px] leading-[18px] font-semibold text-brand-deep">
        {c.privacyTitle}
      </p>
      <p className="text-[11px] leading-[16px] text-ink-muted">
        {c.privacyBody}
      </p>
    </div>
  );
}

/** WD-19B mint "Complete your personal profile" callout with the dark-green
 *  "Continue profile" primary button. */
export function CompleteProfileCard() {
  const c = useProfileCopy();
  return (
    <div className="rounded-[16px] border border-line bg-brand-soft px-4 pt-[14px] pb-[8px] lg:pb-[14px]">
      <p className="text-[15px] leading-[18px] font-semibold text-brand-deep">
        {c.completeProfileTitle}
      </p>
      <p className="mt-[7px] text-[12px] leading-[15px] text-ink-muted lg:leading-[1.3]">
        {c.completeProfileBody}
      </p>
      <Link
        to="/worker/profile/edit"
        className="mt-[7px] flex h-[46px] w-full items-center justify-center rounded-[14px] bg-brand text-[14px] font-semibold text-white hover:bg-brand-deep lg:mt-[8px]"
      >
        {c.continueProfile}
      </Link>
    </div>
  );
}

/** W-19 mobile-only mint Emenda Coin strip: "1,240 coins · View rewards". */
export function EmendaCoinStrip() {
  const c = useProfileCopy();
  return (
    <Link
      to="/worker/coin"
      className="flex h-[68px] items-center justify-between rounded-[14px] border border-line bg-[#f0f8f3] px-[14px] py-3 hover:bg-brand-soft"
    >
      <div className="flex h-[44px] flex-col gap-[3px]">
        <p className="text-[11px] leading-[15px] font-semibold text-ink">
          {c.emendaCoin}
        </p>
        <p className="text-[10px] leading-[14px] text-ink-muted">
          {c.coinSummary.replace("{count}", COIN_BALANCE)}
        </p>
      </div>
      <ChevronRight size={20} className="text-brand" />
    </Link>
  );
}
