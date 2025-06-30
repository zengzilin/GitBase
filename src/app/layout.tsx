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
  metadataBase: new URL('https://aisphereguide.com'), // 替换为你的网站URL
  // 添加 YeahPromos 验证元标签到 metadata 对象中
  alternates: {
    canonical: '/',
  },
  // 在这里添加自定义元标签
  meta: [
    { name: 'verify-yeahpromos', content: 'e25b8789a791' },
    { name: 'google-site-verification', content: 'your-google-verification-code' }, // 示例: Google 网站验证
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
        {/* 添加 YeahPromos 验证元标签 */}
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7977474508095040" crossOrigin="anonymous" /><GoogleTagManager gtmId="G-YKVZ7690ZX" />
      </body>
    </html>
  )
}
