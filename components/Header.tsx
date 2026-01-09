"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const solutionsItems = [
  { label: "AI MVP Launch", href: "/solutions/ai-mvp-launch", description: "Go from idea to launched product in 6-8 weeks" },
  { label: "AI Agents & Automation", href: "/solutions/ai-agents", description: "Build intelligent agents that work 24/7" },
  { label: "SaaS Development", href: "/solutions/saas-development", description: "Scalable software built for growth" },
];

const servicesItems = [
  { label: "AI MVP Development", href: "/solutions/ai-mvp-launch", description: "Go from idea to launched product in 6-8 weeks" },
  { label: "AI Agents and Automation", href: "/solutions/ai-agents", description: "Build intelligent agents that work 24/7" },
  { label: "SaaS Engineering", href: "/solutions/saas-development", description: "Scalable software built for growth" },
  { label: "Product Launch Marketing", href: "/services/product-launch-marketing", description: "Launch your product with clarity and momentum" },
];

const navItems = [
  { label: "Solutions", href: "/solutions", hasDropdown: true, items: solutionsItems },
  { label: "Services", href: "/services", hasDropdown: true, items: servicesItems },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-logo font-bold text-2xl gradient-text">Nexcent</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.hasDropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-card-hover overflow-hidden animate-fade-in z-50">
                    <div className="p-2">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block p-3 rounded-lg hover:bg-muted transition-colors duration-200"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <div className="font-medium text-foreground text-sm">{subItem.label}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{subItem.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side - Theme toggle + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="hero" size="default" asChild>
              <Link href="/apply">Apply to Work With Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium py-2"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-4 space-y-1 mt-1 mb-2">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                              onClick={() => {
                                setOpenDropdown(null);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Button variant="hero" size="default" className="mt-4" asChild>
                <Link href="/apply">Apply to Work With Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

