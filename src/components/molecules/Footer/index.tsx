import './styles.css'
import { FC } from 'react'
import PageEdgeLayout from '../PageEdgeLayout'

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const leftItems = <span>© Google 2021</span>

  const rightItems = <span>version: 0.1.0</span>

  return (
    <div className="footer">
      <PageEdgeLayout leftItems={leftItems} rightItems={rightItems} />
    </div>
  )
}

export default Footer
