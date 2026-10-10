import Link from "next/link";
import { LandingEyebrow } from "@/components/atoms/LandingEyebrow";
import { Icon } from "@/components/atoms/Icon";

// Vista previa del dashboard: panel oscuro de contraste + tarjetas claras.
// El panel oscuro es decorativo (igual que el botón primario del login).
export function LandingShowcase() {
  const categories = [
    { emoji: "📚", name: "Lectura", count: 24 },
    { emoji: "💼", name: "Trabajo", count: 18 },
    { emoji: "🎨", name: "Inspiración", count: 31 },
  ];
  return (
    <section id="showcase" className="scroll-mt-24 bg-[#edf1e9]">
      <div className="mx-auto w-full max-w-[1080px] px-6 py-16 lg:py-20">
        <LandingEyebrow>TU COFRE POR DENTRO</LandingEyebrow>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-[22ch] font-display text-[34px] font-bold leading-[1.08] tracking-[-.04em] text-[#182019] max-[620px]:text-[28px]">
            Ordenado, visual y siempre a mano.
          </h2>
          <Link
            href="/login?mode=signup"
            className="inline-flex items-center gap-2 text-[14px] font-bold text-[#182019] underline decoration-[#8ddc38] decoration-2 underline-offset-4 hover:decoration-[#172019]"
          >
            Probar la demo <Icon name="arrow-right" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-[22px] bg-[#172019] p-6 text-white">
            <p className="mb-1 text-[11px] font-bold tracking-[.16em] text-[#b9ef72]">
              COFRES
            </p>
            <p className="mb-5 font-display text-[22px] font-bold tracking-[-.02em]">
              Cada cosa en su cofre
            </p>
            <ul className="space-y-2.5">
              {categories.map((c) => (
                <li
                  key={c.name}
                  className="flex items-center gap-3 rounded-2xl bg-[rgba(255,255,255,.07)] px-4 py-3"
                >
                  <span
                    aria-hidden="true"
                    className="grid h-9 w-9 place-items-center rounded-[10px] bg-[rgba(255,255,255,.12)] text-[18px]"
                  >
                    {c.emoji}
                  </span>
                  <span className="flex-1 text-[14px] font-bold">{c.name}</span>
                  <span className="rounded-full bg-[#b9ef72] px-2.5 py-1 text-[11px] font-bold text-[#172019]">
                    {c.count}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[22px] border border-[rgba(255,255,255,.8)] bg-[rgba(255,255,255,.92)] p-6 shadow-[0_18px_50px_rgba(25,35,27,.08)]">
            <p className="mb-1 text-[11px] font-bold tracking-[.16em] text-[#889288]">
              ESTA SEMANA
            </p>
            <p className="mb-5 font-display text-[22px] font-bold tracking-[-.02em] text-[#182019]">
              Tu colección crece sola
            </p>
            <div className="space-y-3">
              {[
                ["Lectura pendiente", "78%", "w-[78%]"],
                ["Inspiración guardada", "64%", "w-[64%]"],
                ["Cero pestañas abiertas", "100%", "w-full"],
              ].map(([label, value, bar]) => (
                <div key={label}>
                  <div className="mb-1.5 flex items-center justify-between text-[13px] font-bold text-[#182019]">
                    <span>{label}</span>
                    <span className="text-[#758171]">{value}</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-[#edf1e9]">
                    <div
                      className={`h-full rounded-full bg-[#8ddc38] ${bar}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 flex items-center gap-2 text-[13px] font-semibold text-[#7b847d]">
              <Icon name="shield" />
              Tus enlaces, privados por defecto. Tú decides qué se comparte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
