import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '链动资本 ChainPulse Capital - 专业的Web3品牌内容与社群运营服务商',
  description: '链动资本（ChainPulse Capital）专注于Web3领域的品牌内容创作、视觉设计、视频制作、社群运营与媒体PR推广，让每一个Web3项目都能成功触达全球用户。',
  keywords: ['Web3', '区块链', '品牌营销', '社群运营', '内容创作', '视觉设计', '链动资本', 'ChainPulse Capital'],
  authors: [{ name: 'ChainPulse Capital' }],
  creator: 'ChainPulse Capital',
  publisher: 'ChainPulse Capital',
  metadataBase: new URL('https://chainpulse.dev'),
  openGraph: {
    title: '链动资本 ChainPulse Capital - 专业的Web3品牌内容与社群运营服务商',
    description: '链动资本（ChainPulse Capital）专注于Web3领域的品牌内容创作、视觉设计、视频制作、社群运营与媒体PR推广，让每一个Web3项目都能成功触达全球用户。',
    url: 'https://chainpulse.dev',
    siteName: 'ChainPulse Capital',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '链动资本 ChainPulse Capital',
    description: '专业的Web3品牌内容与社群运营服务商',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
