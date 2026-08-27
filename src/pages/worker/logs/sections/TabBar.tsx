interface TabBarProps {
  tabs: { id: string; label: string }[];
  active: string;
  onSelect: (id: string) => void;
}

/* WD-61A segmented tab bar: 420x42 pill, 1px #d1ded6, three 140px segments.
   Active segment fills #e8f5ed with #054d3d 12px semibold text. On mobile
   (W-61A · 1167:254) the same control becomes three separate 111x36 filter
   chips at radius 18 with 8px gutters, a 10px semibold label, #141f1a on the
   unselected white chips and #096145 on the mint selected one. */
export function TabBar({ tabs, active, onSelect }: TabBarProps) {
  return (
    <div className="flex h-[36px] w-full gap-[8px] lg:h-[42px] lg:max-w-[420px] lg:gap-0 lg:rounded-[21px] lg:border lg:border-lp-line lg:bg-white">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          type="button"
          aria-pressed={tab.id === active}
          onClick={() => onSelect(tab.id)}
          className={`h-[36px] flex-1 rounded-[18px] border text-[10px] font-semibold lg:-my-px lg:h-[42px] lg:rounded-[21px] lg:border-0 lg:text-[12px] ${
            index === 0 ? "lg:-ml-px" : ""
          } ${index === tabs.length - 1 ? "lg:-mr-px" : ""} ${
            tab.id === active
              ? "border-lp-green bg-lp-mint text-lp-green"
              : "border-lp-line bg-white text-lp-ink hover:text-lp-green lg:text-lp-muted"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
