import { ChevronDownIcon } from "../../../../components/ui/Icons";

export default function PhoneNumberField({
  className = "",
  label = "Phone Number",
  labelClassName = "",
  countryCode = "+234",
  placeholder = "801 555 0123",
  inputWrapperClassName = "",
  inputClassName = "",
}) {
  return (
    <label className={`block ${className}`.trim()}>
      <span
        className={`mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a4a4a4] ${labelClassName}`.trim()}
      >
        {label}
      </span>
      <div
        className={`flex min-h-14 items-center rounded-xl border border-[#e6e3e3] bg-white px-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)] ${inputWrapperClassName}`.trim()}
      >
        <div className="flex items-center gap-1.5 border-r border-[#ececec] pr-3">
          {/* Nigerian flag: green | white | green */}
          <span aria-hidden="true" className="inline-flex gap-px rounded-sm overflow-hidden">
            <span className="h-3.5 w-1.5 bg-[#008751]" />
            <span className="h-3.5 w-1.5 bg-white border-y border-[#eee]" />
            <span className="h-3.5 w-1.5 bg-[#008751]" />
          </span>
          <span className="text-xs font-semibold text-[#262626]">{countryCode}</span>
          <ChevronDownIcon className="h-3.5 w-3.5 text-[#a4a4a4]" />
        </div>
        <input
          type="tel"
          inputMode="tel"
          placeholder={placeholder}
          defaultValue=""
          className={`w-full bg-transparent px-3 text-sm text-[#2c2c2c] outline-none placeholder:text-[#c1c1c1] ${inputClassName}`.trim()}
        />
      </div>
    </label>
  );
}
