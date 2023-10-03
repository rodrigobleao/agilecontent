import './styles.css'
import { FC } from 'react'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { ThemeColors } from '../../../types/Colors'
import SvgIcon from './SvgIcons'

export type ReactIconNames = 'search' | 'x'
export type SvgIconNames = 'apps'
export type IconNames = ReactIconNames | SvgIconNames

type IconProps = {
  name: IconNames
  disabled?: boolean
  color: ThemeColors
  size?: number
  onClick?: () => void
}

const getIcon: FC<IconProps> = ({ ...props }) => {
  switch (props.name) {
    case 'search':
      return (
        <AiOutlineSearch size={props.size} color={`var(--${props.color})`} />
      )
    case 'x':
      return (
        <AiOutlineClose size={props.size} color={`var(--${props.color})`} />
      )
    case 'apps':
      return <SvgIcon size={props.size} color={props.color} name={props.name} />
  }
}

const Icon: FC<IconProps> = ({ size = 18, onClick, disabled, ...props }) => {
  const IconToRender = getIcon({ size, ...props })

  return (
    <button
      style={{
        width: size,
        height: size,
        padding: 0,
        border: 'none',
        cursor: onClick ? 'pointer' : 'default',
        backgroundColor: 'transparent',
        ...props,
      }}
      onClick={onClick}
      disabled={!onClick || disabled}
    >
      <div className="icon-wrapper">{IconToRender}</div>
    </button>
  )
}

export default Icon
