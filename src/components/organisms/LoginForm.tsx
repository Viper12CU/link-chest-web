"use client";

import { useRouter } from "next/navigation";
import { FormField } from "@/components/molecules/FormField";
import { PasswordField } from "@/components/molecules/PasswordField";
import { RememberForgotRow } from "@/components/molecules/RememberForgotRow";
import { TextInput } from "@/components/atoms/TextInput";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";

export function LoginForm() {
  const router = useRouter();

  return (
    <form
      className="grid gap-[17px]"
      onSubmit={(e) => {
        e.preventDefault();
        router.push("/dashboard");
      }}
    >
      <FormField label="Correo electrónico">
        <TextInput
          type="email"
          name="email"
          autoComplete="email"
          defaultValue="demo@linkchest.app"
          required
        />
      </FormField>
      <PasswordField
        name="password"
        autoComplete="current-password"
        defaultValue="12345678"
        required
      />
      <RememberForgotRow />
      <PrimaryButton
        type="submit"
        className="flex items-center justify-between p-[14px]!"
      >
        Iniciar sesión
      </PrimaryButton>
    </form>
  );
}
