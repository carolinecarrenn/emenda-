import { Link } from "react-router-dom";
import type { HomePanelView } from "../useHomeView";

/* WD-18 "Next action" mint panel: #e3efe8, radius 14, p-12, one contextual
   full-width #0c5941 CTA (44px, radius 12). The panel is the single
   state-driven "next action" slot — only its copy and CTA change. Every
   variant's CTA is a real link: "Continue identity setup" → W-12 onboarding,
   "Review employer" → the employer invite review, "Connect employer" →
   the connect flow, "Review document" → W-14, and so on. */
export function NextActionPanel({ panel }: { panel: HomePanelView }) {
  const ctaClass =
    "flex h-[40px] w-full items-center justify-center rounded-[12px] bg-brand text-[13px] leading-[18px] font-semibold text-white hover:bg-brand-deep lg:h-[44px]";

  return (
    <div className="flex flex-col gap-[6px] rounded-[14px] bg-brand-soft p-3 lg:min-h-[144px]">
      <p className="text-[14px] leading-[20px] font-semibold text-brand-deep">
        {panel.title}
      </p>
      <p className="text-[11px] leading-[16px] text-ink-muted">{panel.body}</p>
      <Link to={panel.to} className={ctaClass}>
        {panel.cta}
      </Link>
    </div>
  );
}
