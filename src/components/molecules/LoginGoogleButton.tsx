import type { ButtonHTMLAttributes } from "react";
import { LoginSecondaryButton } from "@/components/atoms/LoginSecondaryButton";
import { GoogleIcon } from "@/components/atoms/GoogleIcon";

// Botón de Google exclusivo del login: borde y fondo blancos fijos.
export function LoginGoogleButton({
  label = "Continuar con Google",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { label?: string }) {
  return (
    <LoginSecondaryButton
      type="button"
      {...props}
      className={`flex w-full items-center justify-center gap-[10px] border border-[#e3e8e1] bg-white text-[14px] ${className}`}
    >
      <GoogleIcon />
      {label}
    </LoginSecondaryButton>
  );
}
