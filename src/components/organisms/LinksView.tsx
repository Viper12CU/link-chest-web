"use client";

import { Icon } from "@/components/atoms/Icon";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { LinkCard } from "@/components/organisms/LinkCard";
import { useDashboard } from "@/components/templates/DashboardProvider";

export function LinksView() {
  const { links, filteredLinks, categories, viewMode, density } = useDashboard();

  return (
    <section className="mx-auto max-w-[1500px] px-[34px] pb-[60px] pt-[35px] max-[820px]:px-[18px] max-[820px]:pb-[45px] max-[820px]:pt-7">
      <SectionHeading
        eyebrow="TU COLECCIÓN"
        title="Mis enlaces"
        subtitle={`${links.length} enlaces guardados`}
      />
      {filteredLinks.length > 0 ? (
        viewMode === "grid" ? (
          <div className="columns-[4_230px] gap-4 max-[1100px]:columns-[3_220px] max-[620px]:columns-1">
            {filteredLinks.map((link) => (
              <LinkCard key={link.id} link={link} categories={categories} density={density} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2">
            {filteredLinks.map((link) => (
              <LinkCard
                key={link.id}
                link={link}
                categories={categories}
                layout="list"
                density={density}
              />
            ))}
          </div>
        )
      ) : (
        <div className="px-5 py-20 text-center text-muted">
          <div className="grid place-items-center text-[40px] text-muted">
            <Icon name="search" />
          </div>
          <h3 className="mb-[5px] font-display text-text">No encontramos enlaces</h3>
          <p>Prueba con otro término de búsqueda o categoría.</p>
        </div>
      )}
    </section>
  );
}
