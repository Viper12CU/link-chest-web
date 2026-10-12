"use client";

import { useRouter } from "next/navigation";
import { LoginField } from "@/components/molecules/LoginField";
import { LoginPasswordField } from "@/components/molecules/LoginPasswordField";
import { LoginRememberRow } from "@/components/molecules/LoginRememberRow";
import { LoginDivider } from "@/components/molecules/LoginDivider";
import { LoginGoogleButton } from "@/components/molecules/LoginGoogleButton";
import { LoginInput } from "@/components/atoms/LoginInput";
import { LoginSubmitButton } from "@/components/atoms/LoginSubmitButton";
import { toastGoogleRedirect, toastSessionStarted } from "@/lib/toasts";
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
          toastSessionStarted();
          router.push("/dashboard");
        }}
      >
        {!isLogin && (
          <LoginField label="Nombre">
            <LoginInput
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Tu nombre"
              required
            />
          </LoginField>
        )}
        <LoginField label="Correo electrónico">
          <LoginInput
            type="email"
            name="email"
            autoComplete="email"
            defaultValue={isLogin ? "demo@linkchest.app" : undefined}
            placeholder={isLogin ? undefined : "tu@correo.com"}
            required
          />
        </LoginField>
        <LoginPasswordField
          name="password"
          autoComplete={isLogin ? "current-password" : "new-password"}
          defaultValue={isLogin ? "12345678" : undefined}
          placeholder={isLogin ? undefined : "Mínimo 8 caracteres"}
          minLength={isLogin ? undefined : 8}
          required
        />
        {isLogin && <LoginRememberRow />}
        <LoginSubmitButton
          type="submit"
          className="flex items-center justify-center p-[14px]!"
        >
          {isLogin ? "Iniciar sesión" : "Crear cuenta"}
        </LoginSubmitButton>
      </form>

      <LoginDivider label={isLogin ? "o continúa con" : "o regístrate con"} />
      <LoginGoogleButton
        label={isLogin ? "Continuar con Google" : "Registrarse con Google"}
        onClick={() => {
          toastGoogleRedirect();
          router.push("/dashboard");
        }}
      />

      <p className="text-center text-[13px] text-[#7b847d]">
        {isLogin ? "¿No tienes cuenta? " : "¿Ya tienes cuenta? "}
        <button
          type="button"
          onClick={onToggleMode}
          className="cursor-pointer font-bold text-[#182019] underline underline-offset-2"
        >
          {isLogin ? "Crea una" : "Inicia sesión"}
        </button>
      </p>
    </div>
  );
}
