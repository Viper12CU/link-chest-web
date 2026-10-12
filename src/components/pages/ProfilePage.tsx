import { ProfileTemplate } from "@/components/templates/ProfileTemplate";
import { ProfileHeader } from "@/components/organisms/ProfileHeader";
import { ProfileEditForm } from "@/components/organisms/ProfileEditForm";
import { InstallAppBanner } from "@/components/organisms/InstallAppBanner";
import { ProfilePreferences } from "@/components/organisms/ProfilePreferences";
import { ProfileSecurity } from "@/components/organisms/ProfileSecurity";
import { DangerZone } from "@/components/organisms/DangerZone";
import { SectionHeading } from "@/components/molecules/SectionHeading";

const DEMO_NAME = "Demo User";
const DEMO_EMAIL = "demo@linkchest.app";

export function ProfilePage() {
  return (
    <ProfileTemplate>
      <SectionHeading
        eyebrow="Perfil"
        title="Tu cuenta, a tu manera"
        subtitle="Actualiza tus datos, protege tu acceso y lleva Link Chest contigo."
      />
      <div className="grid gap-4">
        <div className="animate-auth-in-right">
          <InstallAppBanner />
        </div>
        <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="grid gap-4">
            <div className="animate-auth-in-right" style={{ animationDelay: "60ms" }}>
              <ProfileHeader name={DEMO_NAME} email={DEMO_EMAIL} />
            </div>
            <div className="animate-auth-in-right" style={{ animationDelay: "120ms" }}>
              <ProfileEditForm initialName={DEMO_NAME} initialEmail={DEMO_EMAIL} />
            </div>
          </div>
          <aside className="grid gap-4 lg:sticky lg:top-[84px]">
            <div className="animate-auth-in-left" style={{ animationDelay: "140ms" }}>
              <ProfilePreferences />
            </div>
            <div className="animate-auth-in-left" style={{ animationDelay: "200ms" }}>
              <ProfileSecurity />
            </div>
            <div className="animate-auth-in-left" style={{ animationDelay: "260ms" }}>
              <DangerZone />
            </div>
          </aside>
        </div>
      </div>
    </ProfileTemplate>
  );
}
