import Link from "next/link";
import { LoginBrandLogo } from "@/components/molecules/LoginBrandLogo";

// Cabecera fija de la landing: frosted white, paleta fija en claro.
export function LandingHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-[#e3e8e1] bg-[rgba(234,240,231,.85)] backdrop-blur-md">
      <div className="mx-auto flex h-[68px] w-full max-w-[1080px] items-center justify-between gap-4 px-6">
        <Link href="/" aria-label="Link Chest — inicio">
          <LoginBrandLogo />
        </Link>
        <nav
          aria-label="Secciones"
          className="hidden items-center gap-7 text-[14px] font-semibold text-[#758171] md:flex"
        >
          <a href="#features" className="transition-colors hover:text-[#182019]">
            Características
          </a>
          <a href="#how" className="transition-colors hover:text-[#182019]">
            Cómo funciona
          </a>
          <a href="#showcase" className="transition-colors hover:text-[#182019]">
            Tu cofre
          </a>
          <a href="#mobile" className="transition-colors hover:text-[#182019]">
            App móvil
          </a>
        </nav>
        <div className="flex items-center gap-2.5">
          <Link
            href="/login?mode=signin"
            className="hidden rounded-[11px] px-4 py-2.5 text-[14px] font-bold text-[#758171] transition-colors hover:text-[#182019] sm:block"
          >
            Iniciar sesión
          </Link>
          <Link
            href="/login?mode=signup"
            className="rounded-[11px] bg-[#172019] px-4 py-2.5 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#27332a]"
          >
            Empezar gratis
          </Link>
        </div>
      </div>
    </header>
  );
}
