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
  metadataBase: new URL('https://gitbase.com'), // 替换为你的网站URL
  alternates: {
    canonical: '/',
  },
  // 使用其他官方支持的元数据字段或 other 属性
  other: {
    'verify-yeahpromos': 'e25b8789a791',
    // 其他自定义元标签...
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
         <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7977474508095040" crossOrigin="anonymous" />
        <GoogleTagManager gtmId="G-YKVZ7690ZX" />
      </body>
    </html>
  )
}
