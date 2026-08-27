import { useSectionCopy } from "@/i18n/copy";
import { EMPLOYER_COPY } from "../employer.copy";

interface AccessScopeCardsProps {
  /** Desktop scope-card height: WD-50 draws 210px, WD-51 draws 200px. */
  cardMinHeight?: 200 | 210;
  className?: string;
}

const CARD_MIN_HEIGHT_CLASSES: Record<
  NonNullable<AccessScopeCardsProps["cardMinHeight"]>,
  string
> = {
  200: "lg:min-h-[200px]",
  210: "lg:min-h-[210px]",
};

/* Signature scope pair — WD-50 nodes 1203:24 / 1182:956 / 1182:959 and
   WD-51 nodes 1203:33 / 1182:1224 / 1182:1227. ACCESS SCOPE eyebrow over two
   492px cards at a 28px gutter: mint #f2f9f5 "EMPLOYER CAN ACCESS" beside
   white "STAYS PRIVATE", both radius 16 with bulleted 14px items.
   Mobile (W-50 nodes 928:2 / 917:279 / 917:283, W-51 nodes 938:32 / 938:20 /
   938:23) stacks them full width at a 12px gap: a 10px semibold muted eyebrow,
   then a 104px mint card over a 128px white one, radius 14, inset 13px, with
   10px labels and 12px bullets. */
export function AccessScopeCards({
  cardMinHeight = 210,
  className = "",
}: AccessScopeCardsProps) {
  const c = useSectionCopy(EMPLOYER_COPY);

  return (
    <div className={className}>
      <p className="text-[10px] leading-[14px] font-semibold text-lp-muted lg:text-[11px] lg:leading-normal lg:text-lp-green">
        {c.scope.accessScope}
      </p>
      <div className="mt-[8px] grid gap-[12px] lg:mt-[1px] lg:grid-cols-2 lg:gap-[28px]">
        <ScopeCard
          tone="mint"
          minHeight={cardMinHeight}
          title={c.scope.canAccessTitle}
          items={c.scope.canAccessItems}
        />
        <ScopeCard
          tone="white"
          minHeight={cardMinHeight}
          title={c.scope.staysPrivateTitle}
          items={c.scope.staysPrivateItems}
        />
      </div>
    </div>
  );
}

function ScopeCard({
  tone,
  minHeight,
  title,
  items,
}: {
  tone: "mint" | "white";
  minHeight: NonNullable<AccessScopeCardsProps["cardMinHeight"]>;
  title: string;
  items: string[];
}) {
  return (
    <div
      className={`rounded-[14px] border border-lp-line px-[13px] pt-[13px] pb-[11px] lg:min-h-[190px] lg:pb-[24px] lg:rounded-[16px] lg:px-[19px] lg:pt-[20px] ${CARD_MIN_HEIGHT_CLASSES[minHeight]} ${
        tone === "mint"
          ? "min-h-[104px] bg-lp-tint"
          : "min-h-[128px] bg-white"
      }`}
    >
      <p className="text-[10px] leading-[14px] font-semibold text-lp-muted lg:text-[11px] lg:leading-normal lg:text-lp-green">
        {title}
      </p>
      <ul className="mt-[10px] text-[12px] leading-[14px] text-lp-ink lg:mt-[45px] lg:text-[14px] lg:leading-[17px]">
        {items.map((item) => (
          <li key={item}>{`• ${item}`}</li>
        ))}
      </ul>
    </div>
  );
}
