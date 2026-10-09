"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Icon } from "@/components/atoms/Icon";
import { IconButton } from "@/components/atoms/IconButton";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { TextInput } from "@/components/atoms/TextInput";
import { FormField } from "@/components/molecules/FormField";
import { ProfileField } from "@/components/molecules/ProfileField";
import { toastPasswordUpdated, toastProfileUpdated } from "@/lib/toasts";

type Errors = Partial<Record<"name" | "email" | "current" | "next" | "confirm", string>>;

export function ProfileEditForm({
  initialName,
  initialEmail,
}: {
  initialName: string;
  initialEmail: string;
}) {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function validateProfile(): Errors {
    const nextErrors: Errors = {};
    if (name.trim().length < 2) nextErrors.name = "Escribe al menos 2 caracteres.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) nextErrors.email = "Ese correo no parece válido.";
    return nextErrors;
  }

  function onSaveProfile(e: React.FormEvent) {
    e.preventDefault();
    const validation = validateProfile();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;
    toastProfileUpdated();
  }

  function onSavePassword(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors: Errors = {};
    if (current.length < 8) nextErrors.current = "Tu contraseña actual tiene al menos 8 caracteres.";
    if (next.length < 8) nextErrors.next = "Usa 8 caracteres como mínimo.";
    if (confirm !== next || confirm.length === 0) nextErrors.confirm = "No coincide con la nueva contraseña.";
    setErrors((prev) => ({ ...prev, ...nextErrors }));
    if (Object.keys(nextErrors).length > 0) return;
    setCurrent("");
    setNext("");
    setConfirm("");
    toastPasswordUpdated();
  }

  return (
    <div className="grid gap-4">
      <section
        aria-labelledby="edit-profile-title"
        className="rounded-[18px] border border-line bg-surface p-[26px] shadow-[var(--shadow)] max-[620px]:p-[20px]"
      >
        <Eyebrow>Editar perfil</Eyebrow>
        <h2 id="edit-profile-title" className="font-display text-[21px] font-bold tracking-[-.03em] text-text">
          Nombre y correo
        </h2>
        <p className="mb-[20px] mt-[6px] text-[13px] leading-[1.55] text-muted">
          Así apareces en tu workspace y donde te enviamos resúmenes y avisos.
        </p>
        <form onSubmit={onSaveProfile} noValidate className="grid gap-[15px]">
          <ProfileField
            id="profile-name"
            label="Nombre de usuario"
            icon={<Icon name="user" />}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Demo User"
            autoComplete="username"
            error={errors.name}
          />
          <ProfileField
            id="profile-email"
            label="Correo electrónico"
            type="email"
            icon={<Icon name="mail" />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="demo@linkchest.app"
            autoComplete="email"
            hint="Te avisaremos aquí si detectamos un inicio de sesión nuevo."
            error={errors.email}
          />
          <div className="mt-[4px] flex flex-wrap gap-3">
            <PrimaryButton type="submit" className="inline-flex items-center gap-2">
              <Icon name="check" className="text-[15px]" />
              Guardar cambios
            </PrimaryButton>
            <SecondaryButton
              type="button"
              onClick={() => {
                setName(initialName);
                setEmail(initialEmail);
                setErrors({});
              }}
            >
              Descartar
            </SecondaryButton>
          </div>
        </form>
      </section>

      <section
        aria-labelledby="password-title"
        className="rounded-[18px] border border-line bg-surface p-[26px] shadow-[var(--shadow)] max-[620px]:p-[20px]"
      >
        <Eyebrow>Seguridad</Eyebrow>
        <h2 id="password-title" className="font-display text-[21px] font-bold tracking-[-.03em] text-text">
          Contraseña
        </h2>
        <p className="mb-[20px] mt-[6px] text-[13px] leading-[1.55] text-muted">
          Cámbiala cada cierto tiempo. Nunca la compartas por correo o chat.
        </p>
        <form onSubmit={onSavePassword} noValidate className="grid gap-[15px]">
          <PasswordRow
            id="profile-current"
            label="Contraseña actual"
            value={current}
            visible={showCurrent}
            onToggle={() => setShowCurrent((v) => !v)}
            onChange={setCurrent}
            error={errors.current}
            autoComplete="current-password"
          />
          <div className="grid gap-[15px] sm:grid-cols-2">
            <PasswordRow
              id="profile-next"
              label="Nueva contraseña"
              value={next}
              visible={showNext}
              onToggle={() => setShowNext((v) => !v)}
              onChange={setNext}
              error={errors.next}
              hint="Mínimo 8 caracteres."
              autoComplete="new-password"
            />
            <ProfileField
              id="profile-confirm"
              label="Confirmar nueva"
              type={showNext ? "text" : "password"}
              icon={<Icon name="lock" />}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Repite la nueva"
              autoComplete="new-password"
              error={errors.confirm}
            />
          </div>
          <div>
            <PrimaryButton type="submit" className="inline-flex items-center gap-2">
              <Icon name="shield" className="text-[15px]" />
              Actualizar contraseña
            </PrimaryButton>
          </div>
        </form>
      </section>
    </div>
  );
}

function PasswordRow({
  id,
  label,
  value,
  visible,
  onToggle,
  onChange,
  error,
  hint,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  visible: boolean;
  onToggle: () => void;
  onChange: (v: string) => void;
  error?: string;
  hint?: string;
  autoComplete?: string;
}) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  return (
    <div className="grid gap-[6px]">
      <FormField label={label}>
        <div className="relative">
          <span className="pointer-events-none absolute left-[13px] top-1/2 -translate-y-1/2 text-[17px] text-muted">
            <Icon name="lock" />
          </span>
          <TextInput
            id={id}
            type={visible ? "text" : "password"}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="••••••••"
            autoComplete={autoComplete}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            className={`pl-[38px] pr-[44px] ${error ? "border-danger focus:border-danger focus:shadow-[0_0_0_3px_rgba(217,83,79,.15)]" : ""}`}
          />
          <IconButton
            type="button"
            aria-label={visible ? "Ocultar contraseña" : "Mostrar contraseña"}
            aria-pressed={visible}
            onClick={onToggle}
            className="absolute right-[5px] top-1/2 -translate-y-1/2 bg-transparent text-[17px]"
          >
            <Icon name={visible ? "eye-off" : "eye"} />
          </IconButton>
        </div>
      </FormField>
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-[12px] font-medium text-danger">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-[12px] leading-[1.5] text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
