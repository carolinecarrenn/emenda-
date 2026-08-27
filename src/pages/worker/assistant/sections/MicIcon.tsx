/* Composer microphone glyph (Figma WD-59 · node 1252:13197). The desktop mic
   is drawn with a stand: capsule, pickup arc, stem and a base bar — lucide's
   `Mic` stops at the stem, so the base is drawn here to match. Mobile keeps
   the lucide glyph, which is what W-59 draws. */
export function MicIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="9" y="2" width="6" height="13" rx="3" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <path d="M12 19v2" />
      <path d="M8 21h8" />
    </svg>
  );
}
