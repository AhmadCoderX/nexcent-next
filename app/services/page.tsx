import { Metadata } from "next";
import SolutionHero from "@/components/sections/SolutionHero";
import ServicesListSection from "@/components/sections/ServicesListSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | Nexcent - AI MVP, Agents, SaaS & Marketing",
  description: "Our services support every stage of your product. From AI MVP development to SaaS engineering and product launch marketing.",
  keywords: ["AI MVP", "AI agents", "SaaS engineering", "product marketing", "launch marketing"],
  openGraph: {
    title: "Services | Nexcent",
    description: "Our services support every stage of your product. From AI MVP development to SaaS engineering.",
    type: "website",
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: "Zap",
      title: "AI MVP Development",
      description: "Go from idea to launched product in 6-8 weeks. Fixed scope, fixed pricing, real results.",
      href: "/solutions/ai-mvp-launch",
    },
    {
      icon: "Bot",
      title: "AI Agents and Automation",
      description: "Deploy intelligent agents that automate workflows 24/7. Reduce costs and scale operations.",
      href: "/solutions/ai-agents",
    },
    {
      icon: "Code2",
      title: "SaaS Engineering",
      description: "Build scalable, secure SaaS platforms. Architecture, multi-tenancy, payments, and more.",
      href: "/solutions/saas-development",
    },
    {
      icon: "Megaphone",
      title: "Product Launch Marketing",
      description: "Launch your product with clarity and momentum. Landing pages, messaging, and launch campaigns.",
      href: "/services/product-launch-marketing",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SolutionHero
        title="Our services support every stage of your product"
        description="From initial concept to scaling, we provide the expertise and execution you need at every step."
      />
      <ServicesListSection services={services} />
      <CTASection
        title="Explore our solutions"
        description="See how we can help you build and launch your product."
        ctaText="View Solutions"
        ctaHref="/solutions"
      />
      <Footer />
    </div>
  );
}

