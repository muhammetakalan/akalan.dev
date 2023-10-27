import React from 'react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/Header'
import Providers from '@/components/Providers'

import '@/styles/globals.css'

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
          <Header />
          <main className="mx-auto mb-4 mt-24 max-w-screen-md">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
