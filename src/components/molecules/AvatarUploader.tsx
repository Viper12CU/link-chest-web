"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/atoms/Icon";

export function AvatarUploader({ name, email }: { name: string; email: string }) {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const initial = (name.trim().charAt(0) || "L").toUpperCase();

  function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
  }

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <div
          aria-hidden="true"
          className="grid h-[76px] w-[76px] place-items-center overflow-hidden rounded-full bg-dark font-display text-[30px] font-bold text-accent ring-4 ring-accent/60"
        >
          {preview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={preview} alt="" className="h-full w-full object-cover" />
          ) : (
            initial
          )}
        </div>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          aria-label="Cambiar foto de perfil"
          className="absolute -bottom-1 -right-1 grid h-[30px] w-[30px] cursor-pointer place-items-center rounded-full border-2 border-surface bg-dark text-[14px] text-accent transition-transform duration-200 hover:scale-105"
        >
          <Icon name="camera" />
        </button>
        <input ref={inputRef} type="file" accept="image/*" className="sr-only" onChange={onPick} tabIndex={-1} />
      </div>
      <div className="min-w-0">
        <p className="truncate font-display text-[22px] font-bold tracking-[-.03em] text-text">{name}</p>
        <p className="truncate text-[13px] text-muted">{email}</p>
      </div>
    </div>
  );
}
