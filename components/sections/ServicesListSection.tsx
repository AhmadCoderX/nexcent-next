"use client";

import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { ArrowRight, Zap, Bot, Code2, Megaphone, LucideIcon } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Bot,
  Code2,
  Megaphone,
};

interface Service {
  icon: string; // Icon name as string
  title: string;
  description: string;
  href: string;
}

interface ServicesListSectionProps {
  services: Service[];
}

const ServicesListSection = ({ services }: ServicesListSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 lg:py-20 relative">
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group gradient-border bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 scroll-animate stagger-${index + 1} ${isVisible ? 'is-visible' : ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {iconMap[service.icon] && (() => {
                  const IconComponent = iconMap[service.icon];
                  return <IconComponent className="w-6 h-6 text-primary" />;
                })()}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <Button variant="hero-outline" size="default" asChild>
                <Link href={service.href}>
                  Learn more
                  <ArrowRight className="ml-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesListSection;

