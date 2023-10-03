'use client'

import './styles.css'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import ImageSkeleton from './ImageSkeleton'

interface ImageProps {
  src: string
  width?: number
  height?: number
  round?: boolean
  showLoadingIndicator?: boolean
  onclick?: () => void
}

const ImageComponent: FC<ImageProps> = ({
  width,
  height,
  round,
  src,
  showLoadingIndicator = false,
  onclick,
  ...props
}) => {
  const [isImageHidden, setIsImageHidden] = useState(showLoadingIndicator)
  const borderRadius = round ? '50%' : '0'
  const imageWidth = width || height ? width : '100%'

  useEffect(() => {
    showLoadingIndicator && setIsImageHidden(true)
  }, [src])

  const handleLoadingComplete = () => {
    showLoadingIndicator && setIsImageHidden(false)
  }

  return (
    <div className={showLoadingIndicator ? 'image-component-container' : ''}>
      <Image
        alt={`IMAGE: ${src}`}
        draggable={false}
        width={0}
        height={0}
        sizes="100vw"
        onLoadingComplete={() => handleLoadingComplete()}
        hidden={isImageHidden}
        loading="eager"
        src={src}
        onClick={onclick ? () => onclick() : undefined}
        style={{
          borderRadius,
          width: imageWidth || 'auto',
          height: height || 'auto',
          cursor: onclick ? 'pointer' : 'default',
        }}
        {...props}
      />
      {showLoadingIndicator && isImageHidden && <ImageSkeleton />}
    </div>
  )
}

export default ImageComponent
