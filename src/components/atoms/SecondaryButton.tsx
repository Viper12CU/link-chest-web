import type { ButtonHTMLAttributes } from "react";

export function SecondaryButton({ className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`cursor-pointer rounded-[11px] bg-surface-2 px-4 py-[11px] font-bold text-text transition-all duration-200 hover:brightness-[.97] ${className}`}
    />
  );
}
