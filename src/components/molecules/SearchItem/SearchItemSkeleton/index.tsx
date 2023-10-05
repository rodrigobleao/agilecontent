import { FC } from 'react'
import './styles.css'
import { getRandomNumber } from '@/utils'

interface SearchItemSkeletonProps {
  variant?: 'searchPage' | 'details'
}

const SearchItemSkeleton: FC<SearchItemSkeletonProps> = ({
  variant = 'searchPage',
}) => {
  const urlWidth = `${getRandomNumber(25, 35)}%`
  const titleWidth = `${getRandomNumber(15, 30)}%`
  const lastDescriptionWidth = `${getRandomNumber(60, 100)}%`
  const randomLines =
    variant === 'searchPage' ? getRandomNumber(1, 2) : getRandomNumber(2, 4)

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
      {[...Array(randomLines)].map((_, index) => (
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
