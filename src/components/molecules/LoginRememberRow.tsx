"use client";

import { LoginCheckbox } from "@/components/atoms/LoginCheckbox";

// Fila "Recordarme / Olvidaste tu contraseña" exclusiva del login,
// con colores fijos en claro.
export function LoginRememberRow() {
  return (
    <div className="flex items-center justify-between text-xs text-[#7b847d]">
      <label className="flex items-center gap-[7px] text-[13px] font-bold text-[#182019]">
        <LoginCheckbox defaultChecked />
        Recordarme
      </label>
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="font-bold text-[#5f6d5f]"
      >
        ¿Olvidaste tu contraseña?
      </a>
    </div>
  );
}
