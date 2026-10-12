"use client";

import { useState } from "react";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { ColorInput } from "@/components/atoms/ColorInput";
import { TextInput } from "@/components/atoms/TextInput";
import { EmojiPickerField } from "@/components/molecules/EmojiPickerField";
import { FormField } from "@/components/molecules/FormField";
import { ModalShell } from "@/components/molecules/ModalShell";
import { useDashboard, type CategoryPayload } from "@/components/templates/DashboardProvider";
import type { Category } from "@/data/dashboard";

const DEFAULT_COLOR = "#8a948a";
const DEFAULT_EMOJI = "📁";

function CategoryModalForm({
  editing,
  onClose,
  onSave,
}: {
  editing: Category | null;
  onClose: () => void;
  onSave: (payload: CategoryPayload, editingId: number | null) => void;
}) {
  const [name, setName] = useState(editing?.name ?? "");
  const [color, setColor] = useState(editing?.color ?? DEFAULT_COLOR);
  const [emoji, setEmoji] = useState(editing?.emoji ?? DEFAULT_EMOJI);

  return (
    <ModalShell
      eyebrow="ORGANIZACIÓN"
      title={editing ? "Editar cofre" : "Nuevo cofre"}
      onClose={onClose}
      small
    >
      <form
        className="grid gap-[15px]"
        onSubmit={(e) => {
          e.preventDefault();
          onSave({ name, color, emoji: emoji.trim() || DEFAULT_EMOJI }, editing?.id ?? null);
        }}
      >
        <FormField label="Nombre">
          <TextInput required placeholder="Ej. Diseño" value={name} onChange={(e) => setName(e.target.value)} />
        </FormField>
        <FormField label="Color">
          <div className="flex items-center gap-3">
            <ColorInput
              aria-label="Color del cofre"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <TextInput
              aria-label="Valor hexadecimal del color"
              value={color}
              maxLength={7}
              spellCheck={false}
              onChange={(e) => setColor(e.target.value)}
              className="font-mono uppercase"
            />
          </div>
        </FormField>
        <FormField label="Emoji">
          <EmojiPickerField value={emoji} onChange={setEmoji} />
        </FormField>
        <div className="mt-[5px] flex justify-end gap-2">
          <SecondaryButton type="button" onClick={onClose}>
            Cancelar
          </SecondaryButton>
          <PrimaryButton type="submit">Guardar</PrimaryButton>
        </div>
      </form>
    </ModalShell>
  );
}

export function CategoryModal() {
  const { categoryModal, categories, closeCategoryModal, saveCategory } = useDashboard();

  if (!categoryModal.open) return null;
  const editing = categories.find((c) => c.id === categoryModal.editingId) ?? null;

  return (
    <CategoryModalForm
      key={editing?.id ?? "new"}
      editing={editing}
      onClose={closeCategoryModal}
      onSave={saveCategory}
    />
  );
}
