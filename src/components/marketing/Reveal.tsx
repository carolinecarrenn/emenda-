import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Scroll reveal for the marketing page. The element ships with `data-reveal`
 * (opacity 0, 18px down — see index.css) and flips to `data-reveal="shown"`
 * the first time it enters the viewport.
 *
 * Deliberately opacity-based rather than mount-based: the markup is always in
 * the DOM, so search engines, assistive tech and the e2e suite see the full
 * page whether or not the observer ever fires. Reduced-motion users get the
 * final state immediately via a media query, and environments without
 * IntersectionObserver fall through to the shown state on mount.
 */
export function Reveal({
  id,
  delay = 0,
  className = "",
  children,
}: {
  /** Anchor target, for sections that in-page links jump to. */
  id?: string;
  /** Stagger in ms — use small steps (60–120) inside a row of cards. */
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.dataset.reveal = "shown";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.reveal = "shown";
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      data-reveal=""
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className={`min-w-0 ${className}`}
    >
      {children}
    </div>
  );
}
