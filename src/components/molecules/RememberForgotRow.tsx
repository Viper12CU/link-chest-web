"use client";

import { Checkbox } from "@/components/atoms/Checkbox";

export function RememberForgotRow() {
  return (
    <div className="flex items-center justify-between text-xs text-muted">
      <label className="flex items-center gap-[7px] text-[13px] font-bold">
        <Checkbox defaultChecked />
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
