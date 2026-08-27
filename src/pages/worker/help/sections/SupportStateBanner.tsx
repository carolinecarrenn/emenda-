import { WifiOff } from "lucide-react";

/* Full-width state strips used across 09 · Help & Support.

   Mobile (canonical W-47A node 899:78 / W-48D node 899:287 / W-48C node
   899:265): 350×62, radius 12, fill-coloured border so no stroke reads, 11px
   copy inset 13px. The two offline strips carry the 20px wifiOff glyph at
   inset 13 with the copy starting at 45.
     hubOffline / formOffline — #fff8e6 fill, #8a5a12 copy.
     formError               — #fff1ef fill, #a5382b copy.

   Desktop keeps the WD tokens:
   hubOffline  — WD-47A node 1200:258: 1012×68, radius 14, #fff6e0 fill,
                 #e8ab40 border, 13px #8c540d text, 17px inset (no glyph).
   formOffline — WD-48D node 1200:267: 700×66, radius 12, same amber tokens,
                 15px inset.
   formError   — WD-48C node 1200:264: 700×62, radius 12, #fff2f2 fill,
                 #f09e99 border, 13px #d12924 text, 15px inset. */
export type SupportBannerTone = "hubOffline" | "formOffline" | "formError";

const TONE_CLASS: Record<SupportBannerTone, string> = {
  hubOffline:
    "min-h-[62px] rounded-[12px] border-[#fff8e6] bg-[#fff8e6] px-[13px] text-[#8a5a12] lg:min-h-[68px] lg:rounded-[14px] lg:border-[#e8ab40] lg:bg-[#fff6e0] lg:px-[17px] lg:text-[#8c540d]",
  formOffline:
    "min-h-[62px] rounded-[12px] border-[#fff8e6] bg-[#fff8e6] px-[13px] text-[#8a5a12] lg:min-h-[66px] lg:border-[#e8ab40] lg:bg-[#fff6e0] lg:px-[15px] lg:text-[#8c540d]",
  formError:
    "min-h-[62px] rounded-[12px] border-[#fff1ef] bg-[#fff1ef] px-[13px] text-[#a5382b] lg:border-[#f09e99] lg:bg-[#fff2f2] lg:px-[15px] lg:text-[#d12924]",
};

interface SupportStateBannerProps {
  tone: SupportBannerTone;
  message: string;
  className?: string;
}

export function SupportStateBanner({
  tone,
  message,
  className = "",
}: SupportStateBannerProps) {
  const offline = tone === "hubOffline" || tone === "formOffline";

  return (
    <div
      role="status"
      className={`flex items-center gap-[12px] border py-[11px] lg:py-[12px] ${TONE_CLASS[tone]} ${className}`}
    >
      {offline && (
        <WifiOff
          size={20}
          strokeWidth={1.8}
          aria-hidden="true"
          className="shrink-0 lg:hidden"
        />
      )}
      <p className="text-[11px] leading-[19px] lg:text-[13px]">{message}</p>
    </div>
  );
}
