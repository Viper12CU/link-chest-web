import Link from "next/link";
import { LandingEyebrow } from "@/components/atoms/LandingEyebrow";
import { Icon } from "@/components/atoms/Icon";

// Sección app móvil: maqueta del teléfono + botón hacia /download.
// Server component, colores fijos en claro (misma paleta que /login).
export function LandingMobile() {
  return (
    <section id="mobile" className="scroll-mt-24">
      <div className="mx-auto grid w-full max-w-[1080px] items-center gap-10 px-6 py-16 lg:grid-cols-[1fr_.85fr] lg:py-20">
        <div>
          <LandingEyebrow>APP MÓVIL</LandingEyebrow>
          <h2 className="font-display text-[34px] font-bold leading-[1.08] tracking-[-.04em] text-[#182019] max-[620px]:text-[28px]">
            Tu cofre,
            <br />
            <span className="text-[#758171]">en el bolsillo.</span>
          </h2>
          <p className="mb-6 mt-3 max-w-[52ch] leading-[1.6] text-[#7b847d]">
            Lleva tus enlaces a todas partes con la app de Link Chest para
            Android: guarda desde cualquier app, organiza tus cofres y consulta
            tu colección sin abrir el navegador.
          </p>
          <ul className="mb-8 space-y-3 text-[14px] font-semibold text-[#182019]">
            {[
              "Guarda desde el menú compartir de Android",
              "Sincronizada con tu cuenta web",
              "Gratis, ligera y sin fricción",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#b9ef72] text-[12px] text-[#172019]">
                  <Icon name="check" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 rounded-[11px] bg-[#172019] px-5 py-3 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#27332a]"
            >
              <Icon name="download" />
              Descargar la app
            </Link>
            <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#7b847d]">
              <Icon name="shield" />
              Solo Android · Gratis
            </span>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mx-auto w-full max-w-[280px] rounded-[32px] border border-[rgba(255,255,255,.8)] bg-[#172019] p-2.5 shadow-[0_18px_50px_rgba(25,35,27,.18)]"
        >
          <div className="rounded-[24px] bg-[#eaf0e7] p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-display text-[14px] font-bold text-[#182019]">
                Mi cofre
              </p>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#b9ef72] text-[14px] text-[#172019]">
                <Icon name="plus" />
              </span>
            </div>
            <div className="mb-3 flex items-center gap-2 rounded-xl bg-[#172019] px-3 py-2.5 text-[11.5px] font-semibold text-white">
              <Icon name="search" />
              <span className="text-[#9aa69c]">Buscar enlaces…</span>
            </div>
            <div className="space-y-2">
              {[
                ["📚", "Guía Next.js 16"],
                ["🎨", "Inspo editorial"],
                ["🛠️", "Stack 2026"],
              ].map(([emoji, title]) => (
                <div
                  key={title}
                  className="flex items-center gap-2.5 rounded-xl border border-[#e3e8e1] bg-white px-3 py-2.5"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[9px] bg-[#edf1e9] text-[16px]">
                    {emoji}
                  </span>
                  <span className="truncate text-[12.5px] font-bold text-[#182019]">
                    {title}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-around rounded-xl bg-[rgba(255,255,255,.9)] px-2 py-2.5 text-[16px] text-[#758171]">
              <Icon name="grid" />
              <Icon name="category" />
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#b9ef72] text-[#172019]">
                <Icon name="plus" />
              </span>
              <Icon name="star" />
              <Icon name="user" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
