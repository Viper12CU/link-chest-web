import { Icon } from "@/components/atoms/Icon";

export function SettingToggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (next: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex w-full items-center justify-between gap-4 rounded-[13px] border border-line bg-[#fbfcfa] px-[14px] py-[12px] text-left transition-colors duration-200 hover:border-[#c9d4c7] dark:bg-[#1b231d]"
    >
      <span className="min-w-0">
        <span className="block text-[13.5px] font-bold text-text">{label}</span>
        {description ? (
          <span className="mt-[2px] block truncate text-[12px] text-muted">{description}</span>
        ) : null}
      </span>
      <span
        aria-hidden="true"
        className={`relative h-[24px] w-[42px] shrink-0 rounded-full transition-colors duration-200 ${
          checked ? "bg-dark dark:bg-accent" : "bg-[#d6dcd4] dark:bg-[#2d3830]"
        }`}
      >
        <span
          className={`absolute top-[3px] grid h-[18px] w-[18px] place-items-center rounded-full bg-white text-[11px] shadow transition-all duration-200 ${
            checked ? "left-[21px] text-dark" : "left-[3px] text-muted"
          }`}
        >
          {checked ? <Icon name="check" /> : null}
        </span>
      </span>
    </button>
  );
}
