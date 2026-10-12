import { LandingEyebrow } from "@/components/atoms/LandingEyebrow";
import { LandingFeatureCard } from "@/components/molecules/LandingFeatureCard";

// Rejilla de características: 4 tarjetas frosted con iconos Reicon.
export function LandingFeatures() {
  return (
    <section id="features" className="scroll-mt-24 bg-[#edf1e9]">
      <div className="mx-auto w-full max-w-[1080px] px-6 py-16 lg:py-20">
        <LandingEyebrow>POR QUÉ LINK CHEST</LandingEyebrow>
        <h2 className="max-w-[22ch] font-display text-[34px] font-bold leading-[1.08] tracking-[-.04em] text-[#182019] max-[620px]:text-[28px]">
          Un cofre pensado para no perder nada.
        </h2>
        <p className="mb-10 mt-3 max-w-[60ch] leading-[1.6] text-[#7b847d]">
          Nada de marcadores olvidados ni pestañas eternas: cada enlace tiene su
          sitio, su cofre y su contexto.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <LandingFeatureCard
            icon="plus"
            title="Guarda en 1 clic"
            desc="Añade enlaces con título, notas y etiquetas en segundos, desde cualquier dispositivo."
          />
          <LandingFeatureCard
            icon="category"
            title="Organiza por cofres"
            desc="Cofres con color y emoji para separar lectura, trabajo, inspiración y más."
          />
          <LandingFeatureCard
            icon="search"
            title="Encuentra al instante"
            desc="Búsqueda y filtros por cofre, favorito y fecha. Lo que guardaste, aparece."
          />
          <LandingFeatureCard
            icon="mobile"
            title="Contigo siempre"
            desc="Tu colección sincronizada y disponible en móvil, tablet y escritorio."
          />
        </div>
      </div>
    </section>
  );
}
