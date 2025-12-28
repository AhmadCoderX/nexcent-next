"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Search, Wrench, Rocket, Code, Zap, Bot, Settings, Network, Users, CreditCard, Gauge, Shield, Smartphone, Target, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Wrench,
  Rocket,
  Code,
  Zap,
  Bot,
  Settings,
  Network,
  Users,
  CreditCard,
  Gauge,
  Shield,
  Smartphone,
  Target,
  Award,
};

interface Step {
  number: string;
  icon: string; // Icon name as string
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
}

const ProcessSection = ({ 
  title = "The process", 
  subtitle = "How we work together to deliver results",
  steps 
}: ProcessSectionProps) => {
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

        <div className="relative">
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
          
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/20 scroll-animate stagger-${index + 1} ${isVisible ? 'is-visible' : ''}`}
              >
                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full gradient-bg text-primary-foreground text-xs font-bold">
                  Step {step.number}
                </div>

                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mt-4 mb-5">
                  {iconMap[step.icon] && (() => {
                    const IconComponent = iconMap[step.icon];
                    return <IconComponent className="w-6 h-6 text-primary" />;
                  })()}
                </div>

                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

