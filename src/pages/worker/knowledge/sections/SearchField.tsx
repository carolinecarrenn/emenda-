import { Search } from "lucide-react";

interface SearchFieldProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  className?: string;
}

/* Search input (W-42/42A · WD-42). Mobile: 52px tall, 14px radius, a 20px
   muted search glyph inset 13px from the left edge and a 12px value column
   starting at 45px. Desktop keeps the 54px 12px-radius field without the
   inline glyph. */
export function SearchField({
  value,
  placeholder,
  onChange,
  className = "",
}: SearchFieldProps) {
  return (
    <div className={`relative w-full lg:w-[820px] ${className}`}>
      <Search
        size={20}
        className="pointer-events-none absolute top-[16px] left-[13px] text-lp-muted lg:hidden"
        aria-hidden
      />
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="h-[52px] w-full rounded-[14px] border border-lp-line bg-white pr-[13px] pl-[45px] text-[12px] text-[#17231f] outline-none placeholder:text-lp-muted focus:border-lp-green lg:h-[54px] lg:rounded-[12px] lg:px-[17px] lg:text-[14px] lg:text-[#0e1f18]"
      />
    </div>
  );
}
