import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: {
    default: "Nexcent - Build and Launch AI-Powered Products",
    template: "%s | Nexcent",
  },
  description:
    "We help ambitious founders and teams ship AI MVPs, intelligent agents, and scalable SaaS products in 6–8 weeks. From vision to launch, we build what actually works.",
  keywords: [
    "AI MVP",
    "AI development",
    "AI agents",
    "SaaS development",
    "AI integration",
    "product development",
    "AI automation",
    "startup development",
  ],
  authors: [{ name: "Nexcent" }],
  creator: "Nexcent",
  publisher: "Nexcent",
  metadataBase: new URL("https://nexcent.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexcent.com",
    title: "Nexcent - Build and Launch AI-Powered Products",
    description:
      "We help ambitious founders and teams ship AI MVPs, intelligent agents, and scalable SaaS products in 6–8 weeks. From vision to launch, we build what actually works.",
    siteName: "Nexcent",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexcent - Build and Launch AI-Powered Products",
    description:
      "We help ambitious founders and teams ship AI MVPs, intelligent agents, and scalable SaaS products in 6–8 weeks.",
    creator: "@nexcent",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
