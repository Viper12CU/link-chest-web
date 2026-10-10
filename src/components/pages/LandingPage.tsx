import { LandingTemplate } from "@/components/templates/LandingTemplate";
import { LandingHero } from "@/components/organisms/LandingHero";
import { LandingFeatures } from "@/components/organisms/LandingFeatures";
import { LandingHowItWorks } from "@/components/organisms/LandingHowItWorks";
import { LandingShowcase } from "@/components/organisms/LandingShowcase";
import { LandingMobile } from "@/components/organisms/LandingMobile";
import { LandingCta } from "@/components/organisms/LandingCta";

export function LandingPage() {
  return (
    <LandingTemplate>
      <LandingHero />
      <LandingFeatures />
      <LandingHowItWorks />
      <LandingShowcase />
      <LandingMobile />
      <LandingCta />
    </LandingTemplate>
  );
}
