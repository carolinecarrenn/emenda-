import { useEffect, useId, type ReactNode } from "react";

/* AD-09B card shell (1226:1179 / 1226:1192): a 360px-tall white card, radius
   12, 1px #d6e3de, 19px padding — a 16px bold #17362e question over the 9px
   #65746d consequence line, the body, and the action pair pinned at the foot.

   AD-09B is drawn as a states board, so it carries no scrim of its own; here
   the two cards are the real dialogs the AD-09 buttons open, so they are
   presented over a scrim and close on Escape. */
export function SettingsDialog({
  title,
  subtitle,
  onClose,
  width,
  children,
  actions,
}: {
  title: string;
  subtitle: string;
  onClose: () => void;
  /** Figma card width — 320 for save, 328 for reset. */
  width: string;
  children: ReactNode;
  actions: ReactNode;
}) {
  const titleId = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-[#0f1f1a]/40"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`relative flex w-full flex-col rounded-[12px] border border-[#d6e3de] bg-white p-[19px] lg:h-[360px] ${width}`}
      >
        <h2
          id={titleId}
          className="text-[16px] leading-none font-bold text-[#17362e]"
        >
          {title}
        </h2>
        <p className="mt-[9px] text-[10px] leading-[14px] text-[#65746d] lg:text-[9px]">
          {subtitle}
        </p>
        {children}
        <div className="mt-[24px] flex items-center gap-[12px] lg:mt-auto">
          {actions}
        </div>
      </div>
    </div>
  );
}
