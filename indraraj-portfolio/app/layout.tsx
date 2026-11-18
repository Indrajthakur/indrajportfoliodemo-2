import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Rails } from "@/components/Rails";
import { TopBar } from "@/components/TopBar";

export const metadata: Metadata = {
  title: { default: "Indraraj Thakur // Code Architect", template: "%s // Indraraj Thakur" },
  description: "Portfolio of Indraraj Thakur, a web developer who builds things that work.",
};

export const viewport: Viewport = {
  themeColor: "#07070a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a
          href="#main"
          className="sr-only z-[80] bg-acid px-4 py-2 font-bold text-black focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
        >
          Skip to content
        </a>
        <Rails />
        <TopBar />
        <main id="main" className="relative z-10 mx-auto max-w-6xl px-5 pb-8 lg:px-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
