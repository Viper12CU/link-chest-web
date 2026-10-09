"use client";

import { Icon } from "@/components/atoms/Icon";
import { useDashboard } from "@/components/templates/DashboardProvider";

export function DownloadPromo() {
  const { showToast } = useDashboard();

  return (
    <div className="relative mt-auto overflow-hidden rounded-2xl bg-dark p-[17px] text-white after:absolute after:-right-[35px] after:-top-[35px] after:h-[90px] after:w-[90px] after:rounded-full after:bg-[rgba(185,239,114,.16)] after:content-['']">
      <div className="mb-[13px] grid h-[31px] w-[31px] place-items-center rounded-[9px] bg-accent text-[17px] text-dark">
        <Icon name="mobile" />
      </div>
      <strong className="font-display leading-[1.1]">
        Link Chest
        <br />
        en tu móvil
      </strong>
      <p className="mb-[13px] mt-[7px] text-[11px] leading-[1.5] text-[#aab3ab]">
        Guarda enlaces estés donde estés.
      </p>
      <button
        type="button"
        onClick={() => showToast("Demo: aquí iría el enlace a Google Play / App Store")}
        className="bg-transparent p-0 text-[11px] font-bold text-accent"
      >
        Descargar app{" "}
        <Icon name="external" className="inline-block align-[-2px] text-[12px]" />
      </button>
    </div>
  );
}
