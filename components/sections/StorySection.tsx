"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";

interface StorySectionProps {
  title?: string;
  content: string[];
}

const StorySection = ({ 
  title = "Our story",
  content 
}: StorySectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 lg:py-20 relative">
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
        <div className={`max-w-3xl mx-auto scroll-animate ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">
            {title}
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            {content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

