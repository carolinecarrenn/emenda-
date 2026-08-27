import type { ReactNode } from "react";

/**
 * Marketing section shell — the one place the landing page's horizontal rhythm
 * is defined. Desktop targets a 1440 frame with a 1280 content column; mobile
 * (390) keeps a 20px gutter so cards never touch the edge.
 *
 * `padding` replaces the default rather than merging with it: Tailwind
 * utilities all carry the same specificity, so appending `py-32` to a class
 * string that already contains `py-20` would be decided by stylesheet order,
 * not by intent.
 */
export function Section({
  id,
  dataSection,
  backdrop,
  className = "",
  containerClassName = "",
  padding = "py-16 sm:py-20 lg:py-28",
  children,
}: {
  id?: string;
  /** Stable block name for structural tests — never user-visible, and
   *  intentionally decoupled from headings so copy can change freely. */
  dataSection?: string;
  /** Decorative layer painted full-bleed behind the content column. Kept out
   *  of `children` so glows and patterns are not clipped to the 1280 column. */
  backdrop?: ReactNode;
  /** Applied to the full-bleed <section> — backgrounds, overflow, borders. */
  className?: string;
  /** Applied to the centered content column. */
  containerClassName?: string;
  padding?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      data-section={dataSection}
      className={`relative ${className}`}
    >
      {backdrop}
      <div
        className={`relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10 ${padding} ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
