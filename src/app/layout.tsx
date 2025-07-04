import './globals.css'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from "next/script";
// import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: {
    default: 'GitBase',
    template: '%s | GitBase'
  },
  description: 'Open source dynamic website without database, built with Next.js and GitHub API',
  other: {
    'verify-yeahpromos': 'e25b8789a791'
  },
};

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
