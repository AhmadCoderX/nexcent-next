import { Metadata } from "next";
import SolutionHero from "@/components/sections/SolutionHero";
import OutcomesSection from "@/components/sections/OutcomesSection";
import WhatWeHandleSection from "@/components/sections/WhatWeHandleSection";
import PricingAnchorSection from "@/components/sections/PricingAnchorSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SaaS Product Development | Nexcent - Scalable SaaS Solutions",
  description: "Scale your product into a real SaaS platform. Architecture, multi-tenancy, payments, performance, security, and mobile apps.",
  keywords: ["SaaS development", "SaaS platform", "multi-tenant", "scalable architecture", "SaaS engineering"],
  openGraph: {
    title: "SaaS Product Development | Nexcent",
    description: "Scale your product into a real SaaS platform. Architecture, multi-tenancy, payments, and more.",
    type: "website",
  },
};

export default function SaaSDevelopmentPage() {
  const outcomes = [
    {
      title: "Scalability",
      description: "Built to handle growth from day one. Architecture that scales with your user base and revenue.",
    },
    {
      title: "Security",
      description: "Enterprise-grade security built in. Data protection, authentication, and compliance from the start.",
    },
    {
      title: "Performance",
      description: "Fast, responsive, and reliable. Optimized for speed and user experience at any scale.",
    },
    {
      title: "Maintainability",
      description: "Clean code, clear architecture, and documentation. Easy to maintain and extend over time.",
    },
  ];

  const features = [
    {
      icon: "Network",
      title: "Architecture",
      description: "Design scalable, maintainable system architecture that grows with your business.",
    },
    {
      icon: "Users",
      title: "Multi-tenancy",
      description: "Build true multi-tenant SaaS with proper data isolation and tenant management.",
    },
    {
      icon: "CreditCard",
      title: "Payments",
      description: "Integrate subscription billing, payment processing, and revenue management.",
    },
    {
      icon: "Gauge",
      title: "Performance",
      description: "Optimize for speed, handle high traffic, and ensure great user experience.",
    },
    {
      icon: "Shield",
      title: "Security",
      description: "Implement authentication, authorization, data protection, and compliance.",
    },
    {
      icon: "Smartphone",
      title: "Mobile apps",
      description: "Build native or cross-platform mobile apps that integrate with your SaaS platform.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SolutionHero
        title="Scale your product into a real SaaS platform"
        description="From architecture to launch, we handle the technical complexity so you can focus on growth. Built for scale, security, and performance."
        ctaText="Book a Strategy Call"
        ctaHref="/apply"
      />
      <OutcomesSection outcomes={outcomes} />
      <WhatWeHandleSection features={features} />
      <PricingAnchorSection
        anchorText="Typical engagements start at $15,000"
        description="Custom SaaS builds are scoped based on your specific requirements. Let's discuss your needs."
        ctaText="Book a Strategy Call"
        ctaHref="/apply"
      />
      <CTASection
        title="Ready to build your SaaS platform?"
        description="Let's discuss your vision and create a plan for scaling your product."
        ctaText="Book a Strategy Call"
        ctaHref="/apply"
      />
      <Footer />
    </div>
  );
}

