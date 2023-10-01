import Image from 'next/image'
import { FC } from 'react'

interface ImageProps {
  src: string
  width?: number
  height?: number
  round?: boolean
}

const ImageComponent: FC<ImageProps> = ({ round, ...props }) => {
  const borderRadius = round ? '50%' : '0'

  return (
    <Image
      alt={`IMAGE: ${props.src}`}
      draggable={false}
      style={{ borderRadius: borderRadius }}
      {...props}
    />
  )
}

export default ImageComponent
