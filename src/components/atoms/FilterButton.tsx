import type { ButtonHTMLAttributes } from "react";

type FilterButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

export function FilterButton({ active = false, className = "", ...props }: FilterButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-[7px] border-0 px-[10px] py-[7px] text-[11px] font-bold transition-all duration-200 ${
        active
          ? "bg-white text-text shadow-[0_2px_8px_rgba(20,30,20,.05)] dark:bg-[#303b32] dark:text-white"
          : "bg-transparent text-[#7d877e] hover:text-text"
      } ${className}`}
    />
  );
}
