import React from 'react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Providers from '@/components/Providers'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammet Emin Akalan',
  description:
    'Merhaba, Ben Muhammet. Frontend Developer olarak çalışıyorum ve insanlara fayda sağlayacak projeler geliştirmekten büyük keyif alıyorum.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Providers>
          <main className="mx-auto h-screen max-w-6xl p-4">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
