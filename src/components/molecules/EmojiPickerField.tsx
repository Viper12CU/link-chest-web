"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import type { EmojiClickData } from "emoji-picker-react";
import { Theme } from "emoji-picker-react";
import { Icon } from "@/components/atoms/Icon";
import { useDashboard } from "@/components/templates/DashboardProvider";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

export function EmojiPickerField({
  value,
  onChange,
}: {
  value: string;
  onChange: (emoji: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const { dark } = useDashboard();

  function handleSelect(data: EmojiClickData) {
    onChange(data.emoji);
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Elegir emoji"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 rounded-[11px] border border-line bg-[#fbfcfa] px-[13px] py-[9px] text-left text-text outline-none transition-all duration-200 focus:border-[#a8c88a] focus:shadow-[0_0_0_3px_rgba(185,239,114,.2)] dark:bg-[#1b231d]"
      >
        <span className="grid h-[34px] w-[34px] place-items-center rounded-[9px] bg-surface-2 text-[20px]">
          {value || "📁"}
        </span>
        <span className="text-[13px] font-medium">{value ? "Cambiar emoji" : "Elegir emoji"}</span>
        <span aria-hidden className="ml-auto grid place-items-center text-[13px] text-muted">
          <Icon name="chevron-down" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </span>
      </button>
      {open && (
        <>
          <button
            type="button"
            aria-label="Cerrar selector de emojis"
            onClick={() => setOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpen(false);
            }}
            className="fixed inset-0 z-[110] cursor-default bg-transparent"
          />
          <div role="dialog" aria-label="Selector de emojis" className="absolute z-[120] mt-2">
            <EmojiPicker onEmojiClick={handleSelect} theme={dark ? Theme.DARK : Theme.LIGHT} width={320} height={380} />
          </div>
        </>
      )}
    </div>
  );
}
