'use client'

import './styles.css'
import { useEffect } from 'react'
import { useStore } from '@/hooks/useStore'
import { observer } from 'mobx-react'
// import { useSearchParams } from 'next/navigation'
import SearchItem from '@/components/molecules/SearchItem'

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
    <main className="search-content">
      <div className="search-result">
        <SearchItem
          url="http://teste.com"
          title="Bem-te-vi"
          description="O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos"
          onClick={() => console.log('bem te vi')}
        />
        {/* <SearchItem
          url="http://teste.com"
          title="Bem-te-vi"
          description="O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos"
          onClick={() => console.log('bem te vi')}
        />
        <SearchItem
          url="http://teste.com"
          title="Bem-te-vi"
          description="O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos"
          onClick={() => console.log('bem te vi')}
        />
        <SearchItem
          url="http://teste.com"
          title="Bem-te-vi"
          description="O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos"
          onClick={() => console.log('bem te vi')}
        />
        <SearchItem
          url="http://teste.com"
          title="Bem-te-vi"
          description="O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos"
          onClick={() => console.log('bem te vi')}
        />
        <SearchItem
          url="http://teste.com"
          title="Bem-te-vi"
          description="O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos"
          onClick={() => console.log('bem te vi')}
        />
        <SearchItem
          url="http://teste.com"
          title="Bem-te-vi"
          description="O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos"
          onClick={() => console.log('bem te vi')}
        />
        <SearchItem
          url="http://teste.com"
          title="Bem-te-vi"
          description="O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos O bem-te-vi ou grande-kiskadi é uma ave passeriforme da família dos tiranídeos de nome científico Pitangus sulphuratus. A espécie é, ainda, conhecida pelos"
          onClick={() => console.log('bem te vi')}
        /> */}
      </div>
    </main>
  )
}

export default observer(Search)
