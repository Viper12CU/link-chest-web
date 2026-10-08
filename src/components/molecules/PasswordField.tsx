"use client";

import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import { FormField } from "@/components/molecules/FormField";
import { TextInput } from "@/components/atoms/TextInput";
import { IconButton } from "@/components/atoms/IconButton";

export function PasswordField({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  const [visible, setVisible] = useState(false);

  return (
    <FormField label="Contraseña">
      <div className="relative">
        <TextInput
          {...props}
          type={visible ? "text" : "password"}
          className={`pr-[45px] ${className}`}
        />
        <IconButton
          type="button"
          aria-label={visible ? "Ocultar contraseña" : "Mostrar contraseña"}
          onClick={() => setVisible((v) => !v)}
          className="absolute right-[5px] top-[5px]"
        >
          ◉
        </IconButton>
      </div>
    </FormField>
  );
}
