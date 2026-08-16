import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig } from '../data/portfolio';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — Data Scientist & AI Engineer`,
  description: `${siteConfig.role} based in ${siteConfig.location}. Machine learning systems, computer vision pipelines, and LLM applications built to work in production.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-[#FAFAF9] text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
