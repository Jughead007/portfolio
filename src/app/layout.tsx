import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono, Caveat } from 'next/font/google';
import './globals.css';
import { siteConfig } from '../data/portfolio';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — Technical Monograph & Research Journal`,
  description: `${siteConfig.role} based in ${siteConfig.location}. A monograph documenting models, systems, and production AI engineering.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${mono.variable} ${caveat.variable}`}
    >
      <body className="bg-[var(--paper)] text-[var(--ink)] antialiased relative">
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}