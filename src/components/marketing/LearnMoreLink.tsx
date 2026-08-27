import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * The homepage's exit doors. Every preview block ends with one, so a visitor
 * who wants the detail always knows where it lives and the homepage never has
 * to become the documentation.
 */
export function LearnMoreLink({
  to,
  tone = "light",
  children,
}: {
  to: string;
  tone?: "light" | "dark";
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 text-[15px] font-semibold transition-colors duration-150 ${
        tone === "dark"
          ? "text-white hover:text-lp-mint"
          : "text-lp-green hover:text-lp-deep"
      }`}
    >
      {children}
      <ArrowRight
        size={16}
        strokeWidth={2.2}
        aria-hidden="true"
        className="transition-transform duration-200 ease-standard group-hover:translate-x-0.5"
      />
    </Link>
  );
}
