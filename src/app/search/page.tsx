'use client'

import './styles.css'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { useSearchParams } from 'next/navigation'
import { useStore } from '@/hooks/useStore'
import { FetchedItem } from '@/types/FetchedItem'
import { getSkeletonRandomLines, randomDelay } from '@/utils'
import fakerData from '@/services/faker'
import SearchItem from '@/components/molecules/SearchItem'
import ItemDetails from '@/components/molecules/ItemDetails'
import SearchItemSkeleton from '@/components/molecules/SearchItem/SearchItemSkeleton'
import NoResults from './noResults'

function Search() {
  const { loading } = useStore()
  const [details, setDetails] = useState<FetchedItem>()
  const [isDetailsVisible, setIsDetailsVisible] = useState<boolean>(false)
  const [searchData, setSearchData] = useState<FetchedItem[]>([])
  const searchParam = useSearchParams().get('q')

  useEffect(() => {
    const getSearchData = async () => {
      loading.switchOnLoading()

      if (!searchParam) setSearchData([])
      else {
        const fetchedData = await fakerData(searchParam)

        setSearchData(fetchedData)
      }
      loading.stopLoading()
    }

    getSearchData()
  }, [])

  const handleSelectItem = async (data: FetchedItem) => {
    if (data === details) handleDetailsVisibility()
    else {
      setDetails(undefined)
      if (!isDetailsVisible) handleDetailsVisibility()
      await randomDelay()
      setDetails(data)
    }
  }

  const handleDetailsVisibility = () => {
    setIsDetailsVisible((prev) => !prev)
  }

  return (
    <div className="search-content">
      <div className="search-items">
        {loading.isLoading() ? (
          [...Array(8)].map((_, index) => (
            <SearchItemSkeleton
              key={index}
              descriptionLines={getSkeletonRandomLines()}
            />
          ))
        ) : searchData.length > 0 ? (
          searchData.map((data, index) => (
            <SearchItem
              key={index}
              url={data.url}
              title={data.title}
              description={data.description}
              onClick={() => handleSelectItem(data)}
            />
          ))
        ) : (
          <NoResults searchParam={searchParam} />
        )}
      </div>
      {isDetailsVisible && (
        <div className="search-detail">
          <ItemDetails
            url={details?.url}
            title={details?.title}
            description={details?.description}
            image={details?.image}
            onClose={() => handleDetailsVisibility()}
          />
        </div>
      )}
    </div>
  )
}

export default observer(Search)
