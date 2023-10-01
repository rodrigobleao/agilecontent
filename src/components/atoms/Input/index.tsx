import './styles.css'
import { FC } from 'react'
import Icon, { IconNames } from '../Icon'
import { ThemeColors } from '@/types/colors'

interface InputProps {
  disabled?: boolean
  width?: number
  startIcon?: IconNames
  onSearch?: () => void
  iconColor?: ThemeColors
  value: string
  placeholder?: string
  onChangeText: (value: string) => void
}

const Input: FC<InputProps> = ({ iconColor = 'gray', ...props }) => {
  const handleClearText = () => {
    props.onChangeText('')
  }

  return (
    <div className="input-container" style={{ width: props.width }}>
      {props.startIcon && (
        <Icon
          name={props.startIcon}
          color={iconColor}
          onClick={props.onSearch}
        />
      )}

      <input
        className="styled-text-input"
        value={props.value}
        onChange={(e) => props.onChangeText(e.target.value)}
        placeholder={props.placeholder}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            props.onSearch && props.onSearch()
          }
        }}
      />

      <Icon name="x" color={iconColor} onClick={handleClearText} />
    </div>
  )
}

export default Input
