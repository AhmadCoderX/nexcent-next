import { Metadata } from "next";
import SolutionHero from "@/components/sections/SolutionHero";
import ApplicationForm from "@/components/forms/ApplicationForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Apply | Nexcent - Work With Us",
  description: "Let's see if we're a fit. Apply to work with us and let's bring your AI vision to life.",
  keywords: ["apply", "work with us", "contact", "get started"],
  openGraph: {
    title: "Apply | Nexcent",
    description: "Let's see if we're a fit. Apply to work with us and let's bring your AI vision to life.",
    type: "website",
  },
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SolutionHero
        title="Let's see if we're a fit"
        description="Tell us about your project, and we'll get back to you within 24 hours to discuss how we can help."
      />
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <ApplicationForm />
        </div>
      </section>
      <Footer />
    </div>
  );
}

