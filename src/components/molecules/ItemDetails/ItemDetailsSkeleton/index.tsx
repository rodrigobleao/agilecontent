import ImageSkeleton from '@/components/atoms/Image/ImageSkeleton'
import { FC } from 'react'
import SearchItemSkeleton from '../../SearchItem/SearchItemSkeleton'
import { getSkeletonRandomLines } from '@/utils'

const ItemDetailsSkeleton: FC = () => {
  return (
    <>
      <div className="image-detail-container">
        <ImageSkeleton />
      </div>
      <SearchItemSkeleton
        descriptionLines={getSkeletonRandomLines({ variant: 'details' })}
      />
    </>
  )
}

export default ItemDetailsSkeleton
