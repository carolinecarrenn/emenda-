import { QR_MODULES } from "../onboardingIdMock";

interface QrCardProps {
  /** "EMD-26-8F4K2A · ID only" caption under the code. */
  caption: string;
}

/** W-17A QR card (Figma 471:261 mobile / 817:972 + 822:2 desktop): 300px white card, radius 18,
 *  centered 220×220 QR traced module-for-module from the mock. */
export function QrCard({ caption }: QrCardProps) {
  return (
    <div className="flex h-[300px] flex-col items-center rounded-[18px] border border-[#d6e1db] bg-white">
      <div className="relative mt-[21px] size-[220px] overflow-hidden rounded-[10px] border border-line bg-white">
        {QR_MODULES.map(([x, y, w], i) => (
          <div
            key={i}
            className="absolute bg-ink"
            style={{ left: x, top: y, width: w, height: 7 }}
          />
        ))}
      </div>
      <p className="mt-4 text-center text-[12px] leading-[18px] font-semibold text-[#65746d] lg:text-[12.6px]">
        {caption}
      </p>
    </div>
  );
}
