import { Link } from "react-router-dom";

/* WD-18F offline banner: gray-tinted card (no red) that replaces the mint
   next-action panel — "No internet connection" + one-line body + a white
   "Try again" pill that reloads Home online. Errors stay quiet in this
   design system. */
export function OfflineBanner({
  title,
  body,
  retry,
  retryTo,
}: {
  title: string;
  body: string;
  retry: string;
  retryTo: string;
}) {
  return (
    <div className="flex flex-col items-start gap-1 rounded-[14px] bg-[#eef1ee] p-3">
      <p className="text-[12.5px] leading-[17px] font-semibold text-ink">
        {title}
      </p>
      <p className="text-[10.5px] leading-[15px] text-ink-muted">{body}</p>
      <Link
        to={retryTo}
        replace
        className="mt-1 flex h-[40px] w-[120px] items-center justify-center rounded-full border border-line bg-white text-[12px] leading-[17px] font-semibold text-ink hover:border-brand"
      >
        {retry}
      </Link>
    </div>
  );
}
