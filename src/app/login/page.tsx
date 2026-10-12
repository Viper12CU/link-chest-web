import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginPage, LoginPageFromSearchParams } from "@/components/pages/LoginPage";

export const metadata: Metadata = {
  title: "Iniciar sesión o crear cuenta — Link Chest",
  description: "Accede a tu colección de enlaces desde cualquier dispositivo.",
};

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string }>;
}) {
  return (
    <Suspense fallback={<LoginPage initialMode="signin" />}>
      <LoginPageFromSearchParams searchParams={searchParams} />
    </Suspense>
  );
}
