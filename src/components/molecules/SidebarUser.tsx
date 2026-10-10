"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icon } from "@/components/atoms/Icon";
import { IconButton } from "@/components/atoms/IconButton";

export function SidebarUser() {
  const router = useRouter();
  const name = "Demo User";
  const initial = (name.trim().charAt(0) || "L").toUpperCase();

  return (
    <div className="flex items-center gap-[9px] pt-[18px]">
      <Link
        href="/profile"
        title="Ver mi perfil"
        aria-label="Ver mi perfil"
        className="flex min-w-0 flex-1 items-center gap-[9px] rounded-[10px] transition-colors duration-200 hover:bg-surface-2"
      >
        <div className="grid h-[33px] w-[33px] shrink-0 place-items-center rounded-full bg-dark text-[10px] font-extrabold text-accent">
          {initial}
        </div>
        <div className="grid flex-1">
          <strong className="text-[11px] text-text">{name}</strong>
          <span className="mt-0.5 text-[9px] text-muted">Cuenta personal</span>
        </div>
      </Link>
      <IconButton type="button" title="Cerrar sesión" onClick={() => router.push("/login")}>
        <Icon name="logout" />
      </IconButton>
    </div>
  );
}
