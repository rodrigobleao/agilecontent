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
  onClose: () => void // Função para fechar o modal
}

const ItemDetails: FC<ItemDetailsProps> = (props) => {
  const { image, isLoadingNewItem, onClose, ...searchItemProps } = props

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="detail-content">
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
    </>
  )
}

export default ItemDetails
