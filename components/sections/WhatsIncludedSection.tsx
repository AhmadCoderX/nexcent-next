"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Check, Palette, Code2, Zap, Layout, Settings, Rocket } from "lucide-react";

interface WhatsIncludedSectionProps {
  title?: string;
  subtitle?: string;
  items: string[];
}

const itemIcons = [Palette, Code2, Zap, Layout, Settings, Rocket];

const WhatsIncludedSection = ({ 
  title = "What's included", 
  subtitle = "Everything you need to launch successfully",
  items 
}: WhatsIncludedSectionProps) => {
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
          {items.map((item, index) => {
            const IconComponent = itemIcons[index] || Check;
            return (
              <div
                key={index}
                className={`group flex items-center gap-4 bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-border hover:border-primary/20 transition-all duration-300 scroll-animate stagger-${index + 1} ${isVisible ? 'is-visible' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <span className="text-foreground font-medium leading-relaxed">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncludedSection;

