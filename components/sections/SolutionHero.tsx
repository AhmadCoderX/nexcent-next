"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SolutionHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

const SolutionHero = ({ title, subtitle, description, ctaText, ctaHref }: SolutionHeroProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background blur circles */}
      <div className="blur-circle blur-circle-primary w-[600px] h-[600px] -top-40 -right-40 opacity-20" />
      <div className="blur-circle blur-circle-secondary w-[500px] h-[500px] top-1/2 -left-40 opacity-15" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
              <span className="text-sm font-medium text-foreground">{subtitle}</span>
            </div>
          )}

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {title}
          </h1>

          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {description}
          </p>

          {ctaText && ctaHref && (
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button variant="hero" size="lg" asChild>
                <Link href={ctaHref}>
                  {ctaText}
                  <ArrowRight className="ml-1" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;

