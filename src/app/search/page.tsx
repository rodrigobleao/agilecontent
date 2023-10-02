'use client'

import './styles.css'
import { useEffect } from 'react'
import { useStore } from '@/hooks/useStore'
import { observer } from 'mobx-react'
import { useSearchParams } from 'next/navigation'

function Search() {
  const { loading } = useStore()
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  function loadingOffAfter3Seconds() {
    setTimeout(() => {
      loading.stopLoading()
    }, 3000)
  }

  useEffect(() => {
    loading.switchOnLoading()
    loadingOffAfter3Seconds()
  }, [])

  return (
    <main>
      <p>loading: {loading.isLoading() ? 'true' : 'false'}</p>
      <p>query: {query}</p>
    </main>
  )
}

export default observer(Search)
