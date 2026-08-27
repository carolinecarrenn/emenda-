import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { JAPAN_COPY } from "../../japan.copy";
import {
  COMPARE_STATUS_SHORT,
  RESIDENCE_RECORD,
  VERIFIED_RESIDENCE_RECORD,
} from "../../japanMock";
import { HubCard } from "../../sections/HubCard";
import { PrimaryButton, SecondaryButton } from "../../sections/PrimaryButton";

/** WD-33K verified-source merge: white "Current saved details" vs mint
 *  "From verified residence card", each above a full-width green action —
 *  the worker explicitly chooses which record wins. */
export function ReviewUpdateCards() {
  const c = useSectionCopy(JAPAN_COPY);
  const { language } = useLanguage();
  const navigate = useNavigate();

  const currentDate = formatDisplayDate(RESIDENCE_RECORD.validUntil, language);
  const verifiedDate = formatDisplayDate(
    VERIFIED_RESIDENCE_RECORD.validUntil,
    language,
  );

  return (
    <div>
      <div className="grid items-start gap-y-[14px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[24px]">
        <HubCard
          title={c.residence.currentTitle}
          lines={[
            `${c.residence.compareStatusLabel} ${COMPARE_STATUS_SHORT}`,
            `${c.residence.compareValidLabel} ${currentDate}`,
          ]}
          className="lg:min-h-[104px]"
        />
        <HubCard
          tone="mint"
          title={c.residence.verifiedTitle}
          lines={[
            `${c.residence.compareStatusLabel} ${COMPARE_STATUS_SHORT}`,
            `${c.residence.compareValidLabel} ${verifiedDate}`,
            `${c.residence.compareSourceLabel} ${c.residence.compareSourceVerified}`,
          ]}
          className="lg:min-h-[104px]"
        />
      </div>
      <div className="mt-[24px] grid gap-y-[16px] lg:grid-cols-2 lg:gap-x-[40px]">
        <PrimaryButton
          label={c.residence.apply}
          onClick={() =>
            navigate("/worker/japan/residence?state=verified-source")
          }
        />
        {/* W-33K 626:1119 draws "Keep current details" as the quiet
            white/outlined 44px action under the solid Apply; WD-33K
            `1014:1759` pairs it solid green beside Apply. */}
        <SecondaryButton
          label={c.residence.keep}
          onClick={() => navigate("/worker/japan/residence")}
          sizeClass="h-[44px] rounded-[13px] lg:h-[52px] lg:rounded-[12px]"
          className="lg:border-transparent lg:bg-[#08664d] lg:text-white lg:hover:border-transparent lg:hover:bg-[#0b6b57]"
        />
      </div>
    </div>
  );
}
