import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '../data/portfolio'

export const metadata: Metadata = {
  title: `${siteConfig.name} — AI/ML Engineer`,
  description: 'I build machine learning systems that do real things — from computer vision models to LLM-powered apps.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <div className="grain" />
        {children}
      </body>
    </html>
  )
}