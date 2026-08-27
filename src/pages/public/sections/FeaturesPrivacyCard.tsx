import { Link } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { usePublicCopy } from "../public.copy";
import {
  FEATURES_PRIVACY_ICON,
  PUBLIC_ICONS,
  PUBLIC_LOGIN_HREF,
} from "../publicMock";
import { PublicIconTile } from "./PublicIconTile";

/**
 * LP-03 closing white card "Private by default" with the shield icon and the
 * Log in button (Figma 1147:233–1147:241): 1268x190 at y=1760, copy column
 * starting at x=156 (icon 48 + 20px gutter).
 */
export function FeaturesPrivacyCard() {
  const common = useCommonCopy();
  const c = usePublicCopy();

  return (
    <section className="mt-[45px] rounded-[22px] border border-[#d1ded6] bg-white p-[23px] lg:h-[190px]">
      <div className="flex flex-col gap-[18px] lg:flex-row lg:items-start lg:gap-[20px]">
        <PublicIconTile
          src={PUBLIC_ICONS[FEATURES_PRIVACY_ICON]}
          size={48}
          iconSize={22}
          radius={13}
        />
        <div className="lg:flex-1">
          <p className="flex min-h-[34px] items-center text-[19px] font-semibold text-[#0e1f18]">
            {c.features.privacyTitle}
          </p>
          <p className="mt-[6px] flex min-h-[62px] max-w-[1030px] items-center text-[14px] leading-[17px] text-[#63756b]">
            {c.features.privacyBody}
          </p>
          <Link
            to={PUBLIC_LOGIN_HREF}
            className="mt-[4px] flex h-[42px] w-[140px] items-center justify-center rounded-[12px] bg-[#067a5e] text-[14px] font-semibold text-white transition-colors duration-150 hover:bg-[#055240]"
          >
            {common.action.logIn}
          </Link>
        </div>
      </div>
    </section>
  );
}
