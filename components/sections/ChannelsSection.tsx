"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Globe, MessageCircle, Briefcase, Slack, Mail, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  MessageCircle,
  Briefcase,
  Slack,
  Mail,
};

interface Channel {
  icon: string; // Icon name as string
  name: string;
}

interface ChannelsSectionProps {
  title?: string;
  subtitle?: string;
  channels: Channel[];
}

const ChannelsSection = ({ 
  title = "Channels we support", 
  subtitle = "Deploy AI agents across your existing tools",
  channels 
}: ChannelsSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 lg:py-20 relative">
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
        <div className={`text-center mb-12 scroll-animate ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {channels.map((channel, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/20 scroll-animate stagger-${index + 1} ${isVisible ? 'is-visible' : ''}`}
            >
              {iconMap[channel.icon] && (() => {
                const IconComponent = iconMap[channel.icon];
                return <IconComponent className="w-8 h-8 text-primary mb-3" />;
              })()}
              <span className="text-sm font-medium text-foreground text-center">
                {channel.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;

