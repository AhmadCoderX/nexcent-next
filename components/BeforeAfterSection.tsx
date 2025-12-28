"use client";

import { X, Check, ArrowRight, Sparkles } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const beforeItems = [
  "Unclear MVP scope that keeps expanding",
  "Failed AI experiments burning budget",
  "Development cycles dragging for months",
  "Disconnected features without user value",
  "Technical debt from rushed decisions",
];

const afterItems = [
  "Crystal-clear scope with fixed deliverables",
  "Validated AI features that drive outcomes",
  "Launched product in 6–8 weeks",
  "Focused features users actually need",
  "Clean architecture built for scale",
];

const BeforeAfterSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
        <div className={`text-center mb-12 scroll-animate ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From uncertainty to confidence. From delays to momentum.
          </p>
        </div>

        {/* Transformation visual */}
        <div>
          <div className="relative">
            {/* Desktop layout */}
            <div className="hidden md:grid md:grid-cols-[1fr,auto,1fr] gap-6 items-stretch">
              {/* Before */}
              <div className={`bg-card rounded-2xl p-6 border border-border relative overflow-hidden scroll-animate-left ${isVisible ? 'is-visible' : ''}`}>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-destructive/30 to-destructive/10" />
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-muted-foreground">
                    Before
                  </h3>
                </div>
                <ul className="space-y-3">
                  {beforeItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground text-sm"
                    >
                      <X className="w-4 h-4 text-destructive/60 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow/Transformation indicator */}
              <div className={`flex items-center justify-center scroll-animate-scale ${isVisible ? 'is-visible' : ''}`}>
                <div className="relative">
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center shadow-glow">
                    <Sparkles className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-4 h-0.5 bg-border" />
                  <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-4 h-0.5 gradient-bg" />
                </div>
              </div>

              {/* After */}
              <div className={`bg-card rounded-2xl p-6 border border-primary/30 relative overflow-hidden shadow-glow scroll-animate-right ${isVisible ? 'is-visible' : ''}`}>
                <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                <div className="flex items-center gap-2 mb-6 relative">
                  <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    After
                  </h3>
                </div>
                <ul className="space-y-3 relative">
                  {afterItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-foreground text-sm"
                    >
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mobile layout */}
            <div className="md:hidden space-y-4">
              {/* Before */}
              <div className={`bg-card rounded-2xl p-5 border border-border relative overflow-hidden scroll-animate ${isVisible ? 'is-visible' : ''}`}>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-destructive/30 to-destructive/10" />
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <X className="w-3.5 h-3.5 text-destructive" />
                  </div>
                  <h3 className="font-display text-base font-bold text-muted-foreground">
                    Before
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {beforeItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-muted-foreground text-sm">
                      <X className="w-3.5 h-3.5 text-destructive/60 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow */}
              <div className={`flex justify-center py-2 scroll-animate-scale stagger-2 ${isVisible ? 'is-visible' : ''}`}>
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shadow-glow">
                  <ArrowRight className="w-5 h-5 text-primary-foreground rotate-90" />
                </div>
              </div>

              {/* After */}
              <div className={`bg-card rounded-2xl p-5 border border-primary/30 relative overflow-hidden shadow-glow scroll-animate stagger-3 ${isVisible ? 'is-visible' : ''}`}>
                <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                <div className="flex items-center gap-2 mb-4 relative">
                  <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground">
                    After
                  </h3>
                </div>
                <ul className="space-y-2.5 relative">
                  {afterItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-foreground text-sm">
                      <Check className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;

