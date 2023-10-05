import { FC } from 'react'

interface NoResultsProps {
  searchParam: string | null
}

const NoResults: FC<NoResultsProps> = ({ searchParam }) => {
  return (
    <div className="no-results">
      {searchParam && (
        <span>
          No results found for <strong>{`'${searchParam}'`}</strong>
        </span>
      )}
      <span>
        Try looking for:{' '}
        <strong>
          insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit,
          cat, snake, dog, bird.
        </strong>
      </span>
    </div>
  )
}

export default NoResults
