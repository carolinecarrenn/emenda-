import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { AUTH_COPY } from "./auth.copy";

/** WD-01 Splash (744:2) / W-01 (421:7) — pure brand moment on the #f7f9f6
 *  canvas: centered wordmark, caps tagline, gray subline, experience footer.
 *  No buttons; auto-advances to the language chooser.
 *
 *  Desktop is measured off 744:2: wordmark box at y=300 on a 34px line,
 *  tagline box at y=370 (line 16), subline box at y=408 (line 20) and the
 *  experience footer at y=810. */
export function SplashPage() {
  const navigate = useNavigate();
  const c = useSectionCopy(AUTH_COPY).splash;

  useEffect(() => {
    const timer = setTimeout(() => navigate("/auth/language"), 2200);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      onClick={() => navigate("/auth/language")}
      className="relative flex min-h-screen cursor-pointer flex-col items-center bg-canvas text-center"
    >
      <div className="flex flex-col items-center px-5 pt-[250px] lg:flex-none lg:pt-[300px]">
        <p className="font-display text-[40px] leading-[34px] font-semibold text-brand-deep lg:font-sans lg:text-[52px] lg:leading-[34px]">
          EMENDA
        </p>
        <p className="mt-[24px] text-[11px] leading-[16px] font-semibold text-brand lg:mt-[36px] lg:text-[16px]">
          {c.tagline}
        </p>
        <p className="mt-[26px] text-[13px] leading-[20px] text-[#65746d] lg:mt-[22px] lg:text-[18px]">
          {c.subline}
        </p>
      </div>
      <p className="absolute inset-x-0 bottom-[68px] text-[10px] leading-[16px] text-[#65746d] lg:bottom-[74px] lg:text-[14px]">
        <span className="lg:hidden">{c.footerMobile}</span>
        <span className="hidden lg:inline">{c.footerDesktop}</span>
      </p>
    </div>
  );
}
