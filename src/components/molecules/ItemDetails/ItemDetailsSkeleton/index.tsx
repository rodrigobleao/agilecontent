import './styles.css'
import ImageSkeleton from '@/components/atoms/Image/ImageSkeleton'
import { FC } from 'react'
import SearchItemSkeleton from '../../SearchItem/SearchItemSkeleton'

const ItemDetailsSkeleton: FC = () => {
  return (
    <div className="item-detail-skeleton-container">
      <div className="image-detail-skeleton">
        <ImageSkeleton />
      </div>
      <div className="text-detail-skeleton">
        <SearchItemSkeleton />
      </div>
    </div>
  )
}

export default ItemDetailsSkeleton
