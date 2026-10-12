"use client";

import { Icon } from "@/components/atoms/Icon";
import { useDashboard } from "@/components/templates/DashboardProvider";

export function LinkCardMenu({ linkId, favorite }: { linkId: number; favorite: boolean }) {
  const { openMenuId, setOpenMenuId, copyLink, openEditLink, promptChangeCategory, toggleFavorite, requestDeleteLink } =
    useDashboard();
  const open = openMenuId === linkId;

  return (
    <div className="relative" data-link-menu onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        aria-label="Opciones"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={(e) => {
          e.stopPropagation();
          setOpenMenuId(open ? null : linkId);
        }}
        className="cursor-pointer rounded-lg bg-transparent p-[5px] text-[19px] leading-none text-muted transition-all duration-200 hover:bg-surface-2 hover:text-text"
      >
        <Icon name="more" />
      </button>
      {open ? (
        <div className="absolute right-0 top-[29px] z-10 w-[165px] rounded-xl border border-line bg-white p-[5px] shadow-[0_18px_50px_rgba(25,35,27,.08)] dark:bg-[#1b231d]">
          <button
            type="button"
            onClick={() => copyLink(linkId)}
            className="block w-full rounded-[7px] bg-transparent px-[9px] py-2 text-left text-[11px] text-[#5e685f] hover:bg-surface-2 hover:text-text"
          >
            <Icon name="copy" className="mr-2 inline-block align-[-2px] text-[13px]" />
            Copiar enlace
          </button>
          <button
            type="button"
            onClick={() => openEditLink(linkId)}
            className="block w-full rounded-[7px] bg-transparent px-[9px] py-2 text-left text-[11px] text-[#5e685f] hover:bg-surface-2 hover:text-text"
          >
            <Icon name="edit" className="mr-2 inline-block align-[-2px] text-[13px]" />
            Editar enlace
          </button>
          <button
            type="button"
            onClick={() => promptChangeCategory(linkId)}
            className="block w-full rounded-[7px] bg-transparent px-[9px] py-2 text-left text-[11px] text-[#5e685f] hover:bg-surface-2 hover:text-text"
          >
            <Icon name="category" className="mr-2 inline-block align-[-2px] text-[13px]" />
            Cambiar de cofre
          </button>
          <button
            type="button"
            onClick={() => toggleFavorite(linkId)}
            className="block w-full rounded-[7px] bg-transparent px-[9px] py-2 text-left text-[11px] text-[#5e685f] hover:bg-surface-2 hover:text-text"
          >
            <Icon
              name={favorite ? "star-filled" : "star"}
              className="mr-2 inline-block align-[-2px] text-[13px]"
            />
            {favorite ? "Quitar favorito" : "Añadir favorito"}
          </button>
          <button
            type="button"
            onClick={() => requestDeleteLink(linkId)}
            className="block w-full rounded-[7px] bg-transparent px-[9px] py-2 text-left text-[11px] text-danger hover:bg-surface-2"
          >
            <Icon name="trash" className="mr-2 inline-block align-[-2px] text-[13px]" />
            Eliminar
          </button>
        </div>
      ) : null}
    </div>
  );
}
