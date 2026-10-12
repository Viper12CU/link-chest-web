import type { ButtonHTMLAttributes } from "react";

// Botón principal exclusivo del login: fondo claro fijo (#172019),
// sin token `bg-dark` para que no cambie con el tema.
export function LoginSubmitButton({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`cursor-pointer rounded-[11px] bg-[#172019] px-4 py-[11px] font-bold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#27332a] ${className}`}
    />
  );
}
