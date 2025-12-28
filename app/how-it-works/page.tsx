import { Metadata } from "next";
import SolutionHero from "@/components/sections/SolutionHero";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works | Axiom AI - Our Process",
  description: "A proven process that gets you from idea to launched product in weeks. Discover, build, and launch with transparency and speed.",
  keywords: ["product development process", "how it works", "development workflow", "product launch process"],
  openGraph: {
    title: "How It Works | Axiom AI",
    description: "A proven process that gets you from idea to launched product in weeks.",
    type: "website",
  },
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <SolutionHero
        title="How it works"
        description="A proven process that gets you from idea to launched product in weeks. Transparent, fast, and focused on results."
      />
      <HowItWorksSection />
      <CTASection
        title="Ready to get started?"
        description="Apply to work with us and let's bring your vision to life."
        ctaText="Apply to Work With Us"
        ctaHref="/apply"
      />
      <Footer />
    </div>
  );
}

