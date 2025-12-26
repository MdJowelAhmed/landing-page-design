import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import MobileCheckInSection from "@/components/home/MobileCheckInSection";
import HRDashboardSection from "@/components/home/HRDashboardSection";
import CTASection from "@/components/home/CTASection";
import ServicesPreview from "@/components/home/ServicesPreview";
import HomeFeatureSection from "@/components/home/HomeFeatureSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeFeatureSection />
      <FeaturesSection />
      <MobileCheckInSection />
      <HRDashboardSection />
      <ServicesPreview />
      <CTASection />
    </>
  );
}
