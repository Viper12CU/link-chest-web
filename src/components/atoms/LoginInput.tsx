import type { InputHTMLAttributes } from "react";

// Text field exclusivo del login: colores claros fijos, sin tokens
// temáticos (text/line/...) y sin variante `dark:`. No se reutiliza
// en el dashboard para que el cambio de tema no le afecte.
export function LoginInput({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-[11px] border border-[#e3e8e1] bg-[#fbfcfa] px-[13px] py-3 text-[14px] text-[#182019] outline-none transition-all duration-200 [color-scheme:light] placeholder:text-[#a0a8a0] focus:border-[#a8c88a] focus:shadow-[0_0_0_3px_rgba(185,239,114,.2)] ${className}`}
    />
  );
}
