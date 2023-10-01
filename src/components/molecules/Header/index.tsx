import './styles.css'
import { FC } from 'react'
import PageEdgeLayout from '../PageEdgeLayout'
import ImageComponent from '@/components/atoms/Image'
import Icon from '@/components/atoms/Icon'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const leftItems = (
    <span>
      <strong>Agile Content</strong> Frontend test
    </span>
  )

  const rightItems = (
    <>
      <div className="apps-icon-container">
        <div className="apps-icon">
          <Icon name="apps" color="gray" size={24} />
        </div>
        <div className="apps-icon-bg"></div>
      </div>
      <ImageComponent src="/agile-content.png" width={30} height={30} round />
    </>
  )

  return (
    <div className="header">
      <PageEdgeLayout leftItems={leftItems} rightItems={rightItems} />
    </div>
  )
}

export default Header
