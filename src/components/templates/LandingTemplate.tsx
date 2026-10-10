import { LandingHeader } from "@/components/organisms/LandingHeader";
import { LandingFooter } from "@/components/organisms/LandingFooter";

// Plantilla de la landing: siempre clara (igual que /login).
// Fondo sage + blobs lima fijos con hex, sin tokens temáticos ni `dark:`.
// `overflow-clip` (no `overflow-hidden`): recorta los blobs igual pero no
// crea caja de scroll, así el header `sticky` sigue pegado al viewport.
export function LandingTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="login-static relative min-h-screen overflow-clip bg-[#eaf0e7] font-sans text-[#182019]">
      <div
        aria-hidden="true"
        className="absolute -left-[120px] -top-[100px] h-[380px] w-[380px] rounded-full bg-[#c9f58e] opacity-75 blur-[2px]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-[220px] -right-[200px] h-[500px] w-[500px] rounded-full bg-[#dce8d6] opacity-75 blur-[2px]"
      />
      <div className="relative z-[2]">
        <LandingHeader />
        <main>{children}</main>
        <LandingFooter />
      </div>
    </div>
  );
}
