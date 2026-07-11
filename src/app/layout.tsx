import type { Metadata } from "next";
import { Fredoka, Quicksand, Pixelify_Sans, Silkscreen } from "next/font/google";
import "./globals.css";
import CherryBlossoms from "@/components/effects/CherryBlossoms";
import CursorSparkle from "@/components/effects/CursorSparkle";
import DuckCompanion from "@/components/effects/DuckCompanion";
import FloatingDecor from "@/components/effects/FloatingDecor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageLoader from "@/components/loader/PageLoader";
import profile from "@data/profile.json";
import settings from "@data/settings.json";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-pixelify",
  display: "swap",
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-silkscreen",
  display: "swap",
});

const siteUrl = "https://personal-resume-sandy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: settings.siteTitle,
  description: settings.siteDescription,
  keywords: [
    "Anwesha Singh",
    "Machine Learning",
    "DevOps",
    "Networking",
    "Portfolio",
    "Computer Science",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: settings.siteTitle,
    description: settings.siteDescription,
    url: siteUrl,
    siteName: settings.siteTitle,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: settings.siteTitle,
    description: settings.siteDescription,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${quicksand.variable} ${pixelifySans.variable} ${silkscreen.variable}`}>
      <body className="font-body relative">
        <a href="#main-content" className="skip-link font-body text-sm font-semibold">
          Skip to main content
        </a>

        {settings.showLoader && <PageLoader />}

        {/* Ambient background layers — purely decorative, kept out of the tab order */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-cream">
          <FloatingDecor />
        </div>
        {settings.cursorSparkles && <CursorSparkle />}
        <CherryBlossoms idleSeconds={settings.idleCherryBlossomSeconds} />
        {settings.showDuckEasterEgg && <DuckCompanion />}

        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
