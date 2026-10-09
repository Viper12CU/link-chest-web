"use client";

import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import { FormField } from "@/components/molecules/FormField";
import { TextInput } from "@/components/atoms/TextInput";
import { Icon } from "@/components/atoms/Icon";
import { IconButton } from "@/components/atoms/IconButton";

export function PasswordField({
  label = "Contraseña",
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  const [visible, setVisible] = useState(false);

  return (
    <FormField label={label}>
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
          <Icon name={visible ? "eye-off" : "eye"} />
        </IconButton>
      </div>
    </FormField>
  );
}
