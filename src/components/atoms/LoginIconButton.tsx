import type { ButtonHTMLAttributes } from "react";

// Icon button exclusivo del login (ojo mostrar/ocultar contraseña):
// colores fijos, sin tokens ni `dark:`.
export function LoginIconButton({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`cursor-pointer rounded-lg bg-transparent p-[5px] text-[19px] leading-none text-[#7b847d] transition-all duration-200 hover:bg-[#edf1e9] hover:text-[#182019] ${className}`}
    />
  );
}
