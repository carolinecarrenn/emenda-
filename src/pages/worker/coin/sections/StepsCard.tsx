import { Link } from "react-router-dom";

interface StepsCardProps {
  title: string;
  steps: string[];
  to?: string;
}

/* W-60J "How use works" (1179:455): mint 350x126 card at radius 14, 14/12px
   padding — an 11px/15 semibold ink title over the four 9px/13 muted steps of
   the redeem flow at a 5px gap. Desktop WD-60J (1186:2026) draws the same card
   white at 1012x210 with an 18px title and 14px steps. The card opens the
   rewards catalog. */
export function StepsCard({ title, steps, to }: StepsCardProps) {
  const body = (
    <>
      <p className="text-[11px] leading-[15px] font-semibold text-lp-ink lg:text-[18px] lg:leading-normal">
        {title}
      </p>
      <div className="mt-[5px] text-[9px] leading-[13px] text-lp-muted lg:mt-[26px] lg:text-[14px] lg:leading-[18px] lg:text-lp-ink">
        {steps.map((step) => (
          <p key={step}>{step}</p>
        ))}
      </div>
    </>
  );

  const shape =
    "rounded-[14px] border border-lp-line bg-lp-tint px-[14px] py-[12px] lg:rounded-[18px] lg:bg-white lg:px-[21px] lg:py-[20px] lg:min-h-[210px]";

  if (to === undefined) {
    return <div className={shape}>{body}</div>;
  }

  return (
    <Link to={to} className={`block ${shape} hover:border-lp-green`}>
      {body}
    </Link>
  );
}
