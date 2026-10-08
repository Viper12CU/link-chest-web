import { BrandLogo } from "@/components/molecules/BrandLogo";
import { LoginIntro } from "@/components/molecules/LoginIntro";
import { LoginForm } from "@/components/organisms/LoginForm";

export function LoginCard() {
  return (
    <div className="relative z-[2] w-full max-w-[440px] rounded-[28px] border border-[rgba(255,255,255,.8)] bg-[rgba(255,255,255,.92)] p-[42px] shadow-[0_18px_50px_rgba(25,35,27,.08)] max-[620px]:px-[22px] max-[620px]:py-[28px]">
      <BrandLogo large />  
      <LoginIntro />
      <LoginForm />
      <p className="mt-[18px] text-center text-[11px] text-[#a0a8a0]">
        Demo: cualquier correo y contraseña funcionan.
      </p>
    </div>
  );
}
