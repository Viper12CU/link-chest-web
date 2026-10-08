import type { InputHTMLAttributes } from "react";

export function TextInput({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-[11px] border border-line bg-[#fbfcfa] px-[13px] py-3 text-text outline-none transition-all duration-200 focus:border-[#a8c88a] focus:shadow-[0_0_0_3px_rgba(185,239,114,.2)] dark:bg-[#1b231d] ${className}`}
    />
  );
}
