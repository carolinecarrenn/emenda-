export type ManagerAuthPanelTone = "mint" | "alert" | "caution";
export type ManagerAuthPanelVariant = "login" | "recovery";

interface ManagerAuthStatePanelProps {
  /** "login" = MD-AUTH-01x 790x620 slab beside the brand column;
   *  "recovery" = MD-AUTH-02x/03x 900x630 slab on the recovery canvas. */
  variant: ManagerAuthPanelVariant;
  tone: ManagerAuthPanelTone;
  title: string;
  subtitle: string;
  cardTitle: string;
  cardBody: string;
  primaryLabel: string;
  onPrimary?: () => void;
  primaryDisabled?: boolean;
  /** Omitted by the in-flight panels (01A / 02A / 03A / 03G). */
  secondaryLabel?: string;
  onSecondary?: () => void;
  footer: string;
}

/** Card fills sampled off the frames: mint for progress and success
 *  (1235:40 · 178 · 457 · 483), peach for refusals (1235:73 · 539), amber for
 *  protective limits and offline (1235:108 · 143 · 567 · 625). */
const TONES: Record<ManagerAuthPanelTone, { card: string; title: string }> = {
  mint: { card: "bg-[#e7f2ec]", title: "text-[#083d2d]" },
  alert: { card: "bg-[#fce8e0]", title: "text-[#c74a3d]" },
  caution: { card: "bg-[#faf2d9]", title: "text-[#ba7526]" },
};

const GEOMETRY = {
  login: {
    panel: "w-[790px] min-h-[620px] pt-[60px] pl-[70px] pr-[80px]",
    title: "text-[34px] leading-[41px]",
    card: "w-[640px] min-h-[116px] mt-[45px] pt-[30px] px-[26px] pb-[18px]",
    primary: "w-[640px] h-[54px] mt-[34px]",
    secondary: "w-[640px] h-[46px] mt-[16px]",
    footerWithSecondary: "mt-[40px]",
    footerAlone: "mt-[102px]",
  },
  recovery: {
    panel: "w-[900px] min-h-[630px] pt-[55px] pl-[60px] pr-[120px]",
    title: "text-[32px] leading-[39px]",
    card: "w-[720px] min-h-[120px] mt-[47px] pt-[33px] px-[28px] pb-[18px]",
    primary: "w-[720px] h-[52px] mt-[42px]",
    secondary: "w-[720px] h-[44px] mt-[16px]",
    footerWithSecondary: "mt-[46px]",
    footerAlone: "mt-[106px]",
  },
} as const;

/**
 * The MD-AUTH desktop state slab. Every non-base desktop manager auth state
 * draws the same five parts on a #f8faf8 rectangle that covers the form:
 * page title, one-line status subtitle, a toned status card, a 10px-radius
 * primary pill, an optional white secondary button, and the footer scope
 * line. Mobile keeps its own inline banners — this panel is desktop only.
 */
export function ManagerAuthStatePanel({
  variant,
  tone,
  title,
  subtitle,
  cardTitle,
  cardBody,
  primaryLabel,
  onPrimary,
  primaryDisabled = false,
  secondaryLabel,
  onSecondary,
  footer,
}: ManagerAuthStatePanelProps) {
  const g = GEOMETRY[variant];
  const t = TONES[tone];

  return (
    <section className={`bg-[#f8faf8] ${g.panel}`}>
      <h1
        className={`font-display font-bold text-brand-deep ${g.title}`}
      >
        {title}
      </h1>
      <p className="mt-[7px] text-[14px] leading-[17px] text-[#65746d]">
        {subtitle}
      </p>

      <div className={`rounded-[14px] ${t.card} ${g.card}`}>
        <p
          className={`text-[20px] leading-[24px] font-semibold ${t.title}`}
        >
          {cardTitle}
        </p>
        <p className="mt-[12px] text-[13px] leading-[16px] text-[#65746d]">
          {cardBody}
        </p>
      </div>

      <button
        type="button"
        onClick={onPrimary}
        disabled={primaryDisabled}
        /* MD-AUTH-01A / 02A / 03A / 03G keep the waiting CTA at full
           #0c5941 with a white label — the slab never dims it. */
        className={`flex items-center justify-center rounded-[10px] bg-[#0c5941] text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-brand-deep disabled:cursor-not-allowed ${g.primary}`}
      >
        {primaryLabel}
      </button>

      {secondaryLabel ? (
        <button
          type="button"
          onClick={onSecondary}
          className={`flex items-center justify-center rounded-[10px] border border-[#dbe3de] bg-white text-[13px] font-semibold text-brand-deep transition-colors duration-150 hover:bg-[#f2f9f5] ${g.secondary}`}
        >
          {secondaryLabel}
        </button>
      ) : null}

      <p
        className={`text-[12px] leading-[15px] text-[#65746d] ${
          secondaryLabel ? g.footerWithSecondary : g.footerAlone
        }`}
      >
        {footer}
      </p>
    </section>
  );
}
