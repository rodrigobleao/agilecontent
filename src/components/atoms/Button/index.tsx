import './styles.css'
import { FC } from 'react'
import { IconNames } from '../Icon'

export type ButtonVariants = 'outlined' | 'filled'

export interface ButtonProps {
  label: string
  variant?: ButtonVariants
  onClick?: () => void
  loading?: boolean
  disabled?: boolean
  startIcon?: IconNames
  size?: 'medium' | 'large'
  pressed?: boolean
}

const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button className="button-container" onClick={props.onClick} {...props}>
      {label}
    </button>
  )
}

export default Button
