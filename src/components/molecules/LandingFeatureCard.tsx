import { Icon, type IconName } from "@/components/atoms/Icon";

// Tarjeta de característica de la landing: colores fijos en claro, misma
// paleta que /login (frosted white + accent lima).
export function LandingFeatureCard({
  icon,
  title,
  desc,
}: {
  icon: IconName;
  title: string;
  desc: string;
}) {
  return (
    <article className="rounded-[22px] border border-[rgba(255,255,255,.8)] bg-[rgba(255,255,255,.92)] p-6 shadow-[0_18px_50px_rgba(25,35,27,.08)]">
      <div className="mb-4 grid h-10 w-10 place-items-center rounded-[12px] bg-[#b9ef72] text-[20px] text-[#172019] shadow-[0_6px_15px_rgba(141,220,56,.25)]">
        <Icon name={icon} />
      </div>
      <h3 className="mb-2 font-display text-[18px] font-bold tracking-[-.02em] text-[#182019]">
        {title}
      </h3>
      <p className="text-[14px] leading-[1.6] text-[#7b847d]">{desc}</p>
    </article>
  );
}
