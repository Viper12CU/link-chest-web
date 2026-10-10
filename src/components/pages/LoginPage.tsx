import { LoginTemplate } from "@/components/templates/LoginTemplate";
import { LoginCard } from "@/components/organisms/LoginCard";

export type LoginInitialMode = "signin" | "signup";

export function LoginPage({ initialMode = "signin" }: { initialMode?: LoginInitialMode }) {
  return (
    <LoginTemplate>
      <LoginCard initialMode={initialMode} />
    </LoginTemplate>
  );
}

export async function LoginPageFromSearchParams({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string }>;
}) {
  const { mode } = await searchParams;
  const initialMode: LoginInitialMode =
    mode === "signup" || mode === "register" ? "signup" : "signin";
  return <LoginPage initialMode={initialMode} />;
}
