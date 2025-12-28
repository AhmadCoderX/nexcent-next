"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "50+", label: "Products Launched" },
  { value: "6-8", label: "Weeks to Launch" },
  { value: "98%", label: "Client Satisfaction" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background blur circles */}
      <div className="blur-circle blur-circle-primary w-[600px] h-[600px] -top-40 -right-40 opacity-20" />
      <div className="blur-circle blur-circle-secondary w-[500px] h-[500px] top-1/2 -left-40 opacity-15" />
      <div className="blur-circle blur-circle-accent w-[400px] h-[400px] bottom-20 right-1/4 opacity-10" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-primary fill-primary" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">Trusted by 50+ founders & teams</span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Build and launch AI-powered products that{" "}
            <span className="gradient-text">actually deliver results.</span>
          </h1>

          {/* Supporting paragraph */}
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            We help ambitious founders and teams ship AI MVPs, intelligent agents, and scalable SaaS 
            products in 6–8 weeks. From vision to launch, we build what actually works.
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="lg" asChild>
              <Link href="/apply">
                Apply to Work With Us
                <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link href="/solutions">
                Explore Solutions
              </Link>
            </Button>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div
            className="flex flex-wrap items-center justify-center gap-6 mt-12 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm">Fixed Scope & Pricing</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm">Fast 6-8 Week Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm">Built for Scale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

