import type { ButtonHTMLAttributes } from "react";

type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

export function Chip({ active = false, className = "", ...props }: ChipProps) {
  return (
    <button
      {...props}
      className={`flex-none rounded-full border px-[11px] py-[7px] text-[11px] font-bold transition-all duration-200 ${
        active
          ? "border-dark bg-dark text-white dark:border-[#303b32] dark:bg-[#303b32]"
          : "border-line bg-surface text-[#747e75] hover:border-[#a8c88a] hover:text-text"
      } ${className}`}
    />
  );
}
