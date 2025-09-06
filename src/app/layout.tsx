import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  display: "swap", 
  variable: "--font-source-sans",
  weight: ["300", "400", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre-baskerville", 
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Cape Glass Australia - Premium Wine Bottles | Adelaide",
  description: "Leading importer of premium wine bottles for the Australian wine industry. 48-hour response, competitive pricing, Adelaide showroom. Screen printing, embossing, decals.",
  keywords: "wine bottles, glass bottles, Australian wine industry, Adelaide, premium bottles, screen printing, embossing, decals, custom bottles, large format bottles, magnum bottles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSansPro.variable} ${playfairDisplay.variable} ${libreBaskerville.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
