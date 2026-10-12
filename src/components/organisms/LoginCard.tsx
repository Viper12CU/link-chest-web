"use client";

import { useEffect, useState } from "react";
import { LoginBrandLogo } from "@/components/molecules/LoginBrandLogo";
import { LoginIntro } from "@/components/molecules/LoginIntro";
import { LoginForm } from "@/components/organisms/LoginForm";
import type { LoginInitialMode } from "@/components/pages/LoginPage";

export type AuthMode = "login" | "register";

export function LoginCard({ initialMode = "signin" }: { initialMode?: LoginInitialMode }) {
  const [mode, setMode] = useState<AuthMode>("login");
  const isLogin = mode === "login";

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect -- hidratación SSR-segura, una sola vez */
    setMode(initialMode === "signup" ? "register" : "login");
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [initialMode]);

  return (
    <div className="relative z-[2] w-full max-w-[440px] rounded-[28px] border border-[rgba(255,255,255,.8)] bg-[rgba(255,255,255,.92)] p-[42px] shadow-[0_18px_50px_rgba(25,35,27,.08)] max-[620px]:px-[22px] max-[620px]:py-[28px]">
      <LoginBrandLogo large />
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
    </div>
  );
}
