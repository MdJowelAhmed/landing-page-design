import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import MobileCheckInSection from "@/components/home/MobileCheckInSection";
import HRDashboardSection from "@/components/home/HRDashboardSection";
import CTASection from "@/components/home/CTASection";
// import ServicesPreview from "@/components/home/ServicesPreview";
import HomeFeatureSection from "@/components/home/HomeFeatureSection";
import Video from "@/components/home/Video";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeFeatureSection />
      <Video />
      <FeaturesSection />
      <MobileCheckInSection />
      <HRDashboardSection />
      {/* <ServicesPreview /> */}
      <CTASection />
    </>
  );
}
