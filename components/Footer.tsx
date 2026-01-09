import Link from "next/link";

const footerLinks = {
  solutions: [
    { label: "AI MVP Launch", href: "/solutions/ai-mvp-launch" },
    { label: "AI Agents & Automation", href: "/solutions/ai-agents" },
    { label: "SaaS Development", href: "/solutions/saas-development" },
  ],
  services: [
    { label: "AI MVP Development", href: "/solutions/ai-mvp-launch" },
    { label: "AI Agents and Automation", href: "/solutions/ai-agents" },
    { label: "SaaS Engineering", href: "/solutions/saas-development" },
    { label: "Product Launch Marketing", href: "/services/product-launch-marketing" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Apply", href: "/apply" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <span className="font-logo font-bold text-2xl gradient-text">Nexcent</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We help ambitious teams build and launch AI-powered products that deliver real results.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Nexcent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

