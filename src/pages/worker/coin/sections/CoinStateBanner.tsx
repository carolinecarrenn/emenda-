interface CoinStateBannerProps {
  message: string;
  className?: string;
}

/* WD-60E "State banner" (1186:1699): full-width 1012x62 amber strip inserted
   above otherwise unchanged content — #fff5d6 fill, #ed911a border,
   13px #804d0d message. */
export function CoinStateBanner({
  message,
  className = "",
}: CoinStateBannerProps) {
  return (
    <div
      className={`flex min-h-[62px] items-center rounded-[12px] border border-[#ed911a] bg-[#fff5d6] px-[17px] py-[10px] ${className}`}
    >
      <p className="text-[13px] leading-[19px] text-[#804d0d]">{message}</p>
    </div>
  );
}
