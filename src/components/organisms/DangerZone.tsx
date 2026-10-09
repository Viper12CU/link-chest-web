"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Icon } from "@/components/atoms/Icon";
import { ModalShell } from "@/components/molecules/ModalShell";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { notifyInfo, toastBackupExported } from "@/lib/toasts";

const DEMO_BACKUP = {
  app: "link-chest",
  exportedAt: new Date().toISOString(),
  user: "demo@linkchest.app",
  links: [],
  categories: [],
};

export function DangerZone() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmText, setConfirmText] = useState("");

  function exportBackup() {
    const blob = new Blob([JSON.stringify(DEMO_BACKUP, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "link-chest-backup.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    toastBackupExported();
  }

  return (
    <section
      aria-labelledby="danger-title"
      className="rounded-[18px] border border-danger/40 bg-surface p-[26px] shadow-[var(--shadow)] max-[620px]:p-[20px]"
    >
      <Eyebrow>Zona delicada</Eyebrow>
      <h2 id="danger-title" className="font-display text-[21px] font-bold tracking-[-.03em] text-text">
        Exportar o eliminar
      </h2>
      <p className="mb-[18px] mt-[6px] text-[13px] leading-[1.55] text-muted">
        Descarga tu colección antes de hacer cambios irreversibles.
      </p>
      <div className="flex flex-wrap gap-3">
        <SecondaryButton type="button" onClick={exportBackup} className="inline-flex items-center gap-2">
          <Icon name="download" className="text-[15px]" />
          Exportar backup JSON
        </SecondaryButton>
        <button
          type="button"
          onClick={() => {
            setConfirmText("");
            setConfirmOpen(true);
          }}
          className="inline-flex cursor-pointer items-center gap-2 rounded-[11px] bg-danger px-4 py-[11px] text-[13.5px] font-bold text-white transition-transform duration-200 hover:-translate-y-px"
        >
          <Icon name="trash" className="text-[15px]" />
          Eliminar cuenta
        </button>
      </div>

      {confirmOpen ? (
        <ModalShell eyebrow="Eliminar cuenta" title="¿Seguro que quieres irte?" onClose={() => setConfirmOpen(false)} small>
          <p className="text-[13.5px] leading-[1.6] text-muted">
            Se borrarán tus enlaces y categorías de demostración. Escribe <strong className="text-text">ELIMINAR</strong>{" "}
            para confirmar.
          </p>
          <input
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            placeholder="ELIMINAR"
            aria-label="Escribe ELIMINAR para confirmar"
            className="mt-[14px] w-full rounded-[11px] border border-line bg-[#fbfcfa] px-[13px] py-3 text-text outline-none transition-all duration-200 focus:border-danger focus:shadow-[0_0_0_3px_rgba(217,83,79,.15)] dark:bg-[#1b231d]"
          />
          <div className="mt-[16px] flex justify-end gap-3">
            <SecondaryButton type="button" onClick={() => setConfirmOpen(false)}>
              Cancelar
            </SecondaryButton>
            <PrimaryButton
              type="button"
              disabled={confirmText.trim().toUpperCase() !== "ELIMINAR"}
              onClick={() => {
                setConfirmOpen(false);
                notifyInfo("Demo", "Tu cuenta de demostración sigue intacta.");
              }}
              className="bg-danger text-white hover:bg-danger disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
            >
              Eliminar definitivamente
            </PrimaryButton>
          </div>
        </ModalShell>
      ) : null}
    </section>
  );
}
