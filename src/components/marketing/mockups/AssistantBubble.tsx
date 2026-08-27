import type { ReactNode } from "react";

/** EMENDA's turn in a mockup conversation. Takes children rather than a
 *  string so an answer can carry a checklist or an action card inside it. */
export function AssistantBubble({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`max-w-[94%] rounded-[18px] rounded-bl-[6px] border border-lp-line bg-white px-4 py-3.5 shadow-lp-sm ${className}`}
    >
      {children}
    </div>
  );
}
