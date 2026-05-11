export default function SegmentedControl({
  className = "",
  optionClassName = "",
  options,
  value,
  name,
  onSelect,
}) {
  return (
    <div
      className={`grid rounded-full bg-[#f4efef] p-1 ${className}`.trim()}
      style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
    >
      {options.map((option) => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            name={name}
            aria-pressed={isActive}
            onClick={() => onSelect && onSelect(option.value)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${optionClassName} ${
              isActive
                ? "bg-white text-[var(--color-brand-primary-deep)] shadow-[0_3px_8px_rgba(0,0,0,0.06)]"
                : "text-[#8a8a8a]"
            }`.trim()}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
