/* The two note cards that bracket the Daily Report Detail content
   (W-56 / 56A / 56B / 56C / 56D / 56E).

   Mobile (W-56 nodes 1024:2626 and 973:528, W-56A 1024:2629 / 973:585)
   renders both on the #f0f8f3 tint: the read-only notice is a 64px-tall
   radius-12 card (12px sides, 10px above the title, 5px under the body) with
   an 11px/15 semibold ink caps title over a 10px/14 muted body, and the
   ownership note is a 90px-tall radius-14 card with a 13px/18 semibold ink
   title over an 11px/16 muted body.
   Desktop (WD-56A) keeps the white read-only card with its 11px green caps
   label and 14px/22 ink body, and the mint ownership strip with a 14px green
   title. */

export function DetailReadOnlyNotice({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[12px] border border-lp-line bg-lp-tint px-[12px] pt-[10px] pb-[5px] lg:min-h-[110px] lg:rounded-[14px] lg:bg-white lg:px-[19px] lg:pt-[11px] lg:pb-[29px]">
      <p className="text-[11px] leading-[15px] font-semibold text-lp-ink uppercase lg:leading-normal lg:text-lp-green">
        {title}
      </p>
      <p className="mt-[4px] text-[10px] leading-[14px] text-lp-muted lg:mt-[29px] lg:text-[14px] lg:leading-[22px] lg:text-lp-ink">
        {body}
      </p>
    </div>
  );
}

export function DetailOwnershipNote({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="min-h-[90px] rounded-[14px] border border-lp-line bg-lp-tint px-[14px] py-[13px] lg:min-h-[80px] lg:rounded-[12px] lg:px-[17px] lg:pt-[9px] lg:pb-[17px]">
      <p className="text-[13px] leading-[18px] font-semibold text-lp-ink lg:text-[14px] lg:leading-normal lg:text-lp-green">
        {title}
      </p>
      <p className="mt-[6px] text-[11px] leading-[16px] text-lp-muted lg:mt-[11px] lg:text-[13px] lg:leading-normal">
        {body}
      </p>
    </div>
  );
}

/* W-56B / 56C / 56E mobile "cached record" card (W-56B node 973:631): pale
   amber fill, radius 14, 14/13 padding, 90px tall, a 13px/18 semibold ink
   title over an 11px/16 muted body. Desktop keeps the thin StateBanner + closing note pair
   of WD-56B, so this card is mobile-only. */
export function DetailCachedNotice({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="min-h-[90px] rounded-[14px] border border-[#f0dfa8] bg-[#fdf6dd] px-[14px] py-[13px] lg:hidden">
      <p className="text-[13px] leading-[18px] font-semibold text-lp-ink">
        {title}
      </p>
      <p className="mt-[6px] text-[11px] leading-[16px] text-lp-muted">
        {body}
      </p>
    </div>
  );
}
