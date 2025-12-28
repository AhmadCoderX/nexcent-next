"use client";

import { Target, TrendingUp, DollarSign, Sparkles, Users, Zap } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const leftPoints = [
  {
    icon: Target,
    title: "Product-first mindset",
    description: "We focus on what matters: shipping products that users actually want and need.",
  },
  {
    icon: TrendingUp,
    title: "Outcome-driven AI",
    description: "Every AI feature we build is tied to measurable business outcomes.",
  },
  {
    icon: DollarSign,
    title: "Transparent pricing",
    description: "No surprises. Fixed scope, fixed timeline, transparent pricing from day one.",
  },
];

const rightPoints = [
  {
    icon: Sparkles,
    title: "Cutting-edge tech",
    description: "We use the latest AI models and frameworks to build future-proof solutions.",
  },
  {
    icon: Users,
    title: "Dedicated team",
    description: "A focused team of experts assigned to your project from start to finish.",
  },
  {
    icon: Zap,
    title: "Rapid iteration",
    description: "Weekly demos and fast feedback loops keep your project moving forward.",
  },
];

const WhyUsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Centered heading */}
        <div 
          ref={ref}
          className={`text-center mb-12 scroll-animate ${isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why teams choose us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine deep technical expertise with a relentless focus on delivering real results.
          </p>
        </div>

        {/* Three column layout: Left cards - Center orbit - Right cards */}
        <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-8 items-center">
          {/* Left column - 3 cards */}
          <div className="space-y-4 order-2 lg:order-1">
            {leftPoints.map((point, index) => (
              <div
                key={index}
                className={`group p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 scroll-animate-left stagger-${index + 1} ${isVisible ? 'is-visible' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <point.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center - AI Orbit illustration */}
          <div className={`relative flex items-center justify-center order-1 lg:order-2 py-8 lg:py-0 scroll-animate-scale ${isVisible ? 'is-visible' : ''}`}>
            <div className="relative w-64 h-64 lg:w-72 lg:h-72">
              {/* Animated orbits */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-60 lg:w-68 h-60 lg:h-68 rounded-full border border-primary/10 animate-[spin_30s_linear_infinite]">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full gradient-bg" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-44 lg:w-52 h-44 lg:h-52 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite_reverse]">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full gradient-bg" />
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/50" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 lg:w-36 h-28 lg:h-36 rounded-full border border-primary/30 animate-[spin_15s_linear_infinite]">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full gradient-bg" />
                </div>
              </div>
              
              {/* Center core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full gradient-bg flex items-center justify-center shadow-glow">
                  <span className="text-primary-foreground font-display font-bold text-xl lg:text-2xl">AI</span>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
              <div className="absolute bottom-10 left-4 w-1.5 h-1.5 rounded-full bg-secondary/50 animate-pulse" style={{ animationDelay: "1s" }} />
              <div className="absolute top-1/3 left-2 w-1 h-1 rounded-full bg-accent/40 animate-pulse" style={{ animationDelay: "2s" }} />
            </div>
          </div>

          {/* Right column - 3 cards */}
          <div className="space-y-4 order-3">
            {rightPoints.map((point, index) => (
              <div
                key={index}
                className={`group p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 scroll-animate-right stagger-${index + 1} ${isVisible ? 'is-visible' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <point.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

