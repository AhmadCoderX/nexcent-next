"use client";

import { ArrowRight, Zap, Bot, Code2 } from "lucide-react";
import Link from "next/link";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const solutions = [
  {
    icon: Zap,
    title: "AI MVP Launch",
    description:
      "Go from idea to validated product in weeks, not months. We scope, build, and ship your AI-powered MVP with precision.",
    bullets: [
      "Faster validation with real users",
      "Reduced risk through focused scope",
      "Real product in 6–8 weeks",
    ],
    link: "View AI MVP Launch",
    href: "/solutions/ai-mvp-launch",
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description:
      "Deploy intelligent agents that work 24/7. Automate workflows, reduce operational costs, and scale without adding headcount.",
    bullets: [
      "Automate repetitive operations",
      "Reduce costs significantly",
      "Always-on AI agents",
    ],
    link: "View AI Agents",
    href: "/solutions/ai-agents",
  },
  {
    icon: Code2,
    title: "SaaS Product Development",
    description:
      "Build scalable, secure SaaS products designed for growth. From architecture to launch, we handle the technical complexity.",
    bullets: [
      "Scalable architecture from day one",
      "Security-first development",
      "Built for sustainable growth",
    ],
    link: "View SaaS Development",
    href: "/solutions/saas-development",
  },
];

const SolutionsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="solutions" className="py-16 lg:py-20 relative">
      {/* Background blur */}
      <div className="blur-circle blur-circle-primary w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
        <div className={`text-center mb-12 scroll-animate ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What we build
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three core offerings designed to take your AI vision from concept to reality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group gradient-border bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 scroll-animate stagger-${index + 1} ${isVisible ? 'is-visible' : ''}`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-3 mb-8">
                {solution.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-2 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                href={solution.href}
                className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-200"
              >
                {solution.link}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

