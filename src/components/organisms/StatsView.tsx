"use client";

import { FilterButton } from "@/components/atoms/FilterButton";
import { Icon } from "@/components/atoms/Icon";
import { CategoryProgressRow } from "@/components/molecules/CategoryProgressRow";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { StatCard } from "@/components/molecules/StatCard";
import { useDashboard } from "@/components/templates/DashboardProvider";
import { ACTIVITY_BARS, WEEK_LABELS } from "@/data/dashboard";

export function StatsView() {
  const { links, categories } = useDashboard();
  const favorites = links.filter((l) => l.favorite).length;
  const total = Math.max(links.length, 1);

  return (
    <section className="mx-auto max-w-[1500px] px-[34px] pb-[60px] pt-[35px] max-[820px]:px-[18px] max-[820px]:pb-[45px] max-[820px]:pt-7">
      <SectionHeading
        eyebrow="RESUMEN"
        title="Estadísticas"
        subtitle="Una vista rápida de tu colección."
        actions={
          <FilterButton>
            Últimos 30 días{" "}
            <Icon name="chevron-down" className="inline-block align-[-2px] text-[12px]" />
          </FilterButton>
        }
      />
      <div className="mb-[18px] grid grid-cols-4 gap-[14px] max-[1100px]:grid-cols-2 max-[400px]:grid-cols-1">
        <StatCard icon="grid" value={links.length} label="Enlaces guardados" />
        <StatCard icon="heart" value={favorites} label="Favoritos" />
        <StatCard icon="category" value={categories.length} label="Categorías" />
        <StatCard icon="trend" value={87} label="Aperturas este mes" trend="+18%" />
      </div>
      <div className="grid grid-cols-[1.5fr_1fr] gap-[18px] max-[820px]:grid-cols-1">
        <div className="rounded-[18px] border border-line bg-surface p-[21px]">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <strong className="font-display text-[15px] text-text">Actividad</strong>
              <p className="mt-1 text-[11px] text-muted">Enlaces guardados por día</p>
            </div>
            <span className="rounded-md bg-[#eef8e5] px-2 py-[5px] text-[10px] font-bold text-[#6fa92e]">
              +18%
            </span>
          </div>
          <div className="relative flex h-[210px] items-end gap-[12%] overflow-hidden border-b border-line px-[10px] pt-[15px]">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_50px,#edf0ec_51px)] opacity-80" />
            <div className="relative z-[1] flex h-full w-full items-end justify-around">
              {ACTIVITY_BARS.map((v, i) => (
                <i
                  key={i}
                  className="w-[8%] max-w-[34px] rounded-t-[7px] bg-accent-strong"
                  style={{ height: `${v}%`, minHeight: 20 }}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-around pt-[9px] text-[9px] text-[#a2aaa2]">
            {WEEK_LABELS.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        </div>
        <div className="rounded-[18px] border border-line bg-surface p-[21px]">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <strong className="font-display text-[15px] text-text">Por categoría</strong>
              <p className="mt-1 text-[11px] text-muted">Distribución de tus enlaces</p>
            </div>
          </div>
          <div>
            {categories.map((c) => {
              const n = links.filter((l) => l.category === c.name).length;
              return (
                <CategoryProgressRow
                  key={c.id}
                  icon={c.emoji}
                  name={c.name}
                  color={c.color}
                  percent={Math.round((n / total) * 100)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
