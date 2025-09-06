import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
