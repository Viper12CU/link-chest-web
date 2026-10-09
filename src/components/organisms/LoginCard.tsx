"use client";

import { useState } from "react";
import { BrandLogo } from "@/components/molecules/BrandLogo";
import { LoginIntro } from "@/components/molecules/LoginIntro";
import { LoginForm } from "@/components/organisms/LoginForm";

export type AuthMode = "login" | "register";

export function LoginCard() {
  const [mode, setMode] = useState<AuthMode>("login");
  const isLogin = mode === "login";

  return (
    <div className="relative z-[2] w-full max-w-[440px] rounded-[28px] border border-[rgba(255,255,255,.8)] bg-[rgba(255,255,255,.92)] p-[42px] shadow-[0_18px_50px_rgba(25,35,27,.08)] max-[620px]:px-[22px] max-[620px]:py-[28px]">
      <BrandLogo large />
      <div aria-live="polite">
        <div
          key={mode}
          className={isLogin ? "animate-auth-in-left" : "animate-auth-in-right"}
        >
          <LoginIntro
          title={
            isLogin ? undefined : (
              <>
                Crea tu cuenta,
                <br />
                <span className="text-[#758171]">y guarda sin límites.</span>
              </>
            )
          }
          subtitle={
            isLogin
              ? "Accede a tu colección de enlaces desde cualquier dispositivo."
              : "Únete gratis y accede a tu colección desde cualquier dispositivo."
          }
        />
        </div>
      </div>
      <LoginForm
        mode={mode}
        onToggleMode={() => setMode(isLogin ? "register" : "login")}
      />
      <p className="mt-[18px] text-center text-[11px] text-[#a0a8a0]">
        {isLogin
          ? "Demo: cualquier correo y contraseña funcionan."
          : "Demo: completa cualquier dato para entrar."}
      </p>
    </div>
  );
}
