'use client'

import './styles.css'
import { FC, useEffect, useState } from 'react'
import PageEdgeLayout from '../PageEdgeLayout'
import ImageComponent from '@/components/atoms/Image'
import Icon from '@/components/atoms/Icon'
import Input from '@/components/atoms/Input'
import { useStore } from '@/hooks/useStore'
import { observer } from 'mobx-react'
import { usePathname, useSearchParams } from 'next/navigation'

const Header: FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const { loading } = useStore()
  const page = usePathname()
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  useEffect(() => {
    setSearchValue(query || '')
  }, [query])

  const leftItems =
    page === '/' ? (
      <span>
        <strong className="text-bold">Agile Content</strong> Frontend test
      </span>
    ) : (
      <div className="content-on-search left-items">
        <ImageComponent src="/google.svg" width={90} />
        <Input
          value={searchValue}
          onChangeText={setSearchValue}
          variant="header-input"
        />
      </div>
    )

  const menuIconAndUserImage = (
    <>
      <div className="apps-icon-container">
        <div className="apps-icon">
          <Icon name="apps" color="gray" size={26} />
        </div>
        <div className="apps-icon-bg"></div>
      </div>
      <ImageComponent src="/agile-content.png" width={30} round />
    </>
  )

  const rightItems = loading.isLoading() ? null : page === '/' ? (
    menuIconAndUserImage
  ) : (
    <div className={'content-on-search'}>{menuIconAndUserImage}</div>
  )

  return (
    <div className={'header'}>
      <PageEdgeLayout leftItems={leftItems} rightItems={rightItems} />
    </div>
  )
}

export default observer(Header)
