"use client";

import { useState } from "react";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { TextInput } from "@/components/atoms/TextInput";
import { FormField } from "@/components/molecules/FormField";
import { ModalShell } from "@/components/molecules/ModalShell";
import { useDashboard } from "@/components/templates/DashboardProvider";
import type { Category } from "@/data/dashboard";

function CategoryModalForm({
  editing,
  onClose,
  onSave,
}: {
  editing: Category | null;
  onClose: () => void;
  onSave: (name: string, icon: string, editingId: number | null) => void;
}) {
  const [name, setName] = useState(editing?.name ?? "");
  const [icon, setIcon] = useState(editing?.icon ?? "✦");

  return (
    <ModalShell
      eyebrow="ORGANIZACIÓN"
      title={editing ? "Editar categoría" : "Nueva categoría"}
      onClose={onClose}
      small
    >
      <form
        className="grid gap-[15px]"
        onSubmit={(e) => {
          e.preventDefault();
          onSave(name, icon.trim() || "✦", editing?.id ?? null);
        }}
      >
        <FormField label="Nombre">
          <TextInput required placeholder="Ej. Diseño" value={name} onChange={(e) => setName(e.target.value)} />
        </FormField>
        <FormField label="Icono">
          <TextInput
            maxLength={2}
            placeholder="✦"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
          />
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
