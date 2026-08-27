interface ConsentRevokeCardProps {
  /** Raw provider name — never translated. */
  provider: string;
  access: string;
  body: string;
  className?: string;
}

/* W-61O3 (1196:469) — revoking is confirmed against one amber 350x104 card,
   not the three consent fields: the provider name in 13px semibold ink, the
   "Akses ke: …" line and the consequence sentence, both 11px muted. */
export function ConsentRevokeCard({
  provider,
  access,
  body,
  className = "",
}: ConsentRevokeCardProps) {
  return (
    <div
      className={`rounded-[16px] border border-lp-line bg-[#fef6d6] px-[14px] py-[12px] lg:min-h-[104px] lg:rounded-[14px] lg:px-[17px] ${className}`}
    >
      <p className="text-[13px] leading-[18px] font-semibold text-lp-ink lg:text-[15px] lg:leading-[22px]">
        {provider}
      </p>
      <p className="mt-[8px] text-[11px] leading-[16px] text-lp-muted lg:text-[12px] lg:leading-[18px]">
        {access}
      </p>
      <p className="mt-[6px] text-[11px] leading-[16px] text-lp-muted lg:text-[12px] lg:leading-[18px]">
        {body}
      </p>
    </div>
  );
}
