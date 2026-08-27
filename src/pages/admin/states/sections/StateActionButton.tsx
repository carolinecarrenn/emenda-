import { Link } from "react-router-dom";

/* The single button spec every AD-10 frame draws: 32px tall, radius 10, 1px
   border, 13px side padding, 11px semibold label.
     primary  — #083d2d fill on a #083d2d border, white label (1225:1325)
     outline  — white fill on a #d6e3de border, #083d2d label (1225:1323)
   AD-10D (1239:848) draws the same pair two pixels taller at radius 8; it is
   normalised onto this admin spec so every Company Admin button matches. */

export type StateActionVariant = "primary" | "outline";

const VARIANT: Record<StateActionVariant, string> = {
  primary:
    "border-[#083d2d] bg-[#083d2d] text-white hover:bg-[#0c5941] hover:border-[#0c5941]",
  outline: "border-[#d6e3de] bg-white text-[#083d2d] hover:bg-[#f2f7f5]",
};

export function StateActionButton({
  to,
  variant,
  children,
}: {
  to: string;
  variant: StateActionVariant;
  children: string;
}) {
  return (
    <Link
      to={to}
      className={`flex h-[32px] shrink-0 items-center justify-center rounded-[10px] border px-[13px] text-[11px] font-semibold whitespace-nowrap ${VARIANT[variant]}`}
    >
      {children}
    </Link>
  );
}
