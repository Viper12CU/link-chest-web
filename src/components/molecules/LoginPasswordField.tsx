"use client";

import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import { LoginField } from "@/components/molecules/LoginField";
import { LoginInput } from "@/components/atoms/LoginInput";
import { Icon } from "@/components/atoms/Icon";
import { LoginIconButton } from "@/components/atoms/LoginIconButton";

// Campo de contraseña exclusivo del login: solo átomos estáticos.
export function LoginPasswordField({
  label = "Contraseña",
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  const [visible, setVisible] = useState(false);

  return (
    <LoginField label={label}>
      <div className="relative">
        <LoginInput
          {...props}
          type={visible ? "text" : "password"}
          className={`pr-[45px] ${className}`}
        />
        <LoginIconButton
          type="button"
          aria-label={visible ? "Ocultar contraseña" : "Mostrar contraseña"}
          onClick={() => setVisible((v) => !v)}
          className="absolute right-[5px] top-[5px]"
        >
          <Icon name={visible ? "eye-off" : "eye"} />
        </LoginIconButton>
      </div>
    </LoginField>
  );
}
