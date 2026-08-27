interface QuestionBubbleIconProps {
  size?: number;
  className?: string;
}

/* Figma WD-41 "Icon · Question": a square speech bubble with a question mark.
   lucide-react ships no message-square-question in the pinned version, so the
   same 24-grid / 2px-stroke outline is drawn locally to keep the tile icons
   consistent with the rest of the set. */
export function QuestionBubbleIcon({
  size = 18,
  className,
}: QuestionBubbleIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M9.8 8.6a2.3 2.3 0 0 1 4.4.9c0 1.5-2.2 2.2-2.2 2.2" />
      <path d="M12 14.4h.01" />
    </svg>
  );
}
