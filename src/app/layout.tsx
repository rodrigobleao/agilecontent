import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/molecules/Footer'
import Header from '@/components/molecules/Header'

export const metadata: Metadata = {
  title: 'Agile Search',
  description: 'Agile Content technical assessment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
