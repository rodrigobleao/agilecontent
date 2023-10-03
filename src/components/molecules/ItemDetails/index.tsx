import './styles.css'
import ImageComponent from '@/components/atoms/Image'
import { FC } from 'react'
import SearchItem from '../SearchItem'

interface ItemDetailsProps {
  image: string
  url: string
  title: string
  description: string
}

const ItemDetails: FC<ItemDetailsProps> = (props) => {
  const { image, ...searchItemProps } = props

  return (
    <div className="item-details">
      <div className="details-image">
        <ImageComponent src={image} width={200} />
      </div>
      <SearchItem {...searchItemProps} />
    </div>
  )
}

export default ItemDetails
