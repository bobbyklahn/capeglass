import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://capeglass.com.au'),
  title: 'Cape Glass - Premium Wine Bottles from China to Australia',
  description: 'Premium wine bottle supplier specializing in importing high-quality glass bottles from China to Australia. Direct sourcing, competitive pricing, Australia-wide delivery.',
  keywords: 'wine bottles, glass bottles, China import, Australia, premium packaging, custom frosting, screen printing, embossing, thermal transfer',
  authors: [{ name: 'Cape Glass' }],
  openGraph: {
    title: 'Cape Glass - Premium Wine Bottles from China to Australia',
    description: 'Direct sourcing, competitive pricing, Australia-wide delivery for premium wine bottles.',
    url: '/',
    siteName: 'Cape Glass',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cape Glass - Premium Wine Bottles',
    description: 'Direct sourcing, competitive pricing, Australia-wide delivery.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4CAF50" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}