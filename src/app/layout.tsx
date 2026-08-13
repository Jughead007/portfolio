import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '../data/portfolio'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-fraunces',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
})

const description = `${siteConfig.role} based in ${siteConfig.location}. I build machine learning systems that ship — computer vision pipelines, RAG apps, and the backend work that makes them reliable.`

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-[var(--paper)] text-[var(--ink)] antialiased">
        <div className="grain" />
        {children}
      </body>
    </html>
  )
}