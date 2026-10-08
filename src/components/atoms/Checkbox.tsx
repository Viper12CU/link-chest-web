import type { InputHTMLAttributes } from "react";

export function Checkbox({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="checkbox"
      {...props}
      className={`w-auto rounded-[11px] border border-line bg-[#fbfcfa] px-[13px] py-3 text-text outline-none transition-all duration-200 ${className}`}
    />
  );
}
