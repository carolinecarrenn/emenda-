import { useState } from "react";
import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINREWARDS_COPY } from "../rewards.copy";
import { ADJUSTMENT_DRAFT, ADJUSTMENT_EMPLOYEES } from "../rewards.mock";

/* AD-07B "Reward Adjustment States" (1226:1116): a #f7faf8 board, radius 14,
   1px #d6e3de — "INTERACTION STATES" eyebrow, 18px bold "Reward adjustment"
   and the 10px auditability line, then the centred 552x590 white card
   (radius 12) holding the 17px bold "Manual coin adjustment" form: five
   504x36 inputs (radius 10, 1px #d6e3de) under 9px semibold labels, the
   504x82 #fdf7ec "Audit requirement" note (radius 10) and the Cancel (65x32)
   / Confirm (121x32, #083d2d) pair.

   This is the interaction state, so the fields are live: the adjustment type
   drives the sign in the confirm label. Cancel returns to AD-07. */

const FIELD =
  "h-[36px] w-full rounded-[10px] border border-[#d6e3de] bg-white px-[11px] text-[11px] text-[#65746d] outline-none focus:border-[#083d2d] lg:text-[10px]";

const LABEL = "text-[10px] leading-none font-semibold text-[#65746d] lg:text-[9px]";

export function RewardAdjustmentBoard() {
  const c = useSectionCopy(ADMINREWARDS_COPY);
  const [type, setType] = useState<"add" | "subtract">("add");
  const [amount, setAmount] = useState<string>(ADJUSTMENT_DRAFT.amount);

  const signed = `${type === "add" ? "+" : "-"}${amount.trim() || "0"}`;

  return (
    <div className="w-full max-w-[718px] rounded-[14px] border border-[#d6e3de] bg-[#f7faf8] px-[16px] py-[21px] lg:px-[23px]">
      <p className="text-[10px] leading-none font-semibold tracking-[0.04em] text-[#083d2d]">
        {c.adjust.eyebrow}
      </p>
      <h2 className="mt-[8px] text-[18px] leading-none font-bold text-[#17362e]">
        {c.adjust.title}
      </h2>
      <p className="mt-[8px] text-[10px] leading-[14px] text-[#65746d]">
        {c.adjust.description}
      </p>

      <div className="mt-[24px] rounded-[12px] border border-[#d6e3de] bg-white px-[16px] py-[21px] lg:mx-[60px] lg:px-[23px]">
        <h3 className="text-[17px] leading-none font-bold text-[#17362e]">
          {c.adjust.cardTitle}
        </h3>

        <div className="mt-[24px] flex flex-col gap-[14px]">
          <label className="flex flex-col gap-[7px]">
            <span className={LABEL}>{c.adjust.labels.employee}</span>
            <select
              defaultValue={ADJUSTMENT_DRAFT.employee}
              className={FIELD}
            >
              {ADJUSTMENT_EMPLOYEES.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-[7px]">
            <span className={LABEL}>{c.adjust.labels.type}</span>
            <select
              value={type}
              onChange={(event) =>
                setType(event.target.value === "subtract" ? "subtract" : "add")
              }
              className={FIELD}
            >
              <option value="add">{c.adjust.types.add}</option>
              <option value="subtract">{c.adjust.types.subtract}</option>
            </select>
          </label>

          <label className="flex flex-col gap-[7px]">
            <span className={LABEL}>{c.adjust.labels.amount}</span>
            <input
              type="text"
              inputMode="numeric"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className={FIELD}
            />
          </label>

          <label className="flex flex-col gap-[7px]">
            <span className={LABEL}>{c.adjust.labels.reason}</span>
            <input
              type="text"
              defaultValue={ADJUSTMENT_DRAFT.reason}
              className={FIELD}
            />
          </label>

          <label className="flex flex-col gap-[7px]">
            <span className={LABEL}>{c.adjust.labels.reference}</span>
            <input
              type="text"
              defaultValue={ADJUSTMENT_DRAFT.reference}
              className={FIELD}
            />
          </label>
        </div>

        <div className="mt-[18px] rounded-[10px] bg-[#fdf7ec] px-[12px] py-[12px] lg:h-[82px]">
          <p className="text-[10px] leading-none font-bold text-[#b57023]">
            {c.adjust.auditTitle}
          </p>
          <p className="mt-[12px] text-[10px] leading-[14px] text-[#65746d] lg:text-[9px]">
            {c.adjust.auditBody}
          </p>
        </div>

        <div className="mt-[14px] flex items-center gap-[27px]">
          <Link
            to="/admin/rewards"
            className="flex h-[32px] flex-1 items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d] lg:w-[65px] lg:flex-none lg:justify-start"
          >
            {c.adjust.cancel}
          </Link>
          <button
            type="button"
            className="flex h-[32px] flex-1 items-center justify-center rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[13px] text-[11px] font-semibold whitespace-nowrap text-white lg:w-[121px] lg:flex-none lg:justify-start"
          >
            {c.adjust.confirm.replace("{amount}", signed)}
          </button>
        </div>
      </div>
    </div>
  );
}
