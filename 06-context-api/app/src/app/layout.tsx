import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Content } from './content'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul><li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li></ul>
          </nav>
        </header>
        <Content>
          {children}
        </Content>
      </body>
    </html>
  )
}
