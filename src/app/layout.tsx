import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Cape Glass - Custom Wine Bottles, Factory-Direct | Adelaide",
  description:
    "Custom and stock wine bottles for Australian wineries, made in our own glassworks. Runs from 500 units, custom moulds, large formats to 30L, decoration and labels. Adelaide-warehoused.",
  keywords:
    "custom wine bottles, low minimum order wine bottles, factory direct glass, wine bottle manufacturer Australia, Adelaide wine bottles, large format bottles, magnum, embossing, screen printing, wine label printing",
  openGraph: {
    title: "Cape Glass - Custom Wine Bottles, Factory-Direct",
    description:
      "The bottle you want, from 500 units. Custom moulds, large formats, decoration and labels, made in our own glassworks and warehoused in Adelaide.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        <meta name="theme-color" content="#1e4d3a" />
      </head>
      <body
        className={`${inter.variable} ${bricolage.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] bg-green-700 text-white px-4 py-2 rounded-md"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
