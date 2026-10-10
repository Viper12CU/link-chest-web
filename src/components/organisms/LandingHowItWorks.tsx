import { LandingEyebrow } from "@/components/atoms/LandingEyebrow";
import { LandingStepItem } from "@/components/molecules/LandingStepItem";
import { Icon } from "@/components/atoms/Icon";

// "Cómo funciona" + panel de garantías con checks Reicon.
export function LandingHowItWorks() {
  return (
    <section id="how" className="scroll-mt-24">
      <div className="mx-auto grid w-full max-w-[1080px] gap-10 px-6 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <LandingEyebrow>CÓMO FUNCIONA</LandingEyebrow>
          <h2 className="font-display text-[34px] font-bold leading-[1.08] tracking-[-.04em] text-[#182019] max-[620px]:text-[28px]">
            Tres pasos y tu cofre está lleno.
          </h2>
          <ol className="mt-8 space-y-7">
            <LandingStepItem
              step="1"
              title="Guarda el enlace"
              desc="Pega la URL, añade un título y una nota rápida de por qué importa."
            />
            <LandingStepItem
              step="2"
              title="Clasifícalo en su cofre"
              desc="Elige cofre, etiqueta y márcalo como favorito si es oro puro."
            />
            <LandingStepItem
              step="3"
              title="Recupéralo cuando quieras"
              desc="Filtra, busca y abre desde cualquier dispositivo. Cero fricción."
            />
          </ol>
        </div>
        <aside className="h-fit rounded-[28px] border border-[rgba(255,255,255,.8)] bg-[rgba(255,255,255,.92)] p-7 shadow-[0_18px_50px_rgba(25,35,27,.08)] lg:mt-14">
          <p className="mb-5 font-display text-[19px] font-bold tracking-[-.02em] text-[#182019]">
            Hecho para coleccionistas de internet
          </p>
          <ul className="space-y-3.5 text-[14px] font-semibold text-[#182019]">
            {[
              "Cofres ilimitados con emoji y color",
              "Favoritos y destacados siempre a mano",
              "Historial y estadísticas de tu colección",
              "Modo claro y oscuro en tu dashboard",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#b9ef72] text-[12px] text-[#172019]">
                  <Icon name="check" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl bg-[#edf1e9] p-4 text-[13px] leading-[1.6] text-[#758171]">
            “Por fin dejé de perder hilos, papers y recetas entre mil pestañas.
            Mi cofre lo tiene todo.”
            <span className="mt-2 block text-[12px] font-bold tracking-wide text-[#182019]">
              USUARIA DEMO · LECTORA COMPULSIVA
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}
