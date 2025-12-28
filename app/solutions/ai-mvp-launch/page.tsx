import { Metadata } from "next";
import SolutionHero from "@/components/sections/SolutionHero";
import OutcomesSection from "@/components/sections/OutcomesSection";
import WhoIsThisForSection from "@/components/sections/WhoIsThisForSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhatsIncludedSection from "@/components/sections/WhatsIncludedSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQsSection from "@/components/sections/FAQsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI MVP Launch | Axiom AI - Launch Your MVP in 6-8 Weeks",
  description: "Launch your AI MVP in 6-8 weeks. Fixed scope, fixed pricing. From idea to validated product with real users.",
  keywords: ["AI MVP", "MVP development", "product launch", "AI product", "startup MVP"],
  openGraph: {
    title: "AI MVP Launch | Axiom AI",
    description: "Launch your AI MVP in 6-8 weeks. Fixed scope, fixed pricing.",
    type: "website",
  },
};

export default function AIMVPLaunchPage() {
  const outcomes = [
    {
      title: "Faster validation",
      description: "Get your product in front of real users in weeks, not months. Validate your core assumptions quickly.",
    },
    {
      title: "Reduced risk",
      description: "Fixed scope and pricing means no surprises. You know exactly what you're getting and when.",
    },
    {
      title: "Real product",
      description: "Not a prototype—a real, working product that users can actually use and you can build on.",
    },
  ];

  const forItems = [
    "Founders with a clear vision and limited time",
    "Teams that need to validate an idea quickly",
    "Startups ready to invest in a focused MVP",
    "Products that can be scoped to core features",
  ];

  const notForItems = [
    "Complex enterprise systems requiring extensive planning",
    "Products with unclear or constantly changing requirements",
    "Teams looking for ongoing development support",
    "Projects that need extensive research before building",
  ];

  const processSteps = [
    {
      number: "01",
      icon: "Search",
      title: "Discovery",
      description: "We dive deep into your vision, define clear outcomes, and scope a focused MVP that validates your core assumptions.",
    },
    {
      number: "02",
      icon: "Wrench",
      title: "Build",
      description: "Our team designs, develops, and integrates AI capabilities into a polished product—with weekly updates and full transparency.",
    },
    {
      number: "03",
      icon: "Rocket",
      title: "Launch",
      description: "We launch your product to real users, gather feedback, and help you iterate toward product-market fit.",
    },
  ];

  const includedItems = [
    "Product strategy & scoping",
    "UX/UI design",
    "AI integration & fine-tuning",
    "Web application development",
    "Admin dashboard",
    "Deployment & hosting setup",
  ];

  const pricingTiers = [
    {
      name: "MVP Starter",
      price: "$5,000",
      description: "Perfect for simple MVPs",
      features: [
        { text: "Basic product strategy", included: true },
        { text: "Simple UI/UX design", included: true },
        { text: "Core AI integration", included: true },
        { text: "Web app development", included: true },
        { text: "Basic admin panel", included: true },
        { text: "Deployment & setup", included: true },
      ],
      ctaText: "Apply for MVP Build",
      ctaHref: "/apply",
    },
    {
      name: "MVP Pro",
      price: "$8,000",
      description: "Most popular choice",
      popular: true,
      features: [
        { text: "Comprehensive strategy", included: true },
        { text: "Polished UI/UX design", included: true },
        { text: "Advanced AI integration", included: true },
        { text: "Full web application", included: true },
        { text: "Advanced admin dashboard", included: true },
        { text: "Deployment & hosting", included: true },
        { text: "Analytics integration", included: true },
      ],
      ctaText: "Apply for MVP Build",
      ctaHref: "/apply",
    },
    {
      name: "MVP Scale",
      price: "From $12,000",
      description: "For complex MVPs",
      features: [
        { text: "Enterprise strategy", included: true },
        { text: "Premium UI/UX design", included: true },
        { text: "Custom AI solutions", included: true },
        { text: "Scalable web application", included: true },
        { text: "Enterprise admin panel", included: true },
        { text: "Cloud deployment", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Performance optimization", included: true },
      ],
      ctaText: "Apply for MVP Build",
      ctaHref: "/apply",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to launch?",
      answer: "Typically 6-8 weeks from kickoff to launch. We work in focused sprints with weekly updates so you always know where we are.",
    },
    {
      question: "What's included in the fixed price?",
      answer: "Everything needed to launch: strategy, design, development, AI integration, admin dashboard, and deployment. No hidden costs.",
    },
    {
      question: "Can I add features after launch?",
      answer: "Yes! After launch, we can work on iterations and new features. Many clients continue with us for ongoing development.",
    },
    {
      question: "What if my requirements change?",
      answer: "We scope the MVP upfront to avoid scope creep. If requirements change significantly, we'll discuss adjustments to timeline or pricing.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer ongoing support and maintenance packages. Many clients continue working with us after launch for iterations and new features.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SolutionHero
        title="Launch your AI MVP in 6–8 weeks"
        description="Fixed scope, fixed pricing. From idea to validated product with real users. No surprises, just results."
        ctaText="Apply for MVP Build"
        ctaHref="/apply"
      />
      <OutcomesSection outcomes={outcomes} />
      <WhoIsThisForSection forItems={forItems} notForItems={notForItems} />
      <ProcessSection steps={processSteps} />
      <WhatsIncludedSection items={includedItems} />
      <PricingSection tiers={pricingTiers} />
      <FAQsSection faqs={faqs} />
      <CTASection
        title="Ready to launch your MVP?"
        description="Let's discuss your vision and see if we're a fit."
        ctaText="Apply for MVP Build"
        ctaHref="/apply"
      />
      <Footer />
    </div>
  );
}

