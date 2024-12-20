import './globals.css'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: {
    default: 'GitBase',
    template: '%s | GitBase'
  },
  description: 'Open source dynamic website without database, built with Next.js and GitHub API',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head><Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7977474508095040" crossOrigin="anonymous" /><GoogleTagManager gtmId="G-YKVZ7690ZX" /></head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
