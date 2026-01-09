import { Metadata } from "next";
import SolutionHero from "@/components/sections/SolutionHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CaseStudiesGrid from "@/components/sections/CaseStudiesGrid";

export const metadata: Metadata = {
  title: "Case Studies | Nexcent - Success Stories",
  description: "See how we've helped founders and teams launch successful AI-powered products. Real results from real projects.",
  keywords: ["case studies", "success stories", "portfolio", "client results"],
  openGraph: {
    title: "Case Studies | Nexcent",
    description: "See how we've helped founders and teams launch successful AI-powered products.",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SolutionHero
        title="Case studies"
        description="Real results from real projects. See how we've helped founders and teams launch successful products."
      />
      <CaseStudiesGrid />
      <CTASection
        title="Start your project"
        description="Let's discuss how we can help you achieve similar results."
        ctaText="Start Your Project"
        ctaHref="/apply"
      />
      <Footer />
    </div>
  );
}

