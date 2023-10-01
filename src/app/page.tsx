'use client'

import './styles.css'
import { useState } from 'react'
import InputComponent from '@/components/atoms/Input'
import ImageComponent from '@/components/atoms/Image'
import Button from '@/components/atoms/Button'
import { handleInputAction } from '@/utils/inputAction'

export default function Home() {
  const [searchInput, setSearchInput] = useState('')

  const search = () =>
    handleInputAction(searchInput, () => console.log('teste'))

  return (
    <main>
      <div className="home">
        <ImageComponent src="/google.svg" width={272} height={92} />
        <InputComponent
          width={582}
          startIcon="search"
          value={searchInput}
          onChangeText={setSearchInput}
          onSearch={() => search()}
        />
        <Button
          label="Buscar"
          onClick={() => search()}
          disabled={!searchInput.trim()}
        />
      </div>
    </main>
  )
}
