/**
 * Hero atmosphere: two soft green glows and a seigaiha (青海波) wave pattern —
 * a traditional Japanese motif for calm water — masked so it fades out before
 * it ever competes with the headline. Decorative only; kept out of the
 * accessibility tree and out of pointer events.
 */
export function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -top-48 -right-24 size-[640px] rounded-full bg-[radial-gradient(circle,rgba(120,205,166,0.28),transparent_62%)]" />
      <div className="absolute top-[26%] -left-40 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(197,228,211,0.5),transparent_68%)]" />

      <svg
        className="absolute -top-16 -right-24 hidden h-[460px] w-[780px] text-lp-green opacity-[0.1] sm:block"
        style={{
          maskImage:
            "radial-gradient(ellipse at 72% 22%, rgba(0,0,0,0.95), transparent 68%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 72% 22%, rgba(0,0,0,0.95), transparent 68%)",
        }}
      >
        <defs>
          <pattern
            id="lp-seigaiha"
            width="48"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.1">
              <circle cx="24" cy="24" r="23" />
              <circle cx="24" cy="24" r="15.5" />
              <circle cx="24" cy="24" r="8" />
              <circle cx="0" cy="24" r="23" />
              <circle cx="48" cy="24" r="23" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lp-seigaiha)" />
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-lp-bg" />
    </div>
  );
}
