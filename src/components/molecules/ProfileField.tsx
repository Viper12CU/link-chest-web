import { FormField } from "@/components/molecules/FormField";
import { TextInput } from "@/components/atoms/TextInput";
import type { InputHTMLAttributes } from "react";

export function ProfileField({
  label,
  hint,
  error,
  icon,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
  icon?: React.ReactNode;
}) {
  const describedBy = error ? `${props.id}-error` : hint ? `${props.id}-hint` : undefined;
  return (
    <div className="grid gap-[6px]">
      <FormField label={label}>
        <div className="relative">
          {icon ? (
            <span className="pointer-events-none absolute left-[13px] top-1/2 -translate-y-1/2 text-[17px] text-muted">
              {icon}
            </span>
          ) : null}
          <TextInput
            {...props}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            className={`${icon ? "pl-[38px]" : ""} ${error ? "border-danger focus:border-danger focus:shadow-[0_0_0_3px_rgba(217,83,79,.15)]" : ""}`}
          />
        </div>
      </FormField>
      {error ? (
        <p id={`${props.id}-error`} role="alert" className="text-[12px] font-medium text-danger">
          {error}
        </p>
      ) : hint ? (
        <p id={`${props.id}-hint`} className="text-[12px] leading-[1.5] text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
