import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
