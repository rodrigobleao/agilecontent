'use client'

import { Provider } from 'mobx-react'
import store from '@/stores'
import Header from '../Header'
import Footer from '../Footer'

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider rootStore={store}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Provider>
  )
}
