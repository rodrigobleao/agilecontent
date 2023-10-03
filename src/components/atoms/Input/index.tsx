import './styles.css'
import { FC } from 'react'
import Icon, { IconNames } from '../Icon'
import { ThemeColors } from '@/types/Colors'

interface InputProps {
  disabled?: boolean
  variant: 'home-input' | 'header-input'
  startIcon?: IconNames
  onSearch?: () => void
  iconColor?: ThemeColors
  value: string
  placeholder?: string
  onChangeText: (value: string) => void
}

const Input: FC<InputProps> = ({
  startIcon = 'search',
  iconColor = 'gray',
  ...props
}) => {
  const handleClearText = () => {
    props.onChangeText('')
  }

  return (
    <div className={`input-container ${props.variant}`}>
      {startIcon && (
        <Icon name={startIcon} color={iconColor} onClick={props.onSearch} />
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
