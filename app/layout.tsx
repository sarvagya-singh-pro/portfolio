import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sarvagya Singh | AI & Healthcare Researcher',
  description: 'Building intelligent systems that heal. AI researcher developing accessible healthcare and livestock disease detection systems.',
  keywords: ['AI', 'Healthcare', 'Machine Learning', 'Research', 'India', 'Medical Technology', 'Innovation'],
  authors: [{ name: 'Sarvagya Singh' }],
  creator: 'Sarvagya Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Sarvagya Singh | AI & Healthcare Researcher',
    description: 'Building intelligent systems that heal through AI and healthcare innovation',
    siteName: 'Sarvagya Singh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarvagya Singh | AI & Healthcare Researcher',
    description: 'Building intelligent systems that heal',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
