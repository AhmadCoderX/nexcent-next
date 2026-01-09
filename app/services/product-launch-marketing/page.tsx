import { Metadata } from "next";
import SolutionHero from "@/components/sections/SolutionHero";
import OutcomesSection from "@/components/sections/OutcomesSection";
import WhatsIncludedSection from "@/components/sections/WhatsIncludedSection";
import PricingAnchorSection from "@/components/sections/PricingAnchorSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Product Launch Marketing | Nexcent - Launch with Clarity",
  description: "Launch your product with clarity and momentum. Landing pages, messaging, analytics, and launch campaigns.",
  keywords: ["product marketing", "launch marketing", "landing pages", "product launch", "marketing strategy"],
  openGraph: {
    title: "Product Launch Marketing | Nexcent",
    description: "Launch your product with clarity and momentum. Landing pages, messaging, and launch campaigns.",
    type: "website",
  },
};

export default function ProductLaunchMarketingPage() {
  const outcomes = [
    {
      title: "Clear positioning",
      description: "Define your unique value proposition and communicate it clearly to your target audience.",
    },
    {
      title: "Higher conversion",
      description: "Optimized landing pages and messaging that convert visitors into customers.",
    },
    {
      title: "Faster adoption",
      description: "Launch campaigns that drive awareness, interest, and early adoption of your product.",
    },
  ];

  const includedItems = [
    "Landing page design & development",
    "Messaging & copywriting",
    "Analytics & tracking setup",
    "Launch campaign strategy",
    "Conversion optimization",
  ];

  return (
    <div className="min-h-screen bg-background">
      <SolutionHero
        title="Launch your product with clarity and momentum"
        description="Position your product correctly, communicate your value clearly, and drive adoption from day one."
        ctaText="Ask About Launch Support"
        ctaHref="/apply"
      />
      <OutcomesSection outcomes={outcomes} />
      <WhatsIncludedSection items={includedItems} />
      <PricingAnchorSection
        anchorText="Available as an add-on to product builds"
        description="Product launch marketing is available as an add-on when you work with us on product development."
        ctaText="Ask About Launch Support"
        ctaHref="/apply"
      />
      <CTASection
        title="Ready to launch your product?"
        description="Let's discuss how we can help you launch with clarity and momentum."
        ctaText="Ask About Launch Support"
        ctaHref="/apply"
      />
      <Footer />
    </div>
  );
}

