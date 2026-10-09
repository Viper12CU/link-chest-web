"use client";

import { useRouter } from "next/navigation";
import { FormField } from "@/components/molecules/FormField";
import { PasswordField } from "@/components/molecules/PasswordField";
import { RememberForgotRow } from "@/components/molecules/RememberForgotRow";
import { AuthDivider } from "@/components/molecules/AuthDivider";
import { GoogleLoginButton } from "@/components/molecules/GoogleLoginButton";
import { TextInput } from "@/components/atoms/TextInput";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import type { AuthMode } from "@/components/organisms/LoginCard";

export function LoginForm({
  mode,
  onToggleMode,
}: {
  mode: AuthMode;
  onToggleMode: () => void;
}) {
  const router = useRouter();
  const isLogin = mode === "login";

  return (
    <div className="grid gap-[17px]">
      <form
        key={mode}
        className={`grid gap-[17px] ${isLogin ? "animate-auth-in-left" : "animate-auth-in-right"}`}
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/dashboard");
        }}
      >
        {!isLogin && (
          <FormField label="Nombre">
            <TextInput
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Tu nombre"
              required
            />
          </FormField>
        )}
        <FormField label="Correo electrónico">
          <TextInput
            type="email"
            name="email"
            autoComplete="email"
            defaultValue={isLogin ? "demo@linkchest.app" : undefined}
            placeholder={isLogin ? undefined : "tu@correo.com"}
            required
          />
        </FormField>
        <PasswordField
          name="password"
          autoComplete={isLogin ? "current-password" : "new-password"}
          defaultValue={isLogin ? "12345678" : undefined}
          placeholder={isLogin ? undefined : "Mínimo 8 caracteres"}
          minLength={isLogin ? undefined : 8}
          required
        />
        {isLogin && <RememberForgotRow />}
        <PrimaryButton
          type="submit"
          className="flex items-center justify-center p-[14px]!"
        >
          {isLogin ? "Iniciar sesión" : "Crear cuenta"}
        </PrimaryButton>
      </form>

      <AuthDivider label={isLogin ? "o continúa con" : "o regístrate con"} />
      <GoogleLoginButton
        label={isLogin ? "Continuar con Google" : "Registrarse con Google"}
        onClick={() => router.push("/dashboard")}
      />

      <p className="text-center text-[13px] text-muted">
        {isLogin ? "¿No tienes cuenta? " : "¿Ya tienes cuenta? "}
        <button
          type="button"
          onClick={onToggleMode}
          className="cursor-pointer font-bold text-text underline underline-offset-2"
        >
          {isLogin ? "Crea una" : "Inicia sesión"}
        </button>
      </p>
    </div>
  );
}
