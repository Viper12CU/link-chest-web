"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Icon, type IconName } from "@/components/atoms/Icon";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { toastSessionsClosed } from "@/lib/toasts";

type Session = {
  id: string;
  device: string;
  detail: string;
  current: boolean;
  icon: IconName;
};

const INITIAL: Session[] = [
  { id: "s1", device: "Este navegador", detail: "Linux · hace 5 min", current: true, icon: "check" },
  { id: "s2", device: "Móvil Android", detail: "App · ayer a las 21:14", current: false, icon: "mobile" },
];

export function ProfileSecurity() {
  const [sessions, setSessions] = useState<Session[]>(INITIAL);

  function closeOthers() {
    setSessions((prev) => prev.filter((s) => s.current));
    toastSessionsClosed();
  }

  function closeOne(id: string) {
    setSessions((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <section
      aria-labelledby="sessions-title"
      className="rounded-[18px] border border-line bg-surface p-[26px] shadow-[var(--shadow)] max-[620px]:p-[20px]"
    >
      <Eyebrow>Seguridad</Eyebrow>
      <h2 id="sessions-title" className="font-display text-[21px] font-bold tracking-[-.03em] text-text">
        Sesiones activas
      </h2>
      <p className="mb-[18px] mt-[6px] text-[13px] leading-[1.55] text-muted">
        Si ves un dispositivo que no reconoces, ciérralo y cambia tu contraseña.
      </p>
      <ul className="grid gap-2">
        {sessions.map((s) => (
          <li
            key={s.id}
            className="flex items-center justify-between gap-3 rounded-[13px] border border-line bg-[#fbfcfa] px-[14px] py-[12px] dark:bg-[#1b231d]"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-[36px] w-[36px] shrink-0 place-items-center rounded-[10px] bg-surface-2 text-[17px] text-text">
                <Icon name={s.icon} />
              </span>
              <span className="min-w-0">
                <span className="flex flex-wrap items-center gap-2 text-[13.5px] font-bold text-text">
                  {s.device}
                  {s.current ? (
                    <span className="rounded-full bg-accent px-2 py-[2px] text-[10px] font-bold uppercase tracking-[.08em] text-dark">
                      Actual
                    </span>
                  ) : null}
                </span>
                <span className="block truncate text-[12px] text-muted">{s.detail}</span>
              </span>
            </div>
            {!s.current ? (
              <button
                type="button"
                onClick={() => closeOne(s.id)}
                className="shrink-0 cursor-pointer rounded-[9px] px-3 py-2 text-[12.5px] font-bold text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-danger"
              >
                Cerrar
              </button>
            ) : null}
          </li>
        ))}
      </ul>
      {sessions.length > 1 ? (
        <div className="mt-[14px]">
          <SecondaryButton type="button" onClick={closeOthers} className="inline-flex items-center gap-2">
            <Icon name="logout" className="text-[15px]" />
            Cerrar las demás sesiones
          </SecondaryButton>
        </div>
      ) : null}
    </section>
  );
}
