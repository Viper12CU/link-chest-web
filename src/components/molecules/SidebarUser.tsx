"use client";

import { useRouter } from "next/navigation";
import { IconButton } from "@/components/atoms/IconButton";

export function SidebarUser() {
  const router = useRouter();

  return (
    <div className="flex items-center gap-[9px] pt-[18px]">
      <div className="grid h-[33px] w-[33px] shrink-0 place-items-center rounded-full bg-[#dce7d8] text-[10px] font-extrabold text-text">
        FL
      </div>
      <div className="grid flex-1">
        <strong className="text-[11px] text-text">Fabian Lemus</strong>
        <span className="mt-0.5 text-[9px] text-[#9ba39b]">Cuenta personal</span>
      </div>
      <IconButton type="button" title="Cerrar sesión" onClick={() => router.push("/login")}>
        ↪
      </IconButton>
    </div>
  );
}
