"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Network, Users, CreditCard, Gauge, Shield, Smartphone, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Network,
  Users,
  CreditCard,
  Gauge,
  Shield,
  Smartphone,
};

interface Feature {
  icon: string; // Icon name as string
  title: string;
  description: string;
}

interface WhatWeHandleSectionProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
}

const WhatWeHandleSection = ({ 
  title = "What we handle", 
  subtitle = "The technical complexity, so you can focus on growth",
  features 
}: WhatWeHandleSectionProps) => {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/20 scroll-animate stagger-${index + 1} ${isVisible ? 'is-visible' : ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                {iconMap[feature.icon] && (() => {
                  const IconComponent = iconMap[feature.icon];
                  return <IconComponent className="w-6 h-6 text-primary" />;
                })()}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeHandleSection;

