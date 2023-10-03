import './globals.css'
import type { Metadata } from 'next'
import LayoutWrapper from '@/components/molecules/PageEdgeLayout/LayoutWrapper'

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
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
