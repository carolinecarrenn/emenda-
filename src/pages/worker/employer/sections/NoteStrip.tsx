import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Check, Shield } from "lucide-react";

interface NoteStripProps {
  children: ReactNode;
  /** WD-49 safety note 78/r14 · WD-51 control note 62/r12 · WD-52 link 70/r14. */
  size?: "safety" | "control" | "link" | "note";
  to?: string;
  className?: string;
}

const SIZE_CLASSES: Record<NonNullable<NoteStripProps["size"]>, string> = {
  safety: "min-h-[78px] rounded-[12px] px-[13px] lg:rounded-[14px] lg:px-[17px]",
  control:
    "min-h-[82px] rounded-[14px] px-[13px] lg:min-h-[62px] lg:rounded-[12px] lg:px-[17px]",
  link: "min-h-[70px] rounded-[14px] px-[19px]",
  note: "min-h-[58px] rounded-[12px] px-[17px]",
};

/* Mint informational strip — WD-49 safety note (node 1182:644), WD-51
   connection-control note (node 1203:34) and the WD-52 "Back to connection"
   strip (node 1182:1728): #f2f9f5 fill, 1px #d1ded6 border, 13px muted text
   inset 17-19px. Passing `to` turns the strip into the mock's link row. */
export function NoteStrip({
  children,
  size = "safety",
  to,
  className = "",
}: NoteStripProps) {
  /* W-49 (node 917:32) puts a privacy shield beside 10px note copy and pins
     it to the top of the strip; the WD-49 desktop strip has neither. */
  const safety = size === "safety";
  /* W-51 node 938:27 / W-50D node 943:27 / W-51D — the mobile control strip
     leads with the checked-consent glyph (a 20px #056b54 rounded square with
     a white tick) beside 10px note copy; WD-51 desktop draws neither. */
  const control = size === "control";
  const topAligned = safety || control;
  const classes = `flex border border-lp-line bg-lp-tint py-[12px] ${
    topAligned ? "items-start lg:items-center" : "items-center"
  } ${SIZE_CLASSES[size]} ${className}`;
  const body = (
    <>
      {safety && (
        <Shield
          aria-hidden
          className="mt-[5px] mr-[12px] size-[20px] shrink-0 text-lp-muted lg:hidden"
        />
      )}
      {control && (
        <span
          aria-hidden
          className="mt-[3px] mr-[14px] flex size-[20px] shrink-0 items-center justify-center lg:hidden"
        >
          <span className="flex size-[15px] items-center justify-center rounded-[4px] bg-lp-button">
            <Check className="size-[10px] text-white" strokeWidth={3} />
          </span>
        </span>
      )}
      <p
        className={
          safety || control
            ? "text-[10px] leading-[13px] text-lp-muted lg:text-[13px] lg:leading-[19.5px]"
            : "text-[13px] text-lp-muted"
        }
      >
        {children}
      </p>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${classes} hover:border-lp-green`}>
        {body}
      </Link>
    );
  }
  return <div className={classes}>{body}</div>;
}
