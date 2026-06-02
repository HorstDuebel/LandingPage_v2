import type { Metadata } from "next";
import { Carlito, Manrope, Mukta } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Frank Vullhorst – KI‑Sparring",
  description:
    "KI-Sparring auf Augenhöhe: In 45 Minuten klären wir, wo KI und Automatisierung in Ihrem Betrieb entlasten können – sicher, sinnvoll und strategisch.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Frank Vullhorst – KI‑Sparring",
    description:
      "Praxisnah, nachvollziehbar und an EU AI Act sowie DSGVO orientiert.",
    type: "website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
