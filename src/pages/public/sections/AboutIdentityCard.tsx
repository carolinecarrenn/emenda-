import { usePublicCopy } from "../public.copy";
import { EMENDA_MASKED_ID, PUBLIC_ICONS } from "../publicMock";
import { PublicIconTile } from "./PublicIconTile";

/**
 * LP-02 hero identity preview — "YOUR EMENDA ID" card (Figma 1147:52):
 * 450x260, r22, icon tile top-aligned with the label stack, hairline at
 * y=126 and the closing note centred in its 84px box.
 */
export function AboutIdentityCard() {
  const c = usePublicCopy();

  return (
    <div className="rounded-[22px] border border-[#d1ded6] bg-white p-[23px] lg:h-[260px]">
      <div className="flex items-start gap-[18px]">
        <PublicIconTile
          src={PUBLIC_ICONS.idBadge}
          size={54}
          iconSize={22}
          radius={14}
        />
        <div>
          <p className="text-[11px] leading-[26px] font-semibold tracking-[0.04em] text-[#63756b]">
            {c.about.idLabel}
          </p>
          <p className="text-[22px] leading-[36px] font-bold text-[#055240]">
            {EMENDA_MASKED_ID}
          </p>
          <p className="text-[13px] leading-[28px] text-[#63756b]">
            {c.about.idCaption}
          </p>
        </div>
      </div>
      <div className="mt-[12px] h-px w-full bg-[#d1ded6]" />
      <p className="mt-[42px] text-[14px] leading-[18px] text-[#63756b]">
        {c.about.idNote}
      </p>
    </div>
  );
}
