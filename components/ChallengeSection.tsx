"use client";

import { Clock, TrendingDown, AlertCircle, Layers, Target, Rocket } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const challenges = [
  {
    icon: AlertCircle,
    title: "Unclear MVP Scope",
    description: "Features keep expanding without clear direction",
  },
  {
    icon: TrendingDown,
    title: "Budget Burnout",
    description: "Failed AI experiments draining resources",
  },
  {
    icon: Clock,
    title: "Endless Timelines",
    description: "Development cycles dragging for months",
  },
];

const solutions = [
  {
    icon: Target,
    title: "Clear Outcomes",
    description: "Fixed scope with defined deliverables",
  },
  {
    icon: Rocket,
    title: "Fast Validation",
    description: "Launch in 6-8 weeks, not months",
  },
  {
    icon: Layers,
    title: "Built Right",
    description: "Scalable architecture from day one",
  },
];

const ChallengeSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8 relative" ref={ref}>
        <div className={`text-center mb-12 scroll-animate ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Building AI products shouldn&apos;t feel{" "}
            <span className="relative inline-block">
              uncertain
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8C50 2 150 2 198 8" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="hsl(276, 100%, 57%)" />
                    <stop offset="1" stopColor="hsl(250, 100%, 58%)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You need a partner who turns AI concepts into shipped products—fast and focused.
          </p>
        </div>

        {/* Modern bento grid layout */}
        <div>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Challenges Card */}
            <div className={`bg-card rounded-2xl p-6 border border-border shadow-card relative overflow-hidden group hover:shadow-card-hover transition-all duration-300 scroll-animate-left ${isVisible ? 'is-visible' : ''}`}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive/50 to-destructive/20" />
              <h3 className="font-display text-lg font-semibold text-muted-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-destructive" />
                Common Challenges
              </h3>
              <div className="space-y-4">
                {challenges.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-0.5">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions Card */}
            <div className={`bg-card rounded-2xl p-6 border border-primary/20 shadow-card relative overflow-hidden group hover:shadow-card-hover transition-all duration-300 scroll-animate-right ${isVisible ? 'is-visible' : ''}`}>
              <div className="absolute top-0 left-0 w-full h-1 gradient-bg" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-6 flex items-center gap-2 relative">
                <span className="w-2 h-2 rounded-full gradient-bg" />
                Our Approach
              </h3>
              <div className="space-y-4 relative">
                {solutions.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-0.5">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom stat bar */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { label: "Faster Time-to-Market", value: "4x" },
              { label: "Cost Savings", value: "60%" },
              { label: "Success Rate", value: "98%" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl p-4 border border-border text-center hover:border-primary/30 transition-colors duration-200 scroll-animate stagger-${index + 1} ${isVisible ? 'is-visible' : ''}`}
              >
                <div className="font-display text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;

