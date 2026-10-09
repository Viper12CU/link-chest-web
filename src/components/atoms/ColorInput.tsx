import type { InputHTMLAttributes } from "react";

export function ColorInput({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="color"
      {...props}
      className={`h-[42px] w-[58px] cursor-pointer rounded-[11px] border border-line bg-[#fbfcfa] p-[5px] outline-none transition-all duration-200 focus:border-[#a8c88a] focus:shadow-[0_0_0_3px_rgba(185,239,114,.2)] dark:bg-[#1b231d] [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-[7px] [&::-webkit-color-swatch]:border-none [&::-moz-color-swatch]:rounded-[7px] [&::-moz-color-swatch]:border-none ${className}`}
    />
  );
}
