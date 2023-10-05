import ImageSkeleton from '@/components/atoms/Image/ImageSkeleton'
import { FC } from 'react'
import SearchItemSkeleton from '../../SearchItem/SearchItemSkeleton'

const ItemDetailsSkeleton: FC = () => {
  return (
    <>
      <div className="image-detail-container">
        <ImageSkeleton />
      </div>
      <SearchItemSkeleton variant="details" />
    </>
  )
}

export default ItemDetailsSkeleton
