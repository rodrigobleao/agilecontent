'use client'

import './styles.css'
import { useEffect } from 'react'
import { useStore } from '@/hooks/useStore'
import { observer } from 'mobx-react'
// import { useSearchParams } from 'next/navigation'
import SearchItem from '@/components/molecules/SearchItem'
import ItemDetails from '@/components/molecules/ItemDetails'

function Search() {
  const { loading } = useStore()
  // const searchParams = useSearchParams()
  // const query = searchParams.get('q')

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
    <div className="search-container">
      <div className="search-content">
        <div className="search-items">
          {Array.from({ length: 10 }, (_, index) => (
            <SearchItem
              key={index}
              url="http://teste.com"
              title="Bem-te-vi"
              description="O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos"
              onClick={() => console.log('bem te vi')}
            />
          ))}
        </div>
        <div className="search-detail">
          {' '}
          <ItemDetails
            url="http://teste.com"
            title="Bem-te-vi"
            description="O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos"
            image="/agile-content.png"
          />
        </div>
      </div>
    </div>
  )
}

export default observer(Search)
