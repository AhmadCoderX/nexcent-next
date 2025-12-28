"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface CTASectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

const CTASection = ({ 
  title = "Let's see if we're a fit.",
  description = "Book a discovery call to explore how we can bring your AI vision to life.",
  ctaText = "Apply to Work With Us",
  ctaHref = "/apply"
}: CTASectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
        <div className={`relative rounded-3xl overflow-hidden scroll-animate-scale ${isVisible ? 'is-visible' : ''}`}>
          {/* Gradient background */}
          <div className="absolute inset-0 gradient-bg" />
          
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/10 blur-3xl" />
            
            {/* Stars */}
            <svg className="absolute top-8 left-[10%] w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
            </svg>
            <svg className="absolute top-16 right-[15%] w-3 h-3 text-white/30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
            </svg>
            <svg className="absolute bottom-12 left-[20%] w-2 h-2 text-white/25" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
            </svg>
            <svg className="absolute bottom-20 right-[25%] w-3 h-3 text-white/35" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
            </svg>
            
            {/* Sparkles / dots */}
            <div className="absolute top-1/4 left-[8%] w-1.5 h-1.5 rounded-full bg-white/40" />
            <div className="absolute top-1/3 right-[12%] w-1 h-1 rounded-full bg-white/30" />
            <div className="absolute bottom-1/4 left-[15%] w-2 h-2 rounded-full bg-white/20" />
            <div className="absolute bottom-1/3 right-[10%] w-1.5 h-1.5 rounded-full bg-white/35" />
            
            {/* Curved lines */}
            <svg className="absolute top-10 left-[30%] w-24 h-12 text-white/10" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M0 25 Q25 0 50 25 T100 25" />
            </svg>
            <svg className="absolute bottom-8 right-[30%] w-20 h-10 text-white/10" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M0 25 Q25 50 50 25 T100 25" />
            </svg>
            
            {/* Plus signs */}
            <svg className="absolute top-1/2 left-[5%] w-4 h-4 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" />
            </svg>
            <svg className="absolute top-[40%] right-[8%] w-3 h-3 text-white/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>

          <div className="relative z-10 py-16 px-8 lg:px-16 text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              {title}
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
              {description}
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-foreground hover:bg-white/90"
              asChild
            >
              <Link href={ctaHref}>
                {ctaText}
                <ArrowRight className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

