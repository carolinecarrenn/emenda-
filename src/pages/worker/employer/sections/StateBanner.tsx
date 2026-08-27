import type { ReactNode } from "react";
import { WifiOff } from "lucide-react";

interface StateBannerProps {
  tone: "red" | "amber";
  children: ReactNode;
  className?: string;
}

/* State banner — WD-49C node 1182:799 and its expired / validation siblings:
   64px tall, radius 14, #fff0ed fill with a 1px #c72924 border and 13px
   #c72924 text. Offline (WD-49E / WD-51E) uses the app's amber strip.
   Mobile (W-50D node 943:92 red · W-51E node 939:92 amber) draws a 62px
   radius-12 borderless tint inset 13px with 11px copy, and the offline strip
   leads with a 20px wifiOff glyph at x13. */
export function StateBanner({
  tone,
  children,
  className = "",
}: StateBannerProps) {
  const toneClasses =
    tone === "red"
      ? "border-[#fff1ef] bg-[#fff1ef] text-[#a5382b] lg:border-[#c72924] lg:bg-[#fff0ed] lg:text-[#c72924]"
      : "border-[#fff8e6] bg-[#fff8e6] text-[#8a5a12] lg:border-[#ed911a] lg:bg-[#fff5d6] lg:text-[#ad6b0a]";

  return (
    <div
      className={`flex min-h-[62px] items-start rounded-[12px] border px-[13px] py-[12px] lg:min-h-[64px] lg:items-center lg:rounded-[14px] lg:px-[17px] ${toneClasses} ${className}`}
    >
      {tone === "amber" && (
        <WifiOff
          aria-hidden
          className="mt-[5px] mr-[12px] size-[20px] shrink-0 lg:hidden"
        />
      )}
      <p className="text-[11px] leading-[15px] lg:text-[13px] lg:leading-normal">
        {children}
      </p>
    </div>
  );
}
