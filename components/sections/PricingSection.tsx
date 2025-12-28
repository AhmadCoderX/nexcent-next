"use client";

import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";
import Link from "next/link";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: string;
  description?: string;
  features: PricingFeature[];
  ctaText: string;
  ctaHref?: string;
  popular?: boolean;
}

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  tiers: PricingTier[];
}

const PricingSection = ({ 
  title = "Pricing", 
  subtitle = "Choose the plan that fits your needs",
  tiers 
}: PricingSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 lg:py-20 relative">
      <div className="blur-circle blur-circle-primary w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
        <div className={`text-center mb-12 scroll-animate ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 ${
                tier.popular 
                  ? 'border-2 border-primary/50 gradient-border' 
                  : 'border border-border hover:border-primary/20'
              } scroll-animate stagger-${index + 1} ${isVisible ? 'is-visible' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-bg text-primary-foreground text-xs font-bold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display text-4xl font-bold gradient-text">
                    {tier.price}
                  </span>
                </div>
                {tier.description && (
                  <p className="text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    ) : (
                      <span className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.popular ? "hero" : "hero-outline"} 
                size="lg" 
                className="w-full"
                asChild={!!tier.ctaHref}
              >
                {tier.ctaHref ? (
                  <Link href={tier.ctaHref}>{tier.ctaText}</Link>
                ) : (
                  <span>{tier.ctaText}</span>
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

