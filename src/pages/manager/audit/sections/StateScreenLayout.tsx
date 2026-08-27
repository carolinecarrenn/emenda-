import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { AuditPageHeader } from "./AuditPageHeader";

/* EM-STATE-01/02/03 chrome (761:3013 / 761:2946 / 761:3697): the app-wide
   resilience interstitials drop the bottom nav entirely — a full-screen
   single column on #f7f9f6 with the EMENDA eyebrow, title, subtitle and an
   optional status chip. Desktop keeps the same centred column (the Figma
   desktop section 1192:960 is still a placeholder). */
export function StateScreenLayout({
  title,
  subtitle,
  chip,
  children,
}: {
  title: string;
  subtitle: string;
  chip?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-canvas">
      <div className="mx-auto w-full max-w-[390px] px-5 pt-[4px] pb-12 lg:max-w-[620px] lg:pt-16 lg:pb-20">
        <Link to="/" className="text-[11px] font-bold text-brand-deep">
          EMENDA
        </Link>
        <div className="lg:mt-[14px]">
          <AuditPageHeader title={title} subtitle={subtitle} chip={chip} />
        </div>
        {children}
      </div>
    </div>
  );
}
