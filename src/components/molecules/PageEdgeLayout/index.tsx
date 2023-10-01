import './styles.css'
import { FC } from 'react'

interface FooterProps {
  leftItems?: React.ReactNode
  rightItems?: React.ReactNode
}

const PageEdgeLayout: FC<FooterProps> = (props) => {
  return (
    <div className={`container`}>
      <div className="content">{props.leftItems}</div>
      <div className="content">{props.rightItems}</div>
    </div>
  )
}

export default PageEdgeLayout
