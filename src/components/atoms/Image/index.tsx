import Image from 'next/image'
import { FC } from 'react'

interface ImageProps {
  src: string
  width?: number
  height?: number
  round?: boolean
}

const ImageComponent: FC<ImageProps> = ({ width, height, round, ...props }) => {
  const borderRadius = round ? '50%' : '0'
  const imageWidth = width || height ? width : '100%'

  return (
    <Image
      alt={`IMAGE: ${props.src}`}
      draggable={false}
      width={0}
      height={0}
      sizes="100vw"
      style={{
        borderRadius,
        width: imageWidth || 'auto',
        height: height || 'auto',
      }}
      {...props}
    />
  )
}

export default ImageComponent
