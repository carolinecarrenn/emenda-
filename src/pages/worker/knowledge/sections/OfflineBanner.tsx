import { WifiOff } from "lucide-react";

interface OfflineBannerProps {
  message: string;
  className?: string;
}

/* Offline strip. Mobile (W-41B/42D/43A/44D/45C/46B): #fff8e6 fill, radius 12,
   a 20px wifi-off glyph at 13px from the left edge and an 11px #8a5a12
   message. Desktop (WD-41B/42D/44D/45C/46B): #fff5d6 with a 13px medium
   #ad6b0a message. */
export function OfflineBanner({ message, className = "" }: OfflineBannerProps) {
  return (
    <div
      className={`flex min-h-[62px] items-start gap-[12px] rounded-[12px] bg-[#fff8e6] px-[13px] py-[11px] lg:min-h-[64px] lg:items-center lg:gap-[14px] lg:bg-[#fff5d6] lg:px-5 lg:py-3 ${className}`}
    >
      <WifiOff
        size={20}
        className="mt-[8px] shrink-0 text-[#8a5a12] lg:hidden"
        aria-hidden
      />
      <p className="text-[11px] leading-[19px] text-[#8a5a12] lg:text-[13px] lg:leading-normal lg:font-medium lg:text-[#ad6b0a]">
        {message}
      </p>
    </div>
  );
}
