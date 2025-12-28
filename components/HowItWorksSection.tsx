"use client";

import { Search, Wrench, Rocket } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover & Define",
    description:
      "We dive deep into your vision, define clear outcomes, and scope a focused MVP that validates your core assumptions.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Build & Integrate",
    description:
      "Our team designs, develops, and integrates AI capabilities into a polished product—with weekly updates and full transparency.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Scale",
    description:
      "We launch your product to real users, gather feedback, and help you iterate toward product-market fit.",
  },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
        <div className={`text-center mb-12 scroll-animate ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven process that gets you from idea to launched product in weeks.
          </p>
        </div>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
          
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/20 scroll-animate stagger-${index + 1} ${isVisible ? 'is-visible' : ''}`}
              >
                {/* Step number badge */}
                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full gradient-bg text-primary-foreground text-xs font-bold">
                  Step {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mt-4 mb-5">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {step.title}
                </h3>

                {/* Description */}
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

export default HowItWorksSection;

