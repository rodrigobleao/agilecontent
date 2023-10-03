'use client'

import { FC } from 'react'
import './styles.css'
import { getRandomNumber } from '@/utils'

const SearchItemSkeleton: FC = () => {
  const urlWidth = `${getRandomNumber(15, 30)}%`
  const titleWidth = `${getRandomNumber(25, 35)}%`
  const doesSecondDescriptionExists = getRandomNumber(1, 10) > 5
  const lastDescriptionWidth = `${getRandomNumber(60, 100)}%`

  return (
    <div className="skeleton-container">
      <div
        className="text-skeleton shimmer-skeleton"
        style={{ width: urlWidth }}
      ></div>
      <div
        className="text-skeleton shimmer-skeleton"
        style={{ width: titleWidth }}
      ></div>
      <div
        className="text-skeleton shimmer-skeleton"
        style={{ width: '100%' }}
      ></div>
      {doesSecondDescriptionExists && (
        <div
          className="text-skeleton shimmer-skeleton"
          style={{ width: '100%' }}
        ></div>
      )}
      <div
        className="text-skeleton shimmer-skeleton"
        style={{ width: lastDescriptionWidth }}
      ></div>
    </div>
  )
}

export default SearchItemSkeleton
