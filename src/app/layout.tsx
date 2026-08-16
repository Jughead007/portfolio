import type { Metadata } from 'next';
import { Fraunces, JetBrains_Mono, Caveat } from 'next/font/google';
import './globals.css';
import { siteConfig } from '../data/portfolio';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — Data Scientist & AI Engineer`,
  description: `A café-style menu of models, systems and production AI engineering, served fresh by ${siteConfig.name}, ${siteConfig.role} based in ${siteConfig.location}.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${mono.variable} ${caveat.variable}`}
    >
      <body className="bg-cream text-espresso antialiased">
        <div className="menu-frame" aria-hidden />
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
