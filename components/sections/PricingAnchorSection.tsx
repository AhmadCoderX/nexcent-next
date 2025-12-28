"use client";

import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface PricingAnchorSectionProps {
  anchorText: string;
  description?: string;
  ctaText: string;
  ctaHref: string;
}

const PricingAnchorSection = ({ 
  anchorText, 
  description,
  ctaText,
  ctaHref 
}: PricingAnchorSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 lg:py-20 relative">
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
        <div className={`max-w-4xl mx-auto text-center bg-card rounded-2xl p-8 shadow-card border border-border scroll-animate ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {anchorText}
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground mb-8">
              {description}
            </p>
          )}
          <Button variant="hero" size="lg" asChild>
            <Link href={ctaHref}>
              {ctaText}
              <ArrowRight className="ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingAnchorSection;

