import { Icon } from "@/components/atoms/Icon";

// Fila de enlace de la maqueta del hero: visual estática, sin interactividad.
// El emoji es contenido de la maqueta (favicon de cofre), no icono UI.
export function LandingMockLink({
  emoji,
  title,
  url,
  tag,
}: {
  emoji: string;
  title: string;
  url: string;
  tag: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[#e3e8e1] bg-white px-3.5 py-3">
      <span
        aria-hidden="true"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-[#edf1e9] text-[18px]"
      >
        {emoji}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[13.5px] font-semibold text-[#182019]">
          {title}
        </span>
        <span className="block truncate text-[12px] text-[#a0a8a0]">{url}</span>
      </span>
      <span className="hidden shrink-0 items-center gap-1 rounded-full bg-[#edf1e9] px-2.5 py-1 text-[11px] font-semibold text-[#758171] sm:inline-flex">
        <Icon name="tag" />
        {tag}
      </span>
    </div>
  );
}
