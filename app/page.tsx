import HeroSection from "@/components/HeroSection";
import ChallengeSection from "@/components/ChallengeSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyUsSection from "@/components/WhyUsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <ChallengeSection />
        <SolutionsSection />
        <WhyUsSection />
        <HowItWorksSection />
        <BeforeAfterSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
