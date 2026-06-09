import type { Metadata, Viewport } from "next";
import { Carlito, Manrope, Mukta } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const fontHeading = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const fontSubheading = Carlito({
  subsets: ["latin"],
  variable: "--font-subheading",
  weight: ["400", "700"],
});

const fontBody = Mukta({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
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
    description: siteConfig.ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullTitle,
    description: siteConfig.ogDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${fontHeading.variable} ${fontSubheading.variable} ${fontBody.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
