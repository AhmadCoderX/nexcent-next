import { Metadata } from "next";
import SolutionHero from "@/components/sections/SolutionHero";
import StorySection from "@/components/sections/StorySection";
import ValuesSection from "@/components/sections/ValuesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | Axiom AI - A Product Studio Built for Outcomes",
  description: "A product studio built for outcomes. We help ambitious founders and teams ship AI-powered products that deliver real results.",
  keywords: ["about", "product studio", "team", "mission", "values"],
  openGraph: {
    title: "About | Axiom AI",
    description: "A product studio built for outcomes. We help ambitious founders and teams ship AI-powered products.",
    type: "website",
  },
};

export default function AboutPage() {
  const storyContent = [
    "We started Axiom AI because we saw too many founders struggling to turn their AI visions into reality. The gap between having an idea and launching a product was too wide, too slow, and too expensive.",
    "We built a different approach: fixed scope, fixed pricing, and fast delivery. No surprises, no scope creep, just results. We focus on outcomes, not hours. We build what actually works, not what looks good in a pitch deck.",
    "Our philosophy is simple: clarity, execution, and ownership. We bring clarity to your vision, execute with precision, and take ownership of the results. That's how we've helped 50+ founders launch products in 6-8 weeks.",
  ];

  const values = [
    {
      icon: "Target",
      title: "Clarity",
      description: "We bring clarity to your vision. Clear scope, clear outcomes, clear communication every step of the way.",
    },
    {
      icon: "Zap",
      title: "Execution",
      description: "We execute with precision and speed. No delays, no excuses, just results delivered on time.",
    },
    {
      icon: "Award",
      title: "Ownership",
      description: "We take ownership of the results. Your success is our success, and we stand behind our work.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SolutionHero
        title="A product studio built for outcomes"
        description="We help ambitious founders and teams ship AI-powered products that deliver real results. Clarity, execution, and ownership—that's our promise."
      />
      <StorySection content={storyContent} />
      <ValuesSection values={values} />
      <CTASection
        title="Work with us"
        description="Let's discuss how we can help you achieve your product goals."
        ctaText="Work With Us"
        ctaHref="/apply"
      />
      <Footer />
    </div>
  );
}

