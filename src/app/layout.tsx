import Header from '@/components/Header'
import Providers from '@/components/Providers'
import '@/styles/globals.css'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

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
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="tr">
      <body>
        <Providers>
          <Header />
          <main className="prose mx-auto my-7 max-w-screen-lg px-4 dark:prose-invert">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
