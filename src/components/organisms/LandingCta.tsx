import Link from "next/link";
import { Icon } from "@/components/atoms/Icon";

// CTA final: panel oscuro de contraste con botón lima (mismo dúo que el login).
export function LandingCta() {
  return (
    <section className="mx-auto w-full max-w-[1080px] px-6 py-16 lg:py-20">
      <div className="relative overflow-hidden rounded-[28px] bg-[#172019] px-8 py-14 text-center text-white sm:px-14">
        <div
          aria-hidden="true"
          className="absolute -left-[80px] -top-[90px] h-[260px] w-[260px] rounded-full bg-[#b9ef72] opacity-20 blur-[2px]"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-[120px] -right-[80px] h-[280px] w-[280px] rounded-full bg-[#8ddc38] opacity-15 blur-[2px]"
        />
        <p className="relative mb-3 text-[11px] font-bold tracking-[.16em] text-[#b9ef72]">
          EMPIEZA HOY, GRATIS
        </p>
        <h2 className="relative mx-auto max-w-[20ch] font-display text-[36px] font-bold leading-[1.05] tracking-[-.04em] max-[620px]:text-[28px]">
          Tu próximo enlace favorito ya tiene cofre.
        </h2>
        <p className="relative mx-auto mb-8 mt-4 max-w-[52ch] leading-[1.6] text-[#9aa69c]">
          Crea tu cuenta en segundos y guarda tu primer enlace. Sin tarjeta,
          sin fricción, sin pestañas perdidas.
        </p>
        <div className="relative flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/login?mode=signup"
            className="inline-flex items-center gap-2 rounded-[11px] bg-[#b9ef72] px-6 py-3.5 text-[15px] font-bold text-[#172019] transition-all duration-200 hover:-translate-y-px hover:bg-[#8ddc38]"
          >
            Crear cuenta gratis
            <Icon name="arrow-right" />
          </Link>
          <Link
            href="/login?mode=signin"
            className="inline-flex items-center gap-2 rounded-[11px] border border-[rgba(255,255,255,.25)] px-6 py-3.5 text-[15px] font-bold text-white transition-colors hover:border-white"
          >
            Ya tengo cuenta
          </Link>
        </div>
      </div>
    </section>
  );
}
