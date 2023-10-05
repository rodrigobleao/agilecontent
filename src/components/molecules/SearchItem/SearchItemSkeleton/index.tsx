import { FC } from 'react'
import './styles.css'
import { getRandomNumber } from '@/utils'

interface SearchItemSkeletonProps {
  descriptionLines?: number
}

const SearchItemSkeleton: FC<SearchItemSkeletonProps> = ({
  descriptionLines = 1,
}) => {
  const urlWidth = `${getRandomNumber(25, 35)}%`
  const titleWidth = `${getRandomNumber(15, 30)}%`
  const lastDescriptionWidth = `${getRandomNumber(60, 100)}%`

  return (
    <div className="skeleton-container">
      <div
        className="text-skeleton shimmer-skeleton"
        style={{ width: urlWidth }}
      />
      <div
        className="text-skeleton shimmer-skeleton"
        style={{ width: titleWidth }}
      />
      {[...Array(descriptionLines)].map((_, index) => (
        <div
          key={index}
          className="text-skeleton shimmer-skeleton"
          style={{ width: '100%' }}
        />
      ))}
      <div
        className="text-skeleton shimmer-skeleton"
        style={{ width: lastDescriptionWidth }}
      />
    </div>
  )
}

export default SearchItemSkeleton
