import type { Metadata, Viewport } from "next";
import { Barlow } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { ScrollProgress } from "@/components/scroll-progress";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const fontBarlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["300", "500"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.defaultDescription,
  keywords: [
    "KI Beratung",
    "KI Beratung KMU",
    "KI Handwerk",
    "EU AI Act",
    "KI-Sparring",
    "Roßdorf",
    "Rhein-Main",
    "Frank Vullhorst",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.fullTitle,
    description: siteConfig.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullTitle,
    description: siteConfig.defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${fontBarlow.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <ScrollProgress />
      </body>
    </html>
  );
}
