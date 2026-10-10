import Link from "next/link";
import { LoginBrandLogo } from "@/components/molecules/LoginBrandLogo";

// Pie de la landing: marca + accesos, todo en claro.
export function LandingFooter() {
  return (
    <footer className="border-t border-[#e3e8e1]">
      <div className="mx-auto flex w-full max-w-[1080px] flex-wrap items-center justify-between gap-4 px-6 py-8">
        <LoginBrandLogo />
        <nav
          aria-label="Pie de página"
          className="flex items-center gap-6 text-[13.5px] font-semibold text-[#758171]"
        >
          <a href="#features" className="transition-colors hover:text-[#182019]">
            Características
          </a>
          <a href="#how" className="transition-colors hover:text-[#182019]">
            Cómo funciona
          </a>
          <Link
            href="/download"
            className="transition-colors hover:text-[#182019]"
          >
            Descargar app
          </Link>
          <Link
            href="/login?mode=signin"
            className="transition-colors hover:text-[#182019]"
          >
            Entrar
          </Link>
        </nav>
        <p className="w-full text-[12px] text-[#a0a8a0] sm:w-auto">
          Link Chest — your links, your chest.
        </p>
      </div>
    </footer>
  );
}
