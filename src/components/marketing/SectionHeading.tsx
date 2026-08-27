import type { LucideIcon } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

/**
 * Eyebrow + display heading + supporting line. Every marketing section leads
 * with one so the page keeps a single, predictable entry rhythm — the visitor
 * always knows where a new idea starts.
 */
export function SectionHeading({
  eyebrow,
  eyebrowIcon,
  title,
  body,
  align = "center",
  tone = "light",
  className = "",
}: {
  eyebrow: string;
  eyebrowIcon?: LucideIcon;
  title: React.ReactNode;
  body?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <Reveal
      className={`${centered ? "mx-auto max-w-[760px] text-center" : "max-w-[720px]"} ${className}`}
    >
      <Eyebrow icon={eyebrowIcon} tone={tone}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={`mt-5 font-display text-[28px] leading-[1.18] font-bold tracking-[-0.02em] text-balance sm:text-[34px] lg:text-[42px] ${
          tone === "dark" ? "text-white" : "text-lp-ink"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-4 text-[16px] leading-[1.7] lg:text-[17px] ${
            centered ? "mx-auto max-w-[620px]" : "max-w-[600px]"
          } ${tone === "dark" ? "text-lp-onDark" : "text-lp-muted"}`}
        >
          {body}
        </p>
      ) : null}
    </Reveal>
  );
}
