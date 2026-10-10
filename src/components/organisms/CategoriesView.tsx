"use client";

import { Icon } from "@/components/atoms/Icon";
import { IconButton } from "@/components/atoms/IconButton";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { useDashboard } from "@/components/templates/DashboardProvider";
import { DEFAULT_CATEGORY_ID } from "@/data/dashboard";

export function CategoriesView() {
  const { categories, countByCategory, openNewCategory, openEditCategory, requestDeleteCategory, openCategoryLinks } =
    useDashboard();

  return (
    <section className="mx-auto max-w-[1500px] px-[34px] pb-[60px] pt-[35px] max-[820px]:px-[18px] max-[820px]:pb-[45px] max-[820px]:pt-7">
      <SectionHeading
        eyebrow="ORGANIZACIÓN"
        title="Categorías"
        subtitle="Organiza tus enlaces a tu manera."
        actions={
          <PrimaryButton onClick={openNewCategory}>
            <Icon name="plus" className="mr-3 inline-block align-[-2px] text-[13px]" />
            Nueva categoría
          </PrimaryButton>
        }
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-[14px]">
        {categories.map((c) => {
          const count = countByCategory(c.name);
          return (
            <article key={c.id} className="rounded-[18px] border border-line bg-white p-[19px] dark:bg-surface">
              <div className="flex justify-between">
                <div
                  className="grid h-[42px] w-[42px] place-items-center rounded-xl text-[20px] text-text"
                  style={{ backgroundColor: `${c.color}26` }}
                >
                  {c.emoji}
                </div>
                <div className="flex gap-[2px]">
                  {c.id !== DEFAULT_CATEGORY_ID && (
                    <>
                      <IconButton
                        type="button"
                        aria-label={`Editar ${c.name}`}
                        onClick={() => openEditCategory(c.id)}
                        className="text-[#788279]"
                      >
                        <Icon name="edit" />
                      </IconButton>
                      <IconButton
                        type="button"
                        aria-label={`Eliminar ${c.name}`}
                        onClick={() => requestDeleteCategory(c.id)}
                        className="text-[#c36b67]"
                      >
                        <Icon name="trash" />
                      </IconButton>
                    </>
                  )}
                </div>
              </div>
              <h3 className="mb-1 mt-[18px] font-display text-[15px] text-text">{c.name}</h3>
              <p className="mb-[17px] text-[11px] text-muted">
                {count} {count === 1 ? "enlace" : "enlaces"}
              </p>
              <button
                type="button"
                onClick={() => openCategoryLinks(c.name)}
                className="cursor-pointer rounded-[7px] bg-transparent px-[10px] py-[7px] text-[11px] font-bold text-[#7d877e] transition-colors hover:bg-surface-2 hover:text-text"
              >
                Ver enlaces{" "}
                <Icon name="arrow-right" className="inline-block align-[-2px] text-[12px]" />
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
