import './styles.css'
import ImageComponent from '@/components/atoms/Image'
import { FC } from 'react'
import SearchItem from '../SearchItem'
import ItemDetailsSkeleton from './ItemDetailsSkeleton'

interface ItemDetailsProps {
  image?: string
  url?: string
  title?: string
  description?: string
  onClose: () => void
}

const ItemDetails: FC<ItemDetailsProps> = ({
  image = '',
  url = '',
  title = '',
  description = '',
  onClose,
}: ItemDetailsProps) => {
  const searchSearchItemProps = { url, title, description }

  const arePropsEmpty =
    Object.values(searchSearchItemProps).every((prop) => prop === '') &&
    image === ''

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="detail-content">
        {arePropsEmpty ? (
          <ItemDetailsSkeleton />
        ) : (
          <>
            <div className="image-detail-container">
              <ImageComponent src={image} showLoadingIndicator />
            </div>
            <SearchItem {...searchSearchItemProps} />
          </>
        )}
      </div>
    </>
  )
}

export default ItemDetails
