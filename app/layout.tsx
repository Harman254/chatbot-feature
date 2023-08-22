import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Chat from '@/components/Chat'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BookBuddy',
  description: 'All your books on the go!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
      <body className={inter.className}>
        <Chat />
        {children}
        </body>
        </Providers>
    </html>
  )
}
