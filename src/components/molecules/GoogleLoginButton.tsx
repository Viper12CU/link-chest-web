import type { ButtonHTMLAttributes } from "react";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { GoogleIcon } from "@/components/atoms/GoogleIcon";

export function GoogleLoginButton({
  label = "Continuar con Google",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { label?: string }) {
  return (
    <SecondaryButton
      type="button"
      {...props}
      className={`flex w-full items-center justify-center gap-[10px] border border-line bg-white text-[14px] ${className}`}
    >
      <GoogleIcon />
      {label}
    </SecondaryButton>
  );
}
