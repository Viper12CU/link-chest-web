import Link from "next/link";
import { LandingEyebrow } from "@/components/atoms/LandingEyebrow";
import { Icon } from "@/components/atoms/Icon";
import { LandingMockLink } from "@/components/molecules/LandingMockLink";

// Hero de la landing: titular estilo login + maqueta del cofre.
// Todo con hex fijos en claro (igual que /login).
export function LandingHero() {
  return (
    <section className="mx-auto grid w-full max-w-[1080px] items-center gap-10 px-6 pb-16 pt-14 lg:grid-cols-[1.05fr_.95fr] lg:pt-20">
      <div>
        <LandingEyebrow>YOUR LINKS. YOUR CHEST.</LandingEyebrow>
        <h1 className="font-display text-[52px] font-bold leading-[1.02] tracking-[-.05em] text-[#182019] max-[620px]:text-[38px]">
          Todo lo que guardas,
          <br />
          <span className="text-[#758171]">en un solo lugar.</span>
        </h1>
        <p className="mb-8 mt-5 max-w-[46ch] leading-[1.6] text-[#7b847d]">
          Link Chest es tu cofre personal de enlaces: guarda artículos, hilos,
          vídeos y herramientas, organízalos en cofres y recupéralos al
          instante desde cualquier dispositivo.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/login?mode=signup"
            className="inline-flex items-center gap-2 rounded-[11px] bg-[#172019] px-5 py-3 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#27332a]"
          >
            Crear mi cofre gratis
            <Icon name="arrow-right" />
          </Link>
          <a
            href="#showcase"
            className="inline-flex items-center gap-2 rounded-[11px] border border-[#e3e8e1] bg-[rgba(255,255,255,.9)] px-5 py-3 text-[15px] font-bold text-[#182019] transition-all duration-200 hover:-translate-y-px"
          >
            Ver cómo se ve
          </a>
        </div>
        <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          {[
            ["1 clic", "para guardar"],
            ["100%", "sincronizado"],
            ["0", "enlaces perdidos"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd className="font-display text-[26px] font-bold tracking-[-.03em] text-[#182019]">
                {value}
              </dd>
              <dd className="text-[12.5px] font-semibold text-[#7b847d]">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div
        aria-hidden="true"
        className="relative rounded-[28px] border border-[rgba(255,255,255,.8)] bg-[rgba(255,255,255,.92)] p-5 shadow-[0_18px_50px_rgba(25,35,27,.08)]"
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="font-display text-[15px] font-bold text-[#182019]">
            Mi cofre
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#b9ef72] px-3 py-1 text-[11px] font-bold text-[#172019]">
            <Icon name="plus" /> Nuevo enlace
          </span>
        </div>
        <div className="space-y-2.5">
          <LandingMockLink
            emoji="📚"
            title="Guía definitiva de Next.js 16"
            url="nextjs.org/docs"
            tag="docs"
          />
          <LandingMockLink
            emoji="🎨"
            title="Inspiración: galerías editoriales"
            url="design-gallery.app/retro"
            tag="diseño"
          />
          <LandingMockLink
            emoji="🛠️"
            title="Mi stack favorito 2026"
            url="github.com/coleccion"
            tag="dev"
          />
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-2xl bg-[#172019] px-4 py-3 text-[12.5px] font-semibold text-white">
          <Icon name="search" />
          <span className="text-[#9aa69c]">
            Busca “tutorial react server…” — 3 resultados
          </span>
        </div>
      </div>
    </section>
  );
}
