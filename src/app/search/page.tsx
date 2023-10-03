'use client'

import './styles.css'
import { useEffect, useState } from 'react'
import { useStore } from '@/hooks/useStore'
import { observer } from 'mobx-react'
import { useSearchParams } from 'next/navigation'
import SearchItem from '@/components/molecules/SearchItem'
import ItemDetails from '@/components/molecules/ItemDetails'
import fakerData from '@/services/faker'
import { FetchedItem } from '@/types/FetchedItem'
import { randomDelay } from '@/utils'

function Search() {
  const { loading } = useStore()
  const [details, setDetails] = useState<FetchedItem>()
  const [isDetailsLoading, setIsDetailsLoading] = useState<boolean>(true)
  const [searchData, setSearchData] = useState<FetchedItem[]>([])
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  const filterData = (filter: string, data: FetchedItem[]) => {
    const filteredData = data.filter(
      (item) =>
        item.type.toLowerCase().includes(filter.toLowerCase()) ||
        item.title.toLowerCase().includes(filter.toLowerCase())
    )

    return filteredData
  }

  useEffect(() => {
    const getSearchData = async () => {
      loading.switchOnLoading()

      let fetchedData = await fakerData()

      if (query) fetchedData = filterData(query, fetchedData)

      setSearchData(fetchedData)

      loading.stopLoading()
    }

    getSearchData()
  }, [])

  const handleSelectItem = async (data: FetchedItem) => {
    setIsDetailsLoading(true)
    setDetails(data)
    await randomDelay()
    setIsDetailsLoading(false)
  }

  return (
    <div className="search-container full-height">
      <div className="search-content">
        <div className="search-items">
          {searchData.map((data, index) => (
            <SearchItem
              key={index}
              url={data.url}
              title={data.title}
              description={data.description}
              onClick={() => handleSelectItem(data)}
            />
          ))}
        </div>
        {details && (
          <div className="search-detail">
            <ItemDetails
              url={details.url}
              title={details.title}
              description={details.description}
              image={details.image}
              isLoadingNewItem={isDetailsLoading}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default observer(Search)
