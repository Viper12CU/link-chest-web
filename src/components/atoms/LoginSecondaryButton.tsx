import type { ButtonHTMLAttributes } from "react";

// Botón secundario exclusivo del login (base del botón de Google):
// colores fijos, sin tokens `bg-surface-2` / `text-text`.
export function LoginSecondaryButton({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`cursor-pointer rounded-[11px] bg-[#edf1e9] px-4 py-[11px] font-bold text-[#182019] transition-all duration-200 hover:brightness-[.97] ${className}`}
    />
  );
}
