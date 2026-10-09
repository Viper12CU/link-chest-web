import type { InputHTMLAttributes } from "react";

// Checkbox exclusivo del login: acento fijo, sin tokens temáticos.
export function LoginCheckbox({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="checkbox"
      {...props}
      className={`h-4 w-4 shrink-0 cursor-pointer rounded border-[#e3e8e1] accent-[#172019] ${className}`}
    />
  );
}
