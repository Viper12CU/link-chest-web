"use client";

import { useState } from "react";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { TextInput } from "@/components/atoms/TextInput";
import { FormField } from "@/components/molecules/FormField";
import { ModalShell } from "@/components/molecules/ModalShell";
import { useDashboard } from "@/components/templates/DashboardProvider";
import type { Category, LinkItem } from "@/data/dashboard";

const inputClass =
  "w-full rounded-[11px] border border-line bg-[#fbfcfa] px-[13px] py-3 text-text outline-none transition-all duration-200 focus:border-[#a8c88a] focus:shadow-[0_0_0_3px_rgba(185,239,114,.2)] dark:bg-[#1b231d]";

function LinkModalForm({
  editing,
  categories,
  onClose,
  onSave,
}: {
  editing: LinkItem | null;
  categories: Category[];
  onClose: () => void;
  onSave: (payload: { title: string; description: string; url: string; category: string }, editingId: number | null) => void;
}) {
  const [title, setTitle] = useState(editing?.title ?? "");
  const [description, setDescription] = useState(editing?.description ?? "");
  const [url, setUrl] = useState(editing?.url ?? "");
  const [category, setCategory] = useState(editing?.category ?? categories[0]?.name ?? "");

  return (
    <ModalShell eyebrow="COLECCIÓN" title={editing ? "Editar enlace" : "Nuevo enlace"} onClose={onClose}>
      <form
        className="grid gap-[15px]"
        onSubmit={(e) => {
          e.preventDefault();
          onSave(
            { title: title.trim(), description: description.trim(), url: url.trim(), category },
            editing?.id ?? null
          );
        }}
      >
        <FormField label="Título">
          <TextInput required placeholder="Ej. Documentación de Next.js" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormField>
        <FormField label="Descripción">
          <textarea
            rows={3}
            placeholder="Una breve descripción..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`${inputClass} resize-y`}
          />
        </FormField>
        <FormField label="URL">
          <TextInput required type="url" placeholder="https://..." value={url} onChange={(e) => setUrl(e.target.value)} />
        </FormField>
        <FormField label="Cofre">
          <select value={category} onChange={(e) => setCategory(e.target.value)} className={inputClass}>
            {categories.map((c) => (
              <option key={c.id} value={c.name}>
                {c.emoji} {c.name}
              </option>
            ))}
          </select>
        </FormField>
        <div className="mt-[5px] flex justify-end gap-2">
          <SecondaryButton type="button" onClick={onClose}>
            Cancelar
          </SecondaryButton>
          <PrimaryButton type="submit">Guardar enlace</PrimaryButton>
        </div>
      </form>
    </ModalShell>
  );
}

export function LinkModal() {
  const { linkModal, links, categories, closeLinkModal, saveLink } = useDashboard();

  if (!linkModal.open) return null;
  const editing = links.find((l) => l.id === linkModal.editingId) ?? null;

  return (
    <LinkModalForm
      key={editing?.id ?? "new"}
      editing={editing}
      categories={categories}
      onClose={closeLinkModal}
      onSave={saveLink}
    />
  );
}
