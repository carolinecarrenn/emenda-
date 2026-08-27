import { useId } from "react";

/**
 * EMENDA mark — a path curving up to a point, for "from where you are to the
 * next step". Used in the header, the footer, the assistant avatar and inside
 * the phone screens, so the gradient id has to be unique per instance:
 * duplicate ids across several inline SVGs make every `url(#…)` reference
 * resolve to the first one in the document, which silently blanks the rest.
 */
export function BrandMark({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const gradientId = `emenda-mark-${useId()}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#0a5b45" />
          <stop offset="100%" stopColor="#04352a" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill={`url(#${gradientId})`} />
      <path
        d="M9 23c0-7.2 4.6-11.8 11.8-12.4"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="21.6" cy="10.4" r="2.6" fill="#8fdcb6" />
    </svg>
  );
}
