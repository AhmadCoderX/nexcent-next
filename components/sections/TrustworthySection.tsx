"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Shield, Zap, CheckCircle, Award, Users, Clock, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Zap,
  CheckCircle,
  Award,
  Users,
  Clock,
};

interface TrustItem {
  icon: string; // Icon name as string
  title: string;
  description: string;
}

interface TrustworthySectionProps {
  title?: string;
  items?: TrustItem[];
}

const TrustworthySection = ({ 
  title = "Why trust us",
  items = [
    {
      icon: "Users",
      title: "50+ Founders",
      description: "Trusted by ambitious founders and teams to deliver results.",
    },
    {
      icon: "Shield",
      title: "Fixed Scope & Pricing",
      description: "No surprises, no scope creep. Transparent pricing from day one.",
    },
    {
      icon: "Clock",
      title: "6-8 Week Delivery",
      description: "Fast turnaround without compromising on quality or outcomes.",
    },
    {
      icon: "CheckCircle",
      title: "Built for Scale",
      description: "Products designed to grow with your business from day one.",
    },
  ]
}: TrustworthySectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 lg:py-20 relative">
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
        <div className={`text-center mb-12 scroll-animate ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/20 scroll-animate stagger-${index + 1} ${isVisible ? 'is-visible' : ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                {iconMap[item.icon] && (() => {
                  const IconComponent = iconMap[item.icon];
                  return <IconComponent className="w-6 h-6 text-primary" />;
                })()}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustworthySection;

