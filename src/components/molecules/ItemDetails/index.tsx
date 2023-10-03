'use client'

import './styles.css'
import ImageComponent from '@/components/atoms/Image'
import { FC } from 'react'
import SearchItem from '../SearchItem'
import ItemDetailsSkeleton from './ItemDetailsSkeleton'

interface ItemDetailsProps {
  image: string
  url: string
  title: string
  description: string
  isLoadingNewItem: boolean
}

const ItemDetails: FC<ItemDetailsProps> = (props) => {
  const { image, isLoadingNewItem, ...searchItemProps } = props

  return (
    <div className="item-details">
      {isLoadingNewItem ? (
        <ItemDetailsSkeleton />
      ) : (
        <>
          <div className="image-detail-container">
            <ImageComponent src={image} showLoadingIndicator />
          </div>
          <SearchItem {...searchItemProps} />
        </>
      )}
    </div>
  )
}

export default ItemDetails
