"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

interface MonthlyIncludesSectionProps {
  title?: string;
  subtitle?: string;
  items: string[];
}

const MonthlyIncludesSection = ({ 
  title = "What's included monthly", 
  subtitle = "Ongoing support to keep your agents running smoothly",
  items 
}: MonthlyIncludesSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 lg:py-20 relative">
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
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

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary/20 transition-all scroll-animate stagger-${index + 1} ${isVisible ? 'is-visible' : ''}`}
            >
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonthlyIncludesSection;

