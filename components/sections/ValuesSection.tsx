"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Target, Zap, Award, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Target,
  Zap,
  Award,
};

interface Value {
  icon: string; // Icon name as string
  title: string;
  description: string;
}

interface ValuesSectionProps {
  title?: string;
  values: Value[];
}

const ValuesSection = ({ 
  title = "Our values",
  values 
}: ValuesSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 lg:py-20 relative">
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
        <div className={`text-center mb-12 scroll-animate ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/20 scroll-animate stagger-${index + 1} ${isVisible ? 'is-visible' : ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                {iconMap[value.icon] && (() => {
                  const IconComponent = iconMap[value.icon];
                  return <IconComponent className="w-6 h-6 text-primary" />;
                })()}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

