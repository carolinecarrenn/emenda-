import { Keyboard, Mic } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { MOCKS_COPY } from "@/pages/marketing/mocks.copy";

/* A dense trace reads as speech; a handful of tall bars reads as a chart.
   Generated from a fixed formula rather than random values so the waveform is
   identical on every render and in every screenshot. Drawn as one SVG with a
   viewBox instead of 64 flex children: a flex row of fixed-width bars has a
   min-content width of its own, which pushed the whole card past 390. */
const BAR_COUNT = 64;
const BAR_PITCH = 5;
const BARS = Array.from({ length: BAR_COUNT }, (_, index) =>
  Math.round(
    5 +
      20 *
        Math.abs(Math.sin(index * 0.68)) *
        (0.45 + 0.55 * Math.abs(Math.sin(index * 0.21))),
  ),
);

/** The mic, what it heard, and the keyboard sitting right beside it so
 *  neither input looks like the fallback. */
export function VoiceCard() {
  const m = useSectionCopy(MOCKS_COPY);

  return (
    <div className="flex h-full flex-col justify-center rounded-[18px] border border-lp-line bg-lp-bg p-3.5">
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-lp-button text-white shadow-lp-sm">
          <Mic size={17} strokeWidth={1.85} aria-hidden="true" />
        </span>
        <svg
          viewBox={`0 0 ${BAR_COUNT * BAR_PITCH} 32`}
          preserveAspectRatio="none"
          className="h-8 min-w-0 flex-1 text-lp-green/35"
          aria-hidden="true"
        >
          {BARS.map((height, index) => (
            <rect
              key={index}
              x={index * BAR_PITCH}
              y={(32 - height) / 2}
              width="2.4"
              height={height}
              rx="1.2"
              fill="currentColor"
            />
          ))}
        </svg>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-lp-line bg-white text-lp-muted">
          <Keyboard size={16} strokeWidth={1.75} aria-hidden="true" />
        </span>
      </div>

      <div className="mt-3.5 rounded-[12px] border border-lp-line bg-white p-3">
        <p className="text-[9.5px] font-semibold tracking-[0.08em] text-lp-muted uppercase">
          {m.voice.transcriptLabel}
        </p>
        <p className="mt-1.5 text-[12.5px] leading-[1.5] text-lp-ink">
          {m.voice.transcript}
        </p>
      </div>
    </div>
  );
}
