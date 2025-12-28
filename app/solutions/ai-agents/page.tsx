import { Metadata } from "next";
import SolutionHero from "@/components/sections/SolutionHero";
import OutcomesSection from "@/components/sections/OutcomesSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import ChannelsSection from "@/components/sections/ChannelsSection";
import PricingSection from "@/components/sections/PricingSection";
import MonthlyIncludesSection from "@/components/sections/MonthlyIncludesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Agents & Automation | Axiom AI - 24/7 Intelligent Automation",
  description: "Deploy AI agents that run your workflows 24/7. Automate customer support, sales, and operations with intelligent agents.",
  keywords: ["AI agents", "automation", "AI customer support", "AI sales", "workflow automation"],
  openGraph: {
    title: "AI Agents & Automation | Axiom AI",
    description: "Deploy AI agents that run your workflows 24/7. Automate customer support, sales, and operations.",
    type: "website",
  },
};

export default function AIAgentsPage() {
  const outcomes = [
    {
      title: "Reduced manual work",
      description: "Automate repetitive tasks and free up your team to focus on high-value work.",
    },
    {
      title: "Faster response times",
      description: "AI agents respond instantly, 24/7. No waiting, no delays, no missed opportunities.",
    },
    {
      title: "Always-on operations",
      description: "Your workflows run around the clock, even when your team is offline.",
    },
  ];

  const useCases = [
    {
      icon: "MessageSquare",
      title: "AI Customer Support",
      description: "Handle customer inquiries, answer questions, and resolve issues automatically across all channels.",
    },
    {
      icon: "TrendingUp",
      title: "AI Sales Agent",
      description: "Qualify leads, answer product questions, and guide prospects through your sales process.",
    },
    {
      icon: "Settings",
      title: "Internal Operations",
      description: "Automate internal workflows, data entry, reporting, and other operational tasks.",
    },
  ];

  const channels = [
    { icon: "Globe", name: "Web" },
    { icon: "MessageCircle", name: "WhatsApp" },
    { icon: "Briefcase", name: "CRM" },
    { icon: "Slack", name: "Slack" },
    { icon: "Mail", name: "Email" },
  ];

  const pricingTiers = [
    {
      name: "AI Support Agent",
      price: "$2,000",
      description: "Setup + $500/month",
      features: [
        { text: "AI agent setup", included: true },
        { text: "Channel integration", included: true },
        { text: "Knowledge base setup", included: true },
        { text: "Monthly monitoring", included: true },
        { text: "Performance optimization", included: true },
        { text: "Ongoing improvements", included: true },
        { text: "Support & maintenance", included: true },
      ],
      ctaText: "Automate a Workflow",
      ctaHref: "/apply",
    },
    {
      name: "AI Sales Agent",
      price: "$3,000",
      description: "Setup + $750/month",
      popular: true,
      features: [
        { text: "AI agent setup", included: true },
        { text: "Multi-channel integration", included: true },
        { text: "Sales process automation", included: true },
        { text: "CRM integration", included: true },
        { text: "Monthly monitoring", included: true },
        { text: "Performance optimization", included: true },
        { text: "Ongoing improvements", included: true },
        { text: "Support & maintenance", included: true },
      ],
      ctaText: "Automate a Workflow",
      ctaHref: "/apply",
    },
    {
      name: "Custom AI Agent",
      price: "Custom",
      description: "Setup + monthly retainer",
      features: [
        { text: "Custom AI agent development", included: true },
        { text: "Full workflow automation", included: true },
        { text: "Multiple channel integration", included: true },
        { text: "Custom integrations", included: true },
        { text: "Monthly monitoring", included: true },
        { text: "Performance optimization", included: true },
        { text: "Ongoing improvements", included: true },
        { text: "Dedicated support", included: true },
      ],
      ctaText: "Automate a Workflow",
      ctaHref: "/apply",
    },
  ];

  const monthlyIncludes = [
    "24/7 monitoring & alerts",
    "Performance optimization",
    "Continuous improvements",
    "Support & maintenance",
  ];

  return (
    <div className="min-h-screen bg-background">
      <SolutionHero
        title="AI agents that run your workflows 24/7"
        description="Deploy intelligent agents that automate customer support, sales, and operations. Reduce costs, increase efficiency, and scale without adding headcount."
        ctaText="Automate a Workflow"
        ctaHref="/apply"
      />
      <OutcomesSection outcomes={outcomes} />
      <UseCasesSection useCases={useCases} />
      <ChannelsSection channels={channels} />
      <PricingSection tiers={pricingTiers} />
      <MonthlyIncludesSection items={monthlyIncludes} />
      <CTASection
        title="Ready to automate your workflows?"
        description="Let's discuss how AI agents can transform your operations."
        ctaText="Automate a Workflow"
        ctaHref="/apply"
      />
      <Footer />
    </div>
  );
}

