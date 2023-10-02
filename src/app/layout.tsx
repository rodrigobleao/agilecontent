'use client'

import './globals.css'
// import type { Metadata } from 'next'
import { Provider } from 'mobx-react'
import Footer from '@/components/molecules/Footer'
import Header from '@/components/molecules/Header'
import store from '@/stores'

// export const metadata: Metadata = {
//   title: 'Agile Search',
//   description: 'Agile Content technical assessment',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider rootStore={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
