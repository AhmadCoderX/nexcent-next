"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Check, X, Users, Target, Zap, Rocket, Building2, Code, AlertCircle } from "lucide-react";

interface WhoIsThisForSectionProps {
  title?: string;
  forItems: string[];
  notForItems: string[];
}

const forIcons = [Users, Target, Zap, Rocket];
const notForIcons = [Building2, Code, AlertCircle, AlertCircle];

const WhoIsThisForSection = ({ 
  title = "Who this is for",
  forItems,
  notForItems 
}: WhoIsThisForSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 lg:py-20 relative">
      <div className="blur-circle blur-circle-primary w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
        <div className={`text-center mb-12 scroll-animate ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* For */}
          <div className={`group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-primary/20 hover:border-primary/40 scroll-animate stagger-1 ${isVisible ? 'is-visible' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Perfect for
              </h3>
            </div>
            <ul className="space-y-4">
              {forItems.map((item, index) => {
                const IconComponent = forIcons[index] || Users;
                return (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-200 group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed pt-1">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Not For */}
          <div className={`group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/20 scroll-animate stagger-2 ${isVisible ? 'is-visible' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <X className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Not ideal for
              </h3>
            </div>
            <ul className="space-y-4">
              {notForItems.map((item, index) => {
                const IconComponent = notForIcons[index] || AlertCircle;
                return (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200 group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                      <IconComponent className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed pt-1">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;

