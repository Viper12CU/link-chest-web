import type { ButtonHTMLAttributes } from "react";

export function PrimaryButton({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`cursor-pointer rounded-[11px] bg-dark px-4 py-[11px] font-bold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#27332a] ${className}`}
    />
  );
}
