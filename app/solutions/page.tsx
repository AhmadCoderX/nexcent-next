import { Metadata } from "next";
import SolutionHero from "@/components/sections/SolutionHero";
import SolutionsSection from "@/components/SolutionsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Solutions | Nexcent - AI MVP Launch, Agents & SaaS Development",
  description: "Explore our solutions: AI MVP Launch, AI Agents & Automation, and SaaS Product Development. Choose the right path for your product vision.",
  keywords: ["AI MVP", "AI agents", "SaaS development", "product development", "automation"],
  openGraph: {
    title: "Solutions | Nexcent",
    description: "Explore our solutions: AI MVP Launch, AI Agents & Automation, and SaaS Product Development.",
    type: "website",
  },
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SolutionHero
        title="Solutions designed to launch, automate, and scale"
        description="Three core offerings to take your AI vision from concept to reality. Choose the path that fits your goals."
      />
      <SolutionsSection />
      <CTASection
        title="Not sure which solution fits?"
        description="Let's talk about your goals and find the right path forward."
        ctaText="Talk to us"
        ctaHref="/apply"
      />
      <Footer />
    </div>
  );
}

